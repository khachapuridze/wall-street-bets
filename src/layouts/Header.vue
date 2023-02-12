<template>
  <div class="header container">
    <img class="header__logo__mobile" src="../assets/images/Mobile-Menu-Button.png" alt="" />
    <div class="header__logo">
      <img src="../assets/images/logo.png" alt="logo" />
    </div>
    <div class="header__nav">
      <div class="header__nav-item active">About Us</div>
      <div class="header__nav-item">Services</div>
      <div class="header__nav-item">Community</div>
      <div class="header__nav-item">Partners</div>
    </div>
    <ButtonComponent title="Book Now" />
  </div>
</template>

<script>
import ButtonComponent from '../components/Button.vue';
export default {
  components: { ButtonComponent },
  setup() {
    return {};
  },
};
</script>

<style lang="scss" scoped>
.header {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  margin-top: 50px;
  position: relative;
  z-index: 10;
  @media screen and (max-width: 435px) {
    flex-direction: row-reverse;
  }
  &__logo {
    img {
      @media screen and (max-width: 870px) {
        width: 158px;
        height: 64px;
      }
      @media screen and (max-width: 435px) {
        width: 128.38px;
        height: 52px;
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
  .header__logo__mobile {
    display: none;
    @media screen and (max-width: 870px) {
      display: flex;
    }
    @media screen and (max-width: 435px) {
      width: 44px;
      height: 44px;
    }
  }
}
</style>
