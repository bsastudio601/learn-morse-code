const morse = {
  ".-":"A",
  "-...":"B",
  "-.-.":"C",
  "-..":"D",
  ".":"E",
  "..-.":"F",
  "--.":"G",
  "....":"H",
  "..":"I",
  ".---":"J",
  "-.-":"K",
  ".-..":"L",
  "--":"M",
  "-.":"N",
  "---":"O",
  ".--.":"P",
  "--.-":"Q",
  ".-.":"R",
  "...":"S",
  "-":"T",
  "..-":"U",
  "...-":"V",
  ".--":"W",
  "-..-":"X",
  "-.--":"Y",
  "--..":"Z"
};

let starttime;
let current = "";
let decode;
let targetLetter;

const viewmorse = document.getElementById("morse");
const target = document.getElementById("target");
const dotTime = document.getElementById("dotTime");
const letterDelay = document.getElementById("letterDelay");

dotTime.value = localStorage.getItem("dotTime") || 200;
letterDelay.value = localStorage.getItem("letterDelay") || 900;

function newTarget() {
  targetLetter = String.fromCharCode(
    65 + Math.floor(Math.random() * 26)
  );

  target.textContent = targetLetter;
}

newTarget();

document.addEventListener("keydown", function (e) {
  if (e.code === "Space") {
    e.preventDefault();
    if (!starttime) {
      starttime = Date.now();
    }
  }
});

document.addEventListener("keyup", function (e) {

  if (e.code === "Space") {
    e.preventDefault();

    if (!starttime) return;

    const dur = Date.now() - starttime;

    if (dur < Number(dotTime.value)) {
      current += ".";
    } else {
      current += "-";
    }

    viewmorse.textContent = current;

    starttime = null;

    clearTimeout(decode);

    decode = setTimeout(decoder, Number(letterDelay.value));
  }

});

function decoder() {

  const letter = morse[current];

  if (letter) {

    if (letter === targetLetter) {

      target.style.borderColor = "#4fd6e8";
      target.style.boxShadow = "0 0 15px #4fd6e8";

    } else {

      target.style.borderColor = "red";
      target.style.boxShadow = "0 0 15px red";

    }

    newTarget();

    setTimeout(() => {
      target.style.borderColor = "white";
      target.style.boxShadow = "0 0 15px white";
    }, 500);

  }

  current = "";
  viewmorse.textContent = "";

}

dotTime.addEventListener("input", () => {
    localStorage.setItem("dotTime", dotTime.value);
});

letterDelay.addEventListener("input", () => {
    localStorage.setItem("letterDelay", letterDelay.value);
});