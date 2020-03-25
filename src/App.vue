<template>
  <div id="app">
    <div class="control-area row">
    <button v-on:click="initCards" type="button" class="btn btn-danger col-2">New Game</button>
    <div class="col">
      Game-Master View:
      <input type="checkbox" v-bind:value="is_master_view" v-on:click="toggleMasterView">
    </div> 
  </div>
  <main-board v-bind:cards="cards" v-bind:info="info" v-bind:score="score" v-bind:time="time" v-bind:view="view"></main-board>
  <!-- <side-board v-bind:hints-red="hints.red" v-bind:hints-blue="hints.blue"></side-board> -->
  </div>
</template>

<script>
import MainBoard from './components/Main Board/MainBoard.vue'
// import SideBoard from './components/Side Board/SideBoard.vue'
import { cardsRef, wordsRef } from './firebase'
import * as CardService from './services/CardService' 
// import firebase from 'firebase';

export default {
  name: 'App',
  components: {
    'main-board': MainBoard
    // 'side-board': SideBoard
  },
  data() {
    return {
      hints: {
        red: [
          { word: "Codename", number: 3 },
          { word: "This", number: 2 },
          { word: "is", number: 1 },
          { word: "Cool", number: 2 }
        ],
        blue: [
          { word: "Codename", number: 3 },
          { word: "This", number: 2 },
          { word: "is", number: 1 },
          { word: "C00l", number: 2 }
        ],
      },
      cards: [],
      info: {label: "Hint:", text: "Vue Rocks 9"},
      time: "0:35",
      view: "DEFAULT"
    }
  },
  computed: { 
    is_master_view: function(){
      return this.view === "MASTER";
    },
    score: function() {
      return CardService.countCards(this.cards);
    }
  },
  firebase: {
      words: wordsRef,
      cards: cardsRef
  }, methods:{
    setView: function(newView){
      this.view = newView
    },
    toggleMasterView: function(){
      if(this.view != "MASTER"){
        this.setView("MASTER");
      } else { 
        this.setView("DEFAULT")
      }
    },
    initCards: function(){
      cardsRef.remove();
      var selectedCards = CardService.newCards(this.words, CardService.getDefaultConfig());
      console.log(selectedCards);
      cardsRef.update(selectedCards);     
    },
   
  }
}
</script>

<style lang="stylus">
@require './styles/index'
#app
  max-width 1100px
  margin auto
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