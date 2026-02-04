<template>
  <div>
    <div class="add">
      <!-- <h2 :style="[themeStyles, counterTitleColor]">
        {{ title }}
      </h2> -->
      <!-- <div>Double count {{ doubleCount }}</div> -->

      <div class="basket">
        <button class="btn" :style="buttonsStyles" @click="decrement">-</button>
        <div class="count">{{ count }} шт.</div>
        <button class="btn" :style="buttonsStyles" @click="increment">+</button>
      </div>

      <!-- <div class="buttons">
        <button class="btn-delete" :style="buttonsStyles" @click="reset">x</button>
      </div> -->
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
// const reset = () => (count.value = 0);

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
  /* border: 3px solid; */
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
}
.btn-delete {
  margin-left: 5px;
  background-color: rgba(165, 42, 42, 0.9);
}
.count {
  /* border: 5px solid white; */
}
</style>
