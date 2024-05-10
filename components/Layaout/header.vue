<template>
  <div class="container">
    <div class="content">
      <!-- Логотип -->
      <div class="logo"><UILogo /></div>
      <!-- Навигационное меню -->
      <nav class="nav">
        <ul>
          <li v-for="(link, index) in menuLinks" :key="index">
            <NuxtLink :to="link.url" @click="closeMobileMenu">{{ link.text }}</NuxtLink>
          </li>
        </ul>
      </nav>
      <!-- Номера телефонов -->
      <div class="phone-numbers">
        <div v-for="(phone, index) in phoneNumbers" :key="index">
          <a :href="'tel:' + phone">{{ phone }}</a>
          <br>
        </div>
      </div>
      <!-- Кнопка для открытия мобильного меню -->
      <div class="menu-toggle" @click="toggleMobileMenu">
        <img src="/assets/svg/menu.svg" alt="Меню">
      </div>
      <!-- Социальные ссылки -->
      <div class="social-links">
        <a v-for="(social, index) in socialLinks" :key="index" :href="social.url" target="_blank">
          <img :src="social.icon" :alt="social.alt" />
        </a>
      </div>
    </div>
    <!-- Мобильное меню -->
    <div class="mobile-menu" :class="{ open: isMobileMenuOpen }" @click.self="closeMobileMenu">
      <nav>
        <ul>
          <li v-for="(link, index) in menuLinks" :key="index">
            <NuxtLink :to="link.url" @click="closeMobileMenu">{{ link.text }}</NuxtLink>
          </li>
          <!-- Социальные ссылки в мобильном меню -->
          <li class="social-links">
            <a v-for="(social, index) in socialLinks" :key="index" :href="social.url" target="_blank">
              <img :src="social.icon" :alt="social.alt" />
            </a>
          </li>
        </ul>
        <!-- Номера телефонов в мобильном меню -->
        <div class="phone-numbers">
          <div v-for="(phone, index) in phoneNumbers" :key="index">
            <a :href="'tel:' + phone">{{ phone }}</a>
            <br>
          </div>
        </div>
      </nav>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      // Флаг для открытия/закрытия мобильного меню
      isMobileMenuOpen: false,
      // Ссылки для основного меню
      menuLinks: [
        { text: 'О нас', url: '/#about' },
        { text: 'Услуги', url: '/#uslugi' },
        { text: 'Оставить заявку', url: '/#request' }
      ],
      // Номера телефонов
      phoneNumbers: ['+373 604 66 333', '+359 893 51 73 21'],
      // Социальные ссылки
      socialLinks: [
        { url: '/#', icon: '/ico/Instagram.png', alt: 'Instagram ico' },
        { url: '/#', icon: '/ico/WhatsApp.png', alt: 'WhatsApp ico' },
        { url: '/#', icon: '/ico/Viber.png', alt: 'Viber ico' },
        { url: '/#', icon: '/ico/Telegram.png', alt: 'Telegram ico' }
      ]
    };
  },
  methods: {
    // Метод для переключения состояния мобильного меню
    toggleMobileMenu() {
      this.isMobileMenuOpen = !this.isMobileMenuOpen;
    },
    // Метод для закрытия мобильного меню
    closeMobileMenu() {
      this.isMobileMenuOpen = false;
    },
  },
};
</script>


<style lang="scss" scoped>
.container {
  padding: 2em 4em;
  width: 100%;
  position: absolute;

  .content {
    display: flex;
    justify-content: space-between;
    align-items: center;

    .nav {
      ul {
        display: flex;
      }

      li {
        font-size: 1.2em;
        margin: auto 1em;
      }
    }

    .phone-numbers {
      line-height: 1.5em;
    }

    .social-links {
      a {
        margin-right: 1em;

        &:last-child {
          margin-right: 0;
        }
      }

      img {
        max-width: 29px;
        height: auto;
        transition: 0.3s;
        filter: opacity(90%);

        &:hover {
          filter: opacity(100%);
          filter: drop-shadow(0px 0px 5px #4f4f4f);
        }
      }
    }

    .menu-toggle {
      display: none;
    }
  }

  .mobile-menu {
    position: fixed;
    top: 0;
    right: -300px;
    width: 300px;
    height: 100vh;
    background-color: $dark-gray;
    border-left: 1px solid $light-gray;
    transition: right 0.3s;
    z-index: 999;

    .phone-numbers {
      display: none;
    }
  }

  .mobile-menu.open {
    right: 0;
  }

  .mobile-menu nav ul {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 4em;
  }

  .mobile-menu nav ul li {
    font-size: 1.2em;
    margin: 1em 0;
  }
  
  .mobile-menu nav ul li.social-links {
    display: flex;
    justify-content: center;
    
    img {
      margin: 0 10px;
      max-width: 29px;
    }
  }
}

@media screen and (max-width: 1070px) {
  .container {
    padding: 2em 1em;
  }
}

@media screen and (max-width: 920px) {
  .container {
    .social-links {
      display: none;
    }
    .content .nav li {
      margin: auto 0.5em;
    }
  }
}

@media screen and (max-width: 660px) {
  .container .content {
    
    .logo {
      flex: 1;
    }
    
    .phone-numbers {
      flex: 1;
    }
    
    .menu-toggle {
      display: block;
      cursor: pointer;
      
      img {
        width: 40px;
        height: 40px;
      }
    }
    
    .nav li {
      display: none;
    }
  }
}

@media screen and (max-width: 400px) {
  .container {

    .content .phone-numbers {
      display: none;
    }

    .mobile-menu .phone-numbers {
      display: block;
      text-align: center;
    }
  }
}
</style>
