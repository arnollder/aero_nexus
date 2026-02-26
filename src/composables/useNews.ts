import type { INewsItem } from '@/components/MainContent/types';
import { ref, computed, onMounted, readonly } from 'vue';

export const useNews = (initialCount = 2) => {
  const data = ref<INewsItem[]>([]);
  const loading = ref(true);
  const error = ref<string>();
  const newsCount = ref(initialCount);

  const fetchNews = async () => {
    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/posts');

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      data.value = await response.json();
    } catch (err) {
      error.value = err instanceof Error ? err.message : 'Что-то пошло не по плану...';
    } finally {
      loading.value = false;
    }
  };

  const displayedNews = computed(() => {
    if (!data.value) return [];
    if (newsCount.value === data.value.length) return data.value;
    return data.value.slice(0, newsCount.value);
  });

  const newsStart = () => (newsCount.value = 2);
  const newsMore = () => (newsCount.value = 10);
  const newsAll = () => (newsCount.value = data.value.length);

  onMounted(fetchNews);

  return {
    loading: readonly(loading),
    error: readonly(error),
    newsCount: readonly(newsCount),
    displayedNews,
    newsStart,
    newsMore,
    newsAll,
  };
};
