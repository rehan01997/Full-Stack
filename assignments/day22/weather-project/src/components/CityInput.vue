<template>
    <form action='/' @submit="addCityToList($event)" class="p-3">
    <div class="form-group">
        <label for="cityenter">Enter City Name</label>
        <input type="text" class="form-control" id="cityenter" aria-describedby="emailHelp" placeholder="Enter City" v-model="cityName">
    </div>
    <button type="submit" class="btn btn-primary">Add</button>
    </form>
</template>

<script>

export default {
    name : 'CityInput',
    props : {  
            
    },
    data(){
        return {
            cityName : ""
        }
    },
    methods : {
        addCityToList( event ) {
            event.preventDefault();

            this.$emit('updatelist', this.cityName);
        }
    }
}
</script>
<style scoped>
</style>