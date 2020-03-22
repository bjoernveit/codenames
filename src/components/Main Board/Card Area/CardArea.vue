<template>
  <div>
    {{ text }}
    <card></card>
    <card></card>
    <card></card>
    <card></card>
    <card></card>
  </div>
</template>

<script>
import Card from './Card/Card.vue'

export default {
    components: {
        'card': Card
    },
    data() {
        return {
            text:"CardArea"
        }
    }
}
</script>

<style>

</style>
