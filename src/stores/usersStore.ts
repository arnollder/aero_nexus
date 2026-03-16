import { $api } from '@/api';
import type { IUser } from '@/types/types';
import { defineStore } from 'pinia';
import { ref } from 'vue';

export const useUsersStore = defineStore('users', () => {
  const usersList = ref<IUser[]>([]);
  const user = ref<IUser>({} as IUser)
  const isLoading = ref(false);
  const isError = ref(false);

  const fetchUsers = async () => {
    try {
      isLoading.value = true;
      isError.value = false;
      const { data } = await $api.get('/users');
      usersList.value = data;
    } catch (err: unknown) {
      isError.value = true;
      console.error(err);
    } finally {
      isLoading.value = false;
    }
  };

  const fetchUser = async (id: number) => {
    try {
      isLoading.value = true;
      isError.value = false;
      const { data } = await $api.get(`/users/${id}`);
      user.value = data;
    } catch (err: unknown) {
      isError.value = true;
      console.error(err);
    } finally {
      isLoading.value = false;
    }
  };

  return {
    usersList,
    user,
    isLoading,
    isError,
    fetchUsers,
    fetchUser,
  };
});
