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

document.addEventListener("keydown", function (e) {
  if (e.key === " ") {
    starttime = Date.now();
  }
});
document.addEventListener("keyup", function (e) {
  if (e.key === " ") {
    const dur = Date.now()- starttime;
    if (dur < 200) {
        console.log('.');
    }
    else {
        console.log('-');
    }
    
  }
});
   