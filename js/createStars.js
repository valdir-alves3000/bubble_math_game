export function createStars(quantity) {
  const body = document.querySelector("body");
  const width = body.offsetWidth;
  const height = body.offsetHeight;

  for (let i = 0; i < quantity; i++) {
    const star = document.createElement("div");
    const size = Math.random() * 3;
    star.className = "star";
    star.style.width = `${size}px`;
    star.style.height = `${size}px`;
    star.style.left = `${Math.random() * width}px`;
    star.style.top = `${Math.random() * height}px`;
    star.style.animationDelay = `-${size * 3}s`;

    body.appendChild(star);
  }
}
