<template>
  <div class="projects-slider">
    <!-- @swiper="onSwiper"
      @slideChange="onSlideChange" -->
    <swiper
      :space-between="50"
      :centeredSlides="true"
      :loop="true"
      :slidesPerView="1.55"
      navigation
      :breakpoints="{
        300: {
          slidesPerView: 1.2,
          spaceBetween: 50,
        },
        400: {
          slidesPerView: 1.3,
          spaceBetween: 100,
        },
        1000: {
          slidesPerView: 1.2,
        },
        1500: {
          slidesPerView: 1.3,
        },
        1700: {
          slidesPerView: 1.55,
        },
      }"
    >
      <swiper-slide>
        <ProjectSliderItem />
      </swiper-slide>
      <swiper-slide>
        <ProjectSliderItem />
      </swiper-slide>
      <swiper-slide>
        <ProjectSliderItem />
      </swiper-slide>
      <swiper-slide>
        <ProjectSliderItem />
      </swiper-slide>
      <swiper-slide>
        <ProjectSliderItem />
      </swiper-slide>
      <swiper-slide>
        <ProjectSliderItem />
      </swiper-slide>
    </swiper>
  </div>
</template>

<script>
// import Swiper core and required components
import SwiperCore, { Navigation, A11y } from 'swiper';

// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from 'swiper/vue';

import ProjectSliderItem from './ProjectSliderItem.vue';

SwiperCore.use([Navigation, A11y]);
export default {
  components: {
    ProjectSliderItem,
    Swiper,
    SwiperSlide,
  },
};
</script>

<style lang="scss">
.projects-slider {
  .swiper-wrapper {
    .swiper-slide {
      height: 409px;
      transition: 0.2s ease;
    }
    @media screen and (min-width: 1081px) {
      .swiper-slide-active {
        transform: scaleY(1.15);
        .slider-item {
          opacity: 1;
        }
      }
    }
    @media screen and (max-width: 1080px) {
      .slider-item {
        opacity: 1;
        opacity: 1;
        display: flex;
        flex-direction: column;
        height: auto;
        padding: 32px;
        img {
          width: 100%;
          height: 269px;
          object-fit: cover;
        }
      }
    }
    @media screen and (max-width: 1080px) {
      .slider-item {
        img {
          height: 197px;
        }
      }
    }
  }
  .swiper-container {
    overflow: visible;

    .swiper-button-prev,
    .swiper-button-next {
      bottom: -40%;
      left: calc(50vw - 90px);
      top: unset;
      background: #1f1927;
      border: 2px solid #ffffff;
      border-radius: 6px;
      width: 88px;
      height: 88px;
      transition: 0.2s ease;
      @media screen and (max-width: 1080px) {
        bottom: -85% !important;
      }
      @media screen and (max-width: 719px) {
        bottom: -66% !important;
        width: 64px;
        height: 64px;
        left: calc(50vw - 70px);
      }
      &::after {
        font-size: 25px;
        font-weight: bold;
        color: #ffffff;
      }
      &:hover {
        background-color: #dc0506;
        border: 2px solid #dc0506;
      }
    }

    .swiper-button-next {
      bottom: -40%;
      right: calc(48vw - 90px);
      left: unset;
      top: unset;
      @media screen and (max-width: 719px) {
        right: calc(48vw - 60px);
      }
    }
  }
}
</style>
