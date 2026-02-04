<template>
  <header class="header">
    {{ title }}
    <!-- <SwitchTheme /> -->
    <button class="switch" @click="toggleTheme" :style="buttonsStyles">Switch Theme</button>
  </header>
</template>

<script setup lang="ts">
import { ref, inject } from 'vue';
import type { CSSProperties, ComputedRef } from 'vue';
import type { IHeaderProps } from './types';

const isDark = ref(false);

defineProps<IHeaderProps>();

// эмиты
const emit = defineEmits(['toggleTheme']);

// методы
const toggleTheme = () => {
  isDark.value = !isDark.value;
  emit('toggleTheme', isDark.value);
};

// ===== INJECT =====
// == provide from MainView ==
const buttonsStyles = inject<ComputedRef<CSSProperties>>('buttonsStyles');
</script>

<style scoped>
.header {
  height: 100px;
  /* background-color: gray; */
  background-color: rgba(13, 140, 190, 0.5);
  font-size: 32px;
  display: flex;
  justify-content: center;
  align-items: center;
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
}

.switch:hover {
  color: darkslategray;
  border: 3px solid darkslategray;
  font-weight: 700;
}
</style>
