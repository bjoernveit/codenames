<template>
  <div id="app">
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous">
  Hello World, lets play some codenames!
  <main-board></main-board>
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
      }
    }
  },
}
</script>

<style lang="stylus">
</style>