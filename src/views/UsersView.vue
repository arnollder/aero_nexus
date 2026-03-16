<template>
  <div class="users-root">
    <h2>Users Page</h2>
    <h2 v-if="isLoading">Loading...</h2>
    <h2 v-else-if="isError">Ошибка при получении списка пользователей!</h2>
    <ul v-else>
      <li
        @click="redirectToUser(user.id)"
        class="post_title"
        :key="user.id"
        v-for="user in usersList"
      >
        {{ `${user.id}. ${user.name}` }}
      </li>
    </ul>
    <button @click="fetchUsers" class="btn">Обновить список пользователей</button>
  </div>
</template>

<script setup lang="ts">
import router from '@/router';
import { useUsersStore } from '@/stores/usersStore';
import { storeToRefs } from 'pinia';

const userStore = useUsersStore();
const { isError, isLoading, usersList } = storeToRefs(userStore);
const { fetchUsers } = userStore;

const redirectToUser = (id: number) => {
  router.push(`/users/${id}`);
};

fetchUsers();
</script>

<style scoped>
.users-root {
  padding: 15px;
  display: flex;
  flex-direction: column;
  row-gap: 20px;
}
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
.post_title {
  list-style-type: none;
  cursor: pointer;
}
</style>
