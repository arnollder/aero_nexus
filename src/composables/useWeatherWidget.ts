import { $weather } from '@/api';
import type { IWeatherData } from '@/types/types';
import type { AxiosError } from 'axios';
import { ref } from 'vue';



export const useWeatherWidget = (lat: string | number, lon: string | number, apiKey: string) => {
  const weatherData = ref<IWeatherData>();
  const isLoading = ref(false);
  const isError = ref(false);

  const fetchWeather = async () => {
    isLoading.value = true;
    isError.value = false;
    try {
      const { data } = await $weather.get<IWeatherData>('weather', {
        params: {
          lat: `${lat}`,
          lon: `${lon}`,
          appid: `${apiKey}`,
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

  return {
    isLoading,
    isError,
    weatherData,
    refetch: fetchWeather,
  };
};
