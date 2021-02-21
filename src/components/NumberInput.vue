<template>
  <div class="number-input">
    <input
      type="text"
      size="2"
      maxlength="2"
      v-model="paddedValue"
    >
  </div>
</template>

<script>
  export default {
    name: 'NumberInput',
    props: {
      value: { type: Number, required: true },
      onChange: { type: Function, required: true }
    },
    computed: {
      paddedValue: {
        get: function () {
          return (this.value < 10 ? '0' : '') + String(this.value);
        },
        set: function (value) {
          this.onChange(value);
        }
      }
    }
  }
</script>

<style scoped>
  .number-input input {
    all: inherit;
    width: 12vw;
    text-decoration: underline;
  }
</style>
