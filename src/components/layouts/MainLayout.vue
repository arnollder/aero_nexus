<template>
  <div class="root" :style="switchThemeMain">
    <HeaderLayout
      title="Гражданский Эшелон"
      @toggleTheme="toggleTheme"
      :style="switchThemeHeaderFooter"
    />
    <div class="container">
      <slot />
    </div>
    <FooterLayout title="Footer" :style="switchThemeHeaderFooter" />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import HeaderLayout from '@/components/layouts/HeaderLayout.vue';
import FooterLayout from '@/components/layouts/FooterLayout.vue';
import type { IMainLayoutProps } from './types';

const isDark = ref(false);

// пропсы
defineProps<IMainLayoutProps>();

// эмиты
const emit = defineEmits(['toggleTheme']);

// методы
const toggleTheme = (event: boolean) => {
  isDark.value = event;
  emit('toggleTheme', isDark.value);
};
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
</style>
