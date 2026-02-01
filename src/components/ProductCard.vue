<template>
  <div class="user-root" :style="themeStyles">
    <div class="user-info" :style="themeStyles">
      <slot name="prepend" />
      <div class="name">{{ $props.product?.name }}</div>
      <div class="model">модель: {{ $props.product?.model }}</div>
      <div class="price">цена: {{ $props.product?.price }} ₽</div>
    </div>
    <slot name="clickcounter" />
    <img :src="$props.product?.img" class="avatar" alt="avatar" />
    <slot name="append" />
  </div>
</template>

<script lang="ts">
import { defineComponent, type PropType, type CSSProperties } from 'vue';

interface IUser {
  name: string;
  model: string;
  price: string;
  img: string;
  alt: string;
}

export default defineComponent({
  name: 'ProductCard',
  props: {
    product: {
      type: Object as PropType<IUser>,
      default: () =>
        ({
          name: 'No Name',
          model: 'No Brand',
          price: '0',
          img: 'https://static.bntu.by/bntu/new/staffs/photo_2163_8bd01886c446fc213afa7792f8f8e859.jpg',
          alt: 'No Img',
        }) as IUser,
    },
    themeStyles: {
      type: Object as PropType<CSSProperties>,
      default: () => ({}),
    },
  },
});
</script>

<style scoped>
.user-root {
  width: 300px;
  padding: 10px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  row-gap: 10px;
  border-radius: 12px;
  overflow: auto;
  /* box-shadow: 
        0 0 5px rgba(2, 235, 21, 0.5),
        0 0 10px rgba(2, 235, 21, 0.5),
        0 0 15px rgba(2, 235, 21, 0.7); */
  box-shadow:
    8px 8px 16px rgb(4, 119, 13),
    inset -1px -1px 10px rgba(2, 235, 21, 0.7),
    12px 12px 5px rgba(2, 235, 21, 0.5);
}
.user-info {
  border: 1px solid black;
  border-radius: 5px;
  padding-left: 5px;
}
.avatar {
  width: 100%;
  height: auto;
  border: 1px solid black;
  border-radius: 5px;
}
.name {
  font-size: 32px;
}
.age,
.role {
  font-size: 20px;
}
</style>
