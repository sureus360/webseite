const monthLabel = document.querySelector("#monthLabel");
const calendarGrid = document.querySelector("#calendarGrid");
const selectedDateLabel = document.querySelector("#selectedDateLabel");
const slotList = document.querySelector("#slotList");
const bookingForm = document.querySelector("#bookingForm");
const formNote = document.querySelector("#formNote");
const prevMonth = document.querySelector("#prevMonth");
const nextMonth = document.querySelector("#nextMonth");
const offerDetail = document.querySelector("#offerDetail");
const offerTabs = document.querySelectorAll(".offer-tab");
const photoLightbox = document.querySelector("#photoLightbox");
const photoLightboxImage = document.querySelector("#photoLightboxImage");
const photoLightboxClose = document.querySelector("#photoLightboxClose");
const photoThumbs = document.querySelectorAll(".photo-thumb");

const offers = {
  reittherapie: {
    title: "Reittherapie",
    time: "30 oder 60 Min.",
    price: "Preisliste: 2x 60 Min. monatlich: 110 € · 4x 30 Min. monatlich: 120 € · Reittherapie ist auch wöchentlich möglich · Mind. 2 Buchungen für Vertragsabschluss nötig",
    content: `
      <h4>Warum Reittherapie? – Der ganzheitliche Ansatz</h4>
      <p>
        Die Reittherapie, auch pferdegestützte Intervention genannt, wirkt,
        weil sie den Klienten aus dem rein kognitiven Lernsetting herausholt
        und eine ganzheitliche Erfahrung ermöglicht.
      </p>
      <ul class="offer-facts">
        <li><strong>Der „Co-Therapeut“ Pferd:</strong> Pferde sind Fluchttiere und hochsensible Beobachter. Sie spiegeln Emotionen und körpersprachliche Signale des Menschen direkt und vorurteilsfrei wider. Dies fördert die Empathiefähigkeit und die Selbstreflexion.</li>
        <li><strong>Physiologische Wirkung:</strong> Die dreidimensionale Schwingungsübertragung des Pferderückens im Schritt überträgt sich auf das Becken des Reiters. Dies stimuliert die Rumpfmuskulatur, verbessert die Haltung und wirkt gleichzeitig regulierend auf das Nervensystem.</li>
        <li><strong>Selbstwirksamkeit:</strong> Das Führen und Reiten eines so großen Tieres vermittelt dem Klienten ein Gefühl von Stärke und Kontrolle, das direkt in den Alltag übertragen werden kann.</li>
        <li><strong>Sensorik:</strong> Der Kontakt zum Tier mit Wärme, Geruch und taktilen Reizen wirkt beruhigend und ist ideal für die sensorische Integration bei Entwicklungsverzögerungen oder psychischen Belastungen.</li>
      </ul>
      <p class="offer-highlight">
        Reittherapie ist keine Krankenkassenleistung. Es gibt jedoch die
        Möglichkeit, die Reittherapiekosten erstattet zu bekommen.
      </p>
    `,
  },
  kinderreitgruppe: {
    title: "Kinderreitgruppe",
    time: "Donnerstag, 16:30 bis 18:00 Uhr",
    price: "57,00 EURO monatlich",
    content: `
      <h4>Informationen zur Kinderreitgruppe</h4>
      <p>
        Herzlich willkommen in unserer Kinderreitgruppe! Ich freue mich sehr
        darauf, gemeinsam mit den Kindern eine erlebnisreiche und lehrreiche
        Zeit mit den Pferden zu verbringen. Damit Sie bestmöglich informiert
        sind, habe ich die wichtigsten Details hier für Sie zusammengefasst:
      </p>
      <p class="offer-highlight">
        Aktuell ist die Kinderreitgruppe voll. Neue Anfragen nehme ich gerne
        für die Warteliste auf.
      </p>

      <h4>Ablauf und Inhalte</h4>
      <p>
        Jede Reitstunde ist individuell gestaltet, wobei der Spaß und die
        Freude am Umgang mit den Tieren an erster Stelle stehen.
      </p>
      <ul class="offer-facts">
        <li><strong>Ablauf:</strong> Wir beginnen um 16:30 Uhr mit einer Begrüßungsrunde. Danach bestimmen wir per Würfel oder Los die Reiterreihenfolge. Anschließend putzen wir gemeinsam die Pferde, wobei sich jedes Kind seine eigenen Utensilien wie Bürste und Striegel aussuchen darf.</li>
        <li><strong>Programm:</strong> Wir gehen auf den Reitplatz und starten mit einem Aufwärmspiel. In den ersten Stunden vermittle ich den Kindern wichtige Grundregeln im Umgang mit dem Pferd.</li>
        <li><strong>Wünsche:</strong> Die Kinder sind herzlich eingeladen, eigene Wünsche und Ideen zu äußern, was sie gerne mit den Pferden erleben möchten.</li>
        <li><strong>Besonderheiten:</strong> Im Winter nutzen wir bei Kälte unser gemütliches Reiterstübchen für theoretische Einheiten bei einer Tasse Kakao. An sehr heißen Tagen sorgen wir für Abkühlung, waschen die Pferde und genießen gemeinsam ein Eis.</li>
        <li><strong>Hinweis:</strong> An Feiertagen und während der Urlaubszeiten findet kein Reiten statt.</li>
      </ul>

      <h4>Kleidung und Ausrüstung</h4>
      <p>
        Für die Sicherheit und den Komfort Ihres Kindes ist die richtige
        Kleidung essenziell:
      </p>
      <ul class="offer-facts">
        <li><strong>Pflicht:</strong> Ein Fahrrad- oder Reithelm muss mitgebracht werden. Leihhelme sind bei Bedarf für eine Gebühr von 5 € erhältlich.</li>
        <li><strong>Kleidung:</strong> Bitte achten Sie auf wetterfeste Kleidung. Bitte vermeiden Sie kurze Hosen oder Röcke; ideal ist eine eng anliegende Hose.</li>
        <li><strong>Schuhwerk:</strong> Es sind ausschließlich feste, geschlossene Schuhe erlaubt. Keine Sandalen.</li>
      </ul>

      <h4>Organisatorisches und Zahlung</h4>
      <p><strong>Monatlicher Beitrag:</strong> 57,00 €.</p>
      <p>
        <strong>Zahlungshinweise:</strong> Die Zahlungsinformationen erhalten
        Sie nach bestätigter Buchung per E-Mail.
      </p>
      <p>
        <strong>Verwendungszweck:</strong> Bitte geben Sie den Namen des Kindes
        und „Kinderreitgruppe“ an.
      </p>
      <ul class="offer-facts">
        <li><strong>Datenschutz:</strong> Ich werde Ihnen vorab eine Datenschutzerklärung zusenden. Bitte bringen Sie diese ausgefüllt zum ersten Kurstag mit. Bei Geschwisterkindern ist ein Formular ausreichend.</li>
        <li><strong>Kündigung:</strong> Der Vertrag ist mit einer Frist von einem Monat zum Monatsende schriftlich kündbar, nach einer Laufzeit von vier Wochen.</li>
      </ul>

      <p>
        <strong>Ich freue mich auf eine tolle Zeit mit Ihrem Kind! Bei weiteren
        Fragen stehe ich Ihnen gerne zur Verfügung.</strong>
      </p>
      <p>Viele Grüße<br /><strong>Sabrina Riese</strong></p>
    `,
  },
  kinderreitkurs: {
    title: "Kinderreitkurs",
    time: "16:30 bis 18:00 Uhr",
    price: "90,00 EURO",
    content: `
      <h4>Informationen zum Kinderreitkurs</h4>
      <p>
        Herzlich willkommen zum Reitkurs! Damit sich Ihr Kind bei uns sicher
        und wohl fühlt, finden Sie hier alle wichtigen Details zu unserem
        Ablauf und den Vorbereitungen.
      </p>

      <h4>Anmeldung &amp; Bezahlung</h4>
      <p>
        Die Kursgebühr beträgt 90,00 €. Die Zahlungsinformationen erhalten Sie
        nach bestätigter Buchung per E-Mail.
      </p>
      <p>
        <strong>Verwendungszweck:</strong> Bitte geben Sie unbedingt den Namen
        des Kindes sowie die Kursbezeichnung an, damit wir die Zahlung korrekt
        zuordnen können.
      </p>

      <h4>Organisatorisches</h4>
      <ul class="offer-facts">
        <li><strong>Treffpunkt:</strong> Marienstraße 17, 49479 Ibbenbüren</li>
        <li><strong>Kurszeiten:</strong> Wir treffen uns pünktlich um 16:30 Uhr. Die Abholzeit ist um 18:00 Uhr.</li>
        <li><strong>Ablauf:</strong> Nach der gemeinsamen Begrüßungsrunde können Sie Ihr Kind gerne in meine Obhut übergeben.</li>
        <li><strong>Erreichbarkeit:</strong> Am ersten Kurstag bitte ich Sie, Ihre aktuelle Telefonnummer in der ausliegenden Liste zu hinterlegen beziehungsweise die vorhandenen Daten zu überprüfen.</li>
        <li><strong>Verpflegung:</strong> Bitte geben Sie Ihrem Kind ausreichend Getränke mit.</li>
      </ul>

      <h4>Ausrüstung &amp; Kleidung</h4>
      <p>
        Sicherheit und Komfort haben für uns oberste Priorität. Bitte achten Sie
        auf folgende Ausstattung:
      </p>
      <ul class="offer-facts">
        <li><strong>Helm:</strong> Ein Fahrrad- oder Reithelm ist Pflicht. Sollte dieser vergessen werden, stelle ich gerne gegen eine Gebühr von 5 € einen Leihhelm zur Verfügung.</li>
        <li><strong>Kleidung:</strong> Bitte kleiden Sie Ihr Kind dem Wetter entsprechend. Auch bei warmen Temperaturen sind lange, eng anliegende Hosen erforderlich, um Scheuerstellen beim Reiten zu vermeiden. Keine kurzen Hosen oder Röcke.</li>
        <li><strong>Schuhwerk:</strong> Festes, geschlossenes Schuhwerk ist zwingend notwendig. Keine Sandalen.</li>
      </ul>

      <h4>Kursinhalte &amp; Philosophie</h4>
      <p>
        Unser Ziel ist es, den Kindern einen liebevollen und sicheren Umgang
        mit den Pferden zu vermitteln. Jede Stunde gestalten wir individuell:
      </p>
      <ul class="offer-facts">
        <li><strong>Vorbereitung:</strong> Wir starten gemeinsam mit dem Putzen der Pferde. Dabei lernt jedes Kind den Umgang mit Striegel und Bürste.</li>
        <li><strong>Ablauf:</strong> Die Reiterreihenfolge wird spielerisch per Los oder Würfel festgelegt. Auf dem Reitplatz beginnen wir mit einem Aufwärmspiel, bei dem die Kinder aktiv in den Ablauf eingebunden werden.</li>
        <li><strong>Lernziele:</strong> In den ersten Stunden legen wir den Fokus auf grundlegende Sicherheits- und Verhaltensregeln.</li>
        <li><strong>Individuelle Gestaltung:</strong> Die Wünsche der Kinder stehen im Vordergrund. Wir gehen offen auf Vorschläge ein, was sie gerne mit oder auf dem Pferd erleben möchten.</li>
      </ul>

      <h4>Besondere Bedingungen</h4>
      <ul class="offer-facts">
        <li><strong>Schlechtwetter:</strong> Bei widrigen Bedingungen nutzen wir unser Reiterstübchen für theoretische Einheiten rund um das Thema Pferd.</li>
        <li><strong>Sommertage:</strong> Bei großer Hitze steht das Wohl der Tiere im Vordergrund. Wir genießen eine Abkühlung beim Abspritzen und Waschen der Pferde.</li>
      </ul>

      <p><strong>Ich freue mich auf eine tolle, lehrreiche und spaßige Zeit mit Ihrem Kind!</strong></p>
    `,
  },
  erlebnisreitkurs: {
    title: "Erlebnisreitkurs",
    time: "Samstag, 10:00 bis 14:00 Uhr",
    price: "55,00 EURO",
    content: `
      <h4>Kursanmeldung: Ein Tag rund ums Pferd</h4>
      <p>
        Herzlich willkommen! Ich freue mich darauf, Ihrem Kind einen
        unvergesslichen Tag mit unseren Pferden Balu und Nele zu ermöglichen.
      </p>

      <h4>Kosten &amp; Zahlung</h4>
      <p>
        Die Teilnahmegebühr für diesen Tag beträgt 55,00 €. Die
        Zahlungsinformationen erhalten Sie nach bestätigter Buchung per E-Mail.
      </p>

      <h4>Das erwartet Ihr Kind – Unsere Highlights</h4>
      <p>
        Wir verbringen einen erlebnisreichen Tag in der Natur, bei dem der
        respektvolle Umgang mit den Pferden im Mittelpunkt steht:
      </p>
      <ul class="offer-facts">
        <li><strong>Pferdeabenteuer:</strong> Kennenlernen von Balu und Nele, Pferdepflege und Reitspiele auf dem Platz.</li>
        <li><strong>Spannende Schatzsuche:</strong> Ein aufregendes Highlight, das für Spaß und Action sorgt.</li>
        <li><strong>Kreativzeit:</strong> Ein schönes Bastelangebot am Nachmittag.</li>
        <li><strong>All-inclusive Verpflegung:</strong> Getränke wie Wasser und Apfelschorle sowie kleine Snacks sind inbegriffen. Für unser gemeinsames Mittagessen kündige ich vorab eine Speisekarte an, aus der wir wählen können.</li>
      </ul>
      <ul class="offer-menu-list">
        <li>Spaghetti mit Pesto oder Tomatensoße</li>
        <li>Hähnchen-Dinos mit Pommes, Ketchup und Mayonnaise</li>
      </ul>

      <h4>Ablaufplan</h4>
      <ul class="offer-schedule">
        <li><strong>10:00 Uhr:</strong> Ankunft &amp; Begrüßung</li>
        <li><strong>10:15 Uhr:</strong> Besprechung der goldenen Regeln im Umgang mit den Pferden</li>
        <li><strong>10:30 Uhr:</strong> Pferdepflege mit Balu und Nele</li>
        <li><strong>11:00 Uhr:</strong> Reitzeit auf dem Platz mit Spielen und Übungen an der Longe</li>
        <li><strong>12:15 Uhr:</strong> Versorgen der Pferde</li>
        <li><strong>12:30 Uhr:</strong> Gemeinsames Mittagessen</li>
        <li><strong>13:00 Uhr:</strong> Kreatives Angebot und Basteln</li>
        <li><strong>14:00 Uhr:</strong> Abholung durch die Eltern</li>
      </ul>

      <h4>Wichtige Vorbereitung</h4>
      <p>
        Damit wir sicher und wetterfest ausgestattet sind, bitte ich um
        folgende Ausrüstung:
      </p>
      <ul class="offer-facts">
        <li><strong>Kleidung:</strong> Bitte wetterfeste Kleidung tragen. Auch bei warmem Wetter bitte lange Hosen, zum Beispiel Leggings. Keine kurzen Hosen oder Röcke.</li>
        <li><strong>Schuhwerk:</strong> Bitte ausschließlich feste, geschlossene Schuhe. Keine Sandalen.</li>
        <li><strong>Sicherheit:</strong> Ein Fahrrad- oder Reithelm ist zwingend mitzubringen.</li>
      </ul>

      <p><strong>Ich freue mich auf einen tollen Tag mit den Kindern!</strong></p>
      <p>Viele Grüße<br /><strong>Sabrina Riese</strong></p>
    `,
  },
  resonanznatur: {
    title: "Resonanz mit der Natur / Klangerlebnis",
    time: "Zeit nach Absprache",
    price: "30 Minuten: 45 €",
    content: `
      <h4>Ruhe finden, Natur erleben und Klang spüren</h4>
      <p>
        Dieses Angebot lädt dazu ein, bewusst zur Ruhe zu kommen und die Natur
        mit allen Sinnen wahrzunehmen. Sanfte Klänge, achtsame Wahrnehmungsübungen
        und die ruhige Umgebung mit den Pferden schaffen einen geschützten Rahmen,
        in dem Entspannung, innere Balance und neue Kraft entstehen dürfen.
      </p>
      <ul class="offer-facts">
        <li><strong>Naturerfahrung:</strong> Die Umgebung, die Tiere und der Moment stehen im Mittelpunkt. Das Angebot unterstützt dabei, den Alltag loszulassen und wieder mehr bei sich selbst anzukommen.</li>
        <li><strong>Klangerlebnis:</strong> Wohltuende Klänge können beruhigend wirken, die Körperwahrnehmung fördern und einen sanften Zugang zu Entspannung ermöglichen.</li>
        <li><strong>Kosten:</strong> 30 Minuten kosten 45 €.</li>
        <li><strong>Gemeinsam erleben:</strong> Gerne auch mit Partner, Freundin oder in einer Kleingruppe möglich.</li>
        <li><strong>Individuelle Begleitung:</strong> Weitere Fragen sowie Dauer, Ablauf und Intensität werden persönlich und individuell besprochen.</li>
      </ul>
      <p class="offer-highlight">
        Dieses Angebot ist ab dem 01.08.2027 buchbar.
      </p>
    `,
  },
};

const formatter = new Intl.DateTimeFormat("de-DE", { month: "long", year: "numeric" });
const dateFormatter = new Intl.DateTimeFormat("de-DE", {
  weekday: "long",
  day: "2-digit",
  month: "2-digit",
  year: "numeric",
});

const API_ENDPOINT = "api/bookings.php";
const bookedSlots = new Set();
const fixedBookedSlots = new Set([
  "2026-06-29|16:30-18:00 Kinderreitkurs",
  "2026-06-30|16:30",
  "2026-07-01|16:30",
  "2026-07-01|17:00",
  "2026-07-02|16:30-18:00 Kinderreitkurs",
  "2026-07-03|17:30",
  "2026-07-06|16:30-18:00 Kinderreitkurs",
  "2026-07-08|16:30",
  "2026-07-08|17:00",
  "2026-07-09|16:30-18:00 Kinderreitkurs",
  "2026-07-13|16:30-18:00 Kinderreitkurs",
  "2026-07-14|16:30",
  "2026-07-15|16:30",
  "2026-07-15|17:00",
  "2026-07-16|16:30-18:00 Kinderreitkurs",
  "2026-07-21|11:00",
  "2026-07-24|15:30",
  "2026-07-24|16:30",
  "2026-07-24|17:30",
  "2026-07-31|15:30",
  "2026-07-31|16:30",
  "2026-07-31|17:30",
]);
const fixedBusyWeekdays = new Set([0, 6]);
const kinderreitgruppeBookedYears = new Set(["2027"]);
const kinderreitgruppeBookedMonths = new Set(["2026-09", "2026-10", "2026-11", "2026-12"]);
const kinderreitgruppePauseRanges = [
  ["2026-07-20", "2026-09-01"],
  ["2026-10-17", "2026-10-31"],
  ["2026-12-23", "2027-01-06"],
];
const vacationRanges = [
  ["2026-08-10", "2026-09-01"],
];
const publicHolidays = new Set([
  "2026-01-01",
  "2026-04-03",
  "2026-04-06",
  "2026-05-01",
  "2026-05-14",
  "2026-05-25",
  "2026-06-04",
  "2026-10-03",
  "2026-11-01",
  "2026-12-25",
  "2026-12-26",
]);
const specialSlots = {
  "2026-06-29": ["16:30-18:00 Kinderreitkurs"],
  "2026-06-30": ["16:30", "17:30"],
  "2026-07-02": ["16:30-18:00 Kinderreitkurs"],
  "2026-07-06": ["16:30-18:00 Kinderreitkurs"],
  "2026-07-07": [],
  "2026-07-10": [],
  "2026-07-13": ["16:30-18:00 Kinderreitkurs"],
  "2026-07-14": ["16:30", "17:30"],
  "2026-07-09": ["16:30-18:00 Kinderreitkurs"],
  "2026-07-16": ["16:30-18:00 Kinderreitkurs"],
  "2026-07-17": ["15:30", "16:30", "17:30"],
  "2026-07-18": [
    "10:00-14:00 Erlebnisreitkurs Platz 1",
    "10:00-14:00 Erlebnisreitkurs Platz 2",
    "10:00-14:00 Erlebnisreitkurs Platz 3",
    "10:00-14:00 Erlebnisreitkurs Platz 4",
    "10:00-14:00 Erlebnisreitkurs Platz 5",
    "10:00-14:00 Erlebnisreitkurs Platz 6",
  ],
  "2026-07-20": ["15:00", "16:00", "17:00"],
  "2026-07-21": ["10:00", "11:00", "12:00"],
  "2026-07-22": ["10:00", "11:00"],
  "2026-07-27": ["15:00", "16:00", "17:00"],
  "2026-07-28": ["10:00", "11:00", "12:00"],
  "2026-07-29": [],
  "2026-08-03": ["15:00", "16:00", "17:00"],
  "2026-08-04": ["10:00", "11:00", "12:00"],
  "2026-08-05": ["10:00", "11:00"],
  "2026-08-07": [],
  "2026-08-14": [],
  "2026-08-21": [],
  "2026-08-28": [],
  "2026-10-19": ["15:00", "16:00", "17:00"],
  "2026-10-20": ["10:00", "11:00"],
  "2026-10-21": [],
  "2026-10-22": [],
  "2026-10-23": [],
  "2026-10-26": [],
  "2026-10-27": [],
  "2026-10-28": [],
  "2026-10-29": [],
  "2026-10-30": [],
  "2026-11-06": ["15:30", "16:30"],
  "2026-11-13": ["15:30", "16:30"],
  "2026-11-20": [],
  "2026-11-27": ["15:30", "16:30"],
  "2026-12-04": ["15:30", "16:30"],
  "2026-12-11": ["15:30", "16:30"],
  "2026-12-18": ["15:30", "16:30"],
  "2026-12-23": [],
  "2026-12-24": [],
  "2026-12-25": [],
  "2026-12-28": [],
  "2026-12-29": [],
  "2026-12-30": [],
  "2026-12-31": [],
  "2027-01-01": [],
  "2027-01-04": [],
  "2027-01-05": [],
  "2027-01-06": [],
};
let cursor = new Date(2026, 6, 1);
let selectedDate = null;
let selectedSlot = null;
let apiReady = false;
let isSubmitting = false;

function renderOffer(offerId) {
  const offer = offers[offerId];
  if (!offer) return;
  offerTabs.forEach((tab) => {
    const active = tab.dataset.offer === offerId;
    tab.classList.toggle("active", active);
    tab.setAttribute("aria-pressed", String(active));
  });
  offerDetail.innerHTML = `
    <h3>${offer.title}</h3>
    <div class="offer-content">${offer.content || `<p>${offer.description}</p>`}</div>
    <div class="offer-meta">
      <span>${offer.time}</span>
    </div>
    <strong class="offer-price">${offer.price}</strong>
  `;
}

offerTabs.forEach((tab) => {
  tab.setAttribute("aria-pressed", "false");
  tab.addEventListener("click", () => renderOffer(tab.dataset.offer));
});

document.querySelectorAll('a[href^="#"]').forEach((link) => {
  link.addEventListener("click", (event) => {
    const target = document.querySelector(link.getAttribute("href"));
    if (!target) return;
    event.preventDefault();
    target.scrollIntoView({ behavior: "smooth", block: "start" });
    history.pushState(null, "", link.getAttribute("href"));
  });
});

function closeLightbox() {
  photoLightbox.classList.remove("open");
  photoLightbox.setAttribute("aria-hidden", "true");
  photoLightboxImage.removeAttribute("src");
  document.body.classList.remove("lightbox-active");
}

photoThumbs.forEach((thumb) => {
  thumb.addEventListener("click", () => {
    const image = thumb.querySelector("img");
    photoLightboxImage.src = thumb.dataset.full;
    photoLightboxImage.alt = image?.alt || "Vergrößertes Pferdeerlebnis Foto";
    photoLightbox.classList.add("open");
    photoLightbox.setAttribute("aria-hidden", "false");
    document.body.classList.add("lightbox-active");
    photoLightboxClose.focus();
  });
});

photoLightboxClose.addEventListener("click", closeLightbox);
photoLightbox.addEventListener("click", (event) => {
  if (event.target === photoLightbox) closeLightbox();
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && photoLightbox.classList.contains("open")) {
    closeLightbox();
  }
});

function isoDate(date) {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
}

function monthRange(date) {
  const first = new Date(date.getFullYear(), date.getMonth(), 1);
  const last = new Date(date.getFullYear(), date.getMonth() + 1, 0);

  return {
    from: isoDate(first),
    to: isoDate(last),
  };
}

async function apiRequest(action, options = {}) {
  const response = await fetch(`${API_ENDPOINT}?action=${action}`, {
    headers: {
      Accept: "application/json",
      ...(options.body ? { "Content-Type": "application/json" } : {}),
    },
    ...options,
  });
  const data = await response.json().catch(() => ({}));

  if (!response.ok) {
    throw new Error(data.error || "Die Anfrage konnte nicht verarbeitet werden.");
  }

  return data;
}

async function loadBookings() {
  const { from, to } = monthRange(cursor);

  try {
    const data = await apiRequest(`list&from=${from}&to=${to}`);
    if (!Array.isArray(data.bookings)) {
      throw new Error("Die Kalender-API ist noch nicht aktiv.");
    }
    bookedSlots.clear();
    data.bookings.forEach((booking) => {
      bookedSlots.add(`${booking.booking_date}|${booking.slot}`);
    });
    apiReady = true;
  } catch (error) {
    apiReady = false;
    updateFormNote("Kalenderdaten konnten noch nicht geladen werden. Nach der Datenbank-Einrichtung funktioniert die Buchung zentral.");
  }

  renderCalendar();
  if (selectedDate) {
    renderSlots(new Date(`${selectedDate}T12:00:00`));
  }
}

function slotsForDate(date) {
  const dateKey = isoDate(date);
  if (Object.prototype.hasOwnProperty.call(specialSlots, dateKey)) return specialSlots[dateKey];
  if (isVacationDate(dateKey)) return [];

  const day = date.getDay();
  if (day === 1) return ["16:30"];
  if (day === 2) return ["16:30", "17:30"];
  if (day === 3) return ["16:30", "17:00"];
  if (day === 4 && isKinderreitgruppePaused(dateKey)) return [];
  if (day === 4 && dateKey.startsWith("2027-")) return ["16:30-18:00 Kinderreitkurs"];
  if (day === 4) return ["16:30-18:00 Kinderreitgruppe"];
  if (day === 5) return ["15:30", "16:30", "17:30"];
  return [];
}

function isKinderreitgruppePaused(dateKey) {
  return (
    publicHolidays.has(dateKey) ||
    kinderreitgruppePauseRanges.some(([from, to]) => dateKey >= from && dateKey <= to)
  );
}

function isVacationDate(dateKey) {
  return vacationRanges.some(([from, to]) => dateKey >= from && dateKey <= to);
}

function isBusy(date, slot) {
  const dateKey = isoDate(date);
  const key = `${dateKey}|${slot}`;
  const day = date.getDay();
  return (
    ((kinderreitgruppeBookedYears.has(dateKey.slice(0, 4)) ||
      kinderreitgruppeBookedMonths.has(dateKey.slice(0, 7))) &&
      day === 4 &&
      (slot.includes("Kinderreitgruppe") || slot.includes("Kinderreitkurs"))) ||
    (!specialSlots[dateKey] && fixedBusyWeekdays.has(day)) ||
    fixedBookedSlots.has(key) ||
    bookedSlots.has(key)
  );
}

function hasFreeSlot(date) {
  return slotsForDate(date).some((slot) => !isBusy(date, slot));
}

function calendarSlotLabel(slot) {
  const match = slot.match(/^(\d{1,2}:\d{2})(?:-(\d{1,2}:\d{2}))?/);
  if (!match) return slot;
  return match[2] ? `${match[1]}-${match[2]}` : match[1];
}

function renderCalendar() {
  monthLabel.textContent = formatter.format(cursor);
  calendarGrid.innerHTML = "";

  const daysInMonth = new Date(cursor.getFullYear(), cursor.getMonth() + 1, 0).getDate();
  const first = new Date(cursor.getFullYear(), cursor.getMonth(), 1);
  const mondayOffset = (first.getDay() + 6) % 7;

  for (let i = 0; i < mondayOffset; i += 1) {
    const spacer = document.createElement("span");
    spacer.className = "calendar-spacer";
    spacer.setAttribute("aria-hidden", "true");
    calendarGrid.append(spacer);
  }

  for (let dayNumber = 1; dayNumber <= daysInMonth; dayNumber += 1) {
    const day = new Date(cursor.getFullYear(), cursor.getMonth(), dayNumber);
    const dateKey = isoDate(day);
    const button = document.createElement("button");
    button.type = "button";
    button.className = "day-button";
    button.dataset.date = dateKey;
    button.setAttribute("aria-label", dateFormatter.format(day));

    const slots = slotsForDate(day);
    const hasSlots = slots.length > 0;
    const hasFree = hasFreeSlot(day);
    const freeSlots = slots.filter((slot) => !isBusy(day, slot));
    const freeTimes = [...new Set(freeSlots.map(calendarSlotLabel))];

    const dayNumberElement = document.createElement("span");
    dayNumberElement.className = "day-number";
    dayNumberElement.textContent = day.getDate();
    button.append(dayNumberElement);

    if (freeTimes.length > 0) {
      const timeList = document.createElement("span");
      timeList.className = "day-times";
      const visibleTimes = freeTimes.slice(0, 3);
      timeList.textContent =
        freeTimes.length > 3 ? `${visibleTimes.join(" ")} +` : visibleTimes.join(" ");
      button.append(timeList);
    }

    const isFixedBusyDay =
      fixedBusyWeekdays.has(day.getDay()) &&
      !Object.prototype.hasOwnProperty.call(specialSlots, dateKey);

    if (!hasSlots || isFixedBusyDay || !hasFree) button.classList.add("busy");
    if (isFixedBusyDay) button.classList.add("weekend-busy");
    if (hasFree) button.classList.add("has-free");
    if (selectedDate === dateKey) button.classList.add("selected");
    if (!hasSlots || isFixedBusyDay || !hasFree) button.disabled = true;

    button.addEventListener("click", () => {
      selectedDate = dateKey;
      selectedSlot = null;
      renderCalendar();
      renderSlots(day);
      updateFormNote();
    });

    calendarGrid.append(button);
  }
}

function renderSlots(date) {
  const dateKey = isoDate(date);
  selectedDateLabel.textContent = dateFormatter.format(date);
  slotList.innerHTML = "";

  const slots = slotsForDate(date);
  if (slots.length === 0) {
    slotList.textContent = "An diesem Tag sind keine Termine vorgesehen.";
    return;
  }

  slots.forEach((slot) => {
    const busy = isBusy(date, slot);
    const button = document.createElement("button");
    button.type = "button";
    button.className = "slot-button";
    button.textContent = busy ? `${slot} belegt` : slot;
    button.disabled = busy;
    if (selectedSlot === slot) button.classList.add("selected");
    button.addEventListener("click", () => {
      selectedSlot = slot;
      if (slot.includes("Erlebnisreitkurs")) {
        document.querySelector("#serviceSelect").value = "Erlebnisreitkurs";
      }
      if (slot.includes("Kinderreitkurs")) {
        document.querySelector("#serviceSelect").value = "Kinderreitkurs";
      }
      renderSlots(date);
      updateFormNote();
    });
    slotList.append(button);
  });
}

function updateFormNote(message) {
  if (message) {
    formNote.textContent = message;
    return;
  }
  if (!apiReady) {
    formNote.textContent = "Kalenderdaten werden geladen oder die Datenbank ist noch nicht eingerichtet.";
    return;
  }
  if (!selectedDate || !selectedSlot) {
    formNote.textContent = "Wählen Sie zuerst einen freien Termin.";
    return;
  }
  formNote.textContent = `Ausgewählt: ${selectedDate} um ${selectedSlot} Uhr.`;
}

prevMonth.addEventListener("click", () => {
  cursor = new Date(cursor.getFullYear(), cursor.getMonth() - 1, 1);
  loadBookings();
});

nextMonth.addEventListener("click", () => {
  cursor = new Date(cursor.getFullYear(), cursor.getMonth() + 1, 1);
  loadBookings();
});

bookingForm.addEventListener("submit", async (event) => {
  event.preventDefault();
  if (!selectedDate || !selectedSlot) {
    updateFormNote("Bitte wählen Sie einen freien Termin im Kalender.");
    return;
  }
  if (!apiReady) {
    updateFormNote("Die Datenbankverbindung ist noch nicht bereit. Bitte versuchen Sie es später erneut.");
    return;
  }
  if (isSubmitting) return;

  isSubmitting = true;
  updateFormNote("Ihre Terminanfrage wird gespeichert ...");

  const submitButton = bookingForm.querySelector('button[type="submit"]');
  submitButton.disabled = true;

  try {
    const payload = {
      date: selectedDate,
      slot: selectedSlot,
      service: document.querySelector("#serviceSelect").value,
      name: document.querySelector("#nameInput").value,
      contact: document.querySelector("#contactInput").value,
      message: document.querySelector("#messageInput").value,
    };

    await apiRequest("create", {
      method: "POST",
      body: JSON.stringify(payload),
    });

    bookedSlots.add(`${selectedDate}|${selectedSlot}`);
    bookingForm.reset();
    updateFormNote("Danke, Ihre Terminanfrage wurde gespeichert. Ich melde mich zur Bestätigung.");
    selectedSlot = null;
    renderCalendar();
    renderSlots(new Date(`${selectedDate}T12:00:00`));
  } catch (error) {
    updateFormNote(error.message);
    await loadBookings();
  } finally {
    isSubmitting = false;
    submitButton.disabled = false;
  }
});

renderCalendar();
const todayChoice = new Date(2026, 6, 1);
selectedDate = isoDate(todayChoice);
renderCalendar();
renderSlots(todayChoice);
loadBookings();
