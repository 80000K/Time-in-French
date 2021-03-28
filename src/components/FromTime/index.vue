<template>
  <div class="from-time">
    <span class='from-time__prefix'>It is </span>
    <HourInput :time="time" />
    <span v-bind:class="{ blink: blink }">:</span>
    <MinuteInput :time="time" />.
  </div>
</template>

<script>
  import HourInput from './HourInput.vue';
  import MinuteInput from './MinuteInput.vue';

  export default {
    name: 'FromTime',
    props: { time: { type: Date, required: true } },
    components: { HourInput, MinuteInput },
    computed: {
      blink () {
        return this.$store.state.live;
      }
    }
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
    display: flex;
    font-size: 9vw;
    margin-bottom: 36px;
    justify-content: center;
    color: var(--highlight-color);
    font-family: "Concert One", sans-serif;
    text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  }

  .from-time__prefix:after {
    content: ' ';
    display: inline-block;
  }

  .blink {
    animation: blink-animation 2s steps(15, start) infinite;
    -webkit-animation: blink-animation 2s steps(15, start) infinite;
  }
</style>
