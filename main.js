const text = document.querySelector(".text");
const weiterLesen = document.querySelector(".weiterLesen");
const weiter = document.querySelector(".weiter");
const weniger = document.querySelector(".weniger");

let flag = 1;

function toggleClass() {
  weiter.classList.toggle("weiterAktiv");
  weiterLesen.classList.toggle("weiterLesenInaktiv");
  weniger.classList.toggle("wenigerAktive");
}

weiterLesen.addEventListener("click", toggleClass);

weniger.addEventListener("click", toggleClass);

text.addEventListener("click", function (e) {
  if (e.target === text) {
    toggleClass();
    flag = flag === 1 ? 2 : 1;
  }
});
