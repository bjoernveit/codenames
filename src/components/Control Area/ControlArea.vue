<template>
  
</template>

<script>
import { cardsRef } from '../../firebase'
export default {  
  props: ["view", "score", "cards", "words"],
  data() {
      return {
      }
  },
  computed:{
   
  },
  methods:{
    
  }
}
  
</script>

<style lang="stylus" scoped>
.control-area
  font-size 30px
  background #d8d8d8
  border 3px solid #000
  border-radius 30px
  margin 10px
  padding  10px 30px 10px

.control-area input 
  width 45px
  height 45px
  transform translate(0px, 25%)
</style>