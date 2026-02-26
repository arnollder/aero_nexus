<template>
  <div>
    <div class="add">
      <div class="counter">
        <button :class="toggleButtonsStyles" @click="decrement">-</button>
        <div>{{ count }} шт.</div>
        <button :class="toggleButtonsStyles" @click="increment">+</button>
      </div>
      <button class="add_cart" :class="toggleAddBasketStyles" @click="handleAddToCart">
        Добавить
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue';
import type { IClickCounterProps } from './types';
import { useLocalStorage } from '@/composables/useLocalStorage';

// ===== ADD TO CART =====
const count = ref(0);
const { saveToLocalStorage } = useLocalStorage();
const handleAddToCart = () => saveToLocalStorage(props.product, count.value)

// методы
const increment = () => count.value++;
const decrement = () => {
  if (count.value > 0) {
    count.value--;
  }
};

// ===== PROPS =====
const props = defineProps<IClickCounterProps>();

// ===== TOGGLE STYLES =====
const toggleButtonsStyles = computed(() => ({
  btn: true,
  btn_dark: props.statusDark,
}));
const toggleAddBasketStyles = computed(() => ({
  add_cart_dark: props.statusDark,
}));
</script>

<style scoped>
.add {
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
}
.counter {
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
.add_cart {
  width: 100px;
  padding: 5px;
  background-color: rgb(44, 172, 44);
}
.add_cart_dark {
  color: white;
  background-color: green;
}
.btn {
  display: flex;
  align-items: center;
  justify-content: center;
  color: aliceblue;
  font-size: 32px;
  background-color: rgb(0, 183, 255);
}
.btn_dark {
  background-color: green;
}
</style>
