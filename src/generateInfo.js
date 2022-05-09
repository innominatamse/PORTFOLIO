// insert the necessary information depending on which movie the event triggered on

let detailedInformation = document.querySelector(".detailed-information");
let title = document.querySelector(".detailed-information .title");
let desc = document.querySelector(".detailed-information .desc");
let prodictionYears = document.querySelector(".year");
let images = document.querySelector(".detailed-information__img");
let genryIinfo = document.querySelector(".genry-info");
let timeInfo = document.querySelector(".time-info");
let premieres = document.querySelector(".premiere.desc");

export default function generateInfo(info) {
  detailedInformation.style.display = "flex";
  title.textContent = info.title;
  desc.textContent = info.description;
  prodictionYears.textContent = info.productionYear;
  genryIinfo.textContent = info.genre;
  timeInfo.textContent = info.time;
  premieres.textContent = info.premiere;
  images.setAttribute("src", info.url);
}
