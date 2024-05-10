<template>
  <div class="contant">
    <img src="/assets/svg/line-big.svg" alt="SVG фоновая линия">
    <div class="logo">
      <p>Логистическая компания</p>
      <p class="title">Nikas-Trans</p>
    </div>
    <div class="wrap">
      <p>Логистическая компания NIKAS-TRANS LTD была основана в 2017 году. Уже на протяжении 8 лет мы работаем в этой сфера и выполняем перевозки грузов по странам Европейского союза, СНГ, Балканы и Турция.</p>
      <p>У нас есть все необходимое для этой ответственной и сложной работы. Наши основные цели - это своевременная доставка груза из точки А в точку Б с сохранением качества и целостности перевозимого груза. </p>
      <p>Качество, пунктуальность и ответственность - наши ключевые навыки.</p>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.contant {
  padding: 2em;
  display: flex;
  align-items: center;
  height: 370px;
  position: relative;

  .logo {
    flex: 2;

    .title {
      font-size: 44px;
      font-weight: 600;
      text-transform: uppercase;
    }

    p {
      font-size: 24px;
    }
  }

  .wrap {
    flex: 3;
    margin: auto;

    p {
      margin-bottom: 1em;
      max-width: 650px;

      &:last-child {
        margin-bottom: unset;
      }
    }
  }

  img {
    position: absolute;
    left: 7em;
  }
}

@media screen and (max-width: 830px) {
  .contant {
    flex-direction: column;
    margin-top: 2em;
    height: auto;

    .logo {
      margin-bottom: 1em;
    }

    img {
      width: 90%;
      height: 90%;
      left: 1em;
      right: 1em;
    }
  }
}
</style>