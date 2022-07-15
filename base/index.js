const image = document.querySelector("#image");
const stopBtn = document.querySelector("#btnStop");
const img = async () => {
  const res = await fetch("https://picsum.photos/1000/500");
  return res.url;
};

const b = setInterval(() => {
  img().then((url) => {
    image.setAttribute("src", url);
  });
}, 2000);
stopBtn.addEventListener("click", () => {
  clearInterval(b);
});
