<template>
  <div>
    <div class="add">
      <!-- <h2 :style="[themeStyles, counterTitleColor]">
        {{ title }}
      </h2> -->
      <div>Заказ: {{ count }} шт.</div>
      <!-- <div>Double count {{ doubleCount }}</div> -->
      <div class="buttons">
        <button class="btn" :style="buttonsTheme" @click="decrement">-</button>
        <button class="btn" :style="buttonsTheme" @click="increment">+</button>
        <button class="btn-delete" :style="buttonsTheme" @click="reset">x</button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import type { CSSProperties, PropType } from 'vue';

const count = ref(0);

// пропсы
defineProps({
  buttonsTheme: {
    type: Object as PropType<CSSProperties>,
    default: () => {}
  },
});

// методы
const increment = () => count.value++;
const decrement = () => count.value--;
const reset = () => (count.value = 0);
</script>

<style scoped>
.add {
  display: flex;
  align-items: flex-end;
  justify-content: flex-end;
  margin-right: 10px;
  column-gap: 10px;
}
button {
  /* margin-right: 5px; */
  /* padding: 5px; */
  width: 25px;
  height: 25px;
  border: 1px solid rgba(4, 119, 13);
  border-radius: 9px;
  cursor: pointer;
}
button:hover {
  color: darkslategray;
  border: 2px solid darkslategray;
  font-weight: 700;
}
.btn {
  background-color: rgb(84, 207, 255);
}
.btn-delete {
  margin-left: 5px;
  background-color: rgba(165, 42, 42, 0.9);
}
</style>
