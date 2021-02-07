<template>
  <div class="minute-input">{{ minutes }}</div>
</template>

<script>
  export default {
    name: 'MinuteInput',
    props: { time: { type: Date, required: true } },
    computed: {
      minutes () {
        let datetime = new Date(this.time),
          minutes = datetime.getMinutes(),
          paddedMinutes = (minutes < 10 ? '0' : '') + String(minutes);

        return paddedMinutes;
      }
    }
  }
</script>

<style scoped></style>
