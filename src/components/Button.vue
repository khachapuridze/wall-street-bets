<template>
  <div class="btn">
    {{ title }}
    <svg v-if="send" width="20" height="18" viewBox="0 0 20 18" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M19.9427 1.63252C20.2107 0.29003 19.4959 -0.237377 18.6918 0.0982453L0.911028 7.434C-0.295203 7.9614 -0.250528 8.68059 0.732327 9.01622L5.24452 10.5025L15.7879 3.40653C16.2793 3.02296 16.7707 3.26269 16.3686 3.59831L7.83568 11.845L7.52296 16.8794C8.01439 16.8794 8.19309 16.6876 8.46114 16.3999L10.6502 14.0985L15.2518 17.7424C16.1006 18.2698 16.726 17.9821 16.9494 16.9273L19.9427 1.63252Z"
        fill="white"
      />
    </svg>
  </div>
</template>

<script>
import { toRef } from 'vue';
export default {
  props: {
    title: String,
    send: Boolean,
  },
  setup(props) {
    const title = toRef(props, 'title');
    return {
      title,
    };
  },
};
</script>

<style lang="scss" scoped>
.btn {
  display: flex;
  align-items: center;
  justify-content: center;
  max-height: 60px;
  background: #dc0506;
  border-radius: 4px;
  padding: 20px 24px;
  font-weight: 700;
  width: fit-content;
  font-size: 16px;
  line-height: 20px;
  color: #ffffff;
  cursor: pointer;
  transition: 0.2s ease;
  svg {
    margin-left: 10px;
  }
  &:hover {
    background-color: #f14849;
  }
  @media screen and (max-width: 870px) {
    height: 56px;
    width: 127px;
  }
}
</style>
