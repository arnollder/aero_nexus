<template>
  <div class="weather-info" :class="toggleStyles">
    <div v-if="isLoading">Загружаю виджет...</div>
    <div v-else-if="isError">Ошибка сервиса!</div>
    <template v-else-if="weatherData">
      <h3>{{ weatherData?.name }}</h3>
      <div class="weather-main">
        <p class="temp">{{ temp }}°C</p>
        <p>(ощущается: {{ feels_like }}°C)</p>
        <div class="weather-details">
          <div>💨 Ветер: {{ weatherData.wind?.speed }} м/с</div>
          <div>☁️ Облачность: {{ weatherData.clouds?.all }}%</div>
          <div>💧 Влажность: {{ weatherData.main?.humidity }}%</div>
        </div>
      </div>
    </template>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import type { IWeatherWidgetProps } from '../MainContent/types';
import { useWeatherWidget } from '@/composables/useWeatherWidget';

const props = defineProps<IWeatherWidgetProps>();
const themeStore = useThemeStore();


const { isLoading, isError, weatherData } = useWeatherWidget(props.lat, props.lon, props.apiKey);

// ===== дополнительная проверка из-за округления =====
const temp = computed(() =>
  weatherData.value?.main?.temp ? Math.round(weatherData.value.main.temp) : '-',
);
const feels_like = computed(() =>
  weatherData.value?.main?.feels_like ? Math.round(weatherData.value.main.feels_like) : '-',
);
</script>

<style scoped>
.weather-info {
  height: 320px;
  width: 280px;
  padding: 20px;
  border-radius: 15px;
  color: aliceblue;
  background: linear-gradient(rgb(52, 132, 252), rgb(39, 155, 4));

  text-align: center;

  display: flex;
  flex-direction: column;
  row-gap: 20px;
}
.weather-info_dark {
  background: linear-gradient(rgb(111, 113, 121), rgb(24, 24, 26));
}
h3 {
  padding: 0 15px;
  font-size: 24px;
  border: 1px solid white;
  border-radius: 15px;
}
.temp {
  font-size: 56px;
}
.weather-details {
  margin-top: 20px;
}
</style>
