import Vue from 'vue'
import App from './App.vue'
import router from './router'
import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import store from './store'
import moment from 'moment'

require("./assets/main.css");

Vue.config.productionTip = false;
Vue.prototype.moment = moment

// Bootstrap
Vue.use(BootstrapVue);

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app');

