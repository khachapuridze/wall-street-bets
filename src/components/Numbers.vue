<template>
  <div class="numbers">
    <img src="../assets/images/numbers.png" alt="numbers" />
    <div class="numbers__cont">
      <div class="numbers__item">
        <CountUp
          id="1"
          @ready="onReady"
          @reset="onReady"
          :autoplay="false"
          :end-val="65000"
          :start-val="0"
          :options="optionsCommunity"
        />
        <span class="mobile-number">65 000</span>
        <h4>Community Members</h4>
      </div>
      <div class="numbers__item">
        <CountUp id="2" :autoplay="false" :end-val="1000" :startValue="0" :options="optionsProjects" />
        <span class="mobile-number">1000 +</span>

        <h4>Projects Created</h4>
      </div>
      <div class="numbers__item">
        <CountUp id="3" :end-val="96" :autoplay="false" :start-val="0" :options="optionsPercentage" />
        <span class="mobile-number">96 %</span>

        <h4>Of Success Stories</h4>
      </div>
    </div>
  </div>
</template>

<script>
import CountUp from 'vue-countup-v3';

export default {
  components: {
    CountUp,
  },
  data() {
    return {
      delay: 3000,
      optionsCommunity: {
        suffix: ' ',
        enableScrollSpy: true, // start animation when target is in view 在可视范围内才开始动画
        scrollSpyDelay: 500,
      },
      optionsProjects: {
        suffix: ' +',
        enableScrollSpy: true, // start animation when target is in view 在可视范围内才开始动画
        scrollSpyDelay: 3000,
      },
      optionsPercentage: {
        suffix: '%',
        enableScrollSpy: true, // start animation when target is in view 在可视范围内才开始动画
        scrollSpyDelay: 4500,
      },
    };
  },
  methods: {
    onReady(instance, CountUp) {
      console.log(instance, 'instanceinstanceinstance', CountUp);
    },
  },
};
</script>

<style lang="scss">
.numbers {
  position: relative;
  height: 683px;
  display: flex;
  justify-content: center;
  align-items: center;
  @media screen and (max-width: 870px) {
    height: 460px;
  }
  @media screen and (max-width: 435px) {
    height: 356px;
  }
  img {
    position: absolute;
    width: 100%;
    height: 100%;
    object-fit: cover;
    left: 0;
    z-index: -1;
  }
  &__cont {
    display: flex;
    justify-content: center;
    position: relative;

    gap: 10%;
    @media screen and (max-width: 870px) {
      flex-wrap: wrap;
    }
    @media screen and (max-width: 435px) {
      flex-direction: column;
      align-items: center;
    }
    h4 {
      font-family: 'Montserrat';
      font-style: normal;
      font-weight: 500;
      font-size: 20px;
      line-height: 32px;
      text-align: center;
      color: #ffffff;
      @media screen and (max-width: 870px) {
        font-style: normal;
        font-weight: 500;
        font-size: 16px;
        line-height: 24px;
      }
      @media screen and (max-width: 435px) {
        font-style: normal;
        font-weight: 500;
        font-size: 14px;
        line-height: 20px;
      }
    }
    span {
      font-family: 'olympiccarrierexpand';
      font-style: normal;
      font-weight: 400;
      font-size: 64px;
      line-height: 54px;
      text-align: center;
      color: #ffffff;
      @media screen and (max-width: 870px) {
        font-style: normal;
        font-weight: 400;
        font-size: 44px;
        line-height: 64px;
      }
      @media screen and (max-width: 435px) {
        font-style: normal;
        font-weight: 400;
        font-size: 28px;
        line-height: 36px;
      }
    }
  }
  &__item {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 333px;
    .mobile-number {
      display: none;
      @media screen and (max-width: 435px) {
        display: block;
      }
    }
    .countup-wrap {
      @media screen and (max-width: 435px) {
        display: none;
      }
    }
  }
}
</style>
