import { OperationManager } from "./operationManager.js";

export class BubbleManager {
  #gamaState;
  #operationManager;
  constructor(gameState) {
    this.#gamaState = gameState;
    this.#operationManager = new OperationManager(this.#gamaState);
  }

  moveBubble() {
    this.startY = window.innerHeight;
    this.width = window.innerWidth;
    this.gameScreenWidth =
      this.#gamaState.gameView.gameScreen.offsetWidth - 150;
    this.currentX = Math.random() * this.gameScreenWidth;
    this.currentY = this.width > 768 ? this.startY : this.startY - 500;

    this.#gamaState.gameActions.moveBubbleInterval = setInterval(() => {
      this.currentY -= this.#gamaState.gameValues.speed;
      this.#gamaState.gameView.bubble.style.top = this.currentY + "px";
      this.#gamaState.gameView.bubble.style.left = this.currentX + "px";

      if (this.currentY < 0) {
        this.#gamaState.gameActions.gameLivesManager.removeLife();
        this.#gamaState.gameView.clearAndFocusUserResponse();

        this.stopBubble();

        if (this.#gamaState.gameActions.gameLivesManager.currentLives <= 0) {
          return this.#gamaState.gameView.showGameOverModal();
        }

        this.moveBubble();
        this.drawBubble();
      }
    }, 20);
  }

  stopBubble() {
    clearInterval(this.#gamaState.gameActions.moveBubbleInterval);
  }

  drawBubble() {
    let random = Math.floor(
      Math.random() * this.#gamaState.gameValues.bubbleImages.length
    );
    this.#operationManager.createOperation();

    this.#gamaState.gameView.question.innerText = `${
      this.#gamaState.gameValues.operando1
    } ${this.#gamaState.gameValues.typeOperation} ${
      this.#gamaState.gameValues.operando2
    }`;
    this.#gamaState.gameView.bubbleImage.src = `./assets/${
      this.#gamaState.gameValues.bubbleImages[random]
    }`;
    this.#gamaState.gameValues.bubbleOnScreen = true;
  }
}
