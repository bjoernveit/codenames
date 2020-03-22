<template>
  <div>
    {{ text }}
    <card-area></card-area>
    <game-info></game-info>
  </div>
</template>

<script>
import CardArea from './Card Area/CardArea.vue'
import GameInfo from './Game Info/GameInfo.vue'
export default {
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

<style>

</style>
