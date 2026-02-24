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

      <p v-if="loading">Загрузка...</p>
      <p v-else-if="error">{{ error }}</p>
      <template v-else>
        <div class="news_list">
          <NewsComponent
            v-for="article in displayedNews"
            :key="article.id"
            :article="article"
            :statusDark="statusDark"
          />
        </div>

        <button v-if="newsCount == 2" class="news_button" :class="toggleStyles" @click="newsMore">
          читать далее...
        </button>
        <button
          v-else-if="newsCount == 10"
          class="news_button"
          :class="toggleStyles"
          @click="newsAll"
        >
          показать все...
        </button>
        <button v-else class="news_button" :class="toggleStyles" @click="newsStart">
          свернуть все
        </button>
      </template>
    </section>
  </div>
</template>

<script setup lang="ts">
import ClickCounter from '@/components/MainContent/ClickCounter.vue';
import ProductCard from '@/components/MainContent/ProductCard.vue';
import NewsComponent from './NewsComponent.vue';
import { useNews } from '@/composables/useNews';

import type { IMainContentProps } from './types';

import { prods } from '@/data/mocks/prods.mocks';

import { computed } from 'vue';

// ===== PROPS =====
const props = defineProps<IMainContentProps>();

// ===== TOGGLE THEME =====
const toggleStyles = computed(() => ({
  content_dark: props.statusDark,
  news_button_dark: props.statusDark,
}));
const toggleTitleStyles = computed(() => ({
  h1_dark: props.statusDark,
}));

// ===== NEWS BLOCK =====
const { loading, error, newsCount, displayedNews, newsStart, newsMore, newsAll } = useNews(2);
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
  padding: 5px 10px;

  border: 0;
  border-radius: 5px;
  font-size: 16px;
  background-color: transparent;
  cursor: pointer;
  color: rgb(0, 68, 255);
}
.news_button:hover {
  background-color: rgba(255, 255, 255, 0.7);
}
.news_button_dark {
  color: darkgray;
}
.news_button_dark:hover {
  background-color: rgba(54, 55, 58, 0.5);
}
</style>
