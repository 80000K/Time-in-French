<template>
  <div class="quarter-minute">
    <span class="quarter-minute__prefix"> </span>
    {{ minutePhrase }}
  </div>
</template>

<script>
  const frenchMinutes = ['', 'une', 'deux', 'trois', 'quatre', 'cinq', 'six', 'sept', 'huit', 'neuf', 'dix', 'onze', 'douze', 'treize', 'quatorze', 'quinze', 'seize', 'dix-sept', 'dix-huit', 'dix-neuf', 'vingt', 'vingt-et-une', 'vingt-deux', 'vingt-trois', 'vingt-quatre', 'vingt-cinq', 'vingt-six', 'vingt-sept', 'vingt-huit', 'vingt-neuf', 'trente', 'trente-et-une', 'trente-deux', 'trente-trois', 'trente-quatre', 'trente-cinq', 'trente-six', 'trente-sept', 'trente-huit', 'trente-neuf', 'quarante', 'quarante-et-une', 'quarante-deux', 'quarante-trois', 'quarante-quatre', 'quarante-cinq', 'quarante-six', 'quarante-sept', 'quarante-huit', 'quarante-neuf', 'cinquante', 'cinquante-et-une', 'cinquante-deux', 'cinquante-trois', 'cinquante-quatre', 'cinquante-cinq', 'cinquante-six', 'cinquante-sept', 'cinquante-huit', 'cinquante-neuf']

  export default {
    name: 'QuarterMinute',
    props: { time: { type: Date, required: true } },
    computed: {
      minutePhrase () {
        let datetime = new Date(this.time),
          minutes = datetime.getMinutes(),
          prefix = '';

        // There are a few special cases, we have separate handling
        // for each of these.
        if (minutes === 15) {
          return 'quart';
        } else if (minutes === 30) {
          return 'et demi';
        } else if (minutes === 45) {
          return 'moins quart';
        }

        // If the minute is > 30, then it subtracts from the next
        // hour instead.
        if (minutes > 30) {
          minutes = 60 - minutes;
          prefix = 'moins ';
        }

        return ` ${prefix}${frenchMinutes[minutes]}`;
      }
    }
  }
</script>

<style scoped>
  .quarter-minute__prefix:after {
    content: ' ';
    display: inline-block;
  }
</style>
