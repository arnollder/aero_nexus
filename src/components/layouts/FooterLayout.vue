<template>
  <footer class="footer">{{ title }} {{ new Date().getFullYear() }}</footer>
</template>

<script setup lang="ts">
import type { IFooterProps } from './types';

defineProps<IFooterProps>();
</script>

<style scoped>
.footer {
  height: 100px;
  background-color: gray;
  font-size: 32px;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
