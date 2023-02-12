<template>
  <div class="community">
    <div class="community__card">
      <div class="community__title">
        <h4>Ready to Join <span>Community?</span></h4>
      </div>
      <p>
        It is a long established fact that a reader will be distracted by the readable content of a page when looking at
        its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as
        opposed to using 'Content here, content here', making it look like readable English.
      </p>
      <div class="telegram">
        <svg width="25" height="20" viewBox="0 0 25 20" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M24.4312 1.81391C24.7529 0.322255 23.8951 -0.263753 22.9301 0.109161L1.59323 8.26C0.145757 8.846 0.199367 9.64511 1.37879 10.018L6.79343 11.6695L19.4454 3.78503C20.0352 3.35884 20.6249 3.62521 20.1424 3.99812L9.90282 13.1612L9.52755 18.7549C10.1173 18.7549 10.3317 18.5418 10.6534 18.2221L13.2803 15.665L18.8021 19.7138C19.8207 20.2998 20.5713 19.9802 20.8393 18.8081L24.4312 1.81391Z"
            fill="white"
          />
        </svg>
        Join Our Telegram
      </div>
    </div>
  </div>
</template>

<script>
export default {
  setup() {
    return {};
  },
};
</script>

<style lang="scss" scoped>
.community {
  height: 420px;
  margin-top: 170px;

  /* secondary */

  background: #0eacd3;

  &__card {
    max-width: 1728px;
    width: 90%;
    margin: auto;
    padding: 64px 128px;
    background-color: #ffffff;
    border-radius: 8px;
    transform: translateY(-112px);
    height: 452px;
    @media screen and (max-width: 870px) {
      padding: 48px 32px;
      gap: 20px;
      width: 656px;
      height: 508px;
    }
    @media screen and (max-width: 435px) {
      padding: 28px 20px;
      width: 90%;

      height: 452px;
    }
    p {
      margin-bottom: 32px;
      font-family: 'Montserrat';
      font-style: normal;
      font-weight: 500;
      font-size: 24px;
      line-height: 36px;
      text-align: center;
      color: #1f1927;
      @media screen and (max-width: 870px) {
        font-style: normal;
        font-weight: 500;
        font-size: 20px;
        line-height: 32px;
      }
      @media screen and (max-width: 435px) {
        font-style: normal;
        font-weight: 500;
        font-size: 16px;
        line-height: 24px;
      }
    }
    h4 {
      margin: 0;
      @media screen and (max-width: 870px) {
        font-style: normal;
        font-weight: 400;
        font-size: 36px;
        line-height: 52px;
      }
      @media screen and (max-width: 435px) {
        font-style: normal;
        font-weight: 400;
        font-size: 24px;
        line-height: 32px;
      }
    }
  }
  &__title {
    font-family: 'olympiccarrierexpand';
    font-style: normal;
    font-weight: 400;
    font-size: 48px;
    line-height: 72px;
    text-align: center;
    color: #1f1927;
    span {
      color: #dc0506;
    }
  }
  .telegram {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 24px 28px;
    width: fit-content;
    gap: 14px;
    margin: auto;
    font-style: normal;
    font-weight: 700;
    font-size: 20px;
    line-height: 32px;
    max-height: 80px;
    background: #0eacd3;
    border-radius: 4px;
    color: #ffffff;
    cursor: pointer;
    @media screen and (max-width: 870px) {
      font-style: normal;
      font-weight: 700;
      font-size: 16px;
      line-height: 24px;
      padding: 24px 28px;
      gap: 12px;

      width: 251px;
      height: 76px;
    }
    @media screen and (max-width: 435px) {
      font-style: normal;
      font-weight: 700;
      font-size: 14px;
      line-height: 20px;
      padding: 16px 20px;
      gap: 12px;
      width: 272px;
      height: 60px;
    }
  }
}
</style>
