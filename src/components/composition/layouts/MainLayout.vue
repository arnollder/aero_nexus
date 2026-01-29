<template>
  <div class="root" :style="switchThemeMain">
    <HeaderV
      @toggleTheme="toggleTheme"
      title="Гражданский Эшелон"
      :style="switchThemeHeaderFooter"
      :buttonsTheme="buttonsTheme"
    />
    <div class="container">
      <slot />
    </div>
    <VFooter title="Footer" :style="switchThemeHeaderFooter" />
  </div>
</template>

<script setup lang="ts">
import { type PropType, type CSSProperties } from 'vue';
import HeaderV from '@/components/composition/HeaderV.vue';
import VFooter from '@/components/composition/VFooter.vue';

let isDark = false;

// пропсы
defineProps({
  switchThemeHeaderFooter: {
    type: Object as PropType<CSSProperties>,
    default: () => ({}),
  },
  switchThemeMain: {
    type: Object as PropType<CSSProperties>,
    default: () => ({}),
  },
  buttonsTheme: {
    type: Object as PropType<CSSProperties>,
    default: () => ({}),
  },
});

// эмиты
const emit = defineEmits(['toggleTheme']);

// методы
const toggleTheme = (event: boolean) => {
  isDark = event;
  emit('toggleTheme', isDark);
};
</script>

<style scoped>
.root {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
.container {
  display: flex;
  column-gap: 10px;
  flex-grow: 1;
  padding: 10px;
}
</style>
