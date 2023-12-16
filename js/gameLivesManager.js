export class GameLivesManager {
  #menuLives = document.querySelector(".menu-lives");
  currentLives = 5;

  setupLives() {
    this.#menuLives.innerHTML = "";

    for (let i = 0; i < this.currentLives; i++)
      this.#menuLives.innerHTML += this.#createLiveElement();
  }

  #createLiveElement() {
    return `<img src="./assets/bubble.svg" alt="bubble">`;
  }

  removeLife() {
    const lifeElements = this.#menuLives.querySelectorAll("img");
    lifeElements[lifeElements.length - 1].remove();
    this.currentLives--;
  }
}
