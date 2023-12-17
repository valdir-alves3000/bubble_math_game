import { BubbleManager } from "./bubbleManager.js";

export class GameLogic {
  #gameState;

  constructor(gameState) {
    this.#gameState = gameState;
  }

  initialize() {
    this.#gameState.gameActions.bubbleManager = new BubbleManager(
      this.#gameState
    );
    if (this.#gameState.gameView.startModal.classList.contains("visible"))
      this.#gameState.gameView.startModal.classList.remove("visible");

    this.#gameState.gameView.removeBubbleClasses();

    this.#gameState.gameActions.gameLivesManager.setupLives();
    this.startNextRound();
  }

  #nextLevel() {
    if (
      this.#gameState.gameValues.hits ===
      this.#gameState.gameValues.nivel * 6
    )
      return this.#gameState.gameValues.nivel++;
  }

  handleCheckAnswer() {
    if (
      !this.#gameState.gameView.userResponse.value |
      !this.#gameState.gameValues.bubbleOnScreen
    ) {
      return;
    }

    this.#gameState.gameValues.bubbleOnScreen = false;
    clearInterval(this.#gameState.gameActions.moveBubbleInterval);
    if (
      Number(this.#gameState.gameView.userResponse.value) ===
      this.#gameState.gameValues.resultOperation
    ) {
      this.#gameState.gameValues.hits++;
      this.#nextLevel();

      this.#gameState.gameView.bubble.classList.add("rescueBubble");
    } else {
      this.#gameState.gameView.bubble.classList.add("blowBubble");

      this.#gameState.gameActions.gameLivesManager.removeLife();
    }

    if (this.#gameState.gameActions.gameLivesManager.currentLives <= 0) {
      this.#gameState.gameActions.bubbleManager.stopBubble();
      setTimeout(() => {
        return this.#gameState.gameView.showGameOverModal();
      }, 1200);
    }

    if (this.#gameState.gameActions.gameLivesManager.currentLives > 0)
      this.startNextRound();
  }

  startNextRound() {
    this.#gameState.gameView.drawScore();
    this.#gameState.gameView.clearAndFocusUserResponse();

    setTimeout(async () => {
      this.#gameState.gameView.removeBubbleClasses();
      this.#gameState.gameActions.bubbleManager.moveBubble();
      this.#gameState.gameActions.bubbleManager.drawBubble();
    }, 1800);
  }
}
