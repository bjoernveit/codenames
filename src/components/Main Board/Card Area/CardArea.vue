<template>
  <div class="card-area container-fluid">
    <div class="row" v-for="row in rows" :key="row">
      <card v-for="card in row" :key="card.word" v-bind:card="card" v-bind:view="view">></card>
    </div>
  </div>
</template>

<script>
import Card from './Card/Card.vue'

export default {
    props: ["cards", "view"],
    components: {
        'card': Card
    },
    data() {
        return {
            text:"CardArea"
        }
    },
    computed: {
      rows: function() {
        var rows = [];
        for(let i = 0; i < this.cards.length; i += 5){
          rows.push(this.cards.slice(i, i + 5));
        }
        return rows
      }
    }
}
</script>

<style lang="stylus">
.card-area 
  & .col
    margin 5px
    padding 0
</style>
