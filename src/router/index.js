import { createRouter, createWebHistory } from "vue-router"; // cài vue-router: npm install vue-router@next --save

const routes = [
    {
        path : '/',
        meta : {layout : 'client'},
        component: ()=>import('../components/TrangChu/index.vue')
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

    {
        path : '/admin/san-pham',
        component: ()=>import('../components/SanPham/index.vue')
    },

    {
        path : '/admin/tai-khoan',
        component: ()=>import('../components/TaiKhoanAdmin/index.vue')
    },
    {
        path : '/admin/khach-hang',
        component: ()=>import('../components/KhachHang/index.vue')
    },
]

const router = createRouter({
    history: createWebHistory(),
    routes: routes
})

export default router