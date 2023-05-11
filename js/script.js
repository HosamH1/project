function fetchJoke() {
    fetch('https://api.chucknorris.io/jokes/random')
        .then(response => response.json())
        .then(jokeData => {
            const jokeElement = document.getElementById('joke');
            jokeElement.textContent = jokeData.value;
        })
        .catch(error => {
            console.log('Error:', error);
        });
}

// Event listener for the "Get a New Joke" button click
const newJokeBtn = document.getElementById('newJokeBtn');
newJokeBtn.addEventListener('click', fetchJoke);