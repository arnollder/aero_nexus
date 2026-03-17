import { useAuthStore } from '@/stores/authStore';
import { storeToRefs } from 'pinia';
import { onBeforeMount } from 'vue';
import { useRouter } from 'vue-router';

export const useAuthCheck = () => {
  const router = useRouter();
  const authStore = useAuthStore();
  const { isAuth } = storeToRefs(authStore);

  const checkAuth = () => {
    if (!isAuth.value) {
      router.push('/auth');
    }
  };

  const requireAuth = () => {
    onBeforeMount(() => {
      checkAuth();
    });
  };

  return {
    isAuth,
    checkAuth,
    requireAuth,
  };
};
