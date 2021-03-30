<template>
  <div class="number-input">
    <div
      contenteditable="true"
      inputmode="decimal"
      v-text="paddedValue"
      :placeholder="placeholder"
      v-on:keydown.enter="persist"
      @focus="enableTypethrough"
      @blur="persist"
      @input="handleInput"
    />
  </div>
</template>

<script>
  const valueProp = 'innerText';

  function pad (value) {
    return (value < 10 ? '0' : '') + String(value);
  }

  function sanitize (value, maxValue) {
    let previousValue = value.slice(0, -1);

    // Reject any input that's not numeric. Revert to the last valid input if there
    // was one.
    if (Number.isNaN(Number(value))) {
      return previousValue;
    }

    // If the entered value is out of bounds, then use the last previous value
    if (value > maxValue || value < 0) {
      return previousValue;
    }

    // Remove any non-numeric characters
    value = value.replace(/[^\d]/g, '');

    return value;
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
        // If the contents of the input are cleared while the contenteditable element is being focused on,
        // iOS shows the keyboard but doesn't show the cursor. Deferring the setting of "typethrough" to the next
        // tick fixes this.
        setTimeout(() => {
          this.$data.typethrough = true;
        });
      },
      persist: function persist (event) {
        let input = event.target[valueProp],
          value = sanitize(input, this.maxValue);

        event.target.blur();

        this.$data.typethrough = false;

        if (value) {
          this.onChange(value);
        }
      },
      handleInput: function handleInput (event) {
        let input = event.target[valueProp],
          value = sanitize(input, this.maxValue);

        if (value !== input) {
          event.target[valueProp] = value;

          return;
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
  .number-input div {
    width: 10vw;
    overflow: hidden;
    position: relative;
    word-break: keep-all;
    text-decoration: underline;

    /* For Safari compatibility, to immediately show the cursor on focus */
    -webkit-user-select: text;
    user-select: text;
  }

  .number-input div:focus {
    outline: none;
  }

  .number-input div:empty:focus:after {
    top: 0;
    left: 0;
    opacity: 0.6;
    position: absolute;
    content: attr(placeholder);
    text-decoration: underline;
  }
</style>
