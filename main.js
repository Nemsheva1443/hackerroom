const geheimer_zahl = 10;

let verbleibende_versuche = 5;

const eingabefeld = document.querySelector("#code-eingabe");

const pruefenbtn = document.querySelector("#pruefen-button");

const versuche_anzeige = document.querySelector("#versuche-zaeler");

const hinweis_text = document.querySelector("#hinweis-aufgabe");

pruefenbtn.addEventListener("click", () => {
  const tipp = Number(eingabefeld.value);

  verbleibende_versuche = verbleibende_versuche - 1;

  versuche_anzeige.textContent = "Versuche:" + verbleibende_versuche;

  if (tipp === geheimer_zahl) {
    hinweis_text.textContent =
      "Aufgabe 1 ist erfolgreich abgeschlossen! Die Aufgabe 2 ist freigeschaltet!";
  } else if (verbleibende_versuche === 0) {
    hinweis_text.textContent = "Keine Versuche mehr! Das Spiel ist vorbei!";
  } else {
    if (tipp > geheimer_zahl) {
      hinweis_text.textContent = "Die Geheimahl ist kleiner";
    } else if (tipp < geheimer_zahl) {
      hinweis_text.textContent = "Die Geheimahl ist größer";
    }
  }
});

const richtig_passw = "hackerroom";

const geheim_wort = document.querySelector("#geheim-wort");
const geheimwort_btn = document.querySelector("#geheimwort-button");
const hinweispassw = document.querySelector("#hinweispssw");
const passw_task = document.querySelector("#passw-task");

geheimwort_btn.addEventListener("click", () => {
  const eingabe = geheim_wort.value;

  if (eingabe === "") {
    passw_task.textContent = "Ungültig! Bitte geben Sie eine Zahl";
  } else if (eingabe.length < 8) {
    passw_task.textContent = "Das Password muss mind. 8 Zeichen sein";
  } else if (eingabe !== richtig_passw) {
    passw_task.textContent = "Der Password ist falsch";
  } else if (eingabe === richtig_passw) {
    passw_task.textContent = "Die Aufgabe erfolgreich abgeschlossen!";
  }
});

const input_sequenz = document.querySelector("#sequenz");
const btn_sequenz = document.querySelector("#sicherheit-check");
const output_sequenz = document.querySelector("check");

btn_sequenz.addEventListener("click", () => {
  const eintippen = input_sequenz.value;

  if (eintippen === "") {
    output_sequenz.textContent = "Ungültige Eingabe!";
  } else {
    const eintragen = Number(eintippen);
  }
  if (eintragen < 1 || eintragen > 10) {
    output_sequenz.textContent = "Die Zahl liegt zwischen 1 und 10";
  } else {
    let schluss = "";
    for (let i = 1; i <= eintragen; i++) {
      schluss = schluss + i + "";
    }

    output_sequenz.textContent = schluss;
  }
});
