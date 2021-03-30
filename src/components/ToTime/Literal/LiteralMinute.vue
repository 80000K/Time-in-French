<template>
  <div class="literal-minute">
    <span class="literal-minute__prefix"> </span>
    {{ minutePhrase }}
  </div>
</template>

<script>
  const frenchMinutes = ['', 'une', 'deux', 'trois', 'quatre', 'cinq', 'six', 'sept', 'huit', 'neuf', 'dix', 'onze', 'douze', 'treize', 'quatorze', 'quinze', 'seize', 'dix-sept', 'dix-huit', 'dix-neuf', 'vingt', 'vingt-et-une', 'vingt-deux', 'vingt-trois', 'vingt-quatre', 'vingt-cinq', 'vingt-six', 'vingt-sept', 'vingt-huit', 'vingt-neuf', 'trente', 'trente-et-une', 'trente-deux', 'trente-trois', 'trente-quatre', 'trente-cinq', 'trente-six', 'trente-sept', 'trente-huit', 'trente-neuf', 'quarante', 'quarante-et-une', 'quarante-deux', 'quarante-trois', 'quarante-quatre', 'quarante-cinq', 'quarante-six', 'quarante-sept', 'quarante-huit', 'quarante-neuf', 'cinquante', 'cinquante-et-une', 'cinquante-deux', 'cinquante-trois', 'cinquante-quatre', 'cinquante-cinq', 'cinquante-six', 'cinquante-sept', 'cinquante-huit', 'cinquante-neuf ']

  export default {
    name: 'LiteralMinute',
    props: { time: { type: Date, required: true } },
    computed: {
      minutePhrase () {
        let datetime = new Date(this.time),
          minutes = datetime.getMinutes();

        return ` ${frenchMinutes[minutes]}`;
      }
    }
  }
</script>

<style scoped>
  .literal-minute__prefix:after {
    content: ' ';
    display: inline-block;
  }
</style>
