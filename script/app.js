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
    .then((r) => r.json())
    .finally(() => {})
}

const init = async function () {
  const joke = await getJoke()
  renderJoke(joke)
}

init()
