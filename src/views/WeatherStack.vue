<template>
    <WeatherWidget 
      :apiKey="API_KEY" 
      location="Nizhny Novgorod"
    />
</template>

<script setup lang="ts">
import WeatherWidget from '@/components/WeatherStack/WeatherWidget.vue'

const API_KEY = 'ba1cd4121513f6a0724caf52d79c9593'

</script>

<style scoped>

</style>