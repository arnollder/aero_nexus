<template>
  <div class="widgets">
    <!-- Нижний Новгород -->
    <WeatherWidget :apiKey="API_KEY" lat="56.3264816" lon="44.0051395" />
    <!-- Москва -->
    <WeatherWidget :apiKey="API_KEY" lat="55.7522" lon="37.6156" />
    <!-- Минск -->
    <WeatherWidget :apiKey="API_KEY" lat="53.9" lon="27.5667" />
  </div>
</template>

<script setup lang="ts">
import WeatherWidget from '@/components/WeatherStack/WeatherWidget.vue';

const API_KEY = '424417532801ae277b2545ae0c4735c6';
</script>

<style scoped>
.widgets {
  margin: auto;
  display: flex;
  column-gap: 15px;
}
</style>
