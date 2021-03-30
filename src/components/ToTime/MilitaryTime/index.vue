<template>
  <div class="military-time">
    <span class='military-time__prefix'>Il est </span>
    <MilitaryHour :time="time" />
    <MilitaryMinute :time="time" />.
  </div>
</template>

<script>
  import MilitaryHour from './MilitaryHour.vue';
  import MilitaryMinute from './MilitaryMinute.vue';

  export default {
    name: 'MilitaryTime',
    props: { time: { type: Date, required: true } },
    components: { MilitaryHour, MilitaryMinute }
  }
</script>

<style scoped>
  .military-time {
    display: flex;
    justify-content: center;
  }

  .military-time__prefix:after {
    content: ' ';
    display: inline-block;
  }
</style>
