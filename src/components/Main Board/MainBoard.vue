<template>
  <div class="main-board">
    <game-info v-bind:score="score" v-bind:info="info" v-bind:time="time"></game-info>
    <card-area v-bind:cards="cards"></card-area>
  </div>
</template>

<script>
import CardArea from './Card Area/CardArea.vue'
import GameInfo from './Game Info/GameInfo.vue'
export default {
  props: ["cards", "score", "time", "info"],
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
.main-board
  max-width 1100px
  background #FFFFFF
  border 3px solid #000000
  box-sizing border-box
  box-shadow 0px 4px 4px rgba(0, 0, 0, 0.25)
  border-radius 30px
  margin 10px
  padding 20px
</style>