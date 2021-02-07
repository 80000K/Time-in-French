<template>
  <div class="hour-input">{{ hour }}</div>
</template>

<script>
  export default {
    name: 'HourInput',
    props: { time: { type: Number, required: true } },
    computed: {
      hour () {
        // TODO: Validate that this.time is a valid time number
        let datetime = new Date(this.time),
          hour = datetime.getHours(),
          paddedHour = (hour < 10 ? '0' : '') + String(hour);

        return paddedHour;
      }
    }
  }
</script>

<style scoped></style>
