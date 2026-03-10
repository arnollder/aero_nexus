<template>
  <div class="weather-info">
    <h3>{{ weatherData.name }}</h3>
    <div class="weather-main">
      <p class="temp">{{ weatherData.main?.temp }}°C </p>
      <p>(ощущается: {{ weatherData.main?.feels_like }}°C)</p>
      <div class="weather-details">
        <div>💨 Ветер: {{ weatherData.wind?.speed }} м/с</div>
        <div>☁️ Облачность: {{ weatherData.clouds?.all }} </div>
        <div>💧 Влажность: {{ weatherData.main?.humidity }}%</div>
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
const lat = props.lat;
const lon = props.lon;

const fetchWeather = async () => {
  isLoading.value = true;
  isError.value = true;
  weatherData.value = [];
  try {
    const { data } = await $weather.get<IWeatherWidgetProps>('weather', {
      params: {
        lat: `${lat}`,
        lon: `${lon}`,
        appid: `${API_KEY}`,
        units: 'metric',
        lang: 'ru',
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

console.log(weatherData.value);
</script>

<style scoped>
.weather-info {
  height: 280px;
  padding: 10px 20px;
  border-radius: 15px;
  color: aliceblue;
  background: linear-gradient(rgb(52, 132, 252), rgb(39, 155, 4));
  text-align: center;

  display: flex;
  flex-direction: column;
}
h3 {
  font-size: 24px;
}
.temp {
  font-size: 56px;
}
.weather-details {
  margin-top: 20px;
}
</style>
