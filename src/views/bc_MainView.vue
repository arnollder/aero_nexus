<template>
  <div :class="toggleStyles">
    <!-- <MainLayout @toggleTheme="toggleTheme" :statusDark="statusDark"> -->
      <MainContent title="Летательные аппараты" :statusDark="statusDark" />
    <!-- </MainLayout> -->
  </div>
</template>

<script setup lang="ts">
// import MainLayout from '@/components/layouts/MainLayout.vue';
// import SidebarNav from '@/components/SidebarNav/SidebarNav.vue';
import { ref, computed } from 'vue';

const isDarkTheme = ref(false);

// ===== EMITS =====
// const toggleTheme = (event: boolean) => (isDarkTheme.value = event);

// ===== PROPS =====
const statusDark = computed(() => isDarkTheme.value);

// ===== ВЫЧИСЛЯЮ БЭКГРАУНД СТРАНИЦЫ =====
const toggleStyles = computed(() => ({
  showcase: true,
  'root-dark': isDarkTheme,
}));
</script>

<style scoped>
.showcase {  
  margin: 0 auto;
  background-color: beige;
}
</style>
