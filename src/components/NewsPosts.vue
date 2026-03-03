<template>
  <div class="buttoms">
    <button class="btn" @click="router.push({name: 'home'})">НА ГЛАВНУЮ</button>
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
.btn {
  
}
</style>
