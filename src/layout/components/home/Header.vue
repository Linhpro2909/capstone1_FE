<template lang="">
<header>
    <div class="topbar d-flex align-items-center">
        <nav class="navbar navbar-expand container">
            <router-link to="/">
                <div class="topbar-logo-header">
                    <a href="trang_chu.html">
                        <img src="https://dzfullstack.com/assets/images/logo-1.png"
                            style="height:45px;width:75px;margin-bottom: 10px" class="logo-icon">
                    </a>
                </div>
            </router-link>
            <div class="mobile-toggle-menu"><i class='bx bx-menu'></i></div>
            <div class="search-bar flex-grow-1">
                <div class="position-relative search-bar-box">
                    <input type="text" class="form-control search-control" placeholder="Type to search...">
                    <span class="position-absolute top-50 search-show translate-middle-y"><i
                            class='bx bx-search'></i></span>
                    <span class="position-absolute top-50 search-close translate-middle-y"><i
                            class='bx bx-x'></i></span>
                </div>
            </div>
            <div class="top-menu ms-auto">
                <ul class="navbar-nav align-items-center">
                    <li class="nav-item mobile-search-icon">
                        <a class="nav-link" href="#"> <i class='bx bx-search'></i>
                        </a>
                    </li>
                    <li class="nav-item dropdown dropdown-large">
                        <router-link to="/myaccount">
                            <a class="nav-link" href="my_account.html"> <i class="fa-regular fa-user"></i> </a>
                        </router-link>
                    </li>
                    <li class="nav-item dropdown dropdown-large">
                        <a class="nav-link" href="#"> <span class="alert-count">0</span>
                            <i class="fa-regular fa-heart"></i>
                        </a>
                        <div class="dropdown-menu dropdown-menu-end">
                            <div class="header-notifications-list">
                            </div>
                        </div>
                    </li>
                    <li class="nav-item dropdown dropdown-large">
                        <router-link to="/cart">
                            <a class="nav-link" href="cart.html"> <span class="alert-count">0</span>
                                <i class="fa-solid fa-cart-shopping"></i>
                            </a>
                        </router-link>
                    </li>
                </ul>
            </div>
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