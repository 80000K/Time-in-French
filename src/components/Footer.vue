<template>
  <footer>© Minal Chhatbar {{year}}</footer>
</template>

<script>
export default {
  name: 'Footer',
  computed: {
    year () {
      return new Date().getFullYear();
    }
  }
}
</script>

<style>
  footer {
    left: 0;
    bottom: 0;
    width: 100%;
    opacity: 0.5;
    padding: 16px 0;
    position: absolute;
    text-align: center;
    font-size: calc(8px + 0.5vw);
  }
</style>
