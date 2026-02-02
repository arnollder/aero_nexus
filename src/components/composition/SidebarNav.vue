<template>
  <nav class="sidebar" :style="themeStylesSection">
    <ul class="menu">
      <!-- создать стили для ссылок и заменить :style="productStyles"  -->
      <li><a href="#" :style="productStyles">Главная</a></li>
      <li><a href="#" :style="productStyles">Летательные аппараты</a></li>
      <li><a href="#" :style="productStyles">Парашютные системы</a></li>
      <li><a href="#" :style="productStyles">Школа пилотирования</a></li>
    </ul>
  </nav>
</template>

<script setup lang="ts">
import { inject } from 'vue';
import type { CSSProperties, PropType, ComputedRef } from 'vue';

defineProps({
  themeStylesSection: {
    type: Object as PropType<CSSProperties>,
    default: () => ({}),
  },
});

// ===== INJECT =====
// == provide from MainView ==
const productStyles = inject<ComputedRef<CSSProperties>>('productStyles');
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
