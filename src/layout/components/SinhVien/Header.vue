<template lang="">
    <header>
        <div class="topbar d-flex align-items-center">
            <nav class="navbar navbar-expand">
                <div class="topbar-logo-header">
                    <div class="">
                        <img src="../../../assets/images/logo-icon.png" class="logo-icon" alt="logo icon">
                    </div>
                    <div class="">
                        <h4 class="logo-text">Rocker</h4>
                    </div>
                </div>
                <div class="top-menu ms-auto">
                    
                </div>
                <div class="user-box dropdown">
                    <template v-if="checklogin == false">
                        <router-link to="/sinh-vien/login">
                            <button class="btn btn-dark me-3 radius-30 px-4" type="submit"><i class="bx bx-lock"></i> Đăng Nhập</button>
                        </router-link>
                    </template>
                    <template v-else>
                        <a class="btn btn-dark me-3 radius-30 px-4" type="submit"  v-on:click="logout()"><i class="bx bx-lock"></i> Đăng Xuất</a>
                    </template>
                </div>
            </nav>
        </div>
        </header>
    </template>
    <script>
    import baseRequest from '../../../core/baseRequest';
    import functionBasic from '../../../core/functionBasic';
    export default {
        data() {
            return {
                checklogin : false,
            }
        },
        mounted() {
            this.checkLogin();
        },  
        methods: {
            logout() {
                console.log(123);
                baseRequest
                    .post('sinh-vien/logout')
                    .then((res) => {
                        functionBasic.displaySuccess(res);
                        if(res.data.status == 1) {
                            this.checkLogin = false;
                            localStorage.removeItem('token-sinh-vien');
                            sessionStorage.removeItem('user');
                            this.$router.push('/sinh-vien/login');
                        }
                    })
                    .catch((err) => {
                        functionBasic.displayErrors(err);
                    });
            },
            checkLogin() {
                let token = window.localStorage.getItem('token-sinh-vien');
                if (token != null) {
                    this.checklogin = true
                } else {
                    this.checklogin = false
                }
            }
        }
    }
    </script>
    <style lang="">
        
    </style>