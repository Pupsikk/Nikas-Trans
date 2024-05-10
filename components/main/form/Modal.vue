<template>
  <div class="modal" v-if="showModal">
    <div class="modal-content">
      <span class="close" @click="closeModal">&times;</span>
      <p>{{ modalMessage }}</p>
      <!-- <button @click="closeModal">{{ modalButton }}</button> -->
    </div>
  </div>
</template>

<script>
export default {
  props: {
    showModal: {
      type: Boolean,
      default: false
    },
    modalMessage: {
      type: String,
      default: ''
    },
    modalButton: {
      type: String,
      default: 'Закрыть'
    }
  },
  methods: {
    closeModal() {
      this.$emit('close');
    }
  }
}
</script>

<style lang="scss" scoped>
.modal {
  position: fixed;
  z-index: 1;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  background-color: rgba(0, 0, 0, 0.2);

  .modal-content {
    background-color: #221F18;
    margin: 5% auto;
    padding: 20px;
    border-radius: 14px;
    border: 1px solid #383C48;
    width: 80%;
    max-width: 500px;
  }

  .close {
    margin-left: 1em;
    color: #f4f4f4;
    float: right;
    font-size: 28px;
    font-weight: bold;

    &:hover,
    &:focus {
      color: #f4f4f4;
      text-decoration: none;
      cursor: pointer;
    }
  }
}
</style>
