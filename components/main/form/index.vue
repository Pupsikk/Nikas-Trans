<template>
  <div class="container" id="request">
    <h3>Расчитайте стоимость грузоперевозки</h3>
    <p class="text">Оставьте заявку и наш менеджер вам перезвонит</p>
    <MainFormRequestForm />
  </div>
</template>

<style lang="scss" scoped>
.container {
  background-color: $black;
  padding: 4em 3em;
  
  h3 {
    text-align: center;
    padding-bottom: 1em;
  }
  
  .text {
    text-align: center;
    font-size: 1.5em;
    margin-bottom: 1em;
  }
}
  
@media screen and (max-width: 510px) {
  .container {
    padding: 4em 1em;
  }
}
</style>