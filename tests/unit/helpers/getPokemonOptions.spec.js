import pokemonApi from '@/api/pokemonApi'
import getPokemonOptions, { getRandomPokemons, getPokemonsNames } from '@/helpers/getPokemonOptions.js'

jest.mock('@/api/pokemonApi')

const mockPokemonData = {
  name: 'name',
  id: 1
}
const mockApiData = {
  data: { ...mockPokemonData }
}
pokemonApi.get = jest.fn().mockImplementation(() => Promise.resolve(mockApiData))

describe('getPokemonOptions', () => {
  it('should return array of numbers', () => {
    const pokemons = getRandomPokemons()
    expect(pokemons.length).toBe(4)
    expect(typeof pokemons[0]).toBe('number')
  })

  it('should return an array of 4 objects with name and id', async() => {
    const responses = await getPokemonsNames()
    expect(responses.length).toBe(4)
    expect(responses).toEqual([
      { name: 'name', id: 1 },
      { name: 'name', id: 1 },
      { name: 'name', id: 1 },
      { name: 'name', id: 1 }
    ])
  })

  it('should return mixed pokemons', async() => {
    const pokemons = await getPokemonOptions()
    expect(pokemons.length).toBe(4)
    expect(pokemons).toEqual([
      { name: expect.any(String), id: expect.any(Number) },
      { name: expect.any(String), id: expect.any(Number) },
      { name: expect.any(String), id: expect.any(Number) },
      { name: expect.any(String), id: expect.any(Number) }
    ])
  })
})
