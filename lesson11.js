var lesson11 = [
  //Kanji
  {
    kanji: "歌", //also in kanji list lesson 7
    kana: "うた",
    english: "song",
  },
  {
    kanji: "",
    kana: "",
    english: "",
  },
];

var i = 0;
var len = lesson11.length;
var text = "";

for (; i < len; i++) {
    text += "<div class='qs'>" + lesson11[i].english + "</div>" +
            "<input type='text'>" +
            "<br><br>";
          }

document.getElementById("lesson11").innerHTML = text;
