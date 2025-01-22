import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'

import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import 'vuetify/styles'
import '@mdi/font/css/materialdesignicons.css' // 确保引入Material Design Icons

const vuetify = createVuetify({
  components,
  directives,
})
// 引入全局样式
import '@/assets/styles/global.scss'

const app = createApp(App)

app.use(createPinia())
app.use(vuetify)

app.mount('#app')
