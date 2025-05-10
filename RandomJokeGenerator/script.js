let jokeContainer = document.getElementById('joke-text');
let jokeBtn = document.getElementById('joke-btn');
let jokeUrl = "https://v2.jokeapi.dev/joke/Any?blacklistFlags=nsfw,religious,political,racist,sexist,explicit";

let getJoke = () => {
    jokeContainer.classList.remove('fade');
    fetch(jokeUrl)
    .then(data => data.json())
    .then(item => {
        jokeContainer.textContent = `${item.joke}`;
        jokeContainer.classList.add('fade');
    });
}

jokeBtn.addEventListener('click', getJoke);
getJoke();
