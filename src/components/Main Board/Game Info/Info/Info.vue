<template>
  <div class="info-text col">
    <span class="info-text__label game-info-area__label ">{{ label }}</span>
    <span class="info-text__text">{{ text }}</span>
  </div>
</template>

<script>
    export default {
      props:["label", "text"],
      data() {
        return {}
      }
    }
</script>
<style lang="stylus">
.info-text__label
  margin-right 5px
</style>