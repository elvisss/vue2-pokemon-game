import { shallowMount } from '@vue/test-utils'
import PokemonOptions from '@/components/PokemonOptions.vue'

describe('PokemonOptions', () => {
  it('should display header text', () => {
    const wrapper = shallowMount(PokemonOptions, {
      props: { pokemons: [], blocked: true }
    })
    expect(wrapper.find('li').exists()).not.toBe(true)
  })
})
