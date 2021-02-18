"use strict";

const API_URL = "https://api.github.com/users/";
const gitHubUsers = ["thomcorah", "daveeveritt", "fania", "ggstuart"];

const getUserAsync = async (name) => {
  try {
    let response = await fetch(`${API_URL}${name}`);
    let data = await response.json();
    return data;
  } catch (err) {
    console.log(err);
  }
}

const showUsers = (user) => {
  const content = 
   `<section>
      <img src="${user.avatar_url}" alt="user.login">
      <div>
        <h2><a href="${user.html_url}">${user.login}</a></h2>
        <ul>
          <li>Company: ${user.company}</li>
          <li>Public repos: ${user.public_repos}</li>
          <li>Followers: ${user.followers}</li>
          <li>Following: ${user.following}</li>
        </ul>
      </div>
    </section>`;
  showData.insertAdjacentHTML("beforeend", content);
}
// Add another property to the above:
          // <li>Public repos: ${user.public_repos}</li>

showData.innerText = "";

gitHubUsers.forEach( person => {
getUserAsync(person)
  .then(data => {
    console.log(data);
    showUsers(data);
  })
});

// user and token excluded from public repo:
// const creds = `${user}:${token}`;
// const auth = btoa(creds);

// const options = {
//   mode: 'cors',
//   headers: { 'Authorization': 'Basic ' + auth }
// }

// const getUserAsync = async (name) => {
//   let response = await fetch(`${API_URL}${name}`, options);
//   let data = await response.json();
//   return data;
// }