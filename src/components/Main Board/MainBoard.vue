<template>
  <div class="main-board">
    <game-info v-bind:score="score" v-bind:info="info" v-bind:time="time" v-bind:view="view">></game-info>
    <card-area v-bind:cards="cards" v-bind:view="view">></card-area>
  </div>
</template>

<script>
import CardArea from './Card Area/CardArea.vue'
import GameInfo from './Game Info/GameInfo.vue'
export default {
  props: ["cards", "score", "time", "info", "view"],
  components:{
    'card-area': CardArea,
    'game-info': GameInfo
  },
  data() {
    return {
      text:"MainBoard"
    }
  }
}
</script>
<style lang="stylus">
@require '../../styles/index'
.main-board
  max-width 1100px
  background $color__dark-grey
  border 3px solid $color__black
  box-sizing border-box
  box-shadow 0px 4px 4px rgba(0, 0, 0, 0.25)
  border-radius 30px
  margin 10px
  padding 20px
</style>