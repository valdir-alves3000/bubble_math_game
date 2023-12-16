import { GameActions } from "./gameActions.js";
import { GameValues } from "./gameValues.js";
import { GameView } from "./gameView.js";

export class GameState {
  constructor() {
    this.gameValues = new GameValues();
    this.gameActions = new GameActions();
    this.gameView = new GameView(this.gameValues, this.gameActions);
  }
}
