<template>
  <div class="buttons">
    <button class="btn" @click="router.push({ name: 'home' })">НА ГЛАВНУЮ</button>
    <button class="btn" @click="router.back()">НАЗАД</button>
    <button class="btn" @click="router.forward()">ВПЕРЕД</button>
  </div>
  <div>Posts</div>
</template>

<script setup lang="ts">
import { useRoute, useRouter } from 'vue-router';

const router = useRouter();
const route = useRoute();
</script>

<style scoped>
.buttons {
  padding: 10px 20px;
  display: flex;
  column-gap: 10px;
}
.btn {
  padding: 5px 10px;
  background-color: rgb(44, 172, 44);
  color: black;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}
</style>
