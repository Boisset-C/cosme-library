import { createApp, h } from 'vue';
import App from './App.vue';
import TheHomepage from './pages/TheHomepage.vue';
import PerfectScrollbar from 'vue3-perfect-scrollbar';
import 'vue3-perfect-scrollbar/dist/vue3-perfect-scrollbar.css';


const app = createApp({
render: () => h(App)
})

app.component('the-homepage', TheHomepage)
app.use(PerfectScrollbar)
app.mount('#app')



