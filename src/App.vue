<template>
  <div>
    <FromTime :startTime="currentTime" />
  </div>
</template>

<script>
import FromTime from './components/FromTime.vue'

export default {
  name: 'App',
  components: { FromTime },
  computed: {
    currentTime () {
      this.$store.dispatch('tick');

      return this.$store.state.time;
    }
  }
}
</script>

<style>
  html,
  body {
    height: 100%;
  }

  body {
    display: flex;
    align-items: center;
    justify-content: center;
    font-family: "Concert One", sans-serif;
  }
</style>
