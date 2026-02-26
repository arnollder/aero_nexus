<template>
  <div class="root" :class="toggleStyles">
    <img :src="$props.product?.img" class="avatar" alt="avatar" />
    <slot name="clickcounter" />
    <div class="user-info" >
      <slot name="prepend" />
      <div class="name">{{ $props.product?.name }}</div>
      <div class="model">модель: {{ $props.product?.model }}</div>
      <div class="price">цена: {{ $props.product?.price }} ₽</div>
    </div>
    <slot name="append" />
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import type { IProductCardProps } from './types';

const props = withDefaults(defineProps<IProductCardProps>(), {
  product: () => ({
    id: 999,
    name: 'No Name',
    model: 'No Brand',
    price: '0',
    img: 'https://static.bntu.by/bntu/new/staffs/photo_2163_8bd01886c446fc213afa7792f8f8e859.jpg',
    alt: 'No Img',
  }),
});

// ===== изменение темы =====
const toggleStyles = computed(() => ({
  'root-dark': props.statusDark,
}));
</script>

<style scoped>
.root {
  width: 300px;
  padding: 10px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  row-gap: 10px;
  border-radius: 12px;
  overflow: auto;
  background-color: white;
}
.root-dark {
  background-color: rgba(54, 55, 58);
  color: darkgray;
}
.user-info {
  border-radius: 5px;
  padding-left: 5px;
}
.avatar {
  width: 100%;
  height: auto;
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
