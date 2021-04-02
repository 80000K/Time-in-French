<template>
  <div class="military-hour">{{ hourPhrase }}</div>
</template>

<script>
  const frenchHours = ['zéro', 'une', 'deux', 'trois', 'quatre', 'cinq', 'six', 'sept', 'huit', 'neuf', 'dix', 'onze', 'douze', 'treize', 'quatorze', 'quinze', 'seize', 'dix-sept', 'dix-huit', 'dix-neuf', 'vingt', 'vingt-et-une', 'vingt-deux', 'vingt-trois'];

  export default {
    name: 'MilitaryHour',
    props: { time: { type: Date, required: true } },
    computed: {
      hourPhrase () {
        let datetime = new Date(this.time),
          hour = datetime.getHours(),
          suffix = 'heure' + ([0, 1].includes(hour) ? '' : 's');

        return `${frenchHours[hour]} ${suffix}`;
      }
    }
  }
</script>

<style scoped></style>
