var lesson8Kanji = [
  {
    kanji: "店員",
    kana: "てんいん",
    english: [ "store clerk",],
  },
  {
    kanji: "会員",
    kana: "かいいん",
    english: [ "member",],
  },
  {
    kanji: "駅員",
    kana: "えきいん",
    english: [ "station staff",],
  },
  {
    kanji: "新しい",
    kana: "あたらしい",
    english: [ "new",],
  },
  {
    kanji: "新聞",
    kana: "しんぶん",
    english: [ "newspaper",],
  },
  {
    kanji: "新幹線",
    kana: "しんかんせん",
    english: [ "bullet train",],
  },
  {
    kanji: "新鮮な",
    kana: "しんせんな",
    english: [ "fresh",],
  },
  {
    kanji: "聞こえる",
    kana: "きこえる",
    english: [ "can be heard",],
  },
  {
    kanji: "作文",　//also in vocab list lesson 9
    kana: "さくぶん",
    english: [
      "essay",
      "composition",
    ],
  },
/*  {
    kanji: "作品",
    kana: "さくひん",
    english: [ "artistic piece",],
  },*/
  {
    kanji: "作者",
    kana: "さくしゃ",
    english: [ "author",],
  },
/*  {
    kanji: "仕返し",
    kana: "しかえし",
    english: [ "revenge",
  },*/
  {
    kanji: "仕える",
    kana: "つかえる",
    english: [
      "to serve",
      "to work under",
    ],
  },
  {
    kanji: "事",
    kana: "こと",
    english: [ "thing",],
  },
  {
    kanji: "火事",
    kana: "かじ",
    english: [ "fire",],
  },
  {
    kanji: "食事",
    kana: "しょくじ",
    english: [ "meal",],
  },
/*  {
    kanji: "返事",
    kana: "へんじ",
    english: [ "reply",],
  },*/
  {
    kanji: "電車",
    kana: "でんしゃ",
    english: [ "train",],
  },
  {
    kanji: "電気",
    kana: "でんき",
    english: [ "electricity",],
  },
  {//also in lesson 9
    kanji: "電話",
    kana: "でんわ",
    english: [ "telephone",],
  },
/*  {
    kanji: "電池",
    kana: "でんち",
    english: [ "battery",],
  },
  {
    kanji: "駐車場",
    kana: "ちゅうしゃじょう",
    english: [ "parking lot",],
  },*/
  {
    kanji: "車",
    kana: "くるま",
    english: [ "car",],
  },
  {
    kanji: "自転車",
    kana: "じてんしゃ",
    english: [ "bicycle",],
  },
  {
    kanji: "車いす",
    kana: "くるまいす",
    english: [ "wheel chair",],
  },
  {
    kanji: "休む",
    kana: "やすむ",
    english: [
      "to rest",
      "to be absent",
    ],
  },
  {
    kanji: "休み",
    kana: "やすみ",
    english: [
      "holiday",
      "absence",
    ],
  },
  {
    kanji: "言語学",
    kana: "げんごがく",
    english: [ "linguistics",],
  },
/*  {
    kanji: "方言",
    kana: "ほうげん",
    english: [ "dialect",],
  },
  {
    kanji: "言葉",
    kana: "ことば",
    english: [
      "word",
      "language",
    ],
  },
  {
    kanji: "読み物",
    kana: "よみもの",
    english: [ "reading matter",],
  },*/
  {
    kanji: "読む",
    kana: "よむ",
    english: [ "to read",],
  },
  {
    kanji: "思い出す",
    kana: "おもいだす",
    english: [
      "to recall",
      "to remember",
    ],
  },
  {
    kanji: "不思議な",
    kana: "ふしぎな",
    english: [ "mysterious",],
  },
  {
    kanji: "次",
    kana: "つぎ",
    english: [ "next",],
  },
  {
    kanji: "次女",
    kana: "じじょ",
    english: [ "second daughter",],
  },
  {
    kanji: "目次",
    kana: "もくじ",
    english: [ "table of contents",],
  },
  {
    kanji: "次回",
    kana: "じかい",
    english: [ "next time",],
  },
  {
    kanji: "何",
    kana: "なに",
    english: [ "what",],
  },
  {
    kanji: "何時",
    kana: "なんじ",
    english: [ "what time",],
  },
  {
    kanji: "何人",
    kana: "なんにん",
    english: [ "how many people",],
  },
];

var i = 0;
var len = lesson8Kanji.length;
var question = '';

for (; i < len; i++) {
  question += '<div class="qs">' + lesson8Kanji[i].english + '<div>' +
    			    '<input class="answer" type="text">' +
              '<div class="rslt" id="result' + i + '"></div>' + '<br>'
}

document.getElementById("lesson8Kanji").innerHTML = question;

//SUBMIT ANSWERS
function submitAnswers(){
  var answers, text;

  answers = document.getElementsByClassName("answer");

  for(var j = 0, i = 0; j < answers.length; j++, i++) {
    if (answers[j].value == lesson8Kanji[i].kana　|| answers[j].value == lesson8Kanji[i].kanji) {
      text = 'Correct!';
    } else {
      text = 'Try Again.';
    }
    document.getElementById("result"+i).innerHTML = text;
  }
}
