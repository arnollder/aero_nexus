<template>
  <div :style="themeStylesSection" class="page-background">
    <MainLayout
      @toggleTheme="toggleTheme"
      :switchThemeHeaderFooter="switchThemeHeaderFooter"
      :switchThemeMain="switchThemeMain"
      :buttonsTheme="buttonsTheme"
    >
      <MainContent
        class="border"
        title="Летательные аппараты"
        :themeStylesSection="themeStylesSection"
        :theme-styles="switchTheme"
        :buttonsTheme="buttonsTheme"
      />
      <SidebarNav 
        :theme-styles="switchTheme" class="border" 
        :themeStylesSection="themeStylesSection"
      />
    </MainLayout>
  </div>
</template>

<script setup lang="ts">
import MainContent from '@/components/composition/MainContent.vue';
import MainLayout from '@/components/composition/layouts/MainLayout.vue';
import SidebarNav from '@/components/composition/SidebarNav.vue';
import { ref, computed, type CSSProperties } from 'vue';

const isDarkTheme = ref(false);

// вычисляемые свойства
const themeStylesSection = computed((): CSSProperties => {
  return {
    'background-color': isDarkTheme.value ? '#36373a' : 'rgba(255, 255, 255, 0.3)',
    color: isDarkTheme.value ? 'darkgray' : 'black',
  };
});

const switchTheme = computed((): CSSProperties => {
  return {
    'background-color': isDarkTheme.value ? '#36373a' : 'white',
    color: isDarkTheme.value ? 'darkgray' : 'black',
  };
});
const switchThemeMain = computed((): CSSProperties => {
  return {
    'background-color': isDarkTheme.value ? 'darkgray' : undefined,
  };
});
const switchThemeHeaderFooter = computed((): CSSProperties => {
  return {
    'background-color': isDarkTheme.value ? '#36373a' : 'rgba(13, 140, 190, 0.5)',
    color: isDarkTheme.value ? 'darkgray' : 'black',
  };
});
const buttonsTheme = computed((): CSSProperties => {
  return {
    'background-color': isDarkTheme.value ? 'gray' : undefined,
  };
});

// методы
const toggleTheme = (event: boolean) => (isDarkTheme.value = event);

</script>

<style scoped>
.page-background {
  background-image: url('../assets/images/backgrounds/page_background.webp');
  background-size: cover;
  background-position: center;
}
.border {
  border: 3px solid gray;
}
</style>
