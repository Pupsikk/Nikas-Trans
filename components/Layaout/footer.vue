<template>
  <div class="container">
    <div class="contant">
      <div><UILogo /></div>
      <div>
        <a>Политика конфиденциальности</a>
        <br>
        <a>Публичная оферта</a>
      </div>
      <div class="phone">
        <a href="tel:37360466333" class="phone-number">+373 604 66 333</a>
        <br>
        <a href="tel:359893517321" class="phone-number">+359 893 51 73 21</a>
      </div>
      <div>
        <a href="mailto:nikastrans22@mail.ru">nikastrans22@mail.ru</a>
        <div class="social">
          <NuxtLink href="/#" target="_blank">
            <img src="/ico/Instagram.png" alt="Instagram ico" />
          </NuxtLink>
          <NuxtLink href="/#" target="_blank">
            <img src="/ico/WhatsApp.png" alt="WhatsApp ico" />
          </NuxtLink>
          <NuxtLink href="/#" target="_blank">
            <img src="/ico/Viber.png" alt="Viber ico" />
          </NuxtLink>
          <NuxtLink href="/#" target="_blank">
            <img src="/ico/Telegram.png" alt="Telegram ico" />
          </NuxtLink>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.container {
  background-color: $dark-gray;
  padding: 4em;
  
  .contant {
    display: flex;
    justify-content: space-between;
  }

  a {
    line-height: 1.5em;
  }

  .social {
    display: flex;
    justify-content: space-between;
      a {
        margin-top: 5px;
      }
      
      img {
        max-width: 29px;
        height: auto;
        transition: .3s;
        filter: opacity(90%);
        
        &:hover {
          filter: opacity(100%);
          filter: drop-shadow(0px 0px 5px #4f4f4f);
        }
      }
    }

  @media screen and (max-width: 940px) {
    .contant {
      flex-direction: column;
      align-items: center;

      div {
        margin-bottom: 1em;

        &:last-child {
          margin-bottom: unset;
        }
      }
    }
  }
}
</style>