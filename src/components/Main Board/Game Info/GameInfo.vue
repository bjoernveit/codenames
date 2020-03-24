<template>
  <div class="game-info-area container-fluid ">
    <div class="row">
      <score v-bind:score="score"></score>
      <info label="Time:" v-bind:text="time"></info>
      <info v-bind:label="info.label" v-bind:text="info.text"></info>
    </div>
  </div>
</template>

<script>
import Score from './Score/Score.vue'
import Info from './Info/Info.vue'
export default {
  props:["score", "time", "info"],
  components: {
    'score': Score,
    'info' : Info
  },
  data() {
    return {}
  }
}
</script>
<style lang="stylus">
@require '../../../styles/index'
.game-info-area
  text-align: center
  margin-bottom 20px
  background $color__light-grey
  border 1px solid #000000
  box-sizing border-box
  box-shadow 0px 4px 4px rgba(0, 0, 0, 0.25)
  border-radius 30px
  font-size 30px
  font-weight bold
  &__label
    font-size 24px
</style>
