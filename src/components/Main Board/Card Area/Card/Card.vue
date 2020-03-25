<template>
  <div class="col">
    <div v-bind:class="compClasses" v-on:click="reveal">
      <span class="agent-card__word">{{ card.word }}</span>
    </div>
  </div>
</template>

<script>
import { cardsRef } from '../../../../firebase'
export default {
props: ['card', 'view'],
  data() {
        return {
        }
    },
    computed: {
      isRevealed: function(){
        return (this.card.state === "REVEALED");
      },
      isMasterView: function(){
        return (this.view === "MASTER");
      },
      showColor: function(){
        return (this.isMasterView || this.isRevealed);
      },
      compClasses: function(){
        return {
          "agent-card": true,
          "agent-card--master-view": this.isMasterView,
          "agent-card--revealed": this.isRevealed,
          "agent-card--blue": this.showColor & this.card.type === "BLUE_AGENT",
          "agent-card--red": this.showColor & this.card.type === "RED_AGENT",
          "agent-card--yellow": this.showColor & this.card.type === "CIVILIST",
          "agent-card--black": this.showColor & this.card.type === "ASSASSIN",
        }
      }
    },
    methods: {
      reveal: function(){
        cardsRef.child(this.card['.key']).update({state: "REVEALED"});
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
    &.agent-card--blue
      background $color__blue--opacity-medium
    &.agent-card--red
      background $color__red--opacity-medium
    &.agent-card--yellow
      background $color__yellow--opacity-medium
    &.agent-card--black
      background $color__black
      color $color__grey
  &--master-view
    &.agent-card--blue
      border 3px solid $color__blue
      color $color__blue
    &.agent-card--red
      border 3px solid $color__red
      color $color__red
    &.agent-card--black
      background $color__black
      color $color__grey
</style>
