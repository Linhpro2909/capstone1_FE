import { createRouter, createWebHistory } from "vue-router"; // cài vue-router: npm install vue-router@next --save

const routes = [
    {
        path : '/',
        component: ()=>import('../layout/wrapper/index.vue')
    },
    {
        path : '/admin/chuyen-muc',
        component: ()=>import('../components/ChuyenMuc/index.vue')
    },
    {
        path : '/admin/phan-quyen',
        component: ()=>import('../components/PhanQuyen/index.vue')
    },
    {
        path : '/admin/thuong-hieu',
        component: ()=>import('../components/ThuongHieu/index.vue')
    },

    {
        path : '/admin/ma-giam-gia',
        component: ()=>import('../components/MaGiamGia/index.vue')
    },
    
]

const router = createRouter({
    history: createWebHistory(),
    routes: routes
})

export default router