<template>
  <div class="content" :class="toggleStyles">
    <section>
      <h1 :class="toggleTitleStyles">{{ title }}</h1>
    </section>
    <section>
      <div class="product-blok">
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
      <div class="news-block">        
        <NewsComponent           
          v-for="article in news" 
          :key="article.id"
          :article="article"          
          :statusDark="statusDark"
        />
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import type { IMainContentProps } from './types';
import ClickCounter from '@/components/MainContent/ClickCounter.vue';
import ProductCard from '@/components/MainContent/ProductCard.vue';
import UserComponent from './UserComponent.vue';
import UserForm from './UserForm.vue';
import { prods } from '@/data/mocks/prods.mocks';
import NewsComponent from './NewsComponent.vue';
import { news } from '@/data/mocks/news.mocks';

// ===== PROPS =====
const props = defineProps<IMainContentProps>();

// ===== TOGGLE THEME =====
const toggleStyles = computed(() => ({
  'content-dark': props.statusDark,
}));
const toggleTitleStyles = computed(() => ({
  'h1-dark': props.statusDark,
}));
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
.content-dark {
  background-color: rgba(54, 55, 58, 0.5);
  color: darkgray;
}
.h1-dark {
  color: darkgray;
}
.product-blok {
  margin-top: 15px;
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 30px;
}
.news-block {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  column-gap: 15px;
}
</style>
