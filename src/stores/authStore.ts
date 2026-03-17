import { $api } from '@/api';
import { defineStore } from 'pinia';
import { ref } from 'vue';

export const useAuthStore = defineStore('auth', () => {
  const isAuth = ref(false);
  const isLoading = ref(false);
  const isError = ref(false);

  const submitAuth = async (formData: object) => {
    try {
      isLoading.value = true;
      isError.value = false;
      const { data } = await $api.post('/posts', {
        formData,
      });
      isAuth.value = true;

      console.log('Ответ сервера:', data);
      console.log('Auth:', isAuth.value);
    } catch (err: unknown) {
      isError.value = true;
      console.error(err);
    } finally {
      isLoading.value = false;
    }
  };

  return {
    isAuth,
    submitAuth,
  };
});
