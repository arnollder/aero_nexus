<template>
  <nav class="sidebar" :style="themeStylesSection">
    <ul class="menu">
      <li><a href="#" :style="stylesLinks">Главная</a></li>
      <li><a href="#" :style="stylesLinks">Летательные аппараты</a></li>
      <li><a href="#" :style="stylesLinks">Парашютные системы</a></li>
      <li><a href="#" :style="stylesLinks">Школа пилотирования</a></li>
    </ul>
  </nav>
</template>

<script setup lang="ts">
import { inject } from 'vue';
import type { CSSProperties, ComputedRef } from 'vue';
import type { ISidebarNavProps } from './types';

defineProps<ISidebarNavProps>();

// ===== INJECT =====
// == provide from MainView ==
const stylesLinks = inject<ComputedRef<CSSProperties>>('stylesLinks');
</script>

<style scoped>
.sidebar {
  padding: 10px;
  color: inherit;
}
.menu {
  list-style: none;
}
li {
  margin: 5px;
}
a {
  color: black;
}
</style>
