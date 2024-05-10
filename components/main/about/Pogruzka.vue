<template>
  <div class="content">
    <img class="line line-1" src="/assets/svg/line-pogruzka-1.svg" alt="SVG фоновая линия">
    <img class="line line-2" src="/assets/svg/line-pogruzka-2.svg" alt="SVG фоновая линия">
    <div class="side-blocks mb-em">
      <MainAboutCart title="Перевозка сборных грузов (группаж)" text="организовываем перевозку груза нескольких компаний скомплектованных на одной машине" />
      <MainAboutCart title="Гарантия сохранности груза" text="страхуем и отслеживаем его местоположение" />
    </div>
    <div class="centered-image">
      <div class="circle circle-1"></div>
      <div class="circle circle-2"></div>
      <div class="circle circle-3"></div>
      <div class="circle circle-4"></div>
      <img src="/img/pogruzka.webp" alt="Изображение погрузки груза">
    </div>
    <div class="side-blocks">
      <MainAboutCart title="Перевозка опасных грузов (ADR)" text="предлагаем вам индивидуальные решения для ваших запросов на транспортировку ADR" />
      <MainAboutCart title="Решаем вопросы по таможенному оформлению" text="Ваш груз пересечет границу с соблюдением всех необходимых формальностей" />
    </div>
    <img class="line line-3" src="/assets/svg/line-pogruzka-1.svg" alt="SVG фоновая линия">
    <img class="line line-4" src="/assets/svg/line-pogruzka-2.svg" alt="SVG фоновая линия">
  </div>
</template>

<style lang="scss" scoped>
.content {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 6em 4em;
  position: relative;

  .centered-image {
    position: absolute;

    .circle {
      position: absolute;
      background-color: $yellow;
      width: 40px;
      height: 40px;
      border-radius: 100%;
      box-shadow: 0px 0px 10px $yellow;
    }

    img {
      width: 100%;
      height: 100%;
    }
  }

  .side-blocks {
    display: flex;
    justify-content: space-between;
    width: 100%;
    height: 100%;
  }

  .line {
    position: absolute;
    z-index: -1;
  }

  .line-1 {
    top: 25%;
    left: 28%;
  }

  .line-2 {
    top: 24%;
    right: 28%;
  }

  .line-4 {
    bottom: 25%;
    left: 28%;
  }

  .line-3 {
    bottom: 26%;
    right: 28%;
  }

  .circle-1 {
    top: 22%;
    right: 13%;
  }

  .circle-2 {
    top: 22%;
    left: 13%;
  }

  .circle-3 {
    bottom: 26%;
    left: 12%;
  }

  .circle-4 {
    bottom: 26%;
    right: 12%;
  }

  .mb-em {
    margin-bottom: 12em;
  }
}

@media screen and (max-width: 1199px) {
  .content {
    padding: 6em 2vw;

    .centered-image {
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);

      .circle {
        display: none;
      }

      img {
        max-width: 40vw;
        height: auto;
      }
    }
  }
}

@media screen and (max-width: 900px) {
  .content {
    .centered-image {
      top: 50%;
      left: 30%;
      transform: translate(-20%, -50%);

      img {
        max-width: 100%;
      }
    }

    .mb-em {
      margin-bottom: 30em;
    }
  }
}

@media screen and (max-width: 680px) {
  .content {
    .line-1 {
      top: 26%;
    }

    .line-2 {
      top: 25%;
    }
  }
}

@media screen and (max-width: 560px) {
  .content {
    .mb-em {
      margin-bottom: 80%;
    }

    .line-1 {
      top: 28%;
    }

    .line-2 {
      top: 27%;
    }

    .line-4, .line-3 {
      bottom: 27%;
    }
  }
}

@media screen and (max-width: 470px) {
  .content {
    .line-1, .line-2 {
      top: 32%;
    }

    .line-4, .line-3 {
      bottom: 30%;
    }
  }
}
</style>
