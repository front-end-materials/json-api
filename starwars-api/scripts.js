"use strict";

const API_URL = "https://starwars.egghead.training/";

showData.innerText = "Loading…";

fetch(API_URL + "films")
  .then(response => response.json())
  .then(films => {
    getFilms(films);
  })

function getFilms(films) {
  films
    .sort((a, b) => a.episode_id - b.episode_id)
    .map(film => `${film.episode_id}. ${film.title}`);
  console.log(films);
  showData.innerText = "";
  films.forEach(listFilm);
  function listFilm(item, index) {
    const title = document.createElement("dt");
    const preamble = document.createElement("dd");
    const content = document.createTextNode(`${item.episode_id}. ${item.title}`);
    const words = document.createTextNode(item.opening_crawl);
    preamble.appendChild(words);
    title.appendChild(content);
    showData.appendChild(title);
    showData.appendChild(preamble);
  }
}
