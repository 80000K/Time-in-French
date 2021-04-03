<template>
  <div class="quarter-time">
    <span class='quarter-time__prefix'>Il est </span>
    <QuarterHour :time="time" />
    <QuarterMinute :time="time" />.
  </div>
</template>

<script>
  import QuarterHour from './QuarterHour.vue';
  import QuarterMinute from './QuarterMinute.vue';

  export default {
    name: 'QuarterTime',
    props: { time: { type: Date, required: true } },
    components: { QuarterHour, QuarterMinute }
  }
</script>

<style scoped>
  .quarter-time {
    opacity: 0.4;
    display: flex;
    justify-content: center;
  }

  .quarter-time__prefix:after {
    content: ' ';
    display: inline-block;
  }
</style>
