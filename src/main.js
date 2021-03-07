import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './assets/tw.css'

const app = createApp(App)

app.use(store)
app.use(router)

// global components
import Butt from './components/Butt.vue'
app.component('Butt', Butt)

app.mount('#app')