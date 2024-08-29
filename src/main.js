import { createApp } from 'vue'
import axios from 'axios'
import router from './routers'
import App from './components/App.vue'

const app = createApp(App)

app.config.globalProperties.$http = axios
app.use(router)
app.mount('#app')
