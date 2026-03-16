<template>
  <div class="user-container">
    <h2 v-if="isLoading">Loading...</h2>
    <h2 v-else-if="isError">Ошибка при получении пользователя!</h2>
    <template v-else>
      <h2>{{ user.name }}</h2>
      <div>Username: {{ user.username }}</div>
      <div>User email: {{ user.email }}</div>
    </template>
  </div>
</template>

<script setup lang="ts">
import { useUsersStore } from '@/stores/usersStore';
import { storeToRefs } from 'pinia';
import { useRoute } from 'vue-router';

const route = useRoute();
const userStore = useUsersStore();
const { isError, isLoading, user } = storeToRefs(userStore);
const { fetchUser } = userStore;

fetchUser(Number(route.params.id));
</script>

<style scoped>
.user-container {
  margin: auto;
  padding: 15px;
  display: flex;
  flex-direction: column;
  border: 2px solid black;
  border-radius: 15px;
  background-color: wheat;
}
</style>
