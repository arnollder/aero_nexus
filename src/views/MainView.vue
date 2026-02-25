<template>
  <div :class="toggleStyles">
    <MainLayout @toggleTheme="toggleTheme" :statusDark="statusDark">
      <MainContent class="border" title="Летательные аппараты" :statusDark="statusDark" />
      <button class="sidebar_open_close" @click="toggleSidebar">
        <img v-if="!isSidebar" class="open-close" src="/src/assets/images/buttons/sidebar_open.png" alt="" />
        <img v-if="isSidebar" class="open-close" src="/src/assets/images/buttons/sidebar_close.png" alt="" />
      </button>
      <SidebarNav v-if="isSidebar" class="border" :statusDark="statusDark" />
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
const statusDark = computed(() => isDarkTheme.value);

// ===== ВЫЧИСЛЯЮ БЭКГРАУНД СТРАНИЦЫ =====
const toggleStyles = computed(() => ({
  root: true,
  'root-dark': isDarkTheme,
}));

// ===== SIDEBAR =====
const isSidebar = ref(false);
const toggleSidebar = () => {
  isSidebar.value = !isSidebar.value;
};
</script>

<style scoped>
.root {
  background-color: beige;
  background-size: cover;
  background-position: center;
}
.root-dark {
  background-color: black;
}
.border {
  border: 3px solid gray;
  color: rgb(54, 55, 58);
}
.sidebar_open_close {
  margin-top: 0;
  all: unset;
}
.open-close {
  width: 30px;
}
</style>
