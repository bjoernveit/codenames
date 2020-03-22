<template>
  <div id="app">
  Hello World, lets play some codenames!
  <main-board></main-board>
  <side-board></side-board>
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
  }
}
</script>

<style lang="stylus">
div
  border 1px solid
  padding 5 px
  margin 4 px
</style>