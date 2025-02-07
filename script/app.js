const jokeContainer = document.querySelector('.js-joke-container'),
  jokeError = document.querySelector('.js-joke-error'),
  jokeLoading = document.querySelector('.js-joke-loading'),
  jokeErrorMessage = document.querySelector('.js-joke-error-message'),
  newJokeButton = document.querySelector('.js-new-joke')

const renderJoke = (joke) => {
  const jokeElement = document.querySelector('.js-joke-content')
  jokeElement.innerHTML = joke.joke
}

const getJoke = () => {
  return fetch('https://icanhazdadjoke.com', {
    headers: {
      Accept: 'application/json',
    },
  })
    .then((r) => r.json())
    .catch((e) => {
      jokeError.classList.remove('u-hidden')
      jokeErrorMessage.innerHTML = e
    })
    .finally(() => {
      // TODO: remove loading state
      jokeLoading.classList.add('u-hidden')
      jokeContainer.classList.remove('u-hidden')
    })
}

const closeError = () => {
  jokeError.classList.add('u-hidden')
}

const newJoke = async () => {
  jokeContainer.classList.add('u-hidden')
  jokeLoading.classList.remove('u-hidden')
  const joke = await getJoke()
  renderJoke(joke)
}

const listenForNewJoke = () => {

  newJokeButton.addEventListener('click', async () => {
    newJoke();
    newJokeButton.classList.add("loading");
    newJokeButton.querySelector(".js-button-icon").addEventListener('transitionend', () => {
      newJokeButton.classList.remove("loading");
    })
  })
}

const init = function () {
  newJoke()

  listenForNewJoke()
}

init()
