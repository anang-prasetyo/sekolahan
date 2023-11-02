import './assets/main.css'
import './assets/responsive.scss'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js'
import '../node_modules/bootstrap-icons/font/bootstrap-icons.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import Vue3Lottie from 'vue3-lottie'
import Countdown from 'vue3-flip-countdown'

const app = createApp(App)

app.use(router).use(Vue3Lottie).use(Countdown)

app.mount('#app')
