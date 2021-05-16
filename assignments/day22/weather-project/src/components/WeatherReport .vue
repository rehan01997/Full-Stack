<template>
    <div :class="setBackground">
        <div class="row" >
            <div class="col-12">
                <h1>Weather in Delhi</h1>
            </div>
            <div class="weather-container p-4">
                <img src='http://openweathermap.org/img/wn/50d@2x.png' alt=""> 
                <div class="geographicalCoordinates" v-if="geographicalCoordinates"><strong>Geo Coordinates</strong> : {{geographicalCoordinates.lon}} , {{geographicalCoordinates.lat}}</div>
                <div class="wind" v-if="wind"><strong>Wind</strong> : {{wind}}</div>
                <div class="cloud"><strong>Cloudiness</strong> : {{cloudiness}}</div>
                <div class="pressure"><strong>Pressure</strong> : {{pressure}}</div>
                <div class="cloud"><strong>Humidity</strong> : {{humidity}}</div>

                <SunriseSunset :sunrise="sunrise" :sunset="sunset"/>
            </div>
        </div>
    </div>
</template>

<script>

import SunriseSunset from  './SunriseSunset';
export default {
    name : 'WeatherReport',
    components : {
        SunriseSunset
    },
    props : [
        'wind',
        'cloudiness',
        'pressure', 
        'humidity',
        'sunrise',
        'sunset',
        'icon',
        'geographicalCoordinates',
        'weather'
    ],
    computed : {
        setBackground(){
            if( this.weather && (this.weather == 'Rain' || this.weather=='Drizzle') )
            {
                return {weatherclear : false , weathernotclear : true}
            }
            return { weatherclear : true , weathernotclear : false }
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