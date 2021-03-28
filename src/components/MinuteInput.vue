<template>
  <div class="minute-input">
    <NumberInput
      :value="minutes"
      :onChange="handleChange"
      :maxValue="59"
    />
  </div>
</template>

<script>
  import NumberInput from './NumberInput';

  export default {
    name: 'MinuteInput',
    props: { time: { type: Date, required: true } },
    components: { NumberInput },
    computed: {
      minutes () {
        let datetime = new Date(this.time),
          minutes = datetime.getMinutes();

        return minutes;
      }
    },
    methods: {
      handleChange (value) {
        let dateTime = this.$store.state.userTime ? new Date(this.$store.state.userTime) : new Date();

        dateTime.setMinutes(value);

        this.$store.state.userTime = dateTime;
      }
    }
  }
</script>

<style scoped></style>
