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
      <news-block>
        <NewsComponent
          :img="'https://resizer.mail.ru/p/30878b0f-705e-540f-aece-f4da0f5e77f8/AQAGRl_LDdtwtLkgzRc0DNPCJsq8HaUaxEncc1gdSLP_VYuZo7hDiWrKF8ff7VbHrZUNnGBl1Er8-QY2-ivxxy3gEgE.webp'"
          :heading="'Зимняя погода влияет на рейсы: аэропорт Кишинева работает в усиленном режиме'"
          :text="'Из-за неблагоприятных погодных условий и желтого кода возможны задержки рейсов, при этом все меры безопасности соблюдаются. В связи с суровыми погодными условиями и объявленным на текущие дни «желтым кодом» в Международный аэропорт Кишинева применяются специальные зимние процедуры, включая обязательную противообледенительную обработку воздушных судов.'"
        />
      </news-block>
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
</style>
