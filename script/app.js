const renderJoke = (joke) => {
  console.log(joke)
  const jokeElement = document.querySelector('.js-joke-content')
  jokeElement.innerHTML = joke.joke
}

const getJoke = () => {
  return fetch('https://icanhazdadjoke.com', {
    headers: {
      Accept: 'application/json',
    },
  })
    .catch((e) => {
      console.log(e)
      // TODO: show error
    })
    .then((r) => r.json())
    .finally(() => {
      // TODO: remove loading state
    })
}

const listenForNewJoke = () => {
  const newJokeButton = document.querySelector('.js-new-joke')
  newJokeButton.addEventListener('click', async () => {
    const joke = await getJoke()
    renderJoke(joke)
  })
}

const init = async function () {
  const joke = await getJoke()
  renderJoke(joke)

  listenForNewJoke()
}

init()
