const myName = document.getElementById("myName");
const myClock = document.getElementById("myClock");

const weekdays = [
  "Pazar",
  "Pazartesi",
  "Salı",
  "Çarşamba",
  "Perşembe",
  "Cuma",
  "Cumartesi",
  "Pazar",
];

myName.innerHTML = prompt("İsminizi giriniz.").toUpperCase();

window.setInterval(showTime, 1000);

function showTime() {
  const date = new Date();
  let hour = date.getHours() < 10 ? "0" + date.getHours() : date.getHours();
  let minute =
    date.getMinutes() < 10 ? "0" + date.getMinutes() : date.getMinutes();
  let second =
    date.getSeconds() < 10 ? "0" + date.getSeconds() : date.getSeconds();
  let day = weekdays[date.getDay()];

  myClock.innerHTML = `${hour}:${minute}:${second} ${day}`;
}
