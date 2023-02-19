<template>
  <div class="packages" id="packages">
    <h2 class="packages__title">Promotion <span> Packages </span></h2>
    <p class="packages__subtitle">All packages 25% off if paid in $WSB token.</p>
    <div class="packages__list packages__list-first" data-scroll>
      <PackageCard
        v-for="(i, indx) in packageJSON.slice(0, 3)"
        @open="openPackage(i, indx + 1)"
        :key="indx"
        :index="indx"
        :data="i"
      />

      <PackageCard
        v-for="(i, indx) in packageJSON.slice(3, 6)"
        class="mobile"
        @open="openPackage(i, indx + 1)"
        :index="indx"
        :key="indx"
        :data="i"
      />
    </div>
    <div class="packages__list packages__list-second">
      <PackageCard
        v-for="(i, indx) in packageJSON.slice(3, 6)"
        @open="openPackage(i, indx + 4)"
        :key="indx + 3"
        :index="indx + 3"
        :data="i"
      />
    </div>
    <div class="packages__list packages__list-third" :class="{ active: $store.state.menuIsOpen }">
      <PackageCard
        v-for="(i, indx) in packageJSON.slice(6)"
        @open="openPackage(i, indx + 7)"
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
        <PackageCard :index="indx" @open="openPackage(i, indx + 1)" :data="i" />
      </swiper-slide>
    </swiper>
    <Button @click="toggleSeeMore" class="packages-btn" :title="!$store.state.menuIsOpen ? 'see more' : 'see less'" />
    <teleport to="#form-modal">
      <div class="form-container" :class="{ open: formOpen }">
        <div class="form-container__layer" @click="closeForm"></div>
        <Form v-if="formOpen" @close="closeForm" />
      </div>
    </teleport>
  </div>
</template>

<script>
import { useStore } from 'vuex';
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
  methods: {
    toggleSeeMore() {
      this.$store.commit('toggleMenu');
    },
  },
  setup(props, { emit }) {
    const store = useStore();

    const formOpen = ref(false);
    const seeMore = ref(false);
    const packageJSON = [
      {
        id: 1,
        title: 'Standard Pinned Post',
        service: 'standard_pinned_post',
        coloredTitle: '',
        desc: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking atits layout.',
      },
      {
        id: 2,
        title: 'Text ',
        coloredTitle: 'AMA 💬',
        service: 'text_ama',
        desc: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking atits layout.',
      },
      {
        id: 3,
        title: 'Voice Chat ',
        coloredTitle: 'AMA 🗣',
        service: 'voice_chat_ama',
        desc: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking atits layout.',
      },
      {
        id: 4,
        title: 'Hidden ',
        coloredTitle: 'Gem 💎',
        service: 'hidden_gem',
        desc: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking atits layout.',
      },
      {
        id: 5,
        title: 'Post ',
        coloredTitle: 'on Top Crypto Sub Reddits',
        service: 'post_on_top_crypto_sub_reddits',
        desc: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking atits layout.',
      },
      {
        id: 6,
        title: 'SuperShiller ',
        coloredTitle: 'Special',
        service: 'supershiller_special',
        desc: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking atits layout.',
      },
      {
        id: 7,
        title: 'Mini-Voice ',
        coloredTitle: 'AMA/"Meet and Greet"',
        service: 'mini_voice_ama_meet_and_greet',
        desc: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking atits layout.',
      },
      {
        id: 8,
        title: 'Shilling ',
        coloredTitle: 'Service',
        service: 'shilling_service',
        desc: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking atits layout.',
      },
    ];

    const openPackage = (value, id) => {
      formOpen.value = true;
      emit('toggleScroll', true);

      store.commit('setService', { ...value, id });

      document.body.style.overflowY = 'hidden';
      document.getElementById('js-scroll').style.overflow = 'hidden';
    };
    const closeForm = () => {
      setTimeout(() => {
        formOpen.value = false;
      }, 1);
      emit('toggleScroll', false);
      document.body.style = '';
      document.getElementById('js-scroll').style.overflow = 'auto';
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
      height: 640px;

      opacity: 1;
      visibility: visible;
      transition: opacity 0.5s ease 0.3s;
      @media (max-width: 1500px) {
        height: 540px;
      }
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
      overflow: hidden;
      padding-bottom: 60px;
      .swiper-pagination {
        bottom: 0px;
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
