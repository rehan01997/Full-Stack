<template>
  <WeatherReport v-if="WeatherData" :wind="WeatherData.wind.speed" :cloudiness="WeatherData.clouds.all" :pressure="WeatherData.main.pressure" :humidity="WeatherData.main.humidity" :sunrise="WeatherData.sys.sunrise" :sunset="WeatherData.sys.sunset" :icon="WeatherData.weather[0].icon" :geographicalCoordinates="WeatherData.coord" :weather="WeatherData.weather.main"/>
</template>

<script>

import WeatherReport  from '@/components/WeatherReport ';
import { fetchWeatherData } from '../src/services/GetWeatherData'

export default {
  name: 'App',
  components: {
    WeatherReport 
  },
  data()
  {
    return {
            status : 'LOADING',
            WeatherData : null,
            error : null
        }
  },
  created()
    {
      fetchWeatherData()
        .then( data => {
            this.WeatherData = data;
                console.log(data);
            })
            .catch( errors =>{
                this.error = errors;
                this.status = 'ERROR'
            });
    }  
}
</script>

<style>
  
</style>
