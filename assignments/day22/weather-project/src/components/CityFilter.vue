<template>
    <form action='/' @submit="removeCityFromList($event)" class="p-3">
    <div class="form-group">
        <label for="cityenter">Enter City Name to display</label>
        <input type="text" class="form-control" id="cityenter" aria-describedby="emailHelp" placeholder="Enter City" v-model="cityName">
    </div>
    <button type="submit" class="btn btn-primary">Filter</button>
    </form>
</template>

<script>

export default {
    name : 'CityFilter',
    props : {  
            
    },
    data(){
        return {
            cityName : ""
        }
    },
    methods : {
        removeCityFromList( event ) {
            event.preventDefault();

            this.$emit('removefromlist', this.cityName);
        }
    }
}
</script>
<style scoped>
</style>