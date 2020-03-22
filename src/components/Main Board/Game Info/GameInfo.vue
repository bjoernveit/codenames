<template>
  <div>
    {{ text }}
    <score></score>
    <timer></timer>
    <info></info>
  </div>
</template>

<script>
import Score from './Score/Score.vue'
import Timer from './Timer/Timer.vue'
import Info from './Info/Info.vue'
export default {
    components: {
        'score': Score,
        'timer': Timer,
        'info' : Info
    },
    data() {
        return {
            text:"GameInfo"
        }
    }
}
</script>

<style>

</style>
