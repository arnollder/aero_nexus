<template>
  <header :class="toggleStyles">
    <img class="header-logo" src="/src/assets/images/airplane-icon.svg" alt="">
    {{ title }}
    <button :class="toggleButtonsStyles" @click="toggleTheme">Switch Theme</button>
  </header>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue';
import type { IIsDarkEmit, IHeaderProps } from './types';

const isDark = ref(false);

defineProps<IHeaderProps>();

// эмиты
const emit = defineEmits<IIsDarkEmit>();

// методы
const toggleTheme = () => {
  isDark.value = !isDark.value;
  emit('toggleTheme', isDark.value);
};

// ===== изменение темы =====
const toggleStyles = computed(() => ({
  header: true,
  'header-dark': isDark.value,
}));
const toggleButtonsStyles = computed(() => ({
  switch: true,
  'switch-dark': isDark.value,
}));
</script>

<style scoped>
.header {
  height: 100px;
  background-color: rgba(13, 140, 190, 0.5);
  font-size: 32px;
  display: flex;
  justify-content: center;
  align-items: center;
}
.header-logo {
  width: 200px;
}
.header-dark {
  background-color: rgba(54, 55, 58, 0.5);
  color: darkgray;
}

.switch {
  padding: 5px;
  width: 110px;
  position: absolute;
  top: 10px;
  right: 10px;
  border: 3px solid black;
  border-radius: 5px;
  cursor: pointer;
  background-color: rgb(0, 183, 255);
}
.switch-dark {
  background-color: rgba(0, 128, 0);
}
.switch:hover {
  color: darkslategray;
  border: 3px solid darkslategray;
  font-weight: 700;
}
</style>
