<template>
  <div>
    <FromTime :time="time" />
    <ToTime :time="time" />
  </div>
</template>

<script>
import FromTime from './components/FromTime'
import ToTime from './components/ToTime'

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
  :root {
    --background-color: #2B4AD9;  /* Background color for the entire page. */
    --highlight-color: #1BD760;   /* Color for elements which stand out. */
    --content-color: #FFFFFF;     /* Color for all normal content on the page. */
  }

  html,
  body {
    height: 100%;
  }

  body {
    display: flex;
    align-items: center;
    justify-content: center;
    color: var(--content-color);
    font-family: "Roboto", sans-serif;
    background: var(--background-color);
  }
</style>
