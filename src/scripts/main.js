import Vue from 'vue';
import App from '@/components/app';
import BootstrapVue from 'bootstrap-vue';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';


Vue.use(BootstrapVue)


new Vue({
    el: '#app',
    components: {
        App
    }
});
