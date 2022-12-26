import pokemonApi from '@/api/pokemonApi'

export const getRandomPokemons = () => {
  let randomPokemons = []

  while (randomPokemons.length < 4) {
    let num = Math.trunc(Math.random() * 650)
    if (!randomPokemons.includes(num)) {
      randomPokemons.push(num + 1)
    }
  }
  return randomPokemons
}

const mapNameAndId = ({ data }) => {
  return {
    name: data.name,
    id: data.id
  }
}

export const getPokemonsNames = async () => {
  const [a, b, c, d] = getRandomPokemons()
  const promises = []
  promises.push(pokemonApi.get(`/${a}`))
  promises.push(pokemonApi.get(`/${b}`))
  promises.push(pokemonApi.get(`/${c}`))
  promises.push(pokemonApi.get(`/${d}`))
  try {
    const [p1, p2, p3, p4] = await Promise.all(promises)
    return [
      mapNameAndId(p1),
      mapNameAndId(p2),
      mapNameAndId(p3),
      mapNameAndId(p4)
    ]
  } catch (err) {
    console.log(err)
  }
}

const getPokemonOptions = async () => {
  const pokemons = await getPokemonsNames()
  return pokemons
}

export default getPokemonOptions
