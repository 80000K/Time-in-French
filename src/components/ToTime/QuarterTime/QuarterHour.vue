<template>
  <div class="quarter-hour">{{ hourPhrase }}</div>
</template>

<script>
  const frenchHours = [
    'zéro',
    'une',
    'deux',
    'trois',
    'quatre',
    'cinq',
    'six',
    'sept',
    'huit',
    'neuf',
    'dix',
    'onze',
    'douze',
    'une',
    'deux',
    'trois',
    'quatre',
    'cinq',
    'six',
    'sept',
    'huit',
    'neuf',
    'dix',
    'onze',
    'douze'
  ];

  export default {
    name: 'QuarterHour',
    props: { time: { type: Date, required: true } },
    computed: {
      hourPhrase () {
        let datetime = new Date(this.time),
          hour = datetime.getHours(),
          minutes = datetime.getMinutes(),
          suffix = 'heure' + ([0, 1].includes(hour) ? '' : 's');

        if ([0, 12].includes(hour) && minutes === 0) {
          return '';
        }

        if (minutes > 30) {
          hour += 1;
        }

        return `${frenchHours[hour]} ${suffix}`;
      }
    }
  }
</script>

<style scoped></style>
