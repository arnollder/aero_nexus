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

<script lang="ts">
import { defineComponent, type CSSProperties, type PropType } from 'vue'

export default defineComponent({
  name: 'SidebarNav',
  props: {
    themeStyles: {
      type: Object as PropType<CSSProperties>,
      default: () => ({})
    }
  }
})
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
