<template>
  <div class="form w-c" data-scroll data-scroll-sticky data-scroll-target="#js-scroll">
    <div class="form__cont">
      <img src="../assets/images/form.png" alt="form" />

      <div class="form__title">
        <span class="form__title-hidden">
          Hidden Gem
          <div class="form__title-spot">Spotlight💎💎</div>
        </span>
        <div class="form__price">
          <span class="form__title-fixed">Fixed Price:</span>
          <div class="form__title-blue">
            <span class="form__title-price">2,000$</span>
          </div>
        </div>

        <div class="form__title-close" @click="$emit('close')">
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M10 11.8667L3.23334 18.6333C2.96668 18.9 2.65556 19.0333 2.30001 19.0333C1.94445 19.0333 1.63334 18.9 1.36668 18.6333C1.10001 18.3667 0.966675 18.0556 0.966675 17.7C0.966675 17.3445 1.10001 17.0333 1.36668 16.7667L8.13334 10L1.36668 3.23334C1.10001 2.96668 0.966675 2.65556 0.966675 2.30001C0.966675 1.94445 1.10001 1.63334 1.36668 1.36668C1.63334 1.10001 1.94445 0.966675 2.30001 0.966675C2.65556 0.966675 2.96668 1.10001 3.23334 1.36668L10 8.13334L16.7667 1.36668C17.0333 1.10001 17.3445 0.966675 17.7 0.966675C18.0556 0.966675 18.3667 1.10001 18.6333 1.36668C18.9 1.63334 19.0333 1.94445 19.0333 2.30001C19.0333 2.65556 18.9 2.96668 18.6333 3.23334L11.8667 10L18.6333 16.7667C18.9 17.0333 19.0333 17.3445 19.0333 17.7C19.0333 18.0556 18.9 18.3667 18.6333 18.6333C18.3667 18.9 18.0556 19.0333 17.7 19.0333C17.3445 19.0333 17.0333 18.9 16.7667 18.6333L10 11.8667Z"
              fill="white"
            />
          </svg>
        </div>
        <p class="form__title-text">
          Includes countdown lead up hype post then usually 2 hours later reveal the hidden gem spotlight giving the
          pertinent details of the project and market pumpamentals ie market cap, potential, call to action to like on
          Coingecko/CMC Includes, teaser chest with countdown timer to build hype (see included examples) Remains pinned
          and enters rotation for next 1 day, can post refreshes of content if requested over that period
        </p>
      </div>
    </div>
    <div class="form__input error">
      <div class="placeholder">Telegram Handle:</div>
      <input type="text" name="" id="" />
      <div class="form__input-status">
        <svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M13.0875 19.0083C13.3792 19.0083 13.6271 18.9111 13.8313 18.7167C14.0355 18.5222 14.1375 18.2694 14.1375 17.9583V12.8542C14.1375 12.5819 14.0355 12.3437 13.8313 12.1396C13.6271 11.9354 13.3792 11.8333 13.0875 11.8333C12.7959 11.8333 12.548 11.9354 12.3438 12.1396C12.1396 12.3437 12.0375 12.5917 12.0375 12.8833V17.9875C12.0375 18.2792 12.1396 18.5222 12.3438 18.7167C12.548 18.9111 12.7959 19.0083 13.0875 19.0083ZM13 9.90833C13.35 9.90833 13.6369 9.80138 13.8605 9.58749C14.0841 9.37361 14.1959 9.09166 14.1959 8.74166C14.1959 8.39166 14.0841 8.09999 13.8605 7.86666C13.6369 7.63333 13.35 7.51666 13 7.51666C12.65 7.51666 12.3632 7.63333 12.1396 7.86666C11.916 8.09999 11.8042 8.39166 11.8042 8.74166C11.8042 9.09166 11.916 9.37361 12.1396 9.58749C12.3632 9.80138 12.65 9.90833 13 9.90833ZM13 25.075C11.2889 25.075 9.69935 24.7687 8.2313 24.1562C6.76324 23.5437 5.48477 22.6931 4.39588 21.6042C3.30699 20.5153 2.4563 19.2368 1.8438 17.7687C1.2313 16.3007 0.925049 14.7111 0.925049 13C0.925049 11.3083 1.2313 9.72361 1.8438 8.24583C2.4563 6.76805 3.30699 5.48958 4.39588 4.41041C5.48477 3.33124 6.76324 2.47569 8.2313 1.84374C9.69935 1.2118 11.2889 0.895828 13 0.895828C14.6917 0.895828 16.2764 1.2118 17.7542 1.84374C19.232 2.47569 20.5105 3.33124 21.5896 4.41041C22.6688 5.48958 23.5244 6.76319 24.1563 8.23124C24.7882 9.6993 25.1042 11.2889 25.1042 13C25.1042 14.7111 24.7882 16.3007 24.1563 17.7687C23.5244 19.2368 22.6688 20.5153 21.5896 21.6042C20.5105 22.6931 19.232 23.5437 17.7542 24.1562C16.2764 24.7687 14.6917 25.075 13 25.075Z"
            fill="#D13435"
          />
        </svg>
        <span>Sample error text will look like this.</span>
      </div>
    </div>
    <div class="form__input">
      <div class="placeholder">Twitter Handle:</div>
      <input type="text" name="" id="" />
    </div>
    <div class="form__input">
      <div class="placeholder">Email:</div>
      <input type="text" name="" id="" />
    </div>
    <div class="form__input">
      <div class="placeholder">Your Ideal Price for the Product:</div>
      <input type="text" name="" id="" />
    </div>
    <div class="form__input-radio">
      <div class="title">Testing radio buttons:</div>
      <label class="radio">
        <input type="radio" id="Option1" name="Option 1" value="Option 1" />
        Option 1
      </label>
      <label class="radio">
        <input type="radio" id="Option1" name="Option 1" value="Option 1" />
        Option 1
      </label>
      <label class="radio">
        <input type="radio" id="Option1" name="Option 1" value="Option 1" />
        Option 1
      </label>
    </div>
    <div class="form__agreement">
      <input type="checkbox" />
      <p>I’m okay on some testing <a>Terms & Conditions</a></p>
    </div>
    <Button title="Get a Personalized Pricing Proposal" send />
  </div>
</template>

<script>
import Button from './Button.vue';
export default {
  components: { Button },
};
</script>

<style lang="scss">
.form {
  position: fixed;
  width: 90vw;
  max-width: 1200px;
  background: linear-gradient(180deg, #120325 0%, #050505 100%);
  border-radius: 12px;
  z-index: 9999;
  left: 50%;
  top: 100px;
  translate: -50% 0%;
  padding: 48px;
  max-height: calc(100vh - 200px);
  height: fit-content;
  overflow: auto;
  opacity: 0;
  visibility: hidden;
  transition: 0.8s ease;
  &::-webkit-scrollbar {
    display: none;
  }
  @media screen and (max-width: 435px) {
    padding: 24px;
  }
  &__title {
    position: relative;
    display: flex;
    flex-direction: column;
    text-align: justify;
    cursor: pointer;
    @media screen and (max-width: 435px) {
      width: -webkit-fill-available;
    }

    &-hidden {
      font-family: 'olympiccarrierexpand';
      font-style: normal;
      font-weight: 400;
      font-size: 36px;
      line-height: 40px;
      color: #ffffff;
      @media (max-width: 435px) {
        font-size: 20px;
        line-height: 28px;
      }
    }
    &-spot {
      font-family: 'olympiccarrierexpand';
      font-style: normal;
      font-weight: 400;
      font-size: 36px;
      line-height: 40px;
      color: #dc0506;
      @media (max-width: 435px) {
        font-size: 20px;
        line-height: 28px;
      }
    }
    &-fixed {
      font-family: 'olympiccarrierexpand';
      font-style: normal;
      font-weight: 400;
      font-size: 32px;
      line-height: 40px;
      margin-right: 20px;
      @media (max-width: 435px) {
        font-size: 16px;
        line-height: 24px;
      }
    }
    &-price {
      font-family: 'olympiccarrierexpand';
      font-style: normal;
      font-weight: 400;
      font-size: 32px;
      line-height: 40px;
      padding: 8px 16px;
      color: #ffffff;
      @media (max-width: 435px) {
        font-size: 16px;
        line-height: 24px;
      }
    }
    &-blue {
      width: 171px;
      height: 56px;
      background: #0eacd3;
      border-radius: 4px;
      display: flex;
      @media (max-width: 435px) {
        width: unset;
        height: unset;
      }
    }
    &-text {
      font-weight: 500;
      font-size: 20px;
      line-height: 32px;
      width: 100%;
      color: #ffffff;
      @media (max-width: 435px) {
        font-size: 14px;
        line-height: 20px;
      }
    }
    &-close {
      position: absolute;
      top: 0px;
      right: -30px;
      display: flex;
      align-items: center;
      justify-content: center;
      width: 52px;
      height: 52px;

      background: #dc0506;
      border-radius: 4px;

      @media (max-width: 435px) {
        right: 0px;
      }
    }
  }
  &__price {
    display: flex;
    align-items: center;
    margin-top: 28px;
  }
  &__cont {
    display: flex;
    gap: 48px;
    img {
      height: 323px;
      @media (max-width: 1439px) {
        display: none;
      }
    }
  }
  &__input {
    position: relative;
    gap: 4px;
    margin-bottom: 30px;
    &-status {
      display: flex;
      align-items: center;
      transform: translate(0px, 10px);
      opacity: 0;
      visibility: hidden;
      transition: 0.2s ease;
      svg {
        margin-right: 10px;
      }
      span {
        font-weight: 500;
        font-size: 16px;
        line-height: 24px;
        color: #bfbfbf;
      }
    }
    &:not(:focus-within) .placeholder {
      transform: translate(0%, 75%);
      font-size: 20px;
      @media screen and (max-width: 435px) {
        font-size: 14px;
        line-height: 20px;
      }
    }
    .placeholder {
      font-weight: 500;
      font-size: 16px;
      line-height: 24px;
      color: #bfbfbf;
      position: absolute;
      left: 20px;
      top: 18px;
      transition: 0.2s ease;
      pointer-events: none;
      @media screen and (max-width: 435px) {
        font-size: 12px;
        line-height: 20px;
        top: 6px;
      }
    }
    input {
      width: 100%;
      height: 96px;
      background: #1f1927;
      border: 1px solid #574f61;
      border-radius: 6px;
      padding: 35px 20px 20px;
      font-weight: 500;
      font-size: 20px;
      line-height: 32px;
      color: #ffffff;
      @media screen and (max-width: 435px) {
        font-size: 14px;
        line-height: 20px;
        height: 60px;
      }
      &:focus {
        outline: none;
      }
    }
    &-radio {
      display: flex;
      gap: 65px;
      position: relative;
      margin-top: 60px;
      margin-bottom: 35px;

      .title {
        font-weight: 500;
        font-size: 16px;
        line-height: 24px;
        color: #bfbfbf;
        position: absolute;
        top: -30px;
        left: 0;
      }
      .radio {
        cursor: pointer;
        color: #ffffff;
        font-weight: 500;
        font-size: 20px;
        line-height: 32px;
        input {
          margin-right: 12px;
          accent-color: #0eacd3;
        }
      }
      @media (max-width: 1439px) {
        gap: 15px;
        align-items: flex-start;
        flex-direction: column;
      }
    }
    &.error {
      .form__input-status {
        opacity: 1;
        visibility: visible;
      }
      .placeholder {
        color: #d13435;
      }
      input {
        background: #280c11;
        border: 1px solid #d13435;
      }
    }
    &.success {
      .form__input-status {
        opacity: 1;
        visibility: visible;
      }
      .placeholder {
        color: #bfbfbf;
      }
      svg {
        path {
          fill: #0cb176;
        }
      }
      input {
        background: #00291b;
        border: 1px solid #0cb176;
      }
    }
    &.warning {
      .form__input-status {
        opacity: 1;
        visibility: visible;
      }
      .placeholder {
        color: #bfbfbf;
      }
      svg {
        path {
          fill: #d17e0a;
        }
      }
      input {
        background: #3f2706;
        border: 1px solid #d17e0a;
      }
    }
  }
  &__agreement {
    display: flex;
    margin-bottom: 35px;

    p {
      font-weight: 500;
      font-size: 20px;
      line-height: 32px;
      margin: 0 15px;
      color: #ffffff;
      @media (max-width: 1399px) {
        font-size: 16px;
      }
      @media (max-width: 435px) {
        font-size: 14px;
        line-height: 20px;
        text-align: left;
      }

      a {
        text-decoration: unset;
        color: #0eacd3;
      }
    }
    input {
      cursor: pointer;
      accent-color: #0eacd3;
    }
  }
  .btn {
    @media (max-width: 870px) {
      width: 100%;
    }
  }
  @media (max-width: 435px) {
    top: 50%;
    translate: -50% 50%;
  }
}
</style>
