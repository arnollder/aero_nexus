<template>
  <MainLayout
    @toggleTheme="toggleTheme"
    :switchThemeHeaderFooter="switchThemeHeaderFooter"
    :switchThemeMain="switchThemeMain"
    :buttonsTheme="buttonsTheme"
  >
    <MainContent
      class="border"
      title="Летательные аппараты"
      :theme-styles="switchTheme"
      :buttonsTheme="buttonsTheme"
    />
    <SidebarNav :theme-styles="switchTheme" class="border" />
  </MainLayout>
</template>

<script setup lang="ts">
import MainContent from '@/components/composition/MainContent.vue';
import MainLayout from '@/components/composition/layouts/MainLayout.vue';
import SidebarNav from '@/components/composition/SidebarNav.vue';
import { ref, computed, type CSSProperties } from 'vue';

const isDarkTheme = ref(false);

// вычисляемые свойства
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
.root {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
.container {
  display: flex;
  column-gap: 10px;
  flex-grow: 1;
  padding: 10px;
}
.border {
  border: 3px solid gray;
}
</style>
