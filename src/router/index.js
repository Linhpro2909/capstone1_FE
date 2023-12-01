import { createRouter, createWebHistory } from "vue-router"; // cài vue-router: npm install vue-router@next --save
import { createToaster } from "@meforma/vue-toaster";
const toastr = createToaster({
  position: "top-right",
});
const routes = [
  //admin
  {
    path: "/admin",
    component: () => import("../components/TrangChu/index.vue"),
  },
  {
    path: "/admin/quan-li-nk",
    component: () => import("../components/QuanLiNienKhoa/index.vue"),
  },
  {
    path: "/admin/quan-li-gv",
    component: () => import("../components/GiangVien/index.vue"),
  },

  {
    path: "/admin/ngan-hang-de-tai-admin",
    component: () => import("../components/NganHangDeTai/index.vue"),
  },
  {
    path: "/admin/ke-hoach-tot-nghiep",
    component: () => import("../components/KeHoachTotNghiep/index.vue"),
  },
  {
    path: "/admin/quan-li-hoi-dong",
    component: () => import("../components/QuanLiHoiDong/index.vue"),
  },
  {
    path: "/admin/nhom-do-an",
    component: () => import("../components/NhomDoAn/index.vue"),
  },
  {
    path: "/admin/quan-li-sv",
    component: () => import("../components/QuanLiSinhVien/index.vue"),
  },
  {
    path: "/admin/tien-do",
    component: () => import("../components/TienDo/index.vue"),
  },
  {
    path: "/admin/phan-quyen",
    component: () => import("../components/PhanQuyen/index.vue"),
    meta: { requiresAuth: true },
  },
  {
    path: "/admin/tai-khoan",
    component: () => import("../components/TaiKhoan/index.vue"),
    meta: { requiresAuth: true },
  },
  {
    path: "/admin/duyet-nhom",
    component: () => import("../components/DuyetNhom/index.vue"),
    meta: { requiresAuth: true },
  },
  {
    path: "/admin/login",
    name: "admin-login",
    component: () => import("../components/Login/index.vue"),
    meta: { requiresAuth: false },
  },
  // Sinh Viên
  {
    path: "/",
    meta: { layout: "sinhvien",},
    component: () => import("../components_user/TrangChuUser/index.vue"),
  },
  {
    path: "/sinh-vien-nhom-do-an",
    meta: { layout: "sinhvien"},
    component: () => import("../components_user/SinhVien/index.vue"),
  },
  {
    path: "/ngan-hang-de-tai",
    meta: { layout: "sinhvien"},
    component: () => import("../components_user/NganHangDeTai/index.vue"),
  },
  {
    path: "/sinh-vien/login",
    meta: { layout: "login-sinhvien" },
    component: () => import("../components/Login/sinh_vien.vue"),
  },

  //giảng viên

  {
    path: "/hoi-dong-danh-gia",
    meta: { layout: "giangvien" },
    component: () => import("../components_user/HoiDongDanhGia/index.vue"),
  },
  {
    path: "/dang-nhap",
    meta: { layout: "giangvien" },
    component: () => import("../components_user/DangNhapUser/index.vue"),
  },
  {
    path: "/chi-tiet-sinh-vien",
    meta: { layout: "giangvien" },
    component: () => import("../components_user/ChiTietSinhVien/index.vue"),
  },
  {
    path: "/chia-nhom",
    meta: { layout: "giangvien" },
    component: () => import("../components_user/ChiaNhom/index.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes: routes,
});
const isAuthenticated = () => {
  // Replace this with your actual authentication logic, e.g., checking for a token
  const token = localStorage.getItem('token');
  return token !== null && token !== undefined;
};
router.beforeEach((to, from, next) => {
    if (to.matched.some((route) => route.meta.requiresAuth)) {
        if (isAuthenticated()) {
            next();
        } else {
            next("/sinh-vien/login");
        }
    } else {
        next();
    }
});

export default router;
