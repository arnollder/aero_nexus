<template>
  <div class="content" :class="toggleStyles">
    <section>
      <h1 :class="toggleTitleStyles">{{ title }}</h1>
    </section>
    <section>
      <div class="user-blok">
        <ProductCard
          :product="{
            name: 'Самолёт',
            model: 'Ил-103',
            price: '14 000 000',
            img: 'https://80.img.avito.st/image/1/1.mCLxM7a4NMvHmvbOzR3XNPOSNs1PkrbDh5c2yUGaPMFH.F_uNFpE1Q7RFSyqTuOYj19zatcYWiuKFH2cL8C92mCc',
            alt: 'Самолёт Ил-103',
          }"
          :statusDark="statusDark"
        >
          <template #clickcounter>
            <ClickCounter />
          </template>
        </ProductCard>
        <ProductCard
          :product="{
            name: 'Самолёт',
            model: 'Lake-4-200',
            price: '12 000 000',
            img: 'https://00.img.avito.st/image/1/1.QvCMQra47hm66ywchFNV7vDj7B8y42wR-ubsGzzr5hM6.UyGn9HumuDOdRa2TU3psxWDizh6GlbSMByg6Xdx-07w?cqp=2.TSzMy-m0u9ojo94xoNTr4TIkcUBjMu1L_y5Z6Lr-VHA-3xfoRpsvf1jN4IBF36LEO13sxOCjYv9KRoXzpmAFvKTQ',
            alt: 'Самолёт Lake-4-200',
          }"
          :statusDark="statusDark"
        >
          <template #clickcounter>
            <ClickCounter />
          </template>
        </ProductCard>
        <ProductCard
          :product="{
            name: 'Самолёт',
            model: 'Cessna 172B',
            price: '12 500 000',
            img: 'https://90.img.avito.st/image/1/1.B2A8Gba4q4kKsGmMPjlKGF64qY-CuCmBSr2pi4ywo4OK.eEYfp8xN_xSsdO7f4_MlCdMS2rLiUXoYYoU7jx3E0MA',
            alt: 'Самолёт Cessna 172B',
          }"
          :statusDark="statusDark"
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
import { computed } from 'vue';
import type { IMainContentProps } from './types';
import ClickCounter from '@/components/MainContent/ClickCounter.vue';
import ProductCard from '@/components/MainContent/ProductCard.vue';

// пропсы
const props = defineProps<IMainContentProps>();
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
.user-blok {
  margin-top: 15px;
  display: flex;
  flex-wrap: wrap;
  gap: 30px;
}
</style>
