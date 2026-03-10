<template>
  <!-- Нижний Новгород -->
    <WeatherWidget
      :apiKey="API_KEY"
      lat="56.3264816"
      lon="44.0051395"
    />
</template>

<script setup lang="ts">
import WeatherWidget from '@/components/WeatherStack/WeatherWidget.vue'

const API_KEY = '424417532801ae277b2545ae0c4735c6'

</script>

<style scoped>

</style>
