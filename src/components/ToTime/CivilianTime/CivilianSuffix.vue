<template>
  <div class="civilian-suffix">
    {{suffix}}
  </div>
</template>

<script>
  export default {
    name: 'CivilianSuffix',
    props: { time: { type: Date, required: true } },
    computed: {
      suffix () {
        let datetime = new Date(this.time),
          hour = datetime.getHours(),
          minutes = datetime.getMinutes(),
          militaryReference = hour * 100 + minutes;

        if (militaryReference === 0) {
          return 'minuit';
        }

        if (militaryReference >= 1 && militaryReference <= 1159) {
          return 'du matin';
        }

        if (militaryReference === 1200) {
          return 'midi';
        }

        if (militaryReference >= 1201 && militaryReference <= 1800) {
          return `l'apres midi`;
        }

        return 'ce soir';
      }
    }
  }
</script>

<style scoped>
  .civilian-suffix:before {
    content: ' ';
    display: inline-block;
  }
</style>
