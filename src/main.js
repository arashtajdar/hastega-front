import { createApp } from 'vue'
import App from './App.vue'
import * as Vue from "vue";
import VueAxios from "vue-axios";
import axios from "axios";
import VueBasicAlert from 'vue-basic-alert'
createApp(App).mount('#app')
const app = Vue.createApp(App);
app.use(VueAxios, axios,VueBasicAlert);


