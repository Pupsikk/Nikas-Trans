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
        <!-- Социальные сети -->
        <div class="social">
          <!-- Ссылка на Instagram -->
          <NuxtLink href="https://www.instagram.com/nikas.trans/" target="_blank"> <!-- внутрь кавычек, вместо "/#" добавляем ссылки. -->
            <img src="/ico/Instagram.png" alt="Instagram ico" />
          </NuxtLink>
          <!-- Ссылка на WhatsApp -->
          <NuxtLink href="https://wa.me/37360466333?text=%D0%94%D0%BE%D0%B1%D1%80%D1%8B%D0%B9%20%D0%B4%D0%B5%D0%BD%D1%8C,%20%D1%85%D0%BE%D1%87%D1%83%20%D1%83%D0%B7%D0%BD%D0%B0%D1%82%D1%8C%20%D1%86%D0%B5%D0%BD%D1%83%20" target="_blank">
            <img src="/ico/WhatsApp.png" alt="WhatsApp ico" />
          </NuxtLink>
          <!-- Ссылка на Viber -->
          <NuxtLink href="https://msng.link/o?37360466333=vi" target="_blank">
            <img src="/ico/Viber.png" alt="Viber ico" />
          </NuxtLink>
          <!-- Ссылка на Telegram -->
          <NuxtLink href="https://t.me/Alexandr210517" target="_blank">
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