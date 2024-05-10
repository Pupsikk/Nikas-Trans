<template>
  <div class="container">
    <div class="content">
      <h1>Грузоперевозки по странам <br>Eвропейского союза, СНГ, Балкан, в Турцию</h1>
      <p>безопасная и надежная доставка вашего груза в любую точку с гарантией</p>
      <UIButton color="white" title="Расчитать стоимость" />
    </div>
    <MainIndexAdvantages />
  </div>
</template>

<style lang="scss" scoped>
.container {
  width: 100%;
  height: 100vh;
  background-image: linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.25)),
    url("/img/main.webp");
  background-size: cover; /* чтобы изображение было видно полностью по ширине */
  background-position: center; /* чтобы изображение центрировалось */

  img {
    opacity: 0.2;
  }

  .content {
    padding: 8em 4em;

    h1 {
      font-size: 3.5vw;
    }

    p {
      max-width: 522px;
      font-size: 2vw;
      margin-top: 1em;
    }

    button {
      margin-top: 3em;
    }
  }

  @media screen and (min-width: 1201px) {
    .content {
      p {
        max-width: 45vw;
        font-size: 2vw;
      }
    }
  }

  @media screen and (max-width: 768px) {
    /* Добавляем стили для экранов шириной меньше 768px */
    .content {
      h1 {
        font-size: 2em;
      }

      p {
        font-size: 1.2em;
      }
    }
  }

  @media screen and (max-width: 585px) {
    .content {
      padding: 8em 1em;
      text-align: center;
    }
  }
  @media screen and (max-width: 490px) {
    .content {
      h1 {
        font-size: 1.5em;
      }
      
      p {
        font-size: 1em;
      }
    }
  }
}
</style>
