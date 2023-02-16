<template>
  <div>
    <footer class="footer">
      <div class="footer__content">
        <div class="footer__logo">
          <video preload="auto" autoplay loop muted>
            <source src="@/assets/2.webm" type="video/webm" />

            Your browser does not support the video tag.
          </video>
          <img class="mobile-footer-img" src="../assets/images/logo.png" alt="form" />
        </div>
        <!-- <div class="footer__nav">
          <div class="footer__nav-item">About Us</div>
          <div class="footer__nav-item">Services</div>
          <div class="footer__nav-item">Community</div>
          <div class="footer__nav-item">Partners</div>
        </div> -->
        <div class="footer__socials">
          <svg width="36" height="33" viewBox="0 0 36 33" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M35.8968 3.40226C36.3793 1.01561 35.0926 0.0779959 33.6452 0.674658L1.63985 13.716C-0.531365 14.6536 -0.45095 15.9322 1.31819 16.5288L9.44014 19.1712L28.4182 6.55605C29.3027 5.87415 30.1873 6.30033 29.4636 6.897L14.1042 21.5578L13.5413 30.5078C14.4259 30.5078 14.7476 30.1668 15.23 29.6554L19.1704 25.564L27.4532 32.0421C28.9811 32.9797 30.1069 32.4682 30.509 30.593L35.8968 3.40226Z"
              fill="white"
            />
          </svg>

          <svg width="40" height="33" viewBox="0 0 40 33" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M35.5313 8.44217C37.0577 7.28554 38.4315 5.89759 39.5 4.27831C38.1262 4.89518 36.5235 5.35783 34.9207 5.51205C36.5998 4.50964 37.8209 2.96747 38.4315 1.03976C36.9051 1.96506 35.1497 2.65904 33.3943 3.04458C31.8679 1.4253 29.8072 0.5 27.5176 0.5C23.091 0.5 19.5039 4.1241 19.5039 8.59639C19.5039 9.21325 19.5802 9.83012 19.7329 10.447C13.093 10.0614 7.13992 6.82289 3.17123 1.96506C2.48434 3.12169 2.10274 4.50964 2.10274 6.05181C2.10274 8.82771 3.47652 11.2952 5.68982 12.7602C4.39237 12.6831 3.09491 12.3747 2.02642 11.7578V11.8349C2.02642 15.7675 4.77397 19.006 8.43738 19.7771C7.82681 19.9313 7.0636 20.0855 6.37671 20.0855C5.84247 20.0855 5.38454 20.0084 4.85029 19.9313C5.84247 23.1699 8.81898 25.4831 12.3297 25.5602C9.58219 27.7193 6.14775 29.0301 2.40802 29.0301C1.72114 29.0301 1.11057 28.953 0.5 28.8759C4.01076 31.1892 8.20842 32.5 12.7877 32.5C27.5176 32.5 35.5313 20.2398 35.5313 9.52169C35.5313 9.13614 35.5313 8.82771 35.5313 8.44217Z"
              fill="white"
            />
          </svg>

          <svg width="28" height="33" viewBox="0 0 28 33" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M18.5625 15.75C18.5625 14.75 17.8125 13.9375 16.9375 13.9375C16 13.9375 15.25 14.75 15.25 15.75C15.25 16.6875 16 17.5 16.9375 17.5C17.8125 17.5 18.5625 16.6875 18.5625 15.75ZM11.0625 13.9375C10.1875 13.9375 9.4375 14.75 9.4375 15.75C9.4375 16.6875 10.1875 17.5 11.0625 17.5C12 17.5 12.6875 16.6875 12.6875 15.75C12.75 14.75 12 13.9375 11.0625 13.9375ZM28 3.8125C28 2 26.5 0.5 24.6875 0.5H3.25C1.4375 0.5 0 2 0 3.8125V25.4375C0 27.3125 1.4375 28.75 3.25 28.75H21.375L20.5625 25.8125C25.25 30.125 23.9375 29 28 32.5V3.8125ZM23.4375 19C23.4375 19 22.0625 21.3125 18.5 21.4375C18.5 21.4375 17.9375 20.75 17.4375 20.125C19.5625 19.5625 20.375 18.25 20.375 18.25C19.6875 18.6875 19.0625 18.9375 18.5 19.1875C15.0625 20.625 11.25 20.125 8.5 18.625C8.5 18.5625 8.125 18.375 7.875 18.1875C7.875 18.1875 8.625 19.5 10.6875 20.125C10.1875 20.6875 9.625 21.4375 9.625 21.4375C6.0625 21.3125 4.75 19 4.75 19C4.75 13.8125 7 9.6875 7 9.6875C9.3125 7.9375 11.5 8 11.5 8L11.6875 8.1875C8.8125 9 7.5 10.25 7.5 10.25C7.5 10.25 7.8125 10.0625 8.4375 9.8125C12.125 8.1875 16.5625 8.1875 20.375 10.25C20.375 10.25 19.125 9.0625 16.375 8.25L16.625 8C16.625 8 18.8125 7.9375 21.125 9.6875C21.125 9.6875 23.4375 13.8125 23.4375 19Z"
              fill="white"
            />
          </svg>
        </div>
      </div>
      <div class="footer__bottom container">
        <p>© Wall Street Bets. All Rights Reserved.</p>
        <p>Designed By <a href="">Company</a></p>
      </div>
    </footer>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.footer {
  &__content {
    display: flex;
    flex-direction: column;
    justify-content: center;
    border-bottom: 1px solid #ffffff;
    margin: 96px auto 0px;
    @media screen and (max-width: 435px) {
    }
  }
  &__socials {
    display: flex;
    gap: 40px;
    margin: 60px auto;
    justify-content: center;
    svg {
      cursor: pointer;
      path {
        transition: 0.2s ease;
      }
      &:hover {
        path {
          fill: #dc0506;
        }
      }
    }
  }
  &__nav {
    display: flex;
    align-items: center;
    margin: 64px auto 0;
    @media screen and (max-width: 435px) {
      flex-direction: column;
      gap: 24px;
      margin: 32px auto 0;
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
      @media screen and (max-width: 435px) {
        font-style: normal;
        font-weight: 500;
        font-size: 14px;
        line-height: 20px;
      }

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
  &__bottom {
    display: flex;
    justify-content: space-between;
    padding: 60px 0;
    @media screen and (max-width: 870px) {
      flex-direction: column;
    }
    @media screen and (max-width: 435px) {
      flex-direction: column;
    }
    p {
      font-family: 'Montserrat';
      font-style: normal;
      font-weight: 500;
      font-size: 20px;
      line-height: 32px;
      color: #bfbfbf;
      @media screen and (max-width: 870px) {
        font-style: normal;
        font-weight: 500;
        font-size: 16px;
        line-height: 24px;
      }
      @media screen and (max-width: 435px) {
        font-weight: 500;
        font-size: 14px;
        line-height: 20px;
      }
      a {
        color: #0eacd3;
        text-decoration: unset;
      }
    }
  }
  video {
    width: 350px;
    height: 300px;
  }
  .mobile-footer-img {
    display: none;
  }
  @media (max-width: 450px) {
    .mobile-footer-img {
      display: block;
      width: 150px;
      margin: auto;
    }
    video {
      display: none;
    }
  }
}
</style>
