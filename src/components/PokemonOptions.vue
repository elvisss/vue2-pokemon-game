<template>
  <div class="options-container">
    <ul>
      <li
        :class="blocked ? 'noClick' : ''"
        v-for="pokemon in pokemons"
        :key="pokemon.id"
        @click="$emit('selectedPokemon', pokemon.id)"
      >
        <span>{{ pokemon.name }}</span>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: {
    pokemons: {
      type: Array,
      required: true
    },
    blocked: {
      type: Boolean,
      required: true
    }
  }
}
</script>

<style scoped>
ul {
  list-style-type: none;
  padding-left: 0;
  margin-left: 0;
}
li {
  background-color: white;
  border-radius: 5px;
  border: 1px solid rgba(0, 0, 0, 0.2);
  cursor: pointer;
  margin-bottom: 10px;
  width: 250px;
}

li:hover {
  background-color: rgba(0, 0, 0, 0.05);
}

.options-container {
  display: flex;
  justify-content: center;
}

.noClick {
  pointer-events: none;
}
</style>
