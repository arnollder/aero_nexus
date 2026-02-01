<template>
  <!-- <div class="page-background"> -->
  <div :style="pageBackground">
    <MainLayout
      @toggleTheme="toggleTheme"
      :switchThemeHeaderFooter="switchThemeHeaderFooter"
      :switchThemeMain="switchThemeMain"
    >
      <MainContent
        class="border"
        title="Летательные аппараты"
        :themeStylesSection="themeStylesSection"
        :theme-styles="switchTheme"
      />
      <SidebarNav
        :theme-styles="switchTheme"
        class="border"
        :themeStylesSection="themeStylesSection"
      />
    </MainLayout>
  </div>
</template>

<script setup lang="ts">
import MainContent from '@/components/composition/MainContent.vue';
import MainLayout from '@/components/composition/layouts/MainLayout.vue';
import SidebarNav from '@/components/composition/SidebarNav.vue';
import { ref, computed, type CSSProperties, provide } from 'vue';

const isDarkTheme = ref(false);

// вычисляемые свойства
const themeStylesSection = computed((): CSSProperties => {
  return {
    'background-color': isDarkTheme.value ? 'rgba(54, 55, 58, 0.5)' : 'rgba(255, 255, 255, 0.3)',
    color: isDarkTheme.value ? 'darkgray' : 'black',
  };
});

const switchTheme = computed((): CSSProperties => {
  return {
    'background-color': isDarkTheme.value ? 'rgba(54, 55, 58)' : 'white',
    color: isDarkTheme.value ? 'darkgray' : 'black',
  };
});
const switchThemeMain = computed((): CSSProperties => {
  return {
    'background-color': isDarkTheme.value ? 'rgba(169, 169, 169, 0.5)' : undefined,
  };
});
const switchThemeHeaderFooter = computed((): CSSProperties => {
  return {
    'background-color': isDarkTheme.value ? 'rgba(54, 55, 58, 0.5)' : 'rgba(13, 140, 190, 0.5)',
    color: isDarkTheme.value ? 'darkgray' : 'black',
  };
});

// ===== PROVIDE =====
const buttonsStyles = computed((): CSSProperties => {
  return {
    'background-color': isDarkTheme.value ? 'gray' : undefined,
  };
});
provide('buttonsStyles', buttonsStyles)

// ===== ВЫЧИСЛЯЮ БЭКГРАУНД СТРАНИЦЫ =====
const pageBackgroundUrl = computed(() =>isDarkTheme.value === false
  ? '/src/assets/images/backgrounds/page_background.webp'
  : '/src/assets/images/backgrounds/page_background_night.webp',
);

const pageBackground = computed(() => ({
  backgroundImage: `url(${pageBackgroundUrl.value})`,
  backgroundSize: 'cover',
  backgroundPosition: 'center',
}));

// ===== МЕТОДЫ =====
const toggleTheme = (event: boolean) => (isDarkTheme.value = event);
</script>

<style scoped>
.page-background {
  background-image: url('../assets/images/backgrounds/page_background_night.webp');
  background-size: cover;
  background-position: center;
}
.border {
  border: 3px solid gray;
  color: rgb(54, 55, 58);
}
</style>
