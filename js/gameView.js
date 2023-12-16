export class GameView {
  userResponse = document.querySelector("#answer");
  btnCheckAnswer = document.querySelector("#checkAnswer");
  keys = document.querySelectorAll(".key");
  clean = document.querySelector(".clean");
  question = document.querySelector("#question");
  nivel = document.querySelector("#nivel");
  bubble = document.querySelector(".bubble");
  bubbleImage = document.querySelector(".bubble img");
  gameScreen = document.querySelector("#game-screen");
  hits = document.querySelector("#hits");
  lives = document.querySelector(".menu-lives");
  start = document.querySelector("#start");
  restart = document.querySelector("#restart");
  startModal = document.querySelector("#start-modal");
  gameOverModal = document.querySelector("#gameover-modal");
  documentStyle = document.documentElement.style;
  speed = document.querySelector("#speed");
  trigger = document.querySelector(".trigger");

  constructor(gameValues, gameActions) {
    this.gameValues = gameValues;
    this.gameActions = gameActions;
  }

  drawScore() {
    this.hits.textContent = this.gameValues.hits;
  }

  clearAndFocusUserResponse() {
    this.userResponse.value = "";
    this.userResponse.focus();
  }
  removeBubbleClasses() {
    this.bubble.style.top = window.innerHeight + "px";
    const classesToRemove = ["rescueBubble", "blowBubble"];

    classesToRemove.forEach((className) => {
      if (this.bubble.classList.contains(className))
        this.bubble.classList.remove(className);
    });
  }

  showGameOverModal() {
    this.gameOverModal.querySelector("#final-score").textContent =
      this.gameValues.hits;
    this.gameOverModal.classList.add("visible");
  }
}
