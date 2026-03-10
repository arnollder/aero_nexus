<template>
  <div>
    <p>Нижний Новгород</p>
    <p>{{ weatherData.current?.temperature }}</p>
  </div>
</template>

<script setup lang="ts">
import { $weather } from '@/api';
import { ref } from 'vue';
import type { IWeatherWidgetProps } from '../MainContent/types';
import type { AxiosError } from 'axios';

const props = defineProps<IWeatherWidgetProps>();

const weatherData = ref();
const isLoading = ref(false);
const isError = ref(false);
const API_KEY = props.apiKey;
const location = props.location;

const fetchWeather = async () => {
  isLoading.value = true;
  isError.value = false;
  weatherData.value = [];
  try {
    const { data } = await $weather.get<IWeatherWidgetProps>(`current`, {
      params: {
        access_key: `${API_KEY}`,
        query: `${location}`,
      },
    });
    weatherData.value = data;
  } catch (err: unknown) {
    console.error(err as AxiosError);
    isError.value = true;
  } finally {
    isLoading.value = false;
  }
};
fetchWeather();
</script>

<style scoped></style>
