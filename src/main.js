import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import Home from './Layout/Wrapper_client/home.vue'
import Default from './Layout/Wrapper/index.vue'
import axios from 'axios';
import baseRequest from './core/baseRequest';

axios.defaults.baseURL = 'http://127.0.0.1:8080/api/'; 
const app = createApp(App)

app.use(router)
app.component("client-layout", Home);
app.component("default-layout", Default);
app.mount("#app")