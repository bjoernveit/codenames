<template>
  <div id="app">
  <main-board v-bind:cards="cards" v-bind:info="info" v-bind:score="score" v-bind:time="time"></main-board>
  <side-board v-bind:hints-red="hints.red" v-bind:hints-blue="hints.blue"></side-board>
  </div>
</template>

<script>
import MainBoard from './components/Main Board/MainBoard.vue'
import SideBoard from './components/Side Board/SideBoard.vue'

export default {
  name: 'App',
  components: {
    'main-board': MainBoard,
    'side-board': SideBoard
  },
  data() {
    return {
      hints: {
        red: [
          { word: "Codename", number: 3 },
          { word: "This", number: 2 },
          { word: "is", number: 1 },
          { word: "Cool", number: 2 }
        ],
        blue: [
          { word: "Codename", number: 3 },
          { word: "This", number: 2 },
          { word: "is", number: 1 },
          { word: "C00l", number: 2 }
        ],
      },
      cards: [
        {word: "Agent", type: "BLUE_AGENT", state: "UNKNOWN"},
        {word: "Agent", type: "BLUE_AGENT", state: "REVEALED"},
        {word: "Agent", type: "RED_AGENT", state: "REVEALED"},
        {word: "Agent", type: "RED_AGENT", state: "UNKNOWN"},
        {word: "Civilist", type: "CIVILIST", state: "UNKNOWN"},
        {word: "Civilist", type: "CIVILIST", state: "REVEALED"},
        {word: "Assassin", type: "ASSASSIN", state: "UNKNOWN"},
        {word: "Assassin", type: "ASSASSIN", state: "REVEALED"},
        {word: "Agent", type: "RED_AGENT", state: "REVEALED"},
        {word: "Agent", type: "RED_AGENT", state: "UNKNOWN"},
        {word: "Civilist", type: "CIVILIST", state: "UNKNOWN"},
        {word: "Civilist", type: "CIVILIST", state: "REVEALED"},
        {word: "Agent", type: "RED_AGENT", state: "REVEALED"},
        {word: "Agent", type: "RED_AGENT", state: "UNKNOWN"},
        {word: "Civilist", type: "CIVILIST", state: "UNKNOWN"},
        {word: "Civilist", type: "CIVILIST", state: "REVEALED"},
        {word: "Agent", type: "RED_AGENT", state: "REVEALED"},
        {word: "Agent", type: "RED_AGENT", state: "UNKNOWN"},
        {word: "Civilist", type: "CIVILIST", state: "UNKNOWN"},
        {word: "Civilist", type: "CIVILIST", state: "REVEALED"},
        {word: "Agent", type: "RED_AGENT", state: "REVEALED"},
        {word: "Agent", type: "RED_AGENT", state: "UNKNOWN"},
        {word: "Civilist", type: "CIVILIST", state: "UNKNOWN"},
        {word: "Agent", type: "RED_AGENT", state: "REVEALED"},
        {word: "Agent", type: "RED_AGENT", state: "UNKNOWN"},
      ],
      info: {label: "Hint:", text: "Vue Rocks 9"},
      score: {
        red: {
          found: 5,
          total: 7
        },
        blue: {
          found: 3,
          total: 8
        }
      },
      time: "0:35"
    }
  }
}
</script>

<style lang="stylus">
</style>