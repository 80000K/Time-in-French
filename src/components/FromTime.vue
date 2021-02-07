<template>
  <div class="from-time">
    <span class='from-time__prefix'>It is </span>
    <HourInput :time="startTime" />
    <span class="separator">:</span>
    <MinuteInput :time="startTime" />
  </div>
</template>

<script>
  import HourInput from './HourInput.vue';
  import MinuteInput from './MinuteInput.vue';

  export default {
    name: 'FromTime',
    props: { startTime: { type: Number, required: true } },
    components: { HourInput, MinuteInput }
  }
</script>

<style scoped>
  @keyframes blink-animation {
    0%,
    50% {
      opacity: 1;
    }

    51%,
    100% {
      opacity: 0.1;
    }
  }

  @-webkit-keyframes blink-animation {
    0%,
    50% {
      opacity: 1;
    }

    51%,
    100% {
      opacity: 0.1;
    }
  }

  .from-time {
    font-size: 11vw;
    display: flex;
  }

  .from-time__prefix:after {
    content: ' ';
    display: inline-block;
  }

  .separator {
    animation: blink-animation 2s steps(15, start) infinite;
    -webkit-animation: blink-animation 2s steps(15, start) infinite;
  }
</style>
