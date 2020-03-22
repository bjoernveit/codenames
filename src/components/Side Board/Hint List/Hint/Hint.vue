<template>
  <div class="hint">
    <span class="hint__word"> {{ word }}</span>
    <span class="hint__number">{{ number }}</span>
  </div>
</template>

<script>
    export default {
        props: ['word', 'number'],
        data() {
            return {
            }
        }
    }
</script>

<style lang="stylus" scoped>
span
  padding 3 px
.hint
  font-size 30px
  font-weight bold
</style>