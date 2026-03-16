<template>
  <div class="root" :class="toggleStyles">
    <HeaderLayout title="Гражданский Эшелон" />
    <nav class="nav_all">
      <div class="nav_left">
        <RouterLink :activeClass="'active-link'" class="nav_btn" :to="{ name: 'home' }"
          >Main</RouterLink
        >
        <RouterLink :activeClass="'active-link'" class="nav_btn" :to="{ name: 'news' }"
          >Posts</RouterLink
        >
        <RouterLink :activeClass="'active-link'" class="nav_btn" :to="{ name: 'weather' }"
          >Weather</RouterLink
        >
        <RouterLink :activeClass="'active-link'" class="nav_btn" :to="{ name: 'users' }"
          >Users</RouterLink
        >
      </div>
      <div class="nav_right">
        <RouterLink :activeClass="'active-link'" class="nav_btn" :to="{ name: 'cart' }"
          >Корзина</RouterLink
        >
      </div>
    </nav>
    <div class="container">
      <slot />
    </div>
    <FooterLayout title="Footer" />
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import HeaderLayout from '@/components/layouts/HeaderLayout.vue';
import FooterLayout from '@/components/layouts/FooterLayout.vue';
import { useThemeStore } from '@/stores/toggle-theme';

const themeStore = useThemeStore();

// ===== смена темы =====
const toggleStyles = computed(() => ({
  'root-dark': themeStore.isDark,
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
