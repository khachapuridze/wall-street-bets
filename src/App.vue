<template>
  <div class="body-layer"></div>

  <div id="js-scroll" class="js-scroll w-c" :class="{ 'see-more': $store.state.menuIsOpen }" data-scroll-container>
    <router-view />
    <Footer />
  </div>
</template>
<script>
import Footer from './layouts/Footer.vue';
export default {
  components: { Footer },
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
  overflow: hidden;
  transform: perspective(1px);
}
.js-scroll {
  position: relative;
  z-index: 1;
  // &.see-more {
  //   padding-bottom: 540px;
  // }
  @media (max-width: 870px) {
    height: 100vh;
    overflow: auto;
    overflow-x: hidden;
  }
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
