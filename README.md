# Nuxt 3 Minimal Starter

Look at the [Nuxt 3 documentation](https://nuxt.com/docs/getting-started/introduction) to learn more.

## Установка для работы с файлами

Необходимо установить несколько пакетов:
Node.js - скачать можно по [ссылке](https://nodejs.org/en/download/current)
Также необходим редактор кода, если его у вас еще нет, рекомендую бесплатный [VSCode](https://code.visualstudio.com/download)

Необходимо редактором открыть папку с проектом и установить зависимости в терминала:

```bash
# npm
npm install
```

## Запуск локального сервера

Сервер запускается по адресу `http://localhost:3000`:

```bash
# npm
npm run dev
```

## Компиляция проекта (сборка для файлов для отправки на сервер)

Сборка для VDS:

```bash
# npm
npm run build
```

Сборка для VPS (если не знаете какой у вас сервер, выбирайте этот вариант):

```bash
# npm
npm run generate
```

## Структура проекта

- assets/
  - styles/
    - _variables.scss: Файл со стилями и переменными, используемыми в проекте (сейчас тут только цвета).
    - index.scss: Основной файл стилей проекта.
  - svg/: Директория для SVG файлов, используемых в проекте.
  
- components/
  - Layout/
    - footer.vue: Компонент для футера сайта.
    - header.vue: Компонент для шапки сайта.
  - main/
    - index/
      - index.vue: Главная страница сайта.
      - advantages.vue: Компонент с преимуществами компании.
    - about/
      - index.vue: Страница "О нас".
      - Info.vue: Компонент с информацией о компании.
      - Pogruzka.vue: Компонент для блока о погрузке.
      - Cart.vue: Компонент для Pogruzka.vue в котором текст
      - Work.vue: Компонент с информацией о работе компании.
    - form/
      - index.vue: Страница с формой обратной связи.
      - Modal.vue: Модальное окно для формы.
      - RequestForm.vue: Компонент самой формы.
  - UI/
    - Button.vue: Компонент для кнопок.
    - logo.vue: Компонент с логотипом.
    
- config/
  - config.js: Файл с данными для формы (тут нужно добавить id чата и id бота телеграма).
  
- layouts/
  - default.vue: Основной шаблон страниц сайта.
  
- pages/
  - index.vue: Главная страница сайта.
  
- public/
  - ico/: Директория для иконок.
  - img/: Директория для изображений.
  - favicon.ico: Иконка, отображаемая во вкладке браузера.
  
- nuxt.config.ts: Файл конфигурации Nuxt.js.

- package.json: Файл с описанием зависимостей и скриптов проекта.
