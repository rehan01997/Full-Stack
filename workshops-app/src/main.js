import Vue from 'vue';
import App from './App.vue';
import router from './router';

import './init';

new Vue({
    render: h => h(App),
    router
}).$mount('#app')
