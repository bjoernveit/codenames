<template>
  <div class="score col">
    <span class="game-info-area__label score__label">{{ label }}</span>
    <span class="score__points score__points--red">{{score.red.found}} / {{score.red.total}}</span>
    <span class="score__points score__points--blue">{{score.blue.found}} / {{score.blue.total}}</span>
  </div>
</template>

<script>
    export default {
        props:["score"],
        data() {
            return {
                label:"Agents:"
            }
        }
    }
</script>

<style lang="stylus">
@require '../../../../styles/index'
.score
  &__points
    margin-left 12px
    &--red
      color $color__red
    &--blue
      color $color__blue
</style>