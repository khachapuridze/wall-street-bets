<template>
  <div class="packages" id="packages">
    <h2 class="packages__title">Promotion <span> Packages </span></h2>
    <p class="packages__subtitle">All packages 25% off if paid in $WSB token.</p>
    <div class="packages__list packages__list-first" data-scroll>
      <PackageCard
        v-for="(i, indx) in packageJSON.slice(0, 3)"
        @open="openPackage"
        :key="indx"
        :index="indx"
        :data="i"
      />

      <PackageCard
        v-for="(i, indx) in packageJSON.slice(3, 6)"
        class="mobile"
        @open="openPackage"
        :index="indx"
        :key="indx"
        :data="i"
      />
    </div>
    <div class="packages__list packages__list-second">
      <PackageCard
        v-for="(i, indx) in packageJSON.slice(3, 6)"
        @open="openPackage"
        :key="indx + 3"
        :index="indx + 3"
        :data="i"
      />
    </div>
    <div class="packages__list packages__list-third" :class="{ active: seeMore }">
      <PackageCard
        v-for="(i, indx) in packageJSON.slice(6)"
        @open="openPackage"
        :key="indx + 6"
        :index="indx + 6"
        :data="i"
      />
    </div>
    <swiper
      :space-between="50"
      :centeredSlides="true"
      :loop="true"
      :slidesPerView="1"
      :pagination="{ clickable: true }"
    >
      <swiper-slide v-for="(i, indx) in packageJSON" @open="openPackage" :key="indx">
        <PackageCard :index="indx" @open="openPackage" :data="i" />
      </swiper-slide>
    </swiper>
    <Button @click="seeMore = !seeMore" class="packages-btn" :title="!seeMore ? 'see more' : 'see less'" />
    <div class="form-container" :class="{ open: formOpen }">
      <div class="form-container__layer" @click="closeForm"></div>
      <Form @close="closeForm" />
    </div>
  </div>
</template>

<script>
// import Swiper core and required components
import SwiperCore, { Pagination, A11y } from 'swiper';
import { ref } from 'vue';

// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from 'swiper/vue';

import PackageCard from './PackageCard.vue';
import Button from './Button.vue';
import Form from './Form.vue';

SwiperCore.use([Pagination, A11y]);
export default {
  components: { PackageCard, Button, Swiper, SwiperSlide, Form },
  setup(props, { emit }) {
    const formOpen = ref(false);
    const seeMore = ref(false);
    const packageJSON = [
      {
        id: 1,
        title: 'Standard Pinned Post',
        coloredTitle: '',
        desc: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking atits layout.',
      },
      {
        id: 2,
        title: 'Text ',
        coloredTitle: 'AMA 💬',
        desc: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking atits layout.',
      },
      {
        id: 3,
        title: 'Voice Chat ',
        coloredTitle: 'AMA 🗣',
        desc: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking atits layout.',
      },
      {
        id: 4,
        title: 'Hidden ',
        coloredTitle: 'Gem 💎',
        desc: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking atits layout.',
      },
      {
        id: 5,
        title: 'Post ',
        coloredTitle: 'on Top Crypto Sub Reddits',
        desc: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking atits layout.',
      },
      {
        id: 6,
        title: 'SuperShiller ',
        coloredTitle: 'Special',
        desc: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking atits layout.',
      },
      {
        id: 7,
        title: 'Mini-Voice ',
        coloredTitle: 'AMA/"Meet and Greet" ',
        desc: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking atits layout.',
      },
      {
        id: 8,
        title: 'Shilling ',
        coloredTitle: 'Service',
        desc: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking atits layout.',
      },
    ];
    const openPackage = (value) => {
      formOpen.value = true;
      emit('toggleScroll', true);
      console.log(value);
    };
    const closeForm = () => {
      formOpen.value = false;
      emit('toggleScroll', false);
    };
    return {
      formOpen,
      openPackage,
      packageJSON,
      closeForm,
      seeMore,
    };
  },
};
</script>

<style lang="scss">
.packages {
  margin-top: 150px;
  margin-bottom: 160px;
  &__title {
    font-weight: 400;
    font-size: 48px;
    line-height: 40px;
    text-align: center;
    font-family: 'olympiccarrierexpand';
    color: #ffffff;
    @media screen and (max-width: 1079px) {
      font-style: normal;
      font-weight: 400;
      font-size: 36px;
      line-height: 52px;
    }
    @media screen and (max-width: 435px) {
      font-weight: 400;
      font-size: 24px;
      line-height: 32px;
    }
    span {
      color: #dc0506;
    }
  }
  &__subtitle {
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 500;
    font-size: 24px;
    line-height: 36px;
    text-align: center;
    color: #bfbfbf;
    @media screen and (max-width: 1079px) {
      font-style: normal;
      font-weight: 500;
      font-size: 20px;
      line-height: 32px;
    }
    @media screen and (max-width: 435px) {
      font-weight: 500;
      font-size: 16px;
      line-height: 24px;
      margin-bottom: 32px;
    }
  }
  &__list {
    gap: 65px;
    display: flex;
    margin-top: 85px;
    &.active {
      height: 540px;
      opacity: 1;
      visibility: visible;
      transition: opacity 0.5s ease 0.3s;
    }
    .mobile {
      display: none;
      @media screen and (max-width: 1079px) {
        display: flex;
      }
    }
    &-second {
      justify-content: flex-end;
      margin-bottom: 65px;

      @media screen and (max-width: 870px) {
        display: none !important;
      }
    }
    &-third {
      height: 0;
      opacity: 0;
      visibility: hidden;
      transition: height 0.5s ease;
      @media screen and (max-width: 870px) {
        display: none;
      }
    }
    @media screen and (max-width: 1079px) {
      display: grid;
      grid-template-columns: 1fr 1fr;
      margin-left: 25px;
      margin-right: 25px;
      gap: 33px;
      margin-bottom: 65px;
    }
    @media screen and (max-width: 435px) {
      display: none;
    }
  }
  .packages-btn {
    margin: auto;
    margin-top: 65px;

    @media screen and (max-width: 435px) {
      margin-top: 80px !important;
      display: none;
    }
  }
  .form-container {
    transition: 0.5s ease;
    opacity: 0;
    visibility: hidden;
    display: flex;
    justify-content: center;

    &.open {
      opacity: 1;
      visibility: visible;
      .form {
        opacity: 1;
        visibility: visible;
        transition: opacity 0.5s ease 0.5s;
      }
    }
    &__layer {
      position: fixed;
      width: 100vw;
      height: 100%;
      background: black;
      opacity: 0.9;
      top: 0;
      left: 0;
      z-index: 99;
    }
  }
  .swiper-container {
    display: none;
  }
  @media screen and (max-width: 1079px) {
    margin-bottom: 150px;
  }
  @media screen and (max-width: 435px) {
    margin-top: 68px;
    padding: 0 20px;
    .swiper-container {
      display: block;
      overflow: visible;
      .swiper-pagination {
        bottom: -45px;
        gap: 24px;
        display: flex;
        justify-content: center;
        .swiper-pagination-bullet {
          width: 16px;
          height: 16px;
          background-color: #ffffff;
          opacity: 1;
          margin: 0;
          transition: 0.2s ease;
          &.swiper-pagination-bullet-active {
            width: 32px;
            background: #dc0506;
            border-radius: 999px;
          }
        }
      }
    }
  }
}
</style>
