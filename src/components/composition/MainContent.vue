<template>
  <div class="content" :style="themeStyles">
    <section>
      <h1>{{ title }}</h1>
      <!-- <ClickCounter 
        @decrement="decrementHandler" 
        :title="$options.title" 
        :theme-styles="themeStyles"
        :buttonsTheme="buttonsTheme"
      /> -->
    </section>
    <section>
      <!-- <h2>Летательные аппараты</h2> -->
      <div class="user-blok">
        <ProductCard
          :theme-styles="themeStyles"
          :buttonsTheme="buttonsTheme"
          :product="{
            name: 'Самолёт',
            model: 'Ил-103',
            price: '14 000 000',
            img: 'https://80.img.avito.st/image/1/1.mCLxM7a4NMvHmvbOzR3XNPOSNs1PkrbDh5c2yUGaPMFH.F_uNFpE1Q7RFSyqTuOYj19zatcYWiuKFH2cL8C92mCc',
            alt: 'Самолёт Ил-103',
          }"
        >
          <template #clickcounter>
            <ClickCounter />
          </template>
          <!-- <template #append>
            <p>*направления: JS, Vue</p>
          </template> -->
        </ProductCard>

        <ProductCard
          :theme-styles="themeStyles"
          :buttonsTheme="buttonsTheme"
          :product="{
            name: 'Самолёт',
            model: 'Lake-4-200',
            price: '12 000 000',
            img: 'https://00.img.avito.st/image/1/1.QvCMQra47hm66ywchFNV7vDj7B8y42wR-ubsGzzr5hM6.UyGn9HumuDOdRa2TU3psxWDizh6GlbSMByg6Xdx-07w?cqp=2.TSzMy-m0u9ojo94xoNTr4TIkcUBjMu1L_y5Z6Lr-VHA-3xfoRpsvf1jN4IBF36LEO13sxOCjYv9KRoXzpmAFvKTQ',
            alt: 'Самолёт Lake-4-200',
          }"
        >
          <template #clickcounter>
            <ClickCounter />
          </template>
          <!-- <template #append>
            <p>* Самолёт-амфибия</p>
          </template> -->
        </ProductCard>

        <ProductCard
          :theme-styles="themeStyles"
          :buttonsTheme="buttonsTheme"
          :product="{
            name: 'Самолёт',
            model: 'Cessna 172B',
            price: '12 500 000',
            img: 'https://90.img.avito.st/image/1/1.B2A8Gba4q4kKsGmMPjlKGF64qY-CuCmBSr2pi4ywo4OK.eEYfp8xN_xSsdO7f4_MlCdMS2rLiUXoYYoU7jx3E0MA',
            alt: 'Самолёт Cessna 172B',
          }"
        >
          <template #clickcounter>
            <ClickCounter />
          </template>
        </ProductCard>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { ref, type PropType, type CSSProperties } from 'vue';
import ClickCounter from '@/components/composition/ClickCounter.vue';
import ProductCard from '@/components/ProductCard.vue';

const isMainPageTitleGreen = ref(false);

// пропсы
defineProps({
  title: {
    type: String,
    default: 'default title',
  },
  themeStyles: {
    type: Object as PropType<CSSProperties>,
    default: () => ({}),
  },
  buttonsTheme: {
    type: Object as PropType<CSSProperties>,
    default: () => ({}),
  },
});

// методы
const decrementHandler = (event: number) => {
  isMainPageTitleGreen.value = event < -5 ? true : false;
  console.log('decrement-handler', event);
};
</script>

<style scoped>
.content {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 10px;
  flex-grow: 1;
}
.user-blok {
  margin-top: 15px;
  display: flex;
  flex-wrap: wrap;
  gap: 30px;
}
</style>
