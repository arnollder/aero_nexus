<template>
  <div class="weather-info">
    <h3>{{ weatherData.location?.name }}, {{ weatherData.location?.country }}</h3>
    <div class="weather-info-flex">
      <img :src="weatherData.current?.weather_icons[0]" alt="" />
      <div class="weather-info-right">
        <div class="weather-main">
          <span class="temp">{{ weatherData.current?.temperature }}°C </span>
          <span class="desc">{{ weatherData.current?.weather_descriptions[0] }}</span>
        </div>
        <div class="weather-details">
          <div>💨 Ветер: {{ weatherData.current?.wind_speed }} м/с</div>
          <div>💧 Влажность: {{ weatherData.current?.humidity }}%</div>
          <div>🌡️ Давление: {{ weatherData.current?.pressure }} мбар</div>
        </div>
      </div>
    </div>
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

<style scoped>
.weather-info {
  height: 180px;
  padding: 10px 20px;
  border-radius: 15px;
  color: aliceblue;
  background: linear-gradient(rgb(52, 132, 252), rgb(39, 155, 4));
  text-align: right;
}
h3 {
  font-size: 24px;
}
img {
  height: 100px;
  border-radius: 15px;
}
.weather-info-flex {
  margin-top: 10px;
  display: flex;
  column-gap: 10px;
}
</style>
