let bodyBox = document.querySelector("body");
let btnClose = document.querySelector(".btn-close");
let detailedInformation = document.querySelector(".detailed-information");
let frameBackgroung =document.querySelector('.frame-background');

btnClose.addEventListener("click", function (e) {
  detailedInformation.style.display = "none";
  frameBackgroung.style.display = "none";
  bodyBox.style.overflowY = "scroll";
  e.preventDefault();
});
