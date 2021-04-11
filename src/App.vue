<template>
  <div>
    <FromTime :time="time" />
  </div>
</template>

<script>
import FromTime from './components/FromTime'

export default {
  name: 'App',
  components: { FromTime },
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
    --background-color: #FFFFFF;  /* Background color for the entire page. */
    --highlight-color: #000000;   /* Color for elements which stand out. */
    --content-color: #000000;     /* Color for all normal content on the page. */
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
