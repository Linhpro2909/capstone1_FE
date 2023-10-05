<template lang="">
<div class="nav-container primary-menu">
    <div class="mobile-topbar-header">
        <div>
            <img src="https://dzfullstack.com/assets/images/logo-1.png"
                style="height:45px;width:75px;margin-bottom: 10px" class="logo-icon" alt="logo icon">
        </div>
        <div class="toggle-icon ms-auto text-dark"><i class="fa-solid fa-arrow-left"></i>
        </div>
    </div>
    <div class="container">
        <nav class="navbar navbar-expand-xl w-100 d-flex justify-content-between">
            <ul class="navbar-nav justify-content-start flex-grow-1 gap-1">
                <li class="nav-item">
                    <router-link to="/">
                        <a class="nav-link" href="trang_chu.html">
                            <div class="parent-icon"><i class="fa-solid fa-house"></i>
                            </div>
                            <div class="menu-title">Trang chủ</div>
                        </a>
                    </router-link>
                </li>
                <li class="nav-item dropdown">
                    <a href="javascript:;" class="nav-link dropdown-toggle dropdown-toggle-nocaret"
                        data-bs-toggle="dropdown">
                        <div class="parent-icon"><i class="fa-solid fa-list"></i>
                        </div>
                        <div class="menu-title">Danh Mục</div>
                    </a>
                    <ul class="dropdown-menu">
                        <li>
                            <a class="dropdown-item" href="ecommerce-products.html"><i
                                    class="bx bx-right-arrow-alt"></i>Danh Mục 1</a>
                        </li>
                        <li>
                            <a class="dropdown-item" href="ecommerce-products.html"><i
                                    class="bx bx-right-arrow-alt"></i>Danh Mục 2</a>
                        </li>
                        <li>
                            <a class="dropdown-item" href="ecommerce-products.html"><i
                                    class="bx bx-right-arrow-alt"></i>Danh Mục 3</a>
                        </li>
                        <li>
                            <a class="dropdown-item" href="ecommerce-products.html"><i
                                    class="bx bx-right-arrow-alt"></i>Danh Mục 4</a>
                        </li>
                    </ul>
                </li>
                <li class="nav-item">
                    <router-link to="/list-product">
                        <a class="nav-link" href="tat_ca_san_pham.html">
                            <div class="parent-icon"><i class="fa-brands fa-product-hunt"></i>
                            </div>
                            <div class="menu-title">Tất Cả Sản Phẩm</div>
                        </a>
                    </router-link>
                </li>
                <li class="nav-item">
                    <router-link to="/blog">
                        <a class="nav-link" href="blog.html">
                            <div class="parent-icon"><i class="fa-solid fa-blog"></i>
                            </div>
                            <div class="menu-title">Bài Viết</div>
                        </a>
                    </router-link>
                </li>
            </ul>
            <ul class="navbar-nav justify-content-start flex-grow-2 gap-2">
                <li class="nav-item">
                    <router-link to="/login">
                        <a class="nav-link" href="login_register.html">
                            <div class="menu-title">Đăng nhập/Đăng ký</div>
                        </a>
                    </router-link>
                </li>
            </ul>
        </nav>
    </div>
</div>
</template>
<script>
export default {
    
}
</script>
<style lang="">
    
</style>