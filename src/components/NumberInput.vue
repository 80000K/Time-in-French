<template>
  <div class="number-input">
    <input
      type="text"
      size="2"
      maxlength="2"
      :placeholder="placeholder"
      :value="paddedValue"
      @focus="enableTypethrough"
      @blur="persist"
      @input="handleInput"
      v-on:keyup.enter="persist"
    />
  </div>
</template>

<script>
  function pad (value) {
    return (value < 10 ? '0' : '') + String(value);
  }

  export default {
    name: 'NumberInput',
    props: {
      value: { type: Number, required: true },
      maxValue: { type: Number, required: true },
      onChange: { type: Function, required: true }
    },
    data () {
      return {
        // Temporarily disable projection of the current time as the input value so users can
        // "type through" the input.
        typethrough: false
      }
    },
    computed: {
      paddedValue: function () {
        if (this.$data.typethrough) {
          return '';
        }

        return pad(this.value);
      },
      placeholder: function () {
        return pad(this.value);
      }
    },
    methods: {
      enableTypethrough: function enableTypethrough () {
        this.$data.typethrough = true;
      },
      persist: function persist (event) {
        let value = event.target.value;

        event.target.blur();

        this.$data.typethrough = false;

        if (value) {
          this.onChange(value);
        }
      },
      handleInput: function log (event) {
        let value = event.target.value,
          previousValue = value.slice(0, -1);

        // Reject any input that's not numeric. Revert to the last valid input if there
        // was one.
        if (Number.isNaN(Number(value))) {
          return event.target.value = previousValue;
        }

        // If the entered value is out of bounds, then use the last previous value
        if (value > this.maxValue || value < 0) {
          return event.target.value = previousValue;
        }

        // If the value is >= 10, then they have finished typing their input. We can blur the
        // input element and have the persistance function take over.
        if (value >= 10 || value.length === 2) {
          event.target.blur();
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
