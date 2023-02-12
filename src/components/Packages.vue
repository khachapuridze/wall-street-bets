<template>
  <div class="packages">
    <h2 class="packages__title">Promotion <span> Packages </span></h2>
    <p class="packages__subtitle">All packages 25% off if paid in $WSB token.</p>
    <div class="packages__list">
      <PackageCard />
      <PackageCard />
      <PackageCard />
      <PackageCard class="mobile" />
      <PackageCard class="mobile" />
      <PackageCard class="mobile" />
    </div>
    <div class="packages__list packages__list-second">
      <PackageCard />
      <PackageCard />
      <PackageCard />
    </div>
    <Button title="see more" />
  </div>
</template>

<script>
import { reactive, toRefs } from 'vue';
import PackageCard from './PackageCard.vue';
import Button from './Button.vue';

export default {
  components: { PackageCard, Button },
  setup() {
    const state = reactive({
      count: 0,
    });

    return {
      ...toRefs(state),
    };
  },
};
</script>

<style lang="scss">
.packages {
  margin-top: 150px;
  margin-bottom: 160px;
  @media screen and (max-width: 435px) {
    margin-top: 68px;
    padding: 0 20px;
  }
  &__title {
    font-weight: 400;
    font-size: 48px;
    line-height: 40px;
    text-align: center;
    font-family: 'olympiccarrierexpand';
    color: #ffffff;
    @media screen and (max-width: 870px) {
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
    @media screen and (max-width: 870px) {
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
    margin-bottom: 65px;
    @media screen and (max-width: 870px) {
      display: grid;
      grid-template-columns: 1fr 1fr;
      margin-left: 25px;
      margin-right: 25px;
      gap: 33px;
    }
    @media screen and (max-width: 435px) {
      display: grid;
      grid-template-columns: 1fr;
      margin-left: 25px;
      margin-right: 25px;
    }
    &-second {
      justify-content: flex-end;
      @media screen and (max-width: 870px) {
        display: none;
      }
    }
    .mobile {
      display: none;
      @media screen and (max-width: 870px) {
        display: flex;
      }
    }
  }
  .btn {
    margin: auto;
  }
  @media screen and (max-width: 1079px) {
    margin-bottom: 150px;
  }
}
</style>
