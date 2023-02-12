<template>
  <div class="btn">
    {{ title }}
  </div>
</template>

<script>
import { toRef } from 'vue';
export default {
  props: {
    title: String,
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
  &:hover {
    background-color: #f14849;
  }
  @media screen and (max-width: 870px) {
    height: 56px;
    width: 127px;
  }
}
</style>
