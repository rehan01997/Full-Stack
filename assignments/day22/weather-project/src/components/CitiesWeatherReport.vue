<template>
    <div class="container" :class="setBackground">
        <div class="weather-container p-4">
            <h1>Weather in {{name}}</h1>
            <img src='http://openweathermap.org/img/wn/50d@2x.png' alt=""> 
            <div class="geographicalCoordinates" v-if="geographicalCoordinates"><strong>Geo Coordinates</strong> : {{geographicalCoordinates.lon}} , {{geographicalCoordinates.lat}}</div>
            <div class="wind" v-if="wind"><strong>Wind</strong> : {{wind}}</div>
            <div class="cloud"><strong>Cloudiness</strong> : {{cloudiness}}</div>
            <div class="pressure"><strong>Pressure</strong> : {{pressure}}</div>
            <div class="humidity"><strong>Humidity</strong> : {{humidity}}</div>
            <div class="cloud"><strong>Sunrise</strong> : {{sunrise}}</div>
            <div class="cloud"><strong>Sunset</strong> : {{sunset}}</div>
            <button class="btn btn-danger p-2.5 my-2" v-on:click="removeThisWeatherReport($event)" >Delete</button>
        </div>
    </div>
</template>

<script>

export default {
    name : 'CitiesWeatherReport',
    components : {
    }, 
    props : [
        'name',
        'wind',
        'cloudiness',
        'pressure', 
        'humidity',
        'sunrise',
        'sunset',
        'icon',
        'geographicalCoordinates'
    ],
    methods : {
       removeThisWeatherReport(event){
           event.preventDefault();
           this.$emit('removethisweathercity', this.name);
       }
    },
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
</style>