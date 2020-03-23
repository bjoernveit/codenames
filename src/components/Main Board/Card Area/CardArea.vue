<template>
  <div class="card-area container-fluid">
    <div class="row">
      <card v-for="card in cards" :key="card.word" v-bind:card="card"></card>
    </div>
  </div>
</template>

<script>
import Card from './Card/Card.vue'

export default {
    props: ["cards"],
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

<style lang="stylus">
.card-area .col-2
  margin 0
  padding 0
</style>
