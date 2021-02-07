<template>
  <div class="minute-input">{{ minutes }}</div>
</template>

<script>
  export default {
    name: 'MinuteInput',
    props: { time: { type: Number, required: true } },
    computed: {
      minutes () {
        // TODO: Validate that this.time is a valid time number
        let datetime = new Date(this.time),
          minutes = datetime.getMinutes(),
          paddedMinutes = (minutes < 10 ? '0' : '') + String(minutes);

        return paddedMinutes;
      }
    }
  }
</script>

<style scoped></style>
