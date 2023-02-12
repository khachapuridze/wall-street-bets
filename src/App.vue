<template>
  <div class="body-layer"></div>

  <div id="js-scroll" class="js-scroll" data-scroll-container>
    <Header />

    <router-view />
    <Footer />
  </div>
</template>
<script>
import Header from './layouts/Header.vue';
import LocomotiveScroll from 'locomotive-scroll';
import { gsap, ScrollTrigger } from 'gsap/all';
import Footer from './layouts/Footer.vue';
export default {
  components: { Header, Footer },
  data() {
    return {
      lmS: null,
    };
  },
  // mounted() {
  //   this.lmS = new LocomotiveScroll({
  //     el: document.querySelector('#js-scroll'),
  //     smooth: true,
  //   });
  //   console.log('lmS', this.lmS);
  // },
  methods: {
    setScroll() {
      let scroller = new LocomotiveScroll({
        el: document.querySelector('[data-scroll-container]'),
        smooth: true,
      });
      gsap.registerPlugin(ScrollTrigger);
      scroller.on('scroll', ScrollTrigger.update);
      scroller.on('call', () => {
        this.$store.commit('startNumberAnimation');
      });
      ScrollTrigger.scrollerProxy('.js-scroll', {
        scrollTop(value) {
          return arguments.length ? scroller.scrollTo(value, 0, 0) : scroller.scroll.instance.scroll.y;
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
      ScrollTrigger.addEventListener('refresh', () => scroller.update());
      ScrollTrigger.refresh();
    },
  },
  mounted() {
    this.setScroll();
  },
  setup() {
    return {};
  },
};
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.js-scroll {
  position: relative;
  z-index: 1;
  padding-bottom: 0px;
}
#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
