const url = "https://picsum.photos/400";
const container = document.querySelector("#container");

const fetchUrl = async () => {
  const res = await fetch(url);
  return res.url;
};
const numOfImages = 10;
for (let i = 0; i < numOfImages; i++) {
  const image = document.createElement("img");
  fetchUrl().then((url) => image.setAttribute("src", url));
  container.appendChild(image);
  image.classList.add("image");
}
let i = 1;
const scroll = () => {
  container.scrollLeft = i * 400;
  i++;
  if (i >= numOfImages) i = 1;
};
fetchUrl().then(() => {
  setInterval(scroll, 2000);
});
