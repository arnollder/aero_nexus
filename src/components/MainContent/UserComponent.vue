<template>
  <hr :style="{ marginTop: '20px' }" />
  <div>Name: {{ user.name }}</div>
  <div>Age: {{ user.age }}</div>
  <div>Country: {{ user.country }}</div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

interface IUser {
  name: string;
  age: number;
  country: string;
}

// ref
const user = ref<IUser>({
  name: 'Arnold',
  age: 35,
  country: 'Indonesia',
});

// reactive
// const user2 = reactive<IUser>({
//   name: 'Arny',
//   age: 33,
//   country: 'Russia',
// });

</script>

<style scoped>
div {
  font-size: 32px;
}
</style>
