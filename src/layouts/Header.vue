<template>
  <div
    class="header w-c"
    :class="{ 'open-top': isOpen }"
    data-scroll
    data-scroll-sticky
    data-scroll-target="#js-scroll"
  >
    <div class="container">
      <div class="header__logo__mobile" @click="toggleMenu" :class="{ open: isOpen }">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </div>
      <div class="header__logo">
        <video preload="auto" autoplay loop muted>
          <source src="@/assets/2.webm" type="video/webm" />

          Your browser does not support the video tag.
        </video>
        <img class="mobile-header-img" src="../assets/images/logo.png" alt="form" />
        <!-- <img src="../assets/images/logo.png" alt="logo" /> -->
      </div>

      <div class="header__nav">
        <div class="header__nav-item" @click="$emit('scrollTo', 'about-us')">About Us</div>
        <div class="header__nav-item" @click="$emit('scrollTo', 'packages')">Services</div>
        <div class="header__nav-item" @click="$emit('scrollTo', 'our-projects')">Projects</div>
        <div class="header__nav-item" @click="$emit('scrollTo', 'community')">Community</div>
        <!-- <div class="header__nav-item" @click="$emit('scrollTo', 'partners')">Partners</div> -->
      </div>
      <ButtonComponent title="Book Now" />

      <div class="mobile-content" :class="{ open: isOpen }">
        <img src="../assets//images/background.png" alt="background" />
        <div class="header__nav">
          <a @click="toggleMenu" href="#" class="header__nav-item active">About Us</a>
          <a @click="toggleMenu" href="#packages" class="header__nav-item">Services</a>
          <a @click="toggleMenu" href="#our-projects" class="header__nav-item">Projects</a>
          <a @click="toggleMenu" href="#community" class="header__nav-item">Community</a>
        </div>
        <ButtonComponent title="Book Now" />
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from 'vue';
import ButtonComponent from '../components/Button.vue';
export default {
  components: { ButtonComponent },
  data() {
    return {
      isOpen: false,
    };
  },
  methods: {
    toggleMenu() {
      this.isOpen = !this.isOpen;
      if (this.isOpen) {
        document.body.style.overflowY = 'hidden';
        document.getElementById('js-scroll').style.overflow = 'hidden';
      } else {
        document.body.style = '';
        document.getElementById('js-scroll').style.overflow = 'auto';
      }
    },
  },
};
</script>

<style lang="scss">
.header {
  padding-top: 50px !important;
  z-index: 999999999;
  position: relative;
  z-index: 10;
  overflow: visible;
  background: linear-gradient(180deg, #050505 0%, rgba(5, 5, 5, 0.526042) 58.85%, rgba(5, 5, 5, 0) 100%);
  .container {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  &.open-top {
    background: linear-gradient(180deg, #120325 0%, #050505 100%);
    padding-bottom: 50px;
  }
  @media screen and (max-width: 870px) {
    align-items: flex-start;
    position: sticky;
    top: 0;
    background: linear-gradient(180deg, #050505 0%, rgba(5, 5, 5, 0.526042) 58.85%, rgba(5, 5, 5, 0) 100%);
  }
  @media screen and (max-width: 435px) {
    flex-direction: row-reverse;
    padding-top: 24px !important;
    padding-bottom: 24px !important;
  }
  &__logo {
    width: 208px;
    position: relative;

    @media screen and (max-width: 870px) {
      position: relative;
    }

    video,
    .mobile-header-img {
      width: 208px;
      position: absolute;
      top: -80px;
      left: 0;

      @media screen and (max-width: 870px) {
        width: 158px;
        top: -45px;
        left: 67%;
        transform: translate(-50%, 0%);
      }
      @media screen and (max-width: 435px) {
        width: 160px;
        top: -60px;
        left: unset;
        right: 0;
        transform: unset;
      }
    }
    .mobile-header-img {
      display: none;
      width: 80%;
    }
    @media (max-width: 450px) {
      .mobile-header-img {
        display: block;
        top: -16px;
        width: 60%;
      }
      video {
        display: none;
      }
    }
  }
  &__nav {
    display: flex;
    align-items: center;
    @media screen and (max-width: 870px) {
      display: none;
    }
    &-item {
      cursor: pointer;
      margin-right: 20px;
      color: #827b8c;
      font-weight: 500;
      font-size: 20px;
      line-height: 24px;
      text-decoration: unset;
      position: relative;
      transition: 0.2s ease;

      &::before {
        position: absolute;
        content: '';
        bottom: -10px;
        left: 0;
        width: 0px;
        height: 6px;
        background: #dc0506;
        opacity: 0;
        visibility: hidden;
        transition: 0.2s ease;
      }
      &:hover {
        color: #ffffff;
        &::before {
          opacity: 1;
          visibility: visible;
          width: 24px;
        }
      }
      &.active {
        color: #ffffff;
        &::before {
          opacity: 1;
          visibility: visible;
          width: 24px;
        }
      }
    }
  }
  .btn {
    @media screen and (max-width: 435px) {
      display: none;
    }
  }
  .header__logo__mobile {
    display: none;
    position: relative;
    width: 44px;
    height: 44px;
    background: #0eacd3;
    border-radius: 4px;
    -webkit-transform: rotate(0deg);
    -moz-transform: rotate(0deg);
    -o-transform: rotate(0deg);
    transform: rotate(0deg);
    -webkit-transition: 0.5s ease-in-out;
    -moz-transition: 0.5s ease-in-out;
    -o-transition: 0.5s ease-in-out;
    transition: 0.5s ease-in-out;
    cursor: pointer;
    span {
      display: block;
      position: absolute;
      height: 2px;
      width: 18px;
      background: #ffffff;
      border-radius: 9px;
      opacity: 1;
      left: 50%;

      transform: rotate(0deg) translate(-50%, 15px);
      -webkit-transform: rotate(0deg) translate(-50%, 15px);
      -moz-transform: rotate(0deg) translate(-50%, 15px);
      -o-transform: rotate(0deg) translate(-50%, 15px);
      transition: 0.25s ease-in-out;
      -webkit-transition: 0.25s ease-in-out;
      -moz-transition: 0.25s ease-in-out;
      -o-transition: 0.25s ease-in-out;
      &:nth-child(1) {
        top: 0px;
      }

      &:nth-child(2) {
        top: 5px;
      }
      &:nth-child(3) {
        top: 5px;
      }
      &:nth-child(4) {
        top: 10px;
      }
    }

    &.open span:nth-child(1) {
      top: 5px;
      width: 0%;
      left: 50%;
    }

    &.open span:nth-child(2) {
      transform: rotate(45deg) translate(5px, 18px);
      -webkit-transform: rotate(45deg) translate(5px, 18px);
      -moz-transform: rotate(45deg) translate(5px, 18px);
      -o-transform: rotate(45deg) translate(5px, 18px);
      left: 22px;
      top: 4px;
    }

    &.open span:nth-child(3) {
      transform: rotate(-45deg) translate(-12px, 11px);
      -webkit-transform: rotate(-45deg) translate(-12px, 11px);
      -moz-transform: rotate(-45deg) translate(-12px, 11px);
      -o-transform: rotate(-45deg) translate(-12px, 11px);
      left: 13px;
      top: 4px;
    }

    &.open span:nth-child(4) {
      top: 5px;
      width: 0%;
      left: 50%;
    }

    @media screen and (max-width: 870px) {
      display: flex;
      align-items: center;
      justify-content: center;
    }
    @media screen and (max-width: 435px) {
      width: 44px;
      height: 44px;
    }
  }
  .mobile-content {
    display: none;
    @media screen and (max-width: 870px) {
      display: flex;
      flex-direction: column;
      align-items: center;
      position: absolute;
      width: 100%;
      height: 100vh;
      z-index: 9999;
      padding-top: 200px;
      left: 0;
      top: 130px;
      background: linear-gradient(180deg, #120325 0%, #050505 100%);
      opacity: 0;
      visibility: hidden;

      transition: 0.2s ease;
      &.open {
        opacity: 1;
        visibility: visible;
      }
      img {
        position: absolute;
        opacity: 0.1;
        height: 100%;
      }
      .btn {
        z-index: 1;
        display: flex;
        @media screen and (min-width: 436px) {
          display: none;
        }
      }

      .header__nav {
        font-family: 'olympiccarrierexpand';
        display: flex;
        flex-direction: column;

        a {
          font-weight: 400;
          font-size: 32px;
          line-height: 40px;
          text-decoration: unset;
          margin-bottom: 40px;
          color: #ffffff;
          &.active {
            color: #dc0506;
          }

          &::before {
            content: unset;
          }
        }
      }
    }
    @media screen and (max-width: 435px) {
      position: absolute;
      top: 88px;
      padding-top: 50px;
      left: -8%;
      padding-top: 50px;
      width: 115%;
    }
  }
}
</style>
