import films from "./films.js";
import generateInfo from "./generateInfo.js"
import createFilms from "./createFilms.js"

let bodyBox = document.querySelector('body');
let container = document.querySelector(".row");
let frameBackgroung =document.querySelector('.frame-background');
// 
function updatePage() {
  films.map(function (item) {
    createFilms(item);
  });
  container.addEventListener("click", function (e) {
    bodyBox.style.overflowY = 'hidden';
    frameBackgroung.style.display ='block'
    films.map(function (item) {
      if (e.target.getAttribute("data-name-film") == item.title) {
        generateInfo(item);
      }
    });
    // console.log();
  });
}

export default updatePage();
