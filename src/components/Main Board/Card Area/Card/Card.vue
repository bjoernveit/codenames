<template>
  <div class="col">
    <div v-bind:class="compClasses">
      <span class="agent-card__word">{{ card.word }}</span>
    </div>
  </div>
</template>

<script>
    export default {
      props: ['card'],
      data() {
            return {
            }
        },
        computed: {
          isRevealed: function(){
            return (this.card.state === "REVEALED")
          },
          compClasses: function(){
            return {
              "agent-card": true,
              "agent-card--revealed": this.isRevealed,
              "agent-card--blue": this.isRevealed & this.card.type === "BLUE_AGENT",
              "agent-card--red": this.isRevealed & this.card.type === "RED_AGENT",
              "agent-card--yellow": this.isRevealed & this.card.type === "CIVILIST",
              "agent-card--black": this.isRevealed & this.card.type === "ASSASSIN",
            }
          }
        },
    }
</script>
<style lang="stylus">
@require './../../../../styles/index'
.agent-card
  padding 20px
  margin 5px
  background #FFFFFF
  mix-blend-mode normal
  border 2px solid #000000
  box-sizing border-box
  box-shadow 0px 4px 4px rgba(0, 0, 0, 0.25)
  font-style normal
  font-weight bold
  font-size 24px
  align-items center
  text-align center
  color #000000
  border-radius 20px
  &--revealed 
    & > span
      opacity 0
    &:hover > span
      opacity 1
  &--blue
    background $color__blue--opacity-medium
  &--red
    background $color__red--opacity-medium
  &--yellow
    background $color__yellow--opacity-medium
  &--black
    background $color__black
    color $color__grey
</style>
