<template>
  <div class="root" :style="switchThemeMain">
    <HeaderV
      @toggleTheme="toggleTheme"
      title="Гражданский Эшелон"
      :style="switchThemeHeaderFooter"
    />
    <div class="container">
      <slot />
    </div>
    <VFooter title="Footer" :style="switchThemeHeaderFooter" />
  </div>
</template>

<script setup lang="ts">
import { type PropType, type CSSProperties, ref } from 'vue';
import HeaderV from '@/components/HeaderV.vue';
import VFooter from '@/components/VFooter.vue';

const isDark = ref(false);

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
});

// эмиты
const emit = defineEmits(['toggleTheme']);

// методы
const toggleTheme = (event: boolean) => {
  isDark.value = event;
  emit('toggleTheme', isDark.value);
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
