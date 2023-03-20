/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

import "./bootstrap";

import './custom.js';
import '~admin-lte/plugins/bootstrap/js/bootstrap.bundle.min.js';
import '~admin-lte/dist/js/adminlte.min.js';




import store from "./store/index";

import { createApp } from "vue/dist/vue.esm-bundler";


const app = createApp({
    components:{
        
    }
});

app.use(store);

app.mount("#app");
