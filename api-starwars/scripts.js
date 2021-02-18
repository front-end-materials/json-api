"use strict";

const API_URL = "https://starwars.egghead.training/";

showData.innerText = "Loading…";

fetch(API_URL + "films")
  .then(response => response.json())
  .then(films => {
    console.log(films);
    getFilms(films);
  })

function getFilms(films) {
  films
    .sort((a, b) => a.episode_id - b.episode_id)
    .map(film => `${film.episode_id}. ${film.title}`);
  showData.innerText = "";

  films.forEach( item => {
    const content = 
      `<dt>${item.episode_id}. ${item.title}
         <small>Producer: ${item.producer}</small></dt>
       <dd>${item.opening_crawl}</dd>`;
    showData.insertAdjacentHTML("beforeend", content);
  });
}
// function getFilms(films) {
//   films.forEach(listFilm);
//   function listFilm(item, index) {
//     const title = document.createElement("dt");
//     const preamble = document.createElement("dd");
//     const content = document.createTextNode(`${item.episode_id}. ${item.title}`);
//     const words = document.createTextNode(item.opening_crawl);
//     title.appendChild(content);
//     preamble.appendChild(words);
//     showData.appendChild(title);
//     showData.appendChild(preamble);
//   }
// }
