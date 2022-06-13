// Buttons
const btn1 = document.getElementById("btn1");
const btn2 = document.getElementById("btn2");

// Get Random Star Wars Character
function getSwapi() {
  const randomNumber = Math.ceil(Math.random() * 83);

  fetch(`https://swapi.dev/api/people/${randomNumber}`)
    .then((response) => response.json())
    .then((character) => {
      console.log(character);
      document.getElementById(
        "output1"
      ).innerHTML = `<h3><i>Name: </i>${character.name}</h3>
      <ul><li><i>Birth Year: </i>${character.birth_year}</li>
      <li><i>Hair Color: </i>${character.hair_color}</li>
      <li><i>Eye Color: </i>${character.eye_color}</li>
      <li><i>Gender: </i>${character.gender}</li>
      </ul>`;
    });
}

// Get Random Chuck Norris Joke
function getJoke() {
  fetch("https://api.chucknorris.io/jokes/random")
    .then(function (res) {
      return res.json();
    })
    .then(function (data) {
      console.log(data.value);
      document.getElementById("output2").innerHTML = `<p>${data.value}</p>`;
    });
}

// Event Listener for Swapi
btn1.addEventListener("click", (e) => {
  e.preventDefault();
  getSwapi();
});

// Event Listener for Joke
btn2.addEventListener("click", (e) => {
  e.preventDefault();
  getJoke();
});
