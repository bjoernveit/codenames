<template>
  <div>
    {{ text }}
    <ul>
        <li><hint></hint></li>
        <li><hint></hint></li>
        <li><hint></hint></li>
        <li><hint></hint></li>
        <li><hint></hint></li>
    </ul>
  </div>
</template>

<script>
import Hint from './Hint/Hint.vue'

export default {
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

<style>

</style>
