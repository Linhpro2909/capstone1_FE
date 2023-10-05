import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import Default from './Layout/Wrapper/index.vue'
import Home from './Layout/Wrapper/home.vue'
const app = createApp(App)

app.use(router)
app.component("default-layout", Default);
app.component("client-layout", Home);

app.mount("#app")