import { GameLivesManager } from "./gameLivesManager.js";

export class GameActions {
  constructor() {
    this.gameLivesManager = new GameLivesManager();
    this.bubbleManager = () => {};
    this.moveBubbleInterval = () => {};
  }
}
