<template>
  <div class="civilian-hour">{{ hourPhrase }}</div>
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
  ];

  export default {
    name: 'CivilianHour',
    props: { time: { type: Date,
      required: true } },
    computed: {
      hourPhrase () {
        let datetime = new Date(this.time),
          hour = datetime.getHours(),
          minutes = datetime.getMinutes(),
          suffix = 'heure' + ([0,
            1].includes(hour) ? '' : 's');

        if ([0, 12].includes(hour) && minutes === 0) {
          return '';
        }

        return `${frenchHours[hour]} ${suffix}`;
      }
    }
  }
</script>

<style scoped></style>
