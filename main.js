const geheimer_zahl = Math.floor(Math.random() * 20) + 1;
let verbleibende_versuche = 5;

let task_eins_geschafft = false;
let task_zwei_geschafft = false;

const eingabefeld = document.querySelector("#code-eingabe");
const pruefenbtn = document.querySelector("#pruefen-button");
const versuche_anzeige = document.querySelector("#versuche-zaeler");
const hinweis_text = document.querySelector("#hinweis-aufgabe");

const aufgabe2 = document.querySelector("#aufgabe2");
const aufgabe3 = document.querySelector("#aufgabe3");
const gewonnen = document.querySelector("#gewonnen");

function aufgabeEins() {
  pruefenbtn.addEventListener("click", () => {
    const eingabe = Number(eingabefeld.value);

    if (verbleibende_versuche === 0) {
      hinweis_text.textContent = "Keine Versuche mehr! Das Spiel ist vorbei!";
    } else {
      if (eingabefeld.value === "") {
        hinweis_text.textContent = "Ungültige Eingabe!";
      } else {
        if (eingabe === geheimer_zahl) {
          task_eins_geschafft = true;
          hinweis_text.textContent =
            "✅ Aufgabe 1 erfolgreich abgeschlossen! Aufgabe 2 ist freigeschaltet!";
          aufgabe2.hidden = false;
          schloss2.src = "./img/schloss2.png";
        } else {
          verbleibende_versuche = verbleibende_versuche - 1;

          versuche_anzeige.textContent = "Versuche: " + verbleibende_versuche;

          if (verbleibende_versuche === 0) {
            hinweis_text.textContent =
              "Keine Versuche mehr! Das Spiel ist vorbei!";
          } else {
            if (eingabe > geheimer_zahl) {
              hinweis_text.textContent = "Die Geheimzahl ist kleiner.";
            } else {
              hinweis_text.textContent = "Die Geheimzahl ist größer.";
            }
          }
        }
      }
    }
  });
}

aufgabeEins();

const richtig_passw = "hackerroom";
const geheim_wort = document.querySelector("#geheim-wort");
const geheimwort_btn = document.querySelector("#geheimwort-button");
const passw_task = document.querySelector("#passw-task");

const schloss2 = document.querySelector("#schloss2");

function aufgabeZwei() {
  geheimwort_btn.addEventListener("click", () => {
    if (task_eins_geschafft === true) {
      const eingabe = geheim_wort.value;

      if (eingabe === "") {
        passw_task.textContent = "Ungültig! Bitte geben Sie das Passwort ein.";
      } else if (eingabe.length < 8) {
        passw_task.textContent = "Das Passwort muss mind. 8 Zeichen sein";
      } else if (eingabe !== richtig_passw) {
        passw_task.textContent = "Das Passwort ist falsch";
      } else {
        task_zwei_geschafft = true;
        passw_task.textContent =
          "✅ Aufgabe 2 erfolgreich abgeschlossen! Aufgabe 3 ist freigeschaltet!";
        aufgabe3.hidden = false;
        schloss3.src = "./img/schloss2.png";
      }
    }
  });
}

aufgabeZwei();

const input_sequenz = document.querySelector("#sequenz");
const btn_sequenz = document.querySelector("#sicherheit-check");
const output_sequenz = document.querySelector("#check");
const schloss3 = document.querySelector("#schloss3");

function aufgabeDrei() {
  btn_sequenz.addEventListener("click", () => {
    if (task_zwei_geschafft === true) {
      const eintippen = input_sequenz.value;
      const eintragen = Number(eintippen);

      if (eintippen === "") {
        output_sequenz.textContent = "Ungültige Eingabe!";
      } else if (eintragen < 1 || eintragen > 10) {
        output_sequenz.textContent = "Die Zahl liegt zwischen 1 und 10";
      } else {
        let schluss = "";

        for (let i = 1; i <= eintragen; i++) {
          schluss = schluss + i;
        }

        output_sequenz.textContent = schluss + " ✅";
        gewonnen.hidden = false;
        document.body.style.backgroundColor = "#212f3f";
      }
    }
  });
}

aufgabeDrei();
