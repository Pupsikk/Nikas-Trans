<template>
  <div class="content">
    <form @submit.prevent="submitForm">
      <div class="input-group">
        <div>
          <p>Страна загрузки</p>
          <select v-model="loadingCountry" required>
            <option value="" disabled selected>Выберите страну</option>
            <option v-for="(country, index) in loadingCountries" :key="index" :value="country">{{ country }}</option>
          </select>
        </div>
        <div>
          <p>Город загрузки</p>
          <input type="text" v-model="loadingCity" required placeholder="Кишинев" @input="loadingCity = textFilter(loadingCity, 20)">
        </div>
        <div>
          <p>Страна выгрузки</p>
          <select v-model="unloadingCountry" required>
            <option value="" disabled selected>Выберите страну</option>
            <option v-for="(country, index) in unloadingCountries" :key="index" :value="country">{{ country }}</option>
          </select>
        </div>
        <div>
          <p>Город выгрузки</p>
          <input type="text" v-model="unloadingCity" required placeholder="Анкара" @input="unloadingCity = textFilter(unloadingCity, 20)">
        </div>

        <div>
          <p>Наименование груза</p>
          <input type="text" v-model="cargoName" required placeholder="Сырье" @input="cargoName = textFilter(cargoName, 20)">
        </div>
        <div>
          <p>Дата погрузки</p>
          <input type="date" v-model="loadingDate" required>
        </div>
        <div>
          <p>Тип транспорта</p>
          <input type="text" v-model="transportType" required placeholder="Тент" @input="transportType = textFilter(transportType, 20)">
        </div>
        <div>
          <p>Вес груза (т)</p>
          <input type="text" v-model="cargoWeight" required placeholder="00" @input="cargoWeight = numberFilter(cargoWeight, 6)">
        </div>

        <div>
          <p>Объем груза</p>
          <div class="flex">
            <input class="input-cargo" type="text" v-model="cargoVolume" required placeholder="00" @input="cargoVolume = numberFilter(cargoVolume, 6)">
            <input class="input-unit" type="text" v-model="volumeUnit" required placeholder="м3" @input="volumeUnit = alphanumericFilter(volumeUnit, 6)">
          </div>
        </div>
        <div>
          <p>Контактное лицо</p>
          <input type="text" v-model="contactPerson" required placeholder="Имя" @input="contactPerson = textFilter(contactPerson, 30)">
        </div>
        <div>
          <p>Контактный телефон</p>
          <input type="tel" v-model="contactPhone" required placeholder="+373" @input="contactPhone = phoneFilter(contactPhone, 14)">
        </div>
      </div>
      <UIButton title="Рассчитать стоимость" color="yellow" type="submit" />
    </form>
    <MainFormModal :show-modal="showModal" :modal-message="modalMessage" @close="showModal = false" />
  </div>
</template>

<script>
import axios from "axios";
import { telegramToken, telegramChatId } from "/config/config.js";

export default {
  data() {
    return {
      loadingCountry: "",
      loadingCity: "",
      unloadingCountry: "",
      unloadingCity: "",
      cargoName: "",
      loadingDate: "",
      transportType: "",
      cargoWeight: "",
      cargoVolume: "",
      volumeUnit: "",
      contactPerson: "",
      contactPhone: "",
      showModal: false,
      modalMessage: '',
      loadingCountries: [
        "Австрия", "Азербайджан", "Албания", "Армения", "Белоруссия", "Бельгия", 
        "Болгария", "В.Британия", "Венгрия", "Германия", "Греция", "Грузия", 
        "Дания", "Испания", "Италия", "Казахстан", "Латвия", "Литва", "Македония", 
        "Молдова", "Нидерланды", "Польша", "Португалия", "Россия", "Румыния", 
        "Сербия", "Словакия", "Словения", "Туркменистан", "Турция", "Узбекистан", 
        "Украина", "Финляндия", "Франция", "Хорватия", "Чехия", "Швеция", "Эстония"
      ],
      unloadingCountries: [
        "Австрия", "Азербайджан", "Албания", "Армения", "Белоруссия", "Болгария", 
        "Босния", "В.Британия", "Венгрия", "Германия", "Греция", "Грузия", 
        "Ирак", "Ирландия", "Испания", "Италия", "Казахстан", "Киргизстан", 
        "Латвия", "Ливан", "Македония", "Молдова", "Нидерланды", "Польша", 
        "Россия", "Румыния", "Сербия", "Словакия", "США", "Таджикистан", 
        "Турция", "Узбекистан", "Украина", "Франция", "Хорватия", "Чехия", 
        "Швейцария"
      ],
    };
  },
  methods: {
    submitForm() {
      const token = telegramToken;
      const url = `https://api.telegram.org/bot${token}/sendMessage`;

      const message = `
        Заявка на груз:
        
        Страна загрузки: ${this.loadingCountry}
        Город загрузки: ${this.loadingCity}
        Страна выгрузки: ${this.unloadingCountry}
        Город выгрузки: ${this.unloadingCity}
        
        Наименование груза: ${this.cargoName}
        Дата погрузки: ${this.loadingDate}
        Тип транспорта: ${this.transportType}
        Вес груза: ${this.cargoWeight} т
        
        Объем груза: ${this.cargoVolume} ${this.volumeUnit}
        Контактное лицо: ${this.contactPerson}
        Контактный телефон: ${this.contactPhone}`;

        axios
        .post(url, {
          chat_id: telegramChatId,
          text: message,
        })
        .then((response) => {
          // Обработка успешного ответа
          this.showModal = true;
          this.modalMessage = 'Спасибо! Заявка успешно отправлена!';
          setTimeout(() => {
            this.showModal = false;
          }, 10000); // Закрыть модальное окно через 10 секунд
        })
        .catch((error) => {
          // Обработка ошибок
          this.showModal = true;
          this.modalMessage = 'Произошла ошибка при отправке формы, попробуйте позже.';
          setTimeout(() => {
            this.showModal = false;
          }, 10000); // Закрыть модальное окно через 10 секунд
        });
    },
    // Фильтрация для полей, требующих только кириллицу, латиницу и цифры
    alphanumericFilter(value, maxLength) {
      return value.replace(/[^a-zA-Zа-яА-Я0-9 ]/g, "").slice(0, maxLength);
    },
    // Фильтрация для полей, требующих только кириллицу или латиницу
    textFilter(value, maxLength) {
      return value.replace(/[^a-zA-Zа-яА-Я ]/g, "").slice(0, maxLength);
    },
    // Фильтрация для полей, требующих только цифры и символ +
    phoneFilter(value, maxLength) {
      return value.replace(/[^\d+]/g, "").slice(0, maxLength);
    },
    // Фильтрация для полей, требующих только цифры, точку, запятую и тире
    dateFilter(value, maxLength) {
      return value.replace(/[^\d.,-]/g, "").slice(0, maxLength);
    },
    // Фильтрация для полей, требующих только цифры
    numberFilter(value, maxLength) {
      return value.replace(/[^\d]/g, "").slice(0, maxLength);
    },
  },
};
</script>

<style lang="scss" scoped>
.content {
  max-width: 1100px;
  padding: 2em;
  background-color: $light-gray;
  border-radius: 14px;
  text-align: center;
  margin: auto;

  .input-group {
    display: grid;
    grid-template-columns: repeat(
      4,
      1fr
    ); // Определение четырех столбцов равной ширины
    gap: 1em; // Пространство между элементами внутри grid
    margin-bottom: 1em;
    text-align: left;

    div {
      margin: auto;
      width: 100%;
    }

    .flex {
      display: flex;

      .input-cargo {
        flex: 2;
        margin-right: 1em;
      }

      .input-unit {
        flex: 1;
      }
    }

    p {
      margin-bottom: 0.5em;
    }

    input,
    select,
    textarea {
      width: 100%;
      border-radius: 14px;
      border: unset;
      padding: 0.8em;
      color: $black;
    }

    input:focus,
    select:focus,
    textarea:focus {
      outline: none;
    }

    select option {
      color: $black;
      background-color: $white;
    }
  }
  button {
    margin-top: 2em;
  }

  @media screen and (max-width: 1045px) {
    .input-group {
      grid-template-columns: repeat(3, 1fr);
    }
  }

  @media screen and (max-width: 820px) {
    .input-group {
      grid-template-columns: repeat(2, 1fr);
    }
  }

  @media screen and (max-width: 440px) {
    .input-group {
      grid-template-columns: repeat(1, 1fr);
    }
  }
}
</style>
