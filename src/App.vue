<template>
  <div>
    <FromTime :startTime="currentTime" />
    <ToTime :time="currentTime" />
  </div>
</template>

<script>
import FromTime from './components/FromTime.vue'
import ToTime from './components/ToTime.vue'

export default {
  name: 'App',
  components: { FromTime, ToTime },
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
