<template lang="">
    <header>
        <div class="topbar d-flex align-items-center">
            <nav class="navbar navbar-expand-xl w-100">
                <ul class="navbar-nav me-auto mb-2 mb-lg-0 text-dark">
                    <router-link to="/trang-chu-user">
                        <li class="nav-item"> <a class="nav-link active" aria-current="page" href="#"><i class="bx bx-home-alt me-1"></i>Trang Chủ</a>
                        </li>
                    </router-link>

                    <router-link to="/giang-vien-nhom-do-an">
                        <li class="nav-item"> <a class="nav-link" href="#"><i class="fa-regular fa-user" style="margin-right: 10px;"></i>Giảng viên</a></li>
                    </router-link>
                    <router-link to="/hoi-dong-danh-gia">
                        <li class="nav-item"> <a class="nav-link" href="#"><i class="fa-regular fa-user" style="margin-right: 10px;"></i>Hội Đồng Đánh Giá</a></li>
                    </router-link>

                </ul>
                <template v-if="checklogin == false">
                    <router-link to="/sinh-vien/login">
                        <button class="btn btn-dark me-3 radius-30 px-4" type="submit"><i class="bx bx-lock"></i> Đăng Nhập</button>
                    </router-link>
                </template>
                <template v-else>
                    <a class="btn btn-dark me-3 radius-30 px-4" type="submit"  v-on:click="logout()"><i class="bx bx-lock"></i> Đăng Xuất</a>
                </template>
            </nav>
        </div>
    </header>
 </template>
 <script>
 export default {
 
 }
 </script>
 <style lang="">
     
 </style>