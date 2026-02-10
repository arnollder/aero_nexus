<template>
  <div>
    <div class="add">
      <div class="basket">
        <button :class="toggleButtonsStyles" @click="decrement">-</button>
        <div>{{ count }} шт.</div>
        <button :class="toggleButtonsStyles" @click="increment">+</button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue';
import type { IClickCounterProps } from './types';

const count = ref(0);

// методы
const increment = () => count.value++;
const decrement = () => {
  if (count.value > 0) {
    count.value--;
  }
}

const props = defineProps<IClickCounterProps>();

// ===== смена темы =====
const toggleButtonsStyles = computed(() => ({
  'btn': true,
  'btn-dark': props.statusDark,
}));

</script>

<style scoped>
.add {
  display: flex;
  align-items: flex-end;
  justify-content: flex-end;
  margin-right: 10px;
}
.basket {
  display: flex;
  align-items: center;
  justify-content: flex-end;
  column-gap: 10px;

  background-color: rgba(107, 114, 136, 0.5);
  border-radius: 50px;

}
button {
  width: 55px;
  height: 35px;
  border: 0;
  border-radius: 50px;
  cursor: pointer;
}
button:hover {
  border: 2px solid aliceblue;
  font-weight: 700;
}
.btn {
  display: flex;
  align-items: center;
  justify-content: center;
  color: aliceblue;
  font-size: 32px;
  background-color: rgb(0, 183, 255);
}
.btn-dark {
  background-color: green;
}
</style>
