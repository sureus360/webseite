<?php

declare(strict_types=1);

header('Content-Type: application/json; charset=utf-8');
header('Cache-Control: no-store');

const ALLOWED_SERVICES = [
    'Reittherapie',
    'Kinderreitgruppe',
    'Kinderreitkurs',
    'Erlebnisreitkurs',
];

function json_response(array $payload, int $status = 200): void
{
    http_response_code($status);
    echo json_encode($payload, JSON_UNESCAPED_UNICODE | JSON_UNESCAPED_SLASHES);
    exit;
}

function read_config(): array
{
    $configPath = __DIR__ . '/config.php';
    if (!is_file($configPath)) {
        json_response(['error' => 'Die Datenbank-Konfiguration fehlt.'], 500);
    }

    $config = require $configPath;
    if (!is_array($config) || !isset($config['db'])) {
        json_response(['error' => 'Die Datenbank-Konfiguration ist ungültig.'], 500);
    }

    return $config;
}

function db(): PDO
{
    static $pdo = null;
    if ($pdo instanceof PDO) {
        return $pdo;
    }

    $db = read_config()['db'];
    $charset = $db['charset'] ?? 'utf8mb4';
    $dsn = sprintf('mysql:host=%s;dbname=%s;charset=%s', $db['host'], $db['database'], $charset);

    try {
        $pdo = new PDO($dsn, $db['user'], $db['password'], [
            PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION,
            PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_ASSOC,
            PDO::ATTR_EMULATE_PREPARES => false,
        ]);
    } catch (PDOException $exception) {
        json_response(['error' => 'Die Datenbank ist momentan nicht erreichbar.'], 500);
    }

    return $pdo;
}

function require_date(string $value, string $field): string
{
    $date = DateTimeImmutable::createFromFormat('!Y-m-d', $value);
    if (!$date || $date->format('Y-m-d') !== $value) {
        json_response(['error' => "Ungültiges Datum: {$field}"], 422);
    }

    return $value;
}

function input_json(): array
{
    $payload = json_decode((string) file_get_contents('php://input'), true);
    if (!is_array($payload)) {
        json_response(['error' => 'Ungültige Anfrage.'], 400);
    }

    return $payload;
}

function clean_string(mixed $value, int $maxLength): string
{
    $text = trim((string) $value);
    $text = preg_replace('/\s+/u', ' ', $text) ?? $text;
    if (function_exists('mb_substr')) {
        return mb_substr($text, 0, $maxLength);
    }

    return substr($text, 0, $maxLength);
}

function list_bookings(): void
{
    $from = require_date($_GET['from'] ?? date('Y-m-01'), 'from');
    $to = require_date($_GET['to'] ?? date('Y-m-t'), 'to');

    $statement = db()->prepare(
        "SELECT booking_date, slot, service, status
         FROM bookings
         WHERE booking_date BETWEEN :from AND :to
           AND status IN ('requested', 'confirmed')
         ORDER BY booking_date ASC, slot ASC"
    );
    $statement->execute(['from' => $from, 'to' => $to]);

    json_response(['bookings' => $statement->fetchAll()]);
}

function create_booking(): void
{
    $payload = input_json();
    $date = require_date((string) ($payload['date'] ?? ''), 'date');
    $slot = clean_string($payload['slot'] ?? '', 80);
    $service = clean_string($payload['service'] ?? '', 80);
    $name = clean_string($payload['name'] ?? '', 120);
    $contact = clean_string($payload['contact'] ?? '', 180);
    $message = clean_string($payload['message'] ?? '', 2000);

    if ($slot === '' || $name === '' || $contact === '') {
        json_response(['error' => 'Bitte füllen Sie Termin, Name und Kontakt aus.'], 422);
    }

    if (!in_array($service, ALLOWED_SERVICES, true)) {
        json_response(['error' => 'Bitte wählen Sie ein gültiges Angebot.'], 422);
    }

    try {
        $statement = db()->prepare(
            "INSERT INTO bookings
                (booking_date, slot, service, customer_name, contact, message, status)
             VALUES
                (:booking_date, :slot, :service, :customer_name, :contact, :message, 'requested')"
        );
        $statement->execute([
            'booking_date' => $date,
            'slot' => $slot,
            'service' => $service,
            'customer_name' => $name,
            'contact' => $contact,
            'message' => $message,
        ]);
    } catch (PDOException $exception) {
        if ($exception->getCode() === '23000') {
            json_response(['error' => 'Dieser Termin wurde gerade reserviert. Bitte wählen Sie einen anderen Slot.'], 409);
        }

        json_response(['error' => 'Die Terminanfrage konnte nicht gespeichert werden.'], 500);
    }

    send_booking_mail($date, $slot, $service, $name, $contact, $message);

    json_response([
        'ok' => true,
        'booking' => [
            'booking_date' => $date,
            'slot' => $slot,
            'service' => $service,
            'status' => 'requested',
        ],
    ], 201);
}

function send_booking_mail(string $date, string $slot, string $service, string $name, string $contact, string $message): void
{
    $config = read_config()['mail'] ?? [];
    $to = $config['to'] ?? '';
    if ($to === '') {
        return;
    }

    $subject = 'Neue Terminanfrage Pferdeerlebnis Riese';
    $body = implode("\n", [
        'Neue Terminanfrage',
        '',
        "Datum: {$date}",
        "Uhrzeit: {$slot}",
        "Angebot: {$service}",
        "Name: {$name}",
        "Kontakt: {$contact}",
        '',
        'Nachricht:',
        $message !== '' ? $message : '-',
    ]);

    $headers = [
        'Content-Type: text/plain; charset=utf-8',
    ];
    if (!empty($config['from'])) {
        $headers[] = 'From: ' . $config['from'];
    }

    @mail($to, $subject, $body, implode("\r\n", $headers));
}

$action = $_GET['action'] ?? 'list';

if ($_SERVER['REQUEST_METHOD'] === 'GET' && $action === 'list') {
    list_bookings();
}

if ($_SERVER['REQUEST_METHOD'] === 'POST' && $action === 'create') {
    create_booking();
}

json_response(['error' => 'Nicht gefunden.'], 404);
