<template>  
    <article class="news_root" :class="toggleStyles">
      <img class="news_photo" :src="$props.article?.img" alt="news's photo" />
      <div class="news_content">
        <h3 class="news_heading">{{ $props.article?.heading }}</h3>
        <p class="news_text">{{ $props.article?.text }}</p>
      </div>
    </article>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import type { INewsProps } from './types';

const props = defineProps<INewsProps>();

// ===== изменение темы =====
const toggleStyles = computed(() => ({
  'root-dark': props.statusDark,
}));

</script>

<style scoped>
.news_root {
  margin-top: 20px;
  padding: 10px;
  display: flex;
  background-color: white;
  border-radius: 15px;
  width: 800px;
}
.root-dark {
  background-color: rgba(54, 55, 58);
  color: darkgray;
}
.news_photo {
  height: 200px;
  border-radius: 15px;
}
.news_content {
  padding-left: 10px;
}
.news_heading {
  font-weight: bold;
  font-size: 18px;
}
.news_text {
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  line-clamp: 3;
  overflow: hidden;
}
</style>
