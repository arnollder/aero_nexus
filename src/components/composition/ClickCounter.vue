<template>
  <div>
    <div class="add">
      <!-- <h2 :style="[themeStyles, counterTitleColor]">
        {{ title }}
      </h2> -->
      <button class="btn" :style="buttonsStyles" @click="decrement">-</button>
      <div>{{ count }} шт.</div>
      <!-- <div>Double count {{ doubleCount }}</div> -->
      <div class="buttons">
        <button class="btn" :style="buttonsStyles" @click="increment">+</button>
        <button class="btn-delete" :style="buttonsStyles" @click="reset">x</button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { inject, ref } from 'vue';
import type { CSSProperties, ComputedRef } from 'vue';

const count = ref(0);

// методы
const increment = () => count.value++;
const decrement = () => {
  if (count.value > 0) {
    count.value--;
  }
}
const reset = () => (count.value = 0);

// ===== INJECT =====
// == provide from MainView ==
const buttonsStyles = inject<ComputedRef<CSSProperties>>('buttonsStyles'); 
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
