<template>
  <div class="">
    <h2>Users Page</h2>
    <h2 v-if="isLoading">Loading...</h2>
    <h2 v-else-if="isError">Ошибка при получении списка пользователей!</h2>
    <ul v-else>
      <li class="post_title" :key="user.id" v-for="user in usersList">
        {{ `${user.id}. ${user.name}` }}
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
import { useUsersStore } from '@/stores/usersStore';
import { storeToRefs } from 'pinia';

const userStore = useUsersStore();
const { isError, isLoading, usersList } = storeToRefs(userStore);

userStore.fetchUsers();
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
.post_title {
  cursor: pointer;
}
</style>
