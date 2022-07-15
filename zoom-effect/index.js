const container = document.querySelector("#container");
const image = document.querySelector("#image");
container.addEventListener("mousemove", (e) => {
  const x = e.clientX - e.target.offsetLeft;
  const y = e.clientY - e.target.offsetTop;
  image.style.transformOrigin = `${x}px ${y}px`;
  image.style.transform = "scale(2)";
});
container.addEventListener("mouseleave", () => {
  // image.style.transformOrigin;
  image.style.transform = "scale(1)";
});
