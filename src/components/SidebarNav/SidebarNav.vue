<template>
  <nav class="sidebar" :class="toggleStyles">
    <ul class="menu">
      <li><a href="#" :class="toggleLinksStyles">Главная</a></li>
      <li><a href="#" :class="toggleLinksStyles">Летательные аппараты</a></li>
      <li><a href="#" :class="toggleLinksStyles">Парашютные системы</a></li>
      <li><a href="#" :class="toggleLinksStyles">Школа пилотирования</a></li>
    </ul>
  </nav>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import type { ISidebarNavProps } from './types';

const props = defineProps<ISidebarNavProps>();

const toggleStyles = computed(() => ({
  'sidebar-dark': props.statusDark,
}));

const toggleLinksStyles = computed(() => ({
  'links': true,
  'links-dark': props.statusDark,
}));

</script>

<style scoped>
.sidebar {
  padding: 10px;
  color: inherit;
  background-color: rgba(255, 255, 255, 0.3);
}
.sidebar-dark {
  background-color: rgba(54, 55, 58, 0.5);
  color: darkgray;
}
.menu {
  list-style: none;
}
li {
  margin: 5px;
}
.links {
  color: black;
}
.links-dark {
  background-color: 'transparent';
  color: darkgray;
}
</style>
