<template>
  <div class="timer col">
    <span class="game-info-area__label timer__label">Time:</span> <span v-bind:class="timeClasses">{{ time }}</span>
  </div>
</template>

<script>
    export default {
      props: ["time", "color"],
      data() {
        return {
        }
      },
      computed: {
        timeClasses: function(){
          return {
            'timer__time': true,
            'timer__time--red': this.color === "RED",
            'timer__time--blue': this.color === "BLUE",
            
          }
        }
      },  
    }
</script>

<style>

</style>
