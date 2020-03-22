<template>
    <div class="col-6">
        <div v-bind:class="{'hint-list': true, 'hint-list--red': color === 'red', 'hint-list--blue': color === 'blue'}">
            <ul>
                <li v-for="hint in hints" :key="hint"><hint v-bind:word="hint.word" v-bind:number="hint.number"></hint></li>
            </ul>
        </div>
    </div>
</template>

<script>
import Hint from './Hint/Hint.vue'

export default {
    props: ['hints', 'color'],
    components: {
        'hint': Hint
    },
    data() {
        return {
            text:"HintList"
    }
        }
}
</script>

<style lang="stylus" scoped>
    .hint-list
        &--red
            color red
        &--blue
            color blue
        & ul
            padding 5px
        & li
            list-style none
            text-align center
            width 100%
</style>