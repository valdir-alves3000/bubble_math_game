import { GameLogic } from "./gameLogic.js";
import { GameState } from "./gameState.js";

export class AddEventListener {
  #gameState;
  #gameLogic;
  constructor() {
    this.#gameState = new GameState();
    this.#gameLogic = new GameLogic(this.#gameState);
  }

  add() {
    this.#setupStartButton();
    this.#setupCheckAnswerButton();
    this.#setupNumberKeys();
    this.#setupCleanButton();
    this.#setupEnterKey();
    this.#setupSpeedSlider();
    this.#setupAboutButton();
    this.#setupRestartButton();
    this.#setupBlurInputFocus();
  }

  #setupStartButton() {
    this.#gameState.gameView.start.addEventListener("click", () =>
      this.#gameLogic.initialize()
    );
  }

  #setupRestartButton() {
    this.#gameState.gameView.restart.addEventListener("click", () => {
      this.#gameState.gameView.gameOverModal.classList.remove("visible");
      this.#gameState.gameValues.resetGameValues();
      this.#gameState.gameView.clearAndFocusUserResponse();
      this.#gameState.gameActions.gameLivesManager.currentLives = 5;
      this.#gameLogic.initialize();
    });
  }

  #setupCheckAnswerButton() {
    this.#gameState.gameView.btnCheckAnswer.addEventListener("click", () =>
      this.#gameLogic.handleCheckAnswer()
    );
  }

  #setupNumberKeys() {
    this.#gameState.gameView.keys.forEach((key) => {
      const answer = key.innerHTML;
      key.addEventListener("click", () => this.#handleNumberKeyClick(answer));
    });
  }

  #handleNumberKeyClick(answer) {
    this.#gameState.gameValues.answers += answer;
    this.#gameState.gameView.userResponse.value += answer;
  }

  #setupCleanButton() {
    this.#gameState.gameView.clean.addEventListener("click", () =>
      this.#clearUserResponse()
    );
  }

  #clearUserResponse() {
    this.#gameState.gameView.userResponse.value = "";
  }

  #setupEnterKey() {
    document.addEventListener("keydown", (e) => {
      if (e.key.toUpperCase() === "ENTER") {
        this.#gameLogic.handleCheckAnswer();
      }
    });
  }

  #setupSpeedSlider() {
    this.#gameState.gameView.speed.addEventListener("input", (e) =>
      this.updateSpeed(e.target.value)
    );
  }

  updateSpeed(speed) {
    this.#gameState.gameValues.speed = speed;
  }

  #setupAboutButton() {
    this.#gameState.gameView.trigger.addEventListener("click", () => {
      const acordeon = this.#gameState.gameView.trigger.parentElement;
      const isOpen = acordeon.classList.contains("open");

      if (isOpen) {
        acordeon.classList.remove("open");
      } else {
        acordeon.classList.add("open");
      }
    });
  }

  #setupBlurInputFocus() {
    const body = document.querySelector("body");

    if (body.offsetWidth <= 767) {
      this.#gameState.gameView.userResponse.addEventListener("focus", () =>
        this.#gameState.gameView.userResponse.blur()
      );
    }
  }
}
