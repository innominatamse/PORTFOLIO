// create blocks with films (on the main page)
// create appropriate tags and insert movie info from 'films.js'

let container = document.querySelector(".row");

export default function createFilms(item) {
  let film = document.createElement("a");
  film.setAttribute("data-name-film", item.title);
  film.style.backgroundImage = `url(${item.url})`;
  film.classList = "film";
  container.append(film);

  let genre = document.createElement("p");
  genre.classList = "film-type";
  genre.textContent = item.genre;
  film.append(genre);

  let info = document.createElement("div");
  info.classList = "info";
  film.append(info);

  let infoBox = document.createElement("div");
  infoBox.classList = "info-row";
  let time = document.createElement("p");
  time.classList = "time";
  time.textContent = item.time;
  info.append(infoBox);
  infoBox.append(time);

  let view = document.createElement("p");
  view.classList = "view";
  view.textContent = item.views;
  infoBox.append(view);

  let filmName = document.createElement("p");
  filmName.classList = "film-name";
  filmName.textContent = item.title;
  info.append(filmName);
}
