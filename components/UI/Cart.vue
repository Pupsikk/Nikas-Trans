<template>
  <div class="box">
    <p class="title"> {{ title }}</p>
    <p class="text">{{ text }}</p>
  </div>
</template>

<script>
export default {
  props: {
    // Текст кнопки, обязательный параметр
    title: String,
    text: String,
  }
}
</script>

<style lang="scss" scoped>
.box {
  background-color: #525253;
  max-width: 265px;
  height: 154px;
  border-radius: 14px;
  padding: 1em;
  flex: 1;
  
  .title {
    font-size: 18px;
    font-weight: 700;
    padding-bottom: .5em;
  }
  
  .text {
    font-size: 14px;
  }
}

@media screen and (max-width: 560px) {
  .box {
    height: auto;
    margin: 5px;
  }
}
</style>