import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// import '@/assets/less/media.less'

createApp(App).use(store).use(router).mount('#app')
