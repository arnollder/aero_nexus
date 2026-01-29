<template>
  <nav class="sidebar" :style="themeStyles">
    <ul class="menu">
      <li><a href="#" :style="themeStyles">Главная</a></li>
      <li><a href="#" :style="themeStyles">Летательные аппараты</a></li>
      <li><a href="#" :style="themeStyles">Парашютные системы</a></li>
      <li><a href="#" :style="themeStyles">Школа пилотирования</a></li>
    </ul>
  </nav>
</template>

<script setup lang="ts">
import type { CSSProperties, PropType } from 'vue';

defineProps({
  themeStyles: {
    type: Object as PropType<CSSProperties>,
    required: true,
  },
});
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
