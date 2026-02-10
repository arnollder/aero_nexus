<template>
  <div class="root" :class="toggleStyles">
    <HeaderLayout title="Гражданский Эшелон" @toggleTheme="toggleTheme" />
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
</style>
