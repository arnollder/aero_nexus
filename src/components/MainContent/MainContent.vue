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
      <div class="user-block">
        <UserComponent />
        <UserForm />
      </div>
      <hr :style="{ marginTop: '20px' }" />
    </section>

    <section class="news_block">
      <h2 class="news_title" :class="toggleTitleStyles">Новости</h2>
      <div class="news_list">
        <NewsComponent
          v-for="article in newsList"
          :key="article.id"
          :article="article"
          :statusDark="statusDark"
        />
      </div>
      <button 
        class="news_button"
        @click="moreNews"
      >...читать далее</button>
    </section>
  </div>
</template>

<script setup lang="ts">
import ClickCounter from '@/components/MainContent/ClickCounter.vue';
import ProductCard from '@/components/MainContent/ProductCard.vue';
import UserComponent from './UserComponent.vue';
import UserForm from './UserForm.vue';
import NewsComponent from './NewsComponent.vue';

import type { IMainContentProps } from './types';

import { prods } from '@/data/mocks/prods.mocks';
import { news } from '@/data/mocks/news.mocks';

import { computed, ref } from 'vue';

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
const newsList = ref(news.slice(0, 2))
const moreNews = () => newsList.value = news.slice(0, 10)


// const newsFirstTwo = computed(() => news.slice(0, 2));
// const newsAll = computed(() => news);
// const newsFirstTen = computed(() => news.slice(0, 10));

// newsList.value = newsFirstTwo;

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
</style>
