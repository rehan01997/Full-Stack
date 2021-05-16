<template>
    <div class="weather-container p-3">
        <div class="cloud"><strong>Sunrise</strong> : {{sunrise}}</div>
        <div class="cloud"><strong>Sunset</strong> : {{sunset}}</div>
    </div>
</template>

<script>

export default {
    name : 'SunriseSunset',
    props : [
        'sunrise',
        'sunset'       
    ]     
}
</script>
<style scoped>
</style>