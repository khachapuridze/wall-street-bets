<template>
  <div class="slider-item">
    <img src="../assets/images/project.png" alt="project" />
    <div class="slider-item__content">
      <div class="slider-item__title">
        Sample
        <span>Title goes here</span>
      </div>
      <p>
        It is a long established fact that a reader will be distracted by the readable content of a page when looking
        at...
      </p>
      <div class="slider-item__btn">
        Sample Button<svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M5.94082 0.922108C5.62814 1.24284 5.65941 1.72394 5.94082 2.04467L9.72418 5.70103H0.750419C0.312674 5.70103 0 6.05384 0 6.47079V7.49714C0 7.94616 0.312674 8.2669 0.750419 8.2669H9.72418L5.94082 11.9553C5.65941 12.2761 5.65941 12.7572 5.94082 13.0779L6.6287 13.7835C6.94137 14.0722 7.41039 14.0722 7.69179 13.7835L13.7889 7.52921C14.0704 7.24055 14.0704 6.75945 13.7889 6.43872L7.69179 0.216495C7.41039 -0.072165 6.94137 -0.072165 6.6287 0.216495L5.94082 0.922108Z"
            fill="white"
          />
        </svg>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.slider-item {
  width: 100%;
  max-width: fit-content;

  height: -webkit-fill-available;
  //   height: calc(409px - 96px);
  background: #1f1927;
  border: 1px solid #574f61;
  border-radius: 16px;
  padding: 48px;
  display: flex;
  align-items: center;
  gap: 48px;
  transition: 0.2s ease;
  opacity: 0.48;
  img {
    width: 512px;
    height: 382px;
    border-radius: 12px;
  }
  &__content {
    display: flex;
    flex-direction: column;
    align-items: center;
    @media screen and (max-width: 1080px) {
      align-items: flex-start;
    }
  }
  &__title {
    font-family: 'olympiccarrierexpand';
    font-style: normal;
    font-weight: 400;
    font-size: 36px;
    line-height: 40px;
    color: #ffffff;
    text-align: left;
    @media (max-width: 719px) {
      font-size: 20px;
      line-height: 28px;
    }
    span {
      color: #0eacd3;
    }
  }
  p {
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 500;
    font-size: 20px;
    line-height: 32px;
    color: #bfbfbf;
    margin: 32px 0;
    @media screen and (max-width: 1080px) {
      text-align: left;
    }
    @media (max-width: 719px) {
      font-size: 14px;
      line-height: 20px;
    }
  }
  &__btn {
    cursor: pointer;
    width: fit-content;
    max-height: 60px;
    display: flex;
    align-items: center;
    border: 2px solid #ffffff;
    border-radius: 6px;
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 700;
    font-size: 20px;
    line-height: 32px;
    color: #ffffff;
    padding: 25px;
    @media (max-width: 719px) {
      font-size: 14px;
      line-height: 20px;
    }
    svg {
      margin-left: 12px;
    }
  }
}
</style>
