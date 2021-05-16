<template>
    <div>
        <!-- b4-alert-default -->
        <div class="alert alert-info" role="alert" v-if="status === 'LOADING'">
            <strong>We are fetching workshops...Hang on!</strong>
        </div>
        <div class="alert alert-danger" role="alert" v-else-if="status === 'ERROR'">
            <strong>{{error.message}}</strong>
        </div>
        <div class="row" v-else>
            <div class="col-12">
                <h1>List of workshops</h1>
            </div>
            <div class="col-12 col-lg-4" v-for="workshop in workshops" :key="workshop.id">
                <!-- b4-card-default -->
                <div class="card p-2 my-3">
                    <div class="card-img-container">
                        <img class="card-img-top" :src="workshop.imageUrl" :alt="workshop.name" />
                    </div>
                    <div class="card-body">
                        <h4 class="card-title">{{workshop.name}}</h4>
                        <div class="card-text">
                            <div>
                                {{workshop.startDate}} - {{workshop.endDate}}
                            </div>
                            <div>
                                {{workshop.time}}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { fetchWorkshops } from '@/services/workshops';

export default {
    name: 'WorkshopsList',
    data() {
        return {
            status: 'LOADING',
            workshops: [],
            error: null
        }
    },
    created() { // when component instance is created and its data is available
        this.status = 'LOADING';

        fetchWorkshops()
            .then( workshops => {
                this.workshops = workshops;
                this.status = 'LOADED'
            })
            .catch( error => {
                this.error = error;
                this.status = 'ERROR'
            })
    },
    // mounted() {

    // }
}
</script>

<style scoped>
.card-img-container {
    min-height: 150px;
    text-align: center;
}

.card-img-top {
    width: 50%;
}
</style>