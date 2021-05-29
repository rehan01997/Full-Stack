<template>
    <div>
        <CityInput v-on:updatelist="updateDataList($event)"/>
        <CityFilter v-on:removefromlist="removeDataFromList($event)"/>
        <div class="alert alert-info" role="alert" v-if="status === 'LOADING'">
            <strong>Enter City Name</strong>
        </div>
        <div class="alert alert-danger" role="alert" v-else-if="status === 'ERROR'">
            <strong>{{error.message}}</strong>
        </div>
        <div v-for="weather in WeatherData" :key="weather.id" v-else>
            <CitiesWeatherReport v-on:removethisweathercity="RemoveThisCityWeather($event)" :name="weather.name" :wind="weather.wind.speed" :cloudiness="weather.clouds.all" :pressure="weather.main.pressure" :humidity="weather.main.humidity" :sunrise="weather.sys.sunrise" :sunset="weather.sys.sunset" :icon="weather.weather.icon" :geographicalCoordinates="weather.coord"/>
        </div>
    </div>
</template>

<script>

import CitiesWeatherReport from './CitiesWeatherReport';
import CityInput from './CityInput';
import CityFilter from './CityFilter';
import {fetchWeatherData} from '../services/GetWeatherData';

export default {
    name : 'WeatherTracker',
    components : {
        CitiesWeatherReport,
        CityInput,
        CityFilter
    },
    data()
    {
        return {
            status : 'LOADING',
            WeatherData : [],
            error : null
        }
    },    
    methods : {
        updateDataList(event)
        {
            fetchWeatherData(event)
            .then( data => {
                this.WeatherData.push(data);
            })
            .catch( errors =>{
                this.error = errors;
                this.status = 'ERROR'
            });    
            this.status = '';
        },
        removeDataFromList(event)
        {
            var temp = this.WeatherData.filter(weatherD => 
            {
                return weatherD.name.toLowerCase().includes(event.toLowerCase())
            });
            this.WeatherData = temp;
            console.log(this.WeatherData);
        },
        RemoveThisCityWeather(event)
        {
            var temp = this.WeatherData.filter(weatherD => 
            {
                return weatherD.name.toLowerCase()!=event.toLowerCase()
            });
            this.WeatherData = temp;
        }    
    } 
}
</script>

<style scoped>
    .weatherclear {
        background-color: aqua;
    }

    .weathernotclear {
        background-color: rgb(33, 100, 187);
    }
</style>