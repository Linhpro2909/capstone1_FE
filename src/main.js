import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import SinhVien from './Layout/Wrapper/SinhVien/index.vue'
import GiangVien from './Layout/Wrapper/GiangVien/index.vue'
import Default from './Layout/Wrapper/Admin/index.vue'
import LoginSinhVien from './components/Login/sinh_vien.vue'

import axios from 'axios';

axios.defaults.baseURL = 'http://127.0.0.1:8000/api/'; 
const app = createApp(App)

app.use(router)
app.component("giangvien-layout", GiangVien);
app.component("sinhvien-layout", SinhVien);
app.component("default-layout", Default);
app.component("login-sinhvien-layout", LoginSinhVien);
app.mount("#app")