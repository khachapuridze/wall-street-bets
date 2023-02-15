<template>
  <Header @scrollTo="ScrollToBottom" class="header-animation" />
  <div class="loader">
    <video preload="auto" autoplay muted width="450" height="400">
      <source src="@/assets/1.webm" type="video/webm" />

      Your browser does not support the video tag.
    </video>
    <img class="mobile-logo" src="../assets/images/logo.png" alt="form" />
    <div class="line line-red"></div>

    <div class="line line-blue"></div>

    <div class="line-big line-big-blue"></div>
    <div class="line-big line-big-red"></div>
  </div>
  <div class="home">
    <div class="wall-street">
      <h1 class="w-c">Wall Street <span>Bets</span></h1>
    </div>
    <div class="fading">
      <h3 class="w-c">
        It is a long established fact that a reader will be distracted by the readable content of a page when looking at
        its layout.
      </h3>
      <div class="home__socials w-c">
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

    <div class="elipse elipse-blue w-c">
      <img src="../assets/images/Ellipse3.png" alt="elipse" />
    </div>
    <div class="elipse elipse-white w-c">
      <img src="../assets/images/Ellipse4.png" alt="elipse" />
    </div>

    <div class="home__join container">
      <div class="scroll w-c" data-scroll data-scroll-speed="5" @click="ScrollToBottom('our-projects')">
        <svg width="72" height="73" viewBox="0 0 72 73" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M36 40.8999C35.8222 40.8999 35.6556 40.8666 35.5 40.7999C35.3445 40.7333 35.2 40.6333 35.0667 40.4999L28.4667 33.8999C28.2222 33.6555 28.1056 33.3444 28.1167 32.9666C28.1278 32.5888 28.2556 32.2777 28.5 32.0333C28.7889 31.7444 29.1056 31.6166 29.45 31.6499C29.7945 31.6833 30.1 31.8222 30.3667 32.0666L36 37.6999L41.6334 32.0666C41.8778 31.8222 42.1945 31.6888 42.5834 31.6666C42.9722 31.6444 43.2889 31.7777 43.5334 32.0666C43.8222 32.3111 43.95 32.6166 43.9167 32.9833C43.8834 33.3499 43.7445 33.6666 43.5 33.9333L36.9334 40.4999C36.8 40.6333 36.6556 40.7333 36.5 40.7999C36.3445 40.8666 36.1778 40.8999 36 40.8999Z"
            fill="white"
          />
          <mask
            id="mask0_57_188"
            style="mask-type: alpha"
            maskUnits="userSpaceOnUse"
            x="-8"
            y="-4"
            width="83"
            height="77"
          >
            <path
              d="M60.0001 72.5L37.5001 36.5L-7.49994 36.5L12.0001 2L41.0001 -3.5L71.0001 12.5L74.5001 41.5L60.0001 72.5Z"
              fill="#050505"
            />
          </mask>
          <g mask="url(#mask0_57_188)">
            <rect x="1.5" y="2" width="69" height="69" rx="34.5" stroke="white" stroke-width="3" />
          </g>
          <rect x="1.5" y="2" width="69" height="69" rx="34.5" stroke="#ffffff" stroke-width="3" />
        </svg>
        <span> Scroll Down </span>
      </div>
      <p class="w-c" data-scroll data-scroll-speed="2">Join Us To Uncover Boundless</p>
      <h4 class="w-c" data-scroll data-scroll-speed="2">Opportunities in Crypto Marketing</h4>
    </div>
    <Packages @toggleScroll="dissableScroll" />
    <Numbers />
    <div class="text-comp" id="about-us">
      <h4 class="w-c">We Help You to Build Your <span>Brand</span></h4>
      <p class="w-c">
        We specialize in helping projects express their brand in a way that fosters genuine connections to the audience
        to grow a base of investors interested in the long term success of a project and not a short transactional
        relationship in attempt to earn fast money. Our primary demographics is that of men aged 18-35 that have a
        thirst to take high risk in trading and investing
      </p>
      <img src="../assets/images/handshake.png" alt="handshake" />
    </div>
    <div class="text-comp community" id="community">
      <h4>Our <span>Community</span></h4>
      <p class="w-c" data-scroll data-scroll-speed="2">
        WallStreetBets reached world-wide fame (and meme status) during the now infamous GameStop $GME short squeeze
        that nearly bankrupted major hedge funds like Melvin Capital. Since then WallSteetBets or WSB at it is known ha
        been empowering retail equities and crypto trades in gaining edge and expanding their degenerate gambling
        activities.
      </p>
      <img src="../assets/images/community_bg.png" alt="community_bg" />
    </div>

    <div class="text-comp our-projects w-c" id="our-projects">
      <h4 class="w-c" data-scroll data-scroll-speed="1">Our<span>Projects</span></h4>
      <p class="w-c" data-scroll data-scroll-speed="2.5">
        It is a long established fact that a reader will be distracted by the readable content of a page when looking at
        its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as
        opposed to using 'Content here, content here', making it look like readable English.
      </p>
      <ProjectsSlider class="w-c" />
    </div>
    <div class="eth">
      <div class="eth__layer"></div>
      <img class="eth__img" src="../assets/images/eth.png" alt="eth" />
    </div>
    <Community />
  </div>
</template>

<script>
import LocomotiveScroll from 'locomotive-scroll';
import { gsap, ScrollTrigger } from 'gsap/all';

import Header from '../layouts/Header.vue';
import HelloWorld from '@/components/HelloWorld.vue';
import Packages from '../components/Packages.vue';
import Numbers from '../components/Numbers.vue';
import ProjectsSlider from '../components/ProjectsSlider.vue';
import Community from '../components/Community.vue';

// ..

export default {
  name: 'Home',
  components: {
    HelloWorld,
    Packages,
    Numbers,
    ProjectsSlider,
    Community,
    Header,
  },
  data() {
    return {
      lmS: null,
    };
  },
  methods: {
    setScroll() {
      this.lmS = new LocomotiveScroll({
        el: document.querySelector('[data-scroll-container]'),
        smooth: true,
      });
      gsap.registerPlugin(ScrollTrigger);
      this.lmS.on('scroll', ScrollTrigger.update);
      ScrollTrigger.scrollerProxy('.js-scroll', {
        scrollTop(value) {
          return arguments.length ? this.lmS.scrollTo(value, 0, 0) : this.lmS.scroll.instance.scroll.y;
        },
        getBoundingClientRect() {
          return {
            left: 0,
            top: 0,
            width: window.innerWidth,
            height: window.innerHeight,
          };
        },
      });
      ScrollTrigger.addEventListener('refresh', () => this.lmS.update());
      ScrollTrigger.refresh();
    },
    dissableScroll(state) {
      state ? this.lmS.stop() : this.lmS.start();
    },
    ScrollToBottom(id) {
      this.lmS.scrollTo(document.getElementById(id));
    },
  },
  mounted() {
    setTimeout(() => {
      this.setScroll();
    }, 4000);
  },
};
</script>

<style lang="scss" scoped>
.home {
  h1 {
    font-family: 'olympiccarrierexpand';
    font-weight: 400;
    font-size: 84px;
    line-height: 71px;
    color: #ffffff;
    @media screen and (max-width: 870px) {
      font-style: normal;
      font-weight: 400;
      font-size: 52px;
      line-height: 80px;
    }

    @media screen and (max-width: 435px) {
      font-weight: 400;
      font-size: 32px;
      line-height: 40px;
      text-align: center;
      padding: 0 20px;
    }

    span {
      color: #dc0506;
    }
  }
  .fading {
    animation: headerAnimation 0.5s linear forwards;
    opacity: 0;
    animation-delay: 5s;
    @media screen and (max-width: 435px) {
      animation-delay: 3.8s;
    }
  }
  .wall-street {
    // transform: translateY(50px) scaleY(1);
    // opacity: 0;

    position: relative;
    overflow: hidden;
    height: 70px;
    margin-top: 270px;
    margin-bottom: 40px;
    z-index: 9;
    @media screen and (max-width: 870px) {
      margin-top: 232px;
      margin-bottom: 32px;
    }

    @media screen and (max-width: 435px) {
      margin-top: 97px;
      margin-bottom: 24px;
    }

    h1 {
      position: absolute;
      left: 50%;
      width: 100%;
      z-index: 10;
      transform: translate(-50%, 0px);
      animation: fadeUp ease 0.7s both;
      margin: 0;
      animation-delay: 3.5s;
      transform-origin: 0 0;
      @media (max-width: 450px) {
        animation-delay: 2.6s;
      }
    }
  }
  h3 {
    font-style: normal;
    font-weight: 500;
    font-size: 24px;
    line-height: 36px;
    text-align: center;
    max-width: 950px;
    margin: auto;
    color: #ffffff;
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
      padding: 0 20px;
    }
  }

  &__socials {
    display: flex;
    gap: 40px;
    margin: 60px auto;
    justify-content: center;
    margin-bottom: 220px;
    @media screen and (max-width: 870px) {
      margin-bottom: 224px;
      margin-top: 53px;
    }
    @media screen and (max-width: 435px) {
      margin-bottom: 85px;
      margin-top: 36px;
    }
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
  &__join {
    position: relative;
    p {
      font-family: 'Montserrat';
      font-style: normal;
      font-weight: 500;
      font-size: 24px;
      line-height: 36px;
      color: #ffffff;
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
      }
    }
    h4 {
      font-family: 'olympiccarrierexpand';
      font-weight: 400;
      font-size: 32px;
      line-height: 40px;
      color: #0eacd3;
      margin: 0;
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
      }
    }
    .scroll {
      cursor: pointer;
      width: fit-content;
      display: flex;
      align-items: center;
      position: absolute;
      top: 40px;
      font-family: 'Montserrat';
      font-style: normal;
      font-weight: 500;
      font-size: 20px;
      line-height: 32px;
      color: #ffffff;
      z-index: 9999;
      svg {
        margin-right: 25px;
      }
    }
    @media (max-width: 1399px) {
      padding-bottom: 150px;
      .scroll {
        top: 150px;
        left: 50%;
        transform: translate(-50%, 0);
        flex-direction: column-reverse;
        svg {
          margin-right: 0;
          margin-top: 20px;
        }
      }
    }
    @media (max-width: 719px) {
      padding-bottom: 0px;
      .scroll {
        display: none;
      }
    }
    @media screen and (max-width: 435px) {
      padding: 0 20px;
    }
  }
  .elipse {
    width: fit-content;

    &-blue {
      position: absolute;
      right: -250px;
      top: -50px;
      transform: translate(100%, 0px);
      opacity: 0;

      animation: ellipseBlue 1s linear forwards;
      animation-delay: 4.5s;
    }
    &-white {
      left: -250px;
      position: absolute;
      top: -50px;
      transform: translate(-100%, 0px);
      opacity: 0;
      animation: ellipseWhite 1s linear forwards;

      animation-delay: 4.5s;
    }
    img {
      width: 50vw;
      height: 1000px;
      @media screen and (max-width: 435px) {
        display: none;
      }
    }
  }
  .text-comp {
    margin: 170px 0;

    h4 {
      font-family: 'olympiccarrierexpand';
      font-style: normal;
      font-weight: 400;
      font-size: 48px;
      line-height: 72px;
      text-align: center;
      color: #ffffff;
      @media screen and (max-width: 870px) {
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
    p {
      width: 80%;
      max-width: 1300px;
      margin: 40px auto;
      font-family: 'Montserrat';
      font-style: normal;
      font-weight: 500;
      font-size: 24px;
      line-height: 36px;
      text-align: center;
      color: #ffffff;
      @media (max-width: 870px) {
        width: 90%;
        font-style: normal;
        font-weight: 500;
        font-size: 20px;
        line-height: 32px;
        margin: 10px auto;
      }
      @media (max-width: 435px) {
        font-weight: 500;
        font-size: 14px;
        line-height: 20px;
      }
    }
    @media screen and (max-width: 870px) {
      margin: 128px 0;
    }

    @media screen and (max-width: 435px) {
      margin: 76px 0;
      img {
        width: 100%;
      }
    }
  }
  .community {
    position: relative;
    position: relative;
    height: 742px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    img {
      position: absolute;
      width: 100%;
      height: 100%;
    }
    @media screen and (max-width: 870px) {
      height: 420px;
    }
    @media screen and (max-width: 435px) {
      height: 334px;
    }
  }
  .eth {
    height: 656px;
    width: 100%;
    margin: 300px 0;
    position: relative;
    &__layer {
      position: absolute;
      left: 0;
      top: 0;
      height: 100%;
      width: 100%;
      background: linear-gradient(180deg, #050505 0%, rgba(5, 5, 5, 0.526042) 58.85%, rgba(5, 5, 5, 0) 100%);
    }
    img {
      height: 100%;
      width: 100%;
    }
    @media screen and (max-width: 1079px) {
      height: 436px;
      img {
        object-fit: cover;
      }
    }
    @media screen and (max-width: 435px) {
      height: 256px;
      margin: 150px 0;
    }
  }
  .our-projects {
    p {
      margin-bottom: 100px;
    }
    @media screen and (max-width: 1080px) {
      margin: 128px 0 500px;
    }
    @media screen and (max-width: 719px) {
      margin: 128px 0 350px;
    }
    @media screen and (max-width: 435px) {
      margin: 128px 0 150px;
    }
  }
}
.header-animation {
  animation: headerAnimation 0.5s linear forwards;
  opacity: 0;
  animation-delay: 4.5s;
  // @media (max-width: 450px) {
  //   animation-delay: 4s;
  // }
}
@keyframes ellipseBlue {
  from {
    opacity: 0;

    transform: translate(100%, 0px);
  }
  to {
    opacity: 1;

    transform: translate(0px, 0px);
  }
}
@keyframes ellipseWhite {
  from {
    transform: translate(-100%, 0px);
    opacity: 0;
  }
  to {
    opacity: 1;

    transform: translate(0px, 0px);
  }
}

@keyframes fadeUp {
  from {
    transform: translate(-50%, 100px);
  }
  to {
    transform: translate(-50%, 0px);
  }
}

@keyframes headerAnimation {
  0% {
    opacity: 0;
    visibility: hidden;
  }
  100% {
    opacity: 1;
    visibility: visible;
  }
}

@keyframes hideLoader {
  0% {
    opacity: 1;
    visibility: visible;
  }
  95% {
    opacity: 1;
    visibility: visible;
  }
  100% {
    opacity: 0;
    visibility: hidden;
  }
}
@keyframes lineBigRed {
  0% {
    transform: translate(0px, 100%) scaleY(1.5);
  }
  100% {
    transform: translate(0px, -200%) scaleY(1);
  }
}
@keyframes lineBigBlue {
  0% {
    transform: translate(0px, 100%) scaleY(1.6);
  }

  // 80% {
  //   transform: translate(0px, -100%) scaleY(1.5);
  // }
  100% {
    transform: translate(0px, -200%) scaleY(1);
  }
}
@keyframes moveRed {
  0% {
    transform: translate(130%, -50%) scaleX(1);
  }

  70% {
    transform: translate(100%, -50%) scaleX(1);
  }
  80% {
    transform: translate(80%, -50%) scaleX(1);
  }
  90% {
    transform: translate(65%, -50%) scaleX(0.1);
  }
  100% {
    transform: translate(65%, -50%) scaleX(0);
  }
}
@keyframes moveBlue {
  0% {
    transform: translate(-130%, -50%) scaleX(1);
  }

  70% {
    transform: translate(-100%, -50%) scaleX(1);
  }
  80% {
    transform: translate(-80%, -50%) scaleX(1);
  }
  90% {
    transform: translate(-65%, -50%) scaleX(0.1);
  }
  100% {
    transform: translate(-65%, -50%) scaleX(0);
  }
}

@keyframes opacityVideo {
  0% {
    opacity: 0;
    transform: translate(-50%, -50%) scale(0);
  }

  10% {
    opacity: 1;
    transform: translate(-50%, -50%) scale(0.5);
  }
  20% {
    opacity: 1;
    transform: translate(-50%, -50%) scale(1);
  }
  90% {
    opacity: 1;
    transform: translate(-50%, -50%) scale(1);
  }
  // 99% {
  //   opacity: 1;
  //   transform: translate(-50%, -50%) scale(1);
  // }
  100% {
    opacity: 0;
    transform: translate(-50%, -50%) scale(1);
  }
}
@keyframes opacityVideoMobile {
  0% {
    opacity: 0;
  }

  50% {
    opacity: 1;
  }

  90% {
    opacity: 1;
  }
  // 99% {
  //   opacity: 1;
  //   transform: translate(-50%, -50%) scale(1);
  // }
  100% {
    opacity: 0;
  }
}
.loader {
  background: linear-gradient(180deg, #120325 0%, #050505 100%);
  z-index: 99999;
  animation: hideLoader 3.5s linear forwards;
  @media (max-width: 450px) {
    animation: hideLoader 2.5s linear forwards;
  }
  video,
  .mobile-logo {
    position: absolute;
    width: 400px;
    // height: 400px;
    z-index: 99999;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%) scale(1);
    animation: opacityVideo 2.5s linear forwards;
    @media (max-width: 450px) {
      animation: opacityVideo 1.5s linear forwards;
    }
  }
  .mobile-logo {
    display: none;
    width: 60%;
  }
  @media (max-width: 450px) {
    .mobile-logo {
      display: block;
    }
    video {
      display: none;
    }
  }

  .line {
    width: 100%;
    height: 10px;
    position: absolute;

    &-red {
      transform: translate(65%, -50%) scaleX(0);
      position: absolute;
      left: 0px;
      top: 50%;
      background: #dc0506;
      animation: moveRed 1.5s linear forwards;
      transform-origin: 0 0;
    }
    &-blue {
      right: 0px;
      top: 50%;
      transform: translate(-55%, -50%) scaleX(0);

      background: #0eacd3;
      animation: moveBlue 1.5s linear forwards;
      transform-origin: 100% 100%;
    }
    @media (max-width: 450px) {
      display: none;
    }
  }
  .line-big {
    position: absolute;
    left: 0px;
    bottom: 0%;
    width: 100%;
    height: 50vh;
    z-index: 999999;
    transform-origin: 0 0;

    &-blue {
      background: #0eacd3;
      transform: translate(0px, -200%) scaleY(1);

      animation: lineBigBlue 0.6s linear forwards;
      animation-delay: 2.35s;
      @media (max-width: 450px) {
        animation-delay: 1.35s;
      }
    }
    &-red {
      background: #dc0506;
      transform: translate(0px, -200%) scaleY(1);
      animation: lineBigRed 0.8s linear forwards;
      animation-delay: 2s;
      @media (max-width: 450px) {
        animation-delay: 1s;
      }
    }
  }
  position: fixed;
  width: 100vw;
  height: 100vh;
  top: 0;
  left: 0;
  background-color: rgb(200, 193, 193);
  // animation: 3s identifier;
}
</style>
