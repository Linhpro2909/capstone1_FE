import { createRouter, createWebHistory } from "vue-router"; // cài vue-router: npm install vue-router@next --save

const routes = [
  
    
    {
        path : '/',
       
        component: ()=>import('../components/TrangChu/index.vue')
    },
    {
        path : '/hoi-dong-danh-gia',
        meta : {layout : 'client'},
        component: ()=>import('../components_user/HoiDongDanhGia/index.vue')
    },
    {
        path : '/trang-chu-user',
        meta : {layout : 'client'},
        component: ()=>import('../components_user/TrangChuUser/index.vue')
    },
    {
        path : '/sinh-vien-nhom-do-an',
        meta : {layout : 'client'},
        component: ()=>import('../components_user/NhomDoAn/index.vue')
    },
    {
        path : '/dang-nhap',
        meta : {layout : 'client'},
        component: ()=>import('../components_user/DangNhapUser/index.vue'),
    },
    
    {
        path : '/chi-tiet-sinh-vien',
        meta : {layout : 'client'},
        component: ()=>import('../components_user/ChiTietSinhVien/index.vue'),
    },
    {
        path : '/ngan-hang-de-tai',
        meta : {layout : 'client'},
        component: ()=>import('../components_user/NganHangDeTai/index.vue'),
    },

    {
        path : '/chia-nhom',
        meta : {layout : 'client'},
        component: ()=>import('../components_user/ChiaNhom/index.vue'),
    },
    {
        path : '/giang-vien-nhom-do-an',
        meta : {layout : 'client'},
        component: ()=>import('../components_user/GiangVien/index.vue'),
    },
    // ---------
    {
        path : '/quan-li-nk',
       
        component: ()=>import('../components/QuanLiNienKhoa/index.vue')
    },
    {
        path : '/quan-li-gv',
       
        component: ()=>import('../components/GiangVien/index.vue')
    },
    
    {
        path : '/ngan-hang-de-tai-admin',
       
        component: ()=>import('../components/NganHangDeTai/index.vue')
    },
    {
        path : '/ke-hoach-tot-nghiep',
       
        component: ()=>import('../components/KeHoachTotNghiep/index.vue')
    },
    {
        path : '/quan-li-hoi-dong',
       
        component: ()=>import('../components/QuanLiHoiDong/index.vue')
    },
    {
        path : '/nhom-do-an',
       
        component: ()=>import('../components/NhomDoAn/index.vue')
    },
    // {
    //     path : '/quan-li-khoa',
       
    //     component: ()=>import('../components/QuanLiKhoa/index.vue')
    // },
   
    {
        path : '/quan-li-sv',
       
        component: ()=>import('../components/QuanLiSinhVien/index.vue')
    },
   
    // {
    //     path : '/quan-li-lop',
       
    //     component: ()=>import('../components/QuanLiLop/index.vue')
    // },
    {
        path : '/phan-quyen',
       
        component: ()=>import('../components/PhanQuyen/index.vue')
    },
    {
        path : '/tai-khoan',
       
        component: ()=>import('../components/TaiKhoan/index.vue')
    },
    {
        path : '/duyet-nhom',
       
        component: ()=>import('../components/DuyetNhom/index.vue')
    },

]

const router = createRouter({
    history: createWebHistory(),
    routes: routes
})

export default router