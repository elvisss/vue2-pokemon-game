<template>
  <template v-if="!pokemon">
    <h1>Espere por favor...</h1>
  </template>

  <template v-else>
    <h1>Quién es este pokékom?</h1>

    <PokemonPicture
      :pokemon-id="pokemon.id"
      :showPokemon="showPokemon"
    />

    <PokemonOptions
      :blocked="alreadySelected"
      :pokemons="pokemonArr"
      @selected-pokemon="checkAnswer"
    />

    <template v-if="showAnswer">
      <h2 class="fade-in">{{ message }}</h2>
      <button @click="newGame">Nuevo Juego</button>
    </template>
  </template>
</template>

<script>
import PokemonPicture from '../components/PokemonPicture.vue'
import PokemonOptions from '../components/PokemonOptions.vue'
import getPokemonOptions from '../helpers/getPokemonOptions'

export default {
  components: {
    PokemonPicture,
    PokemonOptions
  },
  data() {
    return {
      pokemonArr: [],
      pokemon: null,
      showPokemon: false,
      showAnswer: false,
      alreadySelected: false,
      message: ''
    }
  },
  methods: {
    async mixPokemonArray() {
      this.pokemonArr = await getPokemonOptions()
      const randomInt = Math.floor(Math.random() * 4)
      this.pokemon = this.pokemonArr[randomInt]
    },
    checkAnswer(selectedId) {
      this.showPokemon = true
      this.showAnswer = true
      this.alreadySelected = true

      if (this.pokemon.id === selectedId) {
        this.message = `Correcto, ${this.pokemon.name}`
      } else {
        this.message = `Oops, era ${this.pokemon.name}`
      }
    },
    newGame() {
      this.pokemonArr = []
      this.pokemon = null
      this.showPokemon = false
      this.showAnswer = false
      this.alreadySelected = false
      this.mixPokemonArray()
    }
  },
  mounted() {
    this.mixPokemonArray()
  }
}
</script>
