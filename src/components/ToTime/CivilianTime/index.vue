<template>
  <div class="civilian-time">
    <span class='civilian-time__prefix'>Il est </span>
    <CivilianHour :time="time" />
    <CivilianMinute :time="time" />
    <CivilianSuffix :time="time" />.
  </div>
</template>

<script>
  import CivilianHour from './CivilianHour.vue';
  import CivilianMinute from './CivilianMinute.vue';
  import CivilianSuffix from './CivilianSuffix.vue';

  export default {
    name: 'CivilianTime',
    props: { time: { type: Date, required: true } },
    components: { CivilianHour, CivilianMinute, CivilianSuffix }
  }
</script>

<style scoped>
  .civilian-time {
    opacity: 0.4;
    display: flex;
    justify-content: center;
  }

  .civilian-time__prefix:after {
    content: ' ';
    display: inline-block;
  }
</style>
