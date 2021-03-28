<template>
  <div>
    <FromTime :time="time" />
    <ToTime :time="time" />
  </div>
</template>

<script>
import FromTime from './components/FromTime.vue'
import ToTime from './components/ToTime.vue'

export default {
  name: 'App',
  components: { FromTime, ToTime },
  computed: {
    time () {
      this.$store.dispatch('tick');

      return this.$store.state.userTime || this.$store.state.time;
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
