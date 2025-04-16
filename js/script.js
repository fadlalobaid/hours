const $ = (selector) => {
  return document.querySelector(selector);
};
const hour = $(".hour");
const dot = $(".dot");
const min = $(".min");
const week = $(".week");

let showDot = true;
function update() {
  showDot = !showDot;
  const now = new Date();

  if (showDot) {
    dot.classList.add("invsible");
  } else {
    dot.classList.remove("invsible");
  }
  function nowHours() {
    let hours = now.getHours();
    const period = hours >= 12 ? "PM" : "AM";
    let hours12 = hours % 12;
    hours12 = hours12 || 12;
    return hours12
  }

  hour.textContent = String(nowHours()).padStart(1, "12");
  min.textContent = String(now.getMinutes()).padStart(2, "0");

  Array.from(week.children).forEach((ele) => {
    ele.classList.remove("active");
  });
  week.children[now.getDay()].classList.add("active");
}
setInterval(update, 500);
