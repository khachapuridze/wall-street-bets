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

import Footer from './layouts/Footer.vue';
export default {
  components: { Header, Footer },
  // mounted() {
  //   this.lmS = new LocomotiveScroll({
  //     el: document.querySelector('#js-scroll'),
  //     smooth: true,
  //   });
  //   console.log('lmS', this.lmS);
  // },
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
