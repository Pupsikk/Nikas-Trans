<template>
  <!-- Компонент кнопки с динамическими классами и стилями -->
  <button :class="[colorClass]" @click="$emit('click')">
    {{ title }} <slot></slot>
  </button>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: true,
    },
    color: {
      type: String,
      default: "white",
    },
  },
  computed: {
    colorClass() {
      return this.color === "white" ? "white-button" : "yellow-button";
    },
  },
};
</script>

<style lang="scss" scoped>
/* Стили для всех кнопок */
button {
  padding: 10px 37px;
  cursor: pointer;
  border-radius: 34px;
  font-weight: 600;
  border: 3px solid $white;
  color: $white;
  font-size: 1em;
  transition: 0.5s;

  /* Стили для синей кнопки */
  &.white-button {
    background: unset;
    &:hover {
      border-color: $yellow;
      background: $yellow;
      color: $black;
      transition: 0.5s;
    }
  }

  /* Стили для зеленой кнопки */
  &.yellow-button {
    background: $yellow;
    border-color: $yellow;
    color: $black;
    &:hover {
      background: unset;
      border-color: $white;
      color: $white;
    }
  }
}
</style>
