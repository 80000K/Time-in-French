<template>
  <div class="to-time">
    <MilitaryTime :time="time" />
    <!-- <CivilianTime :time="time" /> -->
    <!-- <QuarterTime :time="time" /> -->
    <!-- <ContextualTime :time="time" /> -->
  </div>
</template>

<script>
  import MilitaryTime from './MilitaryTime';

  export default {
    name: 'ToTime',
    props: { time: { type: Date, required: true } },
    components: { MilitaryTime }
  }
</script>

<style scoped>
  .to-time {
    font-size: 3.6vw;
  }
</style>
