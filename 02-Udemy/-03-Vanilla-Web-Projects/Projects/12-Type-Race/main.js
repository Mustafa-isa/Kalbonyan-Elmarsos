/// glopal variabel
let settings = document.getElementById("settings");
let settings_form = document.getElementById("settings-form");
let difficulty = document.getElementById("difficulty");
let word = document.getElementById("word");
let text = document.getElementById("text");
let time = document.getElementById("time");
let score = document.getElementById("score");
let end_ontainer = document.getElementById("end-game-container");
let GameWordArray = new Array();
GameWordArray[0] = "monitor";
GameWordArray[1] = "program";
GameWordArray[2] = "application";
GameWordArray[3] = "keyboard";
GameWordArray[4] = "javascript";
GameWordArray[5] = "gaming";
GameWordArray[6] = "network";
let rondom;
let scr = 0;
function returnWord() {
  let randno = Math.floor(Math.random() * GameWordArray.length);
  let w = GameWordArray[randno];
  return w;
}
function addDom() {
  rondom = returnWord();
  return (word.innerHTML = rondom);
}
addDom();
text.addEventListener("input", (e) => {
  let inserted = e.target.value;
  if (inserted.trim() === rondom) {
    addDom();
    ubdateScore();
    e.target.value = "";
  }
});
//start logic
function ubdateScore() {
  scr++;

  score.innerHTML = scr;
}
