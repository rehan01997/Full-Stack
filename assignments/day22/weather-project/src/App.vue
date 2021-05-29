<template>
  <WeatherTracker />
</template>

<script>

import WeatherTracker   from '../src/components/WeatherTracker ';

export default {
  name: 'App',
  components: {
    WeatherTracker  
  }
  // ,
  // data()
  // {
  //   return {
  //           status : 'LOADING',
  //           WeatherData : null,
  //           error : null
  //       }
  // }
  // ,
  // created()
  //   {
  //     fetchWeatherData()
  //       .then( data => {
  //           this.WeatherData = data;
  //           })
  //           .catch( errors =>{
  //               this.error = errors;
  //               this.status = 'ERROR'
  //           });
  //   }  
}
</script>

<style>
  
</style>
