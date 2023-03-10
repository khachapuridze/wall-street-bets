<template>
  <div
    class="package-card"
    @mouseover="hovering = true"
    @mouseleave="hovering = false"
    @click="$emit('open', props.index + 1)"
  >
    <div class="hover-layer"></div>
    <img
      v-if="isMobile"
      :src="!isNaN(props.index) && require(`@/assets/services/${props.index + 1}/${props.index + 1} Mobile.png`)"
      alt="card"
    />

    <video v-else-if="!isMobile && !hovering" width="300" height="500" :autoplay="false" loop muted preload="auto">
      <source
        :src="!isNaN(props.index) && require(`@/assets/services/${props.index + 1}/${props.index + 1} WEBM.webm`)"
        type="video/webm"
      />

      Your browser does not support the video tag.
    </video>
    <video v-else-if="!isMobile && hovering" width="300" height="500" :autoplay="true" loop muted preload="auto">
      <source
        :src="!isNaN(props.index) && require(`@/assets/services/${props.index + 1}/${props.index + 1} WEBM.webm`)"
        type="video/webm"
      />

      Your browser does not support the video tag.
    </video>
    <div class="package-card__content">
      <div class="package-card__title">
        {{ data.title }} <span> {{ data.coloredTitle }} </span>
      </div>
      <div class="package-card__desc">
        {{ data.desc }}
      </div>
      <div class="package-card__btn">
        Pricing & Details
        <svg width="15" height="14" viewBox="0 0 15 14" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M6.4375 1.09375C6.125 1.40625 6.15625 1.875 6.4375 2.1875L10.2188 5.75H1.25C0.8125 5.75 0.5 6.09375 0.5 6.5V7.5C0.5 7.9375 0.8125 8.25 1.25 8.25H10.2188L6.4375 11.8438C6.15625 12.1562 6.15625 12.625 6.4375 12.9375L7.125 13.625C7.4375 13.9062 7.90625 13.9062 8.1875 13.625L14.2812 7.53125C14.5625 7.25 14.5625 6.78125 14.2812 6.46875L8.1875 0.40625C7.90625 0.125 7.4375 0.125 7.125 0.40625L6.4375 1.09375Z"
            fill="white"
          />
        </svg>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from '@vue/reactivity';

const props = defineProps({
  data: Object,
  index: Number,
});
const hovering = ref(false);
const isMobile = window.matchMedia('only screen and (max-width: 768px)').matches;
</script>

<style lang="scss" scoped>
.package-card {
  width: 512px;
  height: 640px;
  background: linear-gradient(360deg, #050505 0%, rgba(5, 5, 5, 0.661458) 32.29%, rgba(5, 5, 5, 0) 100%);
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 12px;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  cursor: pointer;
  transition: 1s ease;

  @media (max-width: 1500px) {
    width: 28%;
    height: 540px;
  }
  @media screen and (max-width: 1079px) {
    width: 100%;
  }
  @media screen and (max-width: 726px) {
    width: 100%;
    height: 390px;
  }
  @media screen and (max-width: 435px) {
    height: 55vh;
  }
  .hover-layer {
    position: absolute;
    width: 100%;
    height: 100%;
    left: 0;
    top: 0;
    background: linear-gradient(360deg, #050505 0%, rgba(5, 5, 5, 0.661458) 32.29%, rgba(5, 5, 5, 0) 100%);
    opacity: 0.64;
    z-index: 1;
    border-radius: 12px;
    transition: 0.2s ease;
    @media screen and (max-width: 726px) {
      opacity: 0.88;
    }
  }
  &__title {
    font-family: 'olympiccarrierexpand';
    font-style: normal;
    font-weight: 400;
    font-size: 36px;
    line-height: 30px;
    text-align: left;
    color: #ffffff;
    margin: 0 auto;
    margin-left: 48px;
    width: 90%;
    transform: translate(0px, 220px);
    transition: 0.4s ease;
    span {
      color: #0eacd3;
    }
    @media screen and (max-width: 726px) {
      font-size: 28px;
      line-height: 40px;
      transform: unset;
    }

    @media screen and (max-width: 490px) {
      font-size: 20px;
      line-height: 28px;
      margin-left: 20px;
    }
  }
  @media screen and (min-width: 726px) {
    &:hover {
      .hover-layer {
        background: #050505;

        opacity: 0.88;
      }
      .package-card__title {
        transform: translate(0px, -60px);
      }
      .package-card__desc,
      .package-card__btn {
        opacity: 1;
        visibility: visible;
        transform: translate(0, -50px);
        transition-delay: 0.2s;
      }
    }
  }
  &__content {
    position: relative;
    z-index: 2;
    @media screen and (max-width: 726px) {
      padding: 20px 0;
    }
  }
  &__desc,
  &__btn {
    opacity: 0;
    visibility: hidden;
    z-index: 2;
    transition: 0.2s ease;
    transform: translate(0, 0);
  }
  &__desc {
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    line-height: 36px;
    text-align: left;
    color: #bfbfbf;
    margin: 30px 0;
    max-width: 300px;
    margin-left: 48px;

    @media screen and (max-width: 726px) {
      font-size: 16px;
      line-height: 24px;
      margin: 20px auto;
      opacity: 1;
      visibility: visible;
      text-align: left;
    }
    @media screen and (max-width: 435px) {
      margin-left: 20px;
    }
  }
  img,
  video {
    position: absolute;
    width: 100%;
    height: 100%;
    object-fit: cover;
    left: 0;
    top: 0;
    border-radius: 12px;
  }
  &__btn {
    display: flex;
    align-items: center;
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 700;
    font-size: 16px;
    line-height: 20px;
    padding: 20px;
    max-height: 60px;
    width: fit-content;
    color: #ffffff;
    margin: 0 auto;
    border: 1px solid #ffffff;
    border-radius: 4px;
    cursor: pointer;
    margin-left: 48px;

    @media screen and (max-width: 726px) {
      opacity: 1;
      visibility: visible;
      margin-left: 20px;
    }
    svg {
      margin-left: 10px;
    }
  }
}
</style>
