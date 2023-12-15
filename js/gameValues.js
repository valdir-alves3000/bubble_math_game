export class GameValues {
  speed = 2;
  answers = 0;
  rightAnswer = "";
  hits = 0;
  nivel = 1;
  operando1 = 0;
  operando2 = 0;
  resultOperation = 0;
  typeOperation = "+";
  startY = window.innerHeight;
  lives = 5;
  bubbleOnScreen = false;
  bubbleImages = [
    "bubble.svg",
    "bubble01.png",
    "bubble02.png",
    "bubble03.png",
    "bubble04.png",
    "bubble05.png",
    "bubble06.png",
  ];

  resetGameValues() {
    this.answers = 0;
    this.rightAnswer = "";
    this.hits = 0;
    this.nivel = 1;
    this.operando1 = 0;
    this.operando2 = 0;
    this.resultOperation = 0;
    this.typeOperation = "+";
    this.startY = window.innerHeight;
    this.lives = 5;
    this.bubbleOnScreen = false;
  }
}
