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
        {word: "Agent", type: "BLUE_AGENT", state: "UNREVEALED"},
        {word: "Agent", type: "BLUE_AGENT", state: "UNREVEALED"},
        {word: "Agent", type: "RED_AGENT", state: "UNREVEALED"},
        {word: "Agent", type: "RED_AGENT", state: "UNREVEALED"},
        {word: "Agent", type: "BLUE_AGENT", state: "UNREVEALED"},
        {word: "Agent", type: "BLUE_AGENT", state: "UNREVEALED"},
        {word: "Civilist", type: "CIVILIST", state: "UNREVEALED"},
        {word: "Assassin", type: "ASSASSIN", state: "UNREVEALED"},
        {word: "Agent", type: "RED_AGENT", state: "UNREVEALED"},
        {word: "Agent", type: "RED_AGENT", state: "UNREVEALED"},
        {word: "Civilist", type: "CIVILIST", state: "UNREVEALED"},
        {word: "Civilist", type: "CIVILIST", state: "UNREVEALED"},
        {word: "Civilist", type: "CIVILIST", state: "UNREVEALED"},
        {word: "Agent", type: "BLUE_AGENT", state: "UNREVEALED"},
        {word: "Agent", type: "BLUE_AGENT", state: "UNREVEALED"},
        {word: "Civilist", type: "CIVILIST", state: "UNREVEALED"},
        {word: "Civilist", type: "CIVILIST", state: "UNREVEALED"},
        {word: "Agent", type: "BLUE_AGENT", state: "UNREVEALED"},
        {word: "Agent", type: "BLUE_AGENT", state: "UNREVEALED"},
        {word: "Civilist", type: "CIVILIST", state: "UNREVEALED"},
        {word: "Civilist", type: "CIVILIST", state: "UNREVEALED"},
        {word: "Agent", type: "RED_AGENT", state: "UNREVEALED"},
        {word: "Civilist", type: "CIVILIST", state: "UNREVEALED"},
        {word: "Agent", type: "RED_AGENT", state: "UNREVEALED"},
        {word: "Agent", type: "RED_AGENT", state: "UNREVEALED"},
      ],
      info: {label: "Hint:", text: "Vue Rocks 9"},
      time: "0:35"
    }
  },
  computed: {
    score: function() {
      let red_total = 0;
      let red_revealed = 0;
      let blue_total = 0;
      let blue_revealed = 0;
      this.cards.forEach( card => {
        red_total = red_total + ((card.type === "RED_AGENT") ? 1 : 0);
        blue_total = blue_total + ((card.type === "BLUE_AGENT") ? 1 : 0);
        red_revealed = red_revealed + ((card.type === "RED_AGENT" && card.state === "REVEALED") ? 1 : 0);
        blue_revealed = blue_revealed + ((card.type === "BLUE_AGENT" && card.state === "REVEALED") ? 1 : 0); 
      });
      return {
        red: {
          found: red_revealed,
          total: red_total
        },
        blue: {
          found: blue_revealed,
          total: blue_total
        }
      }
    }
  },
}
</script>

<style lang="stylus">
@require './styles/index'
</style>