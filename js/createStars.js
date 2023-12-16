export function createStars(quantity) {
  const body = document.querySelector("body");

  for (let i = 0; i < quantity
; i++) {
    const star = document.createElement("div");
    const size = Math.random() * 3;
    star.className = "star";
    star.style.width = `${size}px`;
    star.style.height = `${size}px`;
    star.style.left = `${Math.random() * 1200}px`;
    star.style.top = `${Math.random() * 900}px`;
    star.style.animationDelay = `-${size * 3}s`;

    body.appendChild(star);
  }
}

