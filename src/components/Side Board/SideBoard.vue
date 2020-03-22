<template>
  <div>
    {{ text }}
    <hint-list></hint-list>
    <hr />
    <hint-list></hint-list>
  </div>
</template>

<script>
import HintList from './Hint List/HintList.vue'
export default {
    components:{
        'hint-list':HintList
    },
    data() {
        return {
            text:"SideBoard"
        }
    }
    }
</script>

<style>

</style>
