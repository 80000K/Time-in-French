<template>
  <div class="hour-input">
    <NumberInput
      :value="hour"
      :onChange="handleChange"
      :maxValue="23"
    />
  </div>
</template>

<script>
  import NumberInput from './NumberInput';

  export default {
    name: 'HourInput',
    props: { time: { type: Date, required: true } },
    components: { NumberInput },
    computed: {
      hour () {
        let datetime = new Date(this.time),
          hour = datetime.getHours();

        return hour;
      }
    },
    methods: {
      handleChange (value) {
        let dateTime = this.$store.state.userTime ? new Date(this.$store.state.userTime) : new Date();

        dateTime.setHours(value);

        this.$store.state.userTime = dateTime;
      }
    }
  }
</script>

<style scoped>
  .hour-input {
    border: solid 3px red;
  }
</style>
