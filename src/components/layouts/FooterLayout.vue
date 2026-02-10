<template>
  <footer :class="toggleStyles">{{ title }} {{ new Date().getFullYear() }}</footer>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import type { IFooterProps } from './types';

const props = defineProps<IFooterProps>();

// ===== смена темы =====
const toggleStyles = computed(() => ({
  footer: true,
  'footer-dark': props.statusDark,
}));
</script>

<style scoped>
.footer {
  height: 100px;
  background-color: rgba(13, 140, 190, 0.5);
  font-size: 32px;
  display: flex;
  justify-content: center;
  align-items: center;
}
.footer-dark {
  background-color: rgba(54, 55, 58, 0.5);
  color: darkgray;
}
</style>
