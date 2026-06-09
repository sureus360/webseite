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
    price: "30 EUR / 55 EUR",
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
        <strong>Zahlungshinweise:</strong> Bitte überweisen Sie den Betrag
        jeweils zum Monatsanfang auf folgendes Konto:
      </p>
      <p class="offer-highlight">
        <strong>Kontoinhaber:</strong> Sabrina Riese<br />
        <strong>IBAN:</strong> DE77 4036 1906 4320 4425 00<br />
        <strong>Institut:</strong> Volksbank Münsterland Nord
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
        Die Kursgebühr beträgt 90,00 €. Bitte überweisen Sie diesen Betrag vor
        Kursbeginn auf das angegebene Konto:
      </p>
      <p class="offer-highlight">
        <strong>Sabrina Riese</strong><br />
        DE77 4036 1906 4320 4425 00<br />
        Volksbank Münsterland Nord
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
        Die Teilnahmegebühr für diesen Tag beträgt 55,00 €. Bitte überweisen
        Sie den Betrag unter Angabe des Namens Ihres Kindes sowie des Kursnamens
        auf folgendes Konto:
      </p>
      <p class="offer-highlight">
        <strong>Kontoinhaberin:</strong> Sabrina Riese<br />
        <strong>IBAN:</strong> DE77 4036 1906 4320 4425 00<br />
        <strong>Bank:</strong> Volksbank Münsterland Nord
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
};

const formatter = new Intl.DateTimeFormat("de-DE", { month: "long", year: "numeric" });
const dateFormatter = new Intl.DateTimeFormat("de-DE", {
  weekday: "long",
  day: "2-digit",
  month: "2-digit",
  year: "numeric",
});

const storedBusy = new Set(JSON.parse(localStorage.getItem("pferdeerlebnis-busy") || "[]"));
let cursor = new Date(2026, 5, 1);
let selectedDate = null;
let selectedSlot = null;

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

function slotsForDate(date) {
  const day = date.getDay();
  if (day === 1) return ["16:30"];
  if (day === 2) return ["16:30", "17:30"];
  if (day === 3) return ["16:30", "17:00"];
  if (day === 4) return ["16:30–18:00 Kinderreitgruppe"];
  if (day === 5) return ["15:30", "16:30", "17:30"];
  return [];
}

function isBusy(date, slot) {
  const key = `${isoDate(date)}|${slot}`;
  const day = date.getDay();
  return day === 3 || day === 4 || storedBusy.has(key);
}

function hasFreeSlot(date) {
  return slotsForDate(date).some((slot) => !isBusy(date, slot));
}

function renderCalendar() {
  monthLabel.textContent = formatter.format(cursor);
  calendarGrid.innerHTML = "";

  const first = new Date(cursor.getFullYear(), cursor.getMonth(), 1);
  const gridStart = new Date(first);
  const mondayOffset = (first.getDay() + 6) % 7;
  gridStart.setDate(first.getDate() - mondayOffset);

  for (let i = 0; i < 42; i += 1) {
    const day = new Date(gridStart);
    day.setDate(gridStart.getDate() + i);
    const dateKey = isoDate(day);
    const isCurrentMonth = day.getMonth() === cursor.getMonth();
    const button = document.createElement("button");
    button.type = "button";
    button.className = "day-button";
    button.textContent = day.getDate();
    button.dataset.date = dateKey;
    button.setAttribute("aria-label", dateFormatter.format(day));

    if (!isCurrentMonth) button.classList.add("outside");
    if (slotsForDate(day).length === 0) button.classList.add("busy");
    if (hasFreeSlot(day)) button.classList.add("has-free");
    if (selectedDate === dateKey) button.classList.add("selected");

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
  if (!selectedDate || !selectedSlot) {
    formNote.textContent = "Wählen Sie zuerst einen freien Termin.";
    return;
  }
  formNote.textContent = `Ausgewählt: ${selectedDate} um ${selectedSlot} Uhr.`;
}

prevMonth.addEventListener("click", () => {
  cursor = new Date(cursor.getFullYear(), cursor.getMonth() - 1, 1);
  renderCalendar();
});

nextMonth.addEventListener("click", () => {
  cursor = new Date(cursor.getFullYear(), cursor.getMonth() + 1, 1);
  renderCalendar();
});

bookingForm.addEventListener("submit", (event) => {
  event.preventDefault();
  if (!selectedDate || !selectedSlot) {
    updateFormNote("Bitte wählen Sie einen freien Termin im Kalender.");
    return;
  }

  const key = `${selectedDate}|${selectedSlot}`;
  storedBusy.add(key);
  localStorage.setItem("pferdeerlebnis-busy", JSON.stringify([...storedBusy]));
  bookingForm.reset();
  updateFormNote("Danke, die Terminanfrage wurde im Prototyp gespeichert und der Slot ist nun belegt.");
  selectedSlot = null;
  renderCalendar();
  renderSlots(new Date(`${selectedDate}T12:00:00`));
});

renderCalendar();
const todayChoice = new Date(2026, 5, 4);
selectedDate = isoDate(todayChoice);
renderCalendar();
renderSlots(todayChoice);
updateFormNote();
