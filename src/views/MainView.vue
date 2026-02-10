<template>
  <div :class="toggleStyles">
    <MainLayout
      @toggleTheme="toggleTheme"
      :statusDark="statusDark"
    >
      <MainContent
        class="border"
        title="Летательные аппараты"
        :statusDark="statusDark"
      />
      <SidebarNav
        class="border"
        :statusDark="statusDark"
      />
    </MainLayout>
  </div>
</template>

<script setup lang="ts">
import MainContent from '@/components/MainContent/MainContent.vue';
import MainLayout from '@/components/layouts/MainLayout.vue';
import SidebarNav from '@/components/SidebarNav/SidebarNav.vue';
import { ref, computed } from 'vue';

const isDarkTheme = ref(false);

// ===== EMITS =====
const toggleTheme = (event: boolean) => (isDarkTheme.value = event);

// ===== PROPS =====
const statusDark = computed(() => isDarkTheme.value)

// ===== ВЫЧИСЛЯЮ БЭКГРАУНД СТРАНИЦЫ =====
const toggleStyles = computed(() => ({
  'root': true,
  'root-dark': isDarkTheme,
}))
</script>

<style scoped>
.root {
  background-image: url('/src/assets/images/backgrounds/page_background.webp');
  background-size: cover;
  background-position: center;
}
.root-dark {
  background-image: url('/src/assets/images/backgrounds/page_background_night.webp');
}
.border {
  border: 3px solid gray;
  color: rgb(54, 55, 58);
}
</style>
