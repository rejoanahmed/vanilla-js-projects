const btn = document.querySelector("#btn");
const notification = document.querySelector("#notification");

btn.addEventListener("click", () => {
  const notif = document.createElement("p");
  notification.appendChild(notif);
  notif.innerText = "Hello i am here";
  setTimeout(() => {
    notif.remove();
  }, 2000);
});
