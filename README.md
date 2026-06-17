# Pferdeerlebnis Riese

Statische Website mit PHP/MySQL-Backend fuer Terminanfragen.

## netcup Einrichtung

1. Webhosting und Datenbank im netcup CCP anlegen.
2. `database/schema.sql` in phpMyAdmin importieren.
3. `api/config.example.php` als `api/config.php` kopieren.
4. In `api/config.php` Datenbankname, Benutzer, Passwort und Absenderdomain eintragen.
5. Alle Dateien aus dem Projekt in den Webspace hochladen.

Die Datei `api/config.php` wird nicht in Git gespeichert, weil dort Zugangsdaten stehen.

## Kalender

Das Frontend laedt belegte Slots aus `api/bookings.php?action=list`.
Neue Terminanfragen werden per `POST` an `api/bookings.php?action=create` gespeichert.

## Galerie

Bilder sollten als optimierte Web-Versionen im Webspace liegen. Die Originale bleiben lokal in `assets/Pictures/` oder `source_assets/` und werden nicht nach Git uebernommen.

Galeriebilder koennen lokal mit folgendem Befehl erzeugt werden:

```powershell
.\tools\optimize-gallery.ps1
```

Das Skript erzeugt grosse Webbilder in `assets/gallery/` und Thumbnails in `assets/gallery/thumbs/`.
