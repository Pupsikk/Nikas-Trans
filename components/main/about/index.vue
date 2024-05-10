<template>
  <div class="container" id="about">
    <MainAboutInfo />
    <MainAboutPogruzka id="uslugi" />
    <MainAboutWork />
    <div class="wrap">
      <img src="/assets/svg/docs.svg" alt="">
      <p>NIKAS-TRANS LTD работает с соблюдением всех правил международной конвенции TIR,CMR</p>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.container {
  max-width: 1200px;
  margin: auto;

  .wrap {
    background-color: $white;
    padding: 1em 2em;
    display: flex;
    align-items: center;
    justify-content: center;

    p {
      max-width: 900px;
      color: $black;
      font-size: 1.5em;
      font-weight: 500;
    }

    img {
      width: 66px;
      height: 66px;
      margin-right: 1em;
    }
  }
}
</style>