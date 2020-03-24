<template>
  <div class="side-board">
    <div class="side-board__title">{{ title }}</div>
    <div class="row">
      <hint-list v-bind:hints='hintsBlue' color="blue"></hint-list>
      <hint-list v-bind:hints="hintsRed" color="red"></hint-list>
    </div>
  </div>
</template>

<script>
import HintList from './Hint List/HintList.vue'

export default {
    props: ['hintsBlue', 'hintsRed'],
    components:{
        'hint-list':HintList
    },
    data() {
        return {
            title:"Hints"
        }
    }
    }
</script>


<style lang="stylus">
@require "../../styles/index"
.side-board
    max-width 500px
    margin 10px
    background $color__dark-grey
    border 3px solid #000000
    box-sizing border-box
    box-shadow 0px 4px 4px rgba(0, 0, 0, 0.25)
    border-radius 30px
    &__title
      margin 20px
      font-weight bold
      font-size 30px
      line-height 40px
      align-items center
      text-align center
      background $color__light-grey
      border 1px solid #000000
      box-sizing border-box
      box-shadow 0px 4px 4px rgba(0, 0, 0, 0.25)
      border-radius 50px

</style>