<template>
  <div class="wrap">
    <div class="content">
      <div class="box">
        <img src="~/assets/svg/truck-1.svg" alt="SVG иконка грузовика">
        <p>Грузоперевозка любым видом автотранспорта</p>
      </div>
      <div class="box">
        <img src="~/assets/svg/truck-2.svg" alt="SVG иконка грузовика">
        <p>Без ограничений на грузоподъемность и объем</p>
      </div>
      <div class="box">
        <img src="~/assets/svg/truck-3.svg" alt="SVG иконка грузовика">
        <p>Перевозка в прямом и в обратном направлении</p>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.wrap {
  width: 100%;
  padding: 4em 1em 1em;
  background-image: linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, .7), rgb(0, 0, 0, .9));
  position: absolute;
  bottom: 0;

  .content {
    display: flex;
    justify-content: space-between;
    
    .box {
      display: flex;
      align-items: center;
      max-width: 300px;
      margin: auto 1em;

      img {
        max-width: 65px;
        height: auto;
      }

      p {
        margin-left: 1em;
      }
    }
  }

  @media screen and (max-width: 860px) {
    .content {
      flex-direction: column;
      align-items: center;

      .box {
        margin-right: 25%;
      }
      
      .box:nth-child(2) {
        flex-direction: row-reverse; /* Реверс для среднего box */
        margin-right: 0;
        margin-left: 25%;
        max-width: 320px;
        
        p {
          margin-right: 10px;
          text-align: right;
        }
      }
      
      @media screen and (max-width: 450px) {
        .box {
          margin-right: 10%;
        }
          
          .box:nth-child(2) {
            margin-left: 10%;
          }
      }
      
      @media screen and (max-width: 380px) {
        .box {
          margin-right: 0;
          max-width: 100%;
        }
        
        .box:nth-child(2) {
            max-width: 100%;
            margin-left: 0;
          }
      }
    }
  }
}
</style>