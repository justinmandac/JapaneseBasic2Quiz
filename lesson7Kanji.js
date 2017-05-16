var lesson7Kanji = [
  {
    kanji: "会社", //also in kanji list
    kana: "かいしゃ",
    english: [ "company", ],
  },
  {
    kanji: "父",　//also in kanji list
    kana: "ちち",
    english: [ "(my) father",],
  },
  /*{
    kana:　"ヂィーヴィーヂィ",
    english: [ "DVD",],
  },*/
  {
    kanji: "母", //also in kanji list
    kana: "はは",
    english: [ "(my) mother",],
  },
  {
    kanji: "東京",
    kana: "とうきょう",
    english: [ "Tokyo",],
  },
  {
    kanji: "京子",
    kana: "きょうこ",
    english: [ "Kyoko",],
  },
  {
    kanji: "京都",
    kana: "きょうと",
    english: [ "Kyoto",],
  },
  {
    kanji: "上京する",
    kana: "じょうきょうする",
    english: [ "to go to the capital",],
  },
  {
    kanji: "子ども",
    kana: "こども",
    english: [ "child",],
  },
  {
    kanji: "女の子",
    kana: "おんなのこ",
    english: [ "girl",],
  },
  {
    kanji: "男の子",
    kana: "おとこのこ",
    english: [ "boy",],
  },
  {
    kanji: "小さい",
    kana: "ちいさい",
    english: [ "small",],
  },
  {
    kanji: "小学校",
    kana: "しょうがっこう",
    english: [ "elementary school",],
  },
  {
    kanji: "小学生",
    kana: "しょうがくせい",
    english: [ "elementary school student",],
  },
  {
    kanji: "会う",
    kana: "あう",
    english: [ "to meet",],
  },
  {
    kanji: "神社",
    kana: "じんじゃ",
    english: [ "shrine",],
  },
  {
    kanji: "社会",
    kana: "しゃかい",
    english: [ "society",],
  },
  {
    kanji: "入社",
    kana: "にゅうしゃ",
    english: [ "entry to a company",],
  },
  {
    kanji: "お父さん",
    kana: "おとうさん",
    english: [ "father",],
  },
  {
    kanji: "父母",
    kana: "ふぼ",
    english: [ "father and mother",],
  },
  {
    kanji: "祖父",
    kana: "そふ",
    english: [ "grandfather (formal)",],
  },
  {
    kanji: "お母さん",
    kana: "おかあさん",
    english: [ "mother",],
  },
  {
    kanji: "母語",
    kana: "ぼご",
    english: [ "mother tongue",],
  },
  {
    kanji: "祖母",
    kana: "そぼ",
    english: [ "grandmother (formal)",],
  },
  {
    kanji: "高い",
    kana: "たかい",
    english: [
      "expensive",
      "high",
    ],
  },
  {
    kanji: "高校",
    kana: "こうこう",
    english: [ "high school",],
  },
  {
    kanji: "高校生",
    kana: "こうこうせい",
    english: [ "high school student",],
  },
  /*{
    kanji: "最高",
    kana: "saigou",
    english: [ "the best",],
  },*/
  {
    kanji: "学校",
    kana: "がっこう",
    english: [ "school",],
  },
  {
    kanji: "中学校",
    kana: "ちゅうがっこう",
    english: [ "junior high school",],
  },
  {
    kanji: "毎日",
    kana: "まいにち",
    english: [ "everyday",],
  },
  {
    kanji: "毎晩",
    kana: "まいばん",
    english: [ "every night",],
  },
  {
    kanji: "毎年",
    kana: [
      "まいねん",
      "まいとし",
    ],
    english: [ "every year",],
  },
  {
    kanji: "日本語",
    kana: "にほんご",
    english: [
      "Japanese language",
//      " Japanese",
    ],
  },
  {
    kanji: "英語",
    kana: "えいご",
    english: [
      "English language",
//      " English",
    ],
  },
  {
    kanji: "敬語",
    kana: "けいご",
    english: [
      "honorific expressions",
//      " formal speech pattern",
    ],
  },
  {
    kanji: "文学",
    kana: "ぶんがく",
    english: [ "literature",],
  },
  {
    kanji: "文字",
    kana: "もじ",
    english: [
      "letter",
      " character",
    ],
  },
  {
    kanji: "文化",
    kana: "ぶんか",
    english: [ "culture",],
  },
  {
    kanji: "文法",
    kana: "ぶんぽう",
    english: [ "grammar",],
  },
  {
    kanji: "帰る",
    kana: "かえる",
    english: [ "to return",],
  },
  {
    kanji: "帰国",
    kana: "きこく",
    english: [ "going home",],
  },
  /*{
    kanji: "帰宅",
    kana: "きたく",
    english: [ "returning home",],
  },*/
  {
    kanji: "帰り",
    kana: "かえり",
    english: [ "return",],
  },
  {
    kanji: "入る",
    kana: "はいる",
    english: [ "to enter",],
  },
  {
    kanji: [
      "入り口",
      " 入口",
    ],
    kana: "いりぐち",
    english: [ "entrance",],
  },
  {
    kanji: "入れる",
    kana: "いれる",
    english: [ "to put something in",],
  },
  /*{
    kanji: "輸入",
    kana: "ゆにゅう",
    english: [ "import",],
  },*/
];

var i = 0;
var len = lesson7Kanji.length;
var question = '';

for (; i < len; i++) {
  question += '<div class="qs">' + lesson7Kanji[i].english + '<div>' +
    			    '<input class="answer" type="text">' +
              '<div class="rslt" id="result' + i + '"></div>' + '<br>'
}

document.getElementById("lesson7Kanji").innerHTML = question;

//SUBMIT ANSWERS
function submitAnswers(){
  var answers, text;

  answers = document.getElementsByClassName("answer");

  for(var j = 0, i = 0; j < answers.length; j++, i++) {
    if (answers[j].value == lesson7Kanji[i].kana　|| answers[j].value == lesson7Kanji[i].kanji) {
      text = 'Correct!';
    } else {
      text = 'Try Again.';
    }
    document.getElementById("result"+i).innerHTML = text;
  }
}
