<template>
  <div class="root" :class="toggleStyles">
    <HeaderLayout title="Гражданский Эшелон" @toggleTheme="toggleTheme" />
    <nav class="nav_all">
      <div class="nav_left">
        <RouterLink :activeClass="'active-link'" class="nav_btn" :to="{name: 'home'}">Main</RouterLink>
        <RouterLink :activeClass="'active-link'" class="nav_btn" :to="{name: 'news'}">Posts</RouterLink>
      </div>
      <div class="nav_right">
        <RouterLink :activeClass="'active-link'" class="nav_btn" :to="{name: 'cart'}">Корзина</RouterLink>
      </div>
    </nav>
    <div class="container">
      <slot />
    </div>
    <FooterLayout title="Footer" :statusDark="statusDark" />
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue';
import HeaderLayout from '@/components/layouts/HeaderLayout.vue';
import FooterLayout from '@/components/layouts/FooterLayout.vue';
import type { IIsDarkEmit, IMainLayoutProps } from './types';

const isDark = ref(false);

// пропсы
defineProps<IMainLayoutProps>();

// эмиты
const emit = defineEmits<IIsDarkEmit>();

// методы
const toggleTheme = (event: boolean) => {
  isDark.value = event;
  emit('toggleTheme', isDark.value);
};

// ===== смена темы =====
const toggleStyles = computed(() => ({
  'root-dark': isDark.value,
}));
</script>

<style scoped>
.root {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
.root-dark {
  background-color: rgba(169, 169, 169, 0.5);
}
.container {
  display: flex;
  column-gap: 10px;
  flex-grow: 1;
  padding: 10px;
}
.nav_all {
  display: flex;
  justify-content: space-between;
  padding: 10px 20px;
}
.nav_left {
  display: flex;
  gap: 10px;
}
.nav_btn {
  padding: 5px 10px;
  background-color: rgb(44, 172, 44);
  color: black;
  border-radius: 5px;
}
.active-link {
  background-color: rgb(241, 61, 61);
}
</style>
