const arrowLeft = document.querySelector(".arrow-left");
const arrowRight = document.querySelector(".arrow-right");
const dot = document.querySelectorAll(".dot");
const slider = document.querySelectorAll(".slider");

let slideIndex = 4;

arrowLeft.addEventListener("click", () => {
  if (slideIndex === 1) {
    slideIndex = 4;
  } else {
    slideIndex--;
  }

  addClass(slideIndex - 1);
});
arrowRight.addEventListener("click", () => {
  if (slideIndex === 4) {
    slideIndex = 1;
  } else {
    slideIndex += 1;
  }
  addClass(slideIndex - 1);
});

dot.forEach((dot, indx) => {
  dot.addEventListener("click", () => {
    slideIndex = indx + 1;
    addClass(slideIndex - 1);
  });
});

function addClass(ind) {
  slider.forEach((itm) => itm.classList.add("hidden"));
  slider[ind].classList.remove("hidden");

  dot.forEach((itm) => itm.classList.remove("active"));
  dot[ind].classList.add("active");
}
