import pokemonApi from '@/api/pokemonApi'

describe('PokemonApi' , () => {
  it('axios should be configured with base URL', () => {
    expect(pokemonApi.defaults.baseURL).toBe('https://pokeapi.co/api/v2/pokemon')
  })
})
