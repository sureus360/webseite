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
    description:
      "Eine ruhige Einheit mit dem Pferd, in der Beziehung, Vertrauen, Koordination und Selbstwirksamkeit gefördert werden. Die Pferdepflege ist in der gebuchten Zeit enthalten.",
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
    price: "55 EURO",
    content: `
      <h4>Info zum Kursinhalt</h4>
      <p>
        Sie bringen Ihre Kinder um 10:00 Uhr zu mir und dürfen Ihr Kind nach
        einer kurzen Begrüßungsrunde bei mir lassen.
      </p>
      <p>
        Bitte wetterfeste Kleidung anziehen. Ein Fahrrad- oder Reithelm muss
        mitgebracht werden. Bei warmem Wetter bitte keine kurze Kleidung wie
        kurze Hosen oder Röcke, am besten eine Leggings. Bitte nur feste,
        geschlossene Schuhe und keine Sandalen.
      </p>
      <p>
        Die Kinder bekommen in unseren gemeinsamen Pausen Wasser und
        Apfelschorle angeboten. Gegen 12:30 Uhr werden wir Mittag essen:
        Pommes und Hähnchen-Dinos mit Tomatenketchup und Mayonnaise. Kleine
        Leckereien stehen natürlich auch bereit!
      </p>
      <h4>Ablauf</h4>
      <ul class="offer-schedule">
        <li><strong>10:15 Uhr:</strong> Goldene Regeln besprechen – Verhalten im Umgang mit den Pferden</li>
        <li><strong>10:30 Uhr:</strong> Begrüßung der Pferde Balu und Nele, anschließend Pferdepflege</li>
        <li><strong>11:00 Uhr:</strong> Reitplatz, Auslosung der Reihenfolge und Gruppenspiele auf dem Pferd</li>
        <li><strong>12:15 Uhr:</strong> Pferde zurück in den Stall bringen</li>
        <li><strong>12:30 Uhr:</strong> Mittagessen</li>
        <li><strong>13:00 Uhr:</strong> Kreatives Angebot und Schatzsuche</li>
        <li><strong>14:00 Uhr:</strong> Abholzeit und Urkundenvergabe</li>
      </ul>
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

const baseSlots = ["09:00", "10:30", "14:00", "16:30"];
const fixedBusy = new Set([
  "2026-06-04|16:30",
  "2026-06-06|10:30",
  "2026-06-11|16:30",
  "2026-06-13|10:30",
  "2026-06-18|16:30",
  "2026-06-20|14:00",
  "2026-07-12|10:30",
  "2026-09-13|10:30",
]);

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
  if (day === 0) return [];
  if (day === 4) return ["16:30", "17:15"];
  if (day === 5) return ["09:00", "10:30"];
  if (day === 6) return ["10:00", "12:00"];
  return baseSlots;
}

function isBusy(dateKey, slot) {
  const key = `${dateKey}|${slot}`;
  return fixedBusy.has(key) || storedBusy.has(key);
}

function hasFreeSlot(date) {
  const dateKey = isoDate(date);
  return slotsForDate(date).some((slot) => !isBusy(dateKey, slot));
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
    const busy = isBusy(dateKey, slot);
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
