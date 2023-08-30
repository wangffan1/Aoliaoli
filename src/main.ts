import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import {createPinia} from 'pinia'
import ElementPlus from 'element-plus';
import 'element-plus/theme-chalk/dark/css-vars.css'
// import '@/styles/css-vars.css'


const pinia = createPinia()

const app = createApp(App);

app.use(router)
.use(pinia)
.use(ElementPlus)
.mount('#app')
