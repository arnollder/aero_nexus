<template>
  <div class="content" :class="toggleStyles">
    <h1 :class="toggleTitleStyles">{{ title }}</h1>
    <section>
      <div class="product_list">
        <ProductCard v-for="prod in prods" :key="prod.id" :product="prod" :statusDark="statusDark">
          <template #clickcounter>
            <ClickCounter :statusDark="statusDark" />
          </template>
        </ProductCard>
      </div>
      <hr :style="{ marginTop: '20px' }" />
    </section>

    <section class="news_block">
      <h2 class="news_title" :class="toggleTitleStyles">Новости</h2>
      <div class="news_list">
        <NewsComponent
          v-for="article in displayedNews"
          :key="article.id"
          :article="article"
          :statusDark="statusDark"
        />
      </div>
      <button
        v-if="newsCount == 2"
        class="news_button"
        :class="toggleStyles"
        @click="newsMore"
      >
        читать далее
      </button>
      <button
        v-else-if="newsCount == 10"
        class="news_button"
        :class="toggleStyles"
        @click="newsAll"
      >
        показать все
      </button>
      <button v-else class="news_button" :class="toggleStyles" @click="newsStart">
        свернуть все
      </button>
    </section>
  </div>
</template>

<script setup lang="ts">
import ClickCounter from '@/components/MainContent/ClickCounter.vue';
import ProductCard from '@/components/MainContent/ProductCard.vue';
import NewsComponent from './NewsComponent.vue';

import type { IMainContentProps } from './types';

import { prods } from '@/data/mocks/prods.mocks';
// import { news } from '@/data/mocks/news.mocks';

import { computed, ref, onMounted } from 'vue';

// ===== PROPS =====
const props = defineProps<IMainContentProps>();

// ===== TOGGLE THEME =====
const toggleStyles = computed(() => ({
  content_dark: props.statusDark,
}));
const toggleTitleStyles = computed(() => ({
  h1_dark: props.statusDark,
}));

// ===== NEWS BLOCK =====

// этот код я пока оставлю, хочу картинки из этого массива присваивать к постам массива, который прилетает с сервера

// const newsList = ref(news.slice(0, 2));

// const newsStart = () => (newsList.value = news.slice(0, 2));
// const newsMore = () => (newsList.value = news.slice(0, 10));
// const newsAll = () => (newsList.value = news);

const data = ref();
const loading = ref(true);
const error = ref();

onMounted(async () => {
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
});

const newsCount = ref(2)

const displayedNews = computed(() => {
  if (!data.value) return [];
  if (newsCount.value === data.value) return data.value;
  return data.value.slice(0, newsCount.value);
});

const newsStart = () => newsCount.value = 2;
const newsMore = () => newsCount.value = 10;
const newsAll = () => newsCount.value = data.value;

</script>

<style scoped>
.content {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 10px;
  flex-grow: 1;
  background-color: rgba(255, 255, 255, 0.3);
  color: dark;
}
.content_dark {
  background-color: rgba(54, 55, 58, 0.5);
  color: darkgray;
}
.h1_dark {
  color: darkgray;
}
.product_list {
  margin-top: 15px;
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 30px;
}
.news_block {
  display: flex;
  flex-direction: column;
  gap: 15px;
}
.news_title {
  margin: auto;
  margin-top: 15px;
  font-size: 32px;
}
.news_list {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 15px;
}
.news_button {
  margin: auto;
  padding: 10px;
  width: 200px;
  height: 50px;
  border: 0;
  border-radius: 10px;
  font-size: 16px;
}
</style>
