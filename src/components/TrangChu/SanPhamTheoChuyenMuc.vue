<template lang="">
<div class="container">
    <div class="page-breadcrumb d-none d-sm-flex align-items-center mb-3">
        <div class="breadcrumb-title pe-3">Danh Sách Sản Phẩm</div>
        <div class="ps-3">
            <nav aria-label="breadcrumb">
                <ol class="breadcrumb mb-0 p-0">
                    <li class="breadcrumb-item">
                        <router-link to="/">
                            <a href="trang_chu.html"><i class="bx bx-home-alt"></i></a>
                        </router-link>
                    </li>
                    <li class="breadcrumb-item active" aria-current="page">Chuyên Mục: {{ chuyen_muc.ten_chuyen_muc }}</li>
                </ol>
            </nav>
        </div>
    </div>
    <!--end breadcrumb-->
    <div class="row">
        <div class="col-12">
            <div class="card">
                <div class="card-body">
                    <div class="row align-items-center">
                        <div class="col-lg-6 col-xl-6 d-flex align-items-center">
                            <h4 class="me-2"><b>Tất cả sản phẩm của {{ chuyen_muc.ten_chuyen_muc }}</b></h4>
                            <span>({{ list.length }} sản phẩm)</span>
                        </div>
                        <div class="col-lg-6 col-xl-6">
                            <form class="float-lg-end">
                                <div class="row row-cols-lg-2 row-cols-xl-auto g-2">
                                    <div class="col">
                                        <div class="position-relative">
                                            <input type="text" class="form-control ps-5" placeholder="Search Product..."> <span class="position-absolute top-50 product-show translate-middle-y"><i class="bx bx-search"></i></span>
                                        </div>
                                    </div>
                                    <div class="col">
                                        <div class="btn-group" role="group" aria-label="Button group with nested dropdown">
                                            <button type="button" class="btn btn-white">Sắp xếp</button>
                                            <div class="btn-group" role="group">
                                                <button id="btnGroupDrop1" type="button" class="btn btn-white dropdown-toggle dropdown-toggle-nocaret px-1" data-bs-toggle="dropdown" aria-expanded="false">
                                                <i class='bx bx-chevron-down'></i>
                                                </button>
                                                <ul class="dropdown-menu" aria-labelledby="btnGroupDrop1">
                                                <li><a class="dropdown-item" href="#">Featured</a></li>
                                                <li><a class="dropdown-item" href="#">Alphabetically, A-Z</a></li>
                                                <li><a class="dropdown-item" href="#">Alphabetically, Z-A</a></li>
                                                </ul>
                                            </div>
                                            </div>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <div class="row row-cols-1 row-cols-sm-2 row-cols-lg-3 row-cols-xl-4 row-cols-xxl-4 product-grid mt-3">
        <template v-for="(v, k) in list">
            <div class="col d-flex align-items-stretch">
            <div class="card">
                <router-link to="/product-detail">
                <img v-bind:src="v.hinh_anh"
                    class="card-img-top" alt="...">
                </router-link>
                <div class="">
                    <div class="position-absolute top-0 end-0 m-3 product-discount"><span
                            class="">-10%</span></div>
                </div>
                <div class="card-body">
                    <router-link to="/product-detail">
                    <h6 class="card-title cursor-pointer">{{ v.ten_san_pham }}</h6>
                    </router-link>
                    <div class="clearfix">
                        <p class="mb-0 float-start"><strong>134</strong> Sales</p>
                        <p class="mb-0 float-end fw-bold"><span
                                class="me-2 text-decoration-line-through text-secondary">2.800.000₫</span><span>2.000.000₫ </span>
                        </p>
                    </div>
                    <div class="d-flex align-items-center mt-3 fs-6">
                        <div class="cursor-pointer">
                            <i class='bx bxs-star text-warning'></i>
                            <i class='bx bxs-star text-warning'></i>
                            <i class='bx bxs-star text-warning'></i>
                            <i class='bx bxs-star text-warning'></i>
                            <i class='bx bxs-star text-secondary'></i>
                        </div>
                        <p class="mb-0 ms-auto">4.2(182)</p>
                    </div>
                </div>
            </div>
        </div>
        </template>
    </div>
</div>
</template>
<script>
import baseRequest from '../../core/baseRequest';
import functionBasic from '../../core/functionBasic';
export default {
    data() {
        return {
            url_chuyen_muc  : '',
            list            : [],
            chuyen_muc      : {},
        };
    },
    watch: {
        '$route.params.url_chuyen_muc'(new_url_chuyen_muc) {
            this.url_chuyen_muc = new_url_chuyen_muc;
            this.loadData();
        }
    },
    created() {
        this.url_chuyen_muc = this.$route.params.url_chuyen_muc;
        this.loadData();
    }, 
    methods: {
        loadData() {
            const payload = {
                'url_chuyen_muc'    :   '/' + this.url_chuyen_muc,
            };
            baseRequest
                .post("data-san-pham-theo-chuyen-muc", payload)
                .then((res) => {
                    this.list           = res.data.data;
                    this.chuyen_muc     = res.data.chuyen_muc;
                });
        },
    }, 
}
</script>
<style lang="">
    
</style>