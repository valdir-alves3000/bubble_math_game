export class OperationManager {
  constructor(gameState) {
    this.gameState = gameState;
  }

  createOperation() {
    const operations = ["+", "-", "/", "*"];
    let index = this.getRandomNumber(0, operations.length - 1);
    let operator = operations[index];
    let nivelMultiplier = this.gameState.gameValues.nivel * 3;

    let resultOperation = this.getRandomNumber(
      nivelMultiplier,
      this.gameState.gameValues.nivel * 10
    );
    let randomOperando2 = this.getRandomNumber(
      nivelMultiplier,
      resultOperation
    );

    let operando1 = this.performOperation(
      resultOperation,
      randomOperando2,
      operator
    );

    this.gameState.gameValues.typeOperation = operator;
    this.gameState.gameValues.operando1 = parseInt(operando1);
    this.gameState.gameValues.operando2 = randomOperando2;
    this.gameState.gameValues.resultOperation = resultOperation;
  }

  performOperation(resultOperation, operando2, operationType) {
    switch (operationType) {
      case "+":
        return resultOperation - operando2;
      case "-":
        return resultOperation + operando2;
      case "*":
        return resultOperation / operando2;
      case "/":
        return resultOperation * operando2;
      default:
        console.error("Tipo de operação não reconhecido");
        return 0;
    }
  }

  getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }
}
