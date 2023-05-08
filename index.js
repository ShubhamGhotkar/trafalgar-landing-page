const arrowLeft = document.querySelector(".arrow-left");
const arrowRight = document.querySelector(".arrow-right");
const dot = document.querySelectorAll(".dot");
const slider = document.querySelectorAll(".slider");

let sliderIndex = 0;

let arr = [...slider];

let a = [];
fetch("https://api.tvmaze.com/search/shows?q=all")
  .then((res) => res.json())
  .then((data) => console.log(data));

console.log(a);
