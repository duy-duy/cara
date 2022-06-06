const toggle = document.querySelector(".header-toggle");
const bar = document.querySelector(".header__navbar-list");
const close = document.querySelector(".header__navbar-item-close ");
toggle.addEventListener("click", (e) => {
  bar.classList.add("active");
});
close.addEventListener("click", () => {
  bar.classList.remove("active");
});
window.addEventListener("click", (e) => {
  if (!toggle.contains(e.target) && !e.target.matches(".active")) {
    bar.classList.remove("active");
  }
});
