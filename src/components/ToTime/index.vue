<template>
  <div class="to-time">
    <span class='to-time__prefix'>Il est </span>
    <LiteralHour :time="time" />
    <LiteralMinute :time="time" />.
  </div>
</template>

<script>
  import LiteralHour from './Literal/LiteralHour.vue';
  import LiteralMinute from './Literal/LiteralMinute.vue';

  export default {
    name: 'ToTime',
    props: { time: { type: Date, required: true } },
    components: { LiteralHour, LiteralMinute }
  }
</script>

<style scoped>
  .to-time {
    font-size: 4.5vw;
    display: flex;
    justify-content: center;
  }

  .to-time__prefix:after {
    content: ' ';
    display: inline-block;
  }
</style>
