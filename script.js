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
let textmorse = "";
let decode ;



document.addEventListener("keydown", function (e) {
  if (e.key === "Enter") {
    starttime = Date.now();
  }
});
document.addEventListener("keyup", function (e) {
  if (e.key === "Enter") {
    const dur = Date.now()- starttime;
    if (dur < 200) {
        current += ".";
    }
    else {
        current += "-"; 
    }
    viewmorse.textContent = current;
    
    function decoder () {
        textmorse = morse[current];
       
        current = "";
        viewtext.textContent = textmorse;
        
    }
    clearTimeout(decode);
    decode = setTimeout(decoder,500);
    
  }

});


const viewmorse = document.getElementById("morse");
const viewtext = document.getElementById("text");
const target = document.getElementById("target");
const status = document.getElementById("status");

let targetLetter;


function newTarget(){
  targetLetter = String.fromCharCode(
    65 + Math.floor(Math.random() * 26)
  );

  target.textContent = targetLetter;
  status.textContent = "";
}

newTarget();




   