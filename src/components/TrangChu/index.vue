<template lang="">
<div class="container">
    <div class="row">
        <div class="col">
            <div id="carouselExample" class="carousel slide">
                <div class="carousel-inner">
                    <div class="carousel-item active">
                        <img src="https://bizweb.dktcdn.net/100/386/444/themes/763961/assets/slider_1.png"
                            class="d-block w-100" alt="...">
                    </div>
                    <div class="carousel-item">
                        <img src="https://bizweb.dktcdn.net/100/386/444/themes/763961/assets/slider_2.png"
                            class="d-block w-100" alt="...">
                    </div>
                    <div class="carousel-item">
                        <img src="https://bizweb.dktcdn.net/100/386/444/themes/763961/assets/slider_3.png"
                            class="d-block w-100" alt="...">
                    </div>
                    <div class="carousel-item">
                        <img src="https://bizweb.dktcdn.net/100/386/444/themes/763961/assets/slider_4.png"
                            class="d-block w-100" alt="...">
                    </div>
                </div>
                <button class="carousel-control-prev" type="button" data-bs-target="#carouselExample"
                    data-bs-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Previous</span>
                </button>
                <button class="carousel-control-next" type="button" data-bs-target="#carouselExample"
                    data-bs-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Next</span>
                </button>
            </div>
        </div>
    </div><!--end row-->
    <div class="row mt-3">
        <div class="col">
            <div class="alert alert-danger d-flex flex-row align-items-center" role="alert">
                <i class="fa-solid fa-truck-fast fa-2x me-3"></i>
                <div class="d-flex flex-column">
                    <div class="p-2"><b>Free Shipping</b></div>
                    <div class="p-2">Free shipping over $100 </div>
                </div>
            </div>
        </div>
        <div class="col">
            <div class="alert alert-success d-flex flex-row align-items-center" role="alert">
                <i class="fa-solid fa-shield-halved fa-2x me-3"></i>
                <div class="d-flex flex-column">
                    <div class="p-2"><b>Payment Secure</b></div>
                    <div class="p-2">Got 100% Payment Safe </div>
                </div>
            </div>
        </div>
        <div class="col">
            <div class="alert alert-warning d-flex flex-row align-items-center" role="alert">
                <i class="fa-solid fa-headset fa-2x me-3"></i>
                <div class="d-flex flex-column">
                    <div class="p-2"><b>Support 24/7</b></div>
                    <div class="p-2">Top quialty 24/7 Support </div>
                </div>
            </div>
        </div>
        <div class="col">
            <div class="alert alert-dark d-flex flex-row align-items-center" role="alert">
                <i class="fa-solid fa-hand-holding-dollar fa-2x me-3"></i>
                <div class="d-flex flex-column">
                    <div class="p-2"><b>100% Money Back</b></div>
                    <div class="p-2">Cutomers Money Backs </div>
                </div>
            </div>
        </div>
    </div>
    <div class="row mt-3">
        <div class="col text-center">
            <h1>
                <b>SẢN PHẨM NỔI BẬT</b>
            </h1>
        </div>
    </div>
    <div class="row row-cols-1 row-cols-sm-2 row-cols-lg-3 row-cols-xl-4 row-cols-xxl-4 product-grid mt-3">
        <template v-for="(v, k) in sanPhamNoiBat">
            <div class="col d-flex align-items-stretch">
            <div class="card">
                <router-link to="/chi-tiet-san-pham">
                <img v-bind:src="v.hinh_anh"
                    class="card-img-top" alt="...">
                </router-link>
                <div class="">
                    <div class="position-absolute top-0 end-0 m-3 product-discount"><span
                            class="">-10%</span></div>
                </div>
                <div class="card-body">
                    <router-link to="/chi-tiet-san-pham">
                    <h6 class="card-title cursor-pointer">
                        {{ v.ten_san_pham }}
                    </h6>
                    </router-link>
                    <div class="clearfix">
                        <p class="mb-0 float-start"><strong>134</strong> Sales</p>
                        <p class="mb-0 float-end fw-bold"><span
                                class="me-2 text-decoration-line-through text-secondary">{{ v.gia_goc }}₫</span><span>{{ v.gia_ban }}₫ </span>
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
    <div class="row mt-3">
        <div class="col text-center">
            <h1>
                <b>SẢN PHẨM MỚI</b>
            </h1>
        </div>
    </div>
    <div class="row row-cols-1 row-cols-sm-2 row-cols-lg-3 row-cols-xl-4 row-cols-xxl-4 product-grid mt-3">
        <template v-for="(v, k) in sanPhamMoi">
            <div class="col d-flex align-items-stretch">
            <div class="card">
                <router-link to="/chi-tiet-san-pham">
                <img v-bind:src="v.hinh_anh"
                    class="card-img-top" alt="...">
                </router-link>
                <div class="">
                    <div class="position-absolute top-0 end-0 m-3 product-discount"><span
                            class="">-10%</span></div>
                </div>
                <div class="card-body">
                    <router-link to="/chi-tiet-san-pham">
                    <h6 class="card-title cursor-pointer">
                        {{ v.ten_san_pham }}
                    </h6>
                    </router-link>
                    <div class="clearfix">
                        <p class="mb-0 float-start"><strong>134</strong> Sales</p>
                        <p class="mb-0 float-end fw-bold"><span
                                class="me-2 text-decoration-line-through text-secondary">{{ v.gia_goc }}₫</span><span>{{ v.gia_ban }}₫ </span>
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
    <div class="row mt-5">
        <div class="col">
            <img src="https://bizweb.dktcdn.net/100/386/444/themes/763961/assets/section_banner_img.png?1690182768047" class="img-fluid" alt="...">
        </div>
    </div>
    <div class="row mt-3">
        <div class="col text-center">
            <h1>
                <b>TÚI - BALO</b>
            </h1>
        </div>
    </div>
    <div class="row row-cols-1 row-cols-sm-2 row-cols-lg-3 row-cols-xl-4 row-cols-xxl-4 product-grid mt-3">
        
        <div class="col d-flex align-items-stretch">
            <div class="card">
                <router-link to="/chi-tiet-san-pham">
                <img src="https://bizweb.dktcdn.net/thumb/grande/100/386/444/products/balo-louis-vuitton-discovery-pm-monogram-chuan-authentic-1-ac4cdc93-d5b0-42a2-aa1e-53905bd115bf.jpg"
                    class="card-img-top" alt="...">
                </router-link>
                <div class="">
                    <div class="position-absolute top-0 end-0 m-3 product-discount"><span
                            class="">-10%</span></div>
                </div>
                <div class="card-body">
                    <router-link to="/chi-tiet-san-pham">
                    <h6 class="card-title cursor-pointer">BALO LOUIS VUITTON DISCOVERY PM MONOGRAM</h6>
                    </router-link>
                    <div class="clearfix">
                        <p class="mb-0 float-start"><strong>134</strong> Sales</p>
                        <p class="mb-0 float-end fw-bold"><span
                                class="me-2 text-decoration-line-through text-secondary">6.800.000₫</span><span>6.600.000₫ </span>
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
        <div class="col d-flex align-items-stretch">
            <div class="card">
                <router-link to="/chi-tiet-san-pham">
                <img src="https://bizweb.dktcdn.net/thumb/grande/100/386/444/products/balo-louis-vuitton-discovery-pm-chuan-authentic-1-bc6b86b1-ccaf-44fa-8431-c5c3a738bbdd.jpg"
                    class="card-img-top" alt="...">
                </router-link>
                <div class="">
                    <div class="position-absolute top-0 end-0 m-3 product-discount"><span
                            class="">-10%</span></div>
                </div>
                <div class="card-body">
                    <router-link to="/chi-tiet-san-pham">
                    <h6 class="card-title cursor-pointer">ÁO POLO LOUIS VUITTON LOGO SIGNATURE</h6>
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
        <div class="col d-flex align-items-stretch">
            <div class="card">
                <router-link to="/chi-tiet-san-pham">
                <img src="https://bizweb.dktcdn.net/thumb/grande/100/386/444/products/tui-louis-vuittono-outdoor-messenger-taigarama-chuan-authentic-1.jpg"
                    class="card-img-top" alt="...">
                </router-link>
                <div class="">
                    <div class="position-absolute top-0 end-0 m-3 product-discount"><span
                            class="">-10%</span></div>
                </div>
                <div class="card-body">
                    <router-link to="/chi-tiet-san-pham">
                    <h6 class="card-title cursor-pointer">ÁO POLO LOUIS VUITTON LOGO SIGNATURE</h6>
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
        <div class="col d-flex align-items-stretch">
            <div class="card">
                <router-link to="/chi-tiet-san-pham">
                <img src="https://bizweb.dktcdn.net/thumb/grande/100/386/444/products/tui-xach-louis-vuitton-sac-plat-horizontal-zippe-chuan-hang-chinh-hang-1.jpg"
                    class="card-img-top" alt="...">
                </router-link>
                <div class="">
                    <div class="position-absolute top-0 end-0 m-3 product-discount"><span
                            class="">-10%</span></div>
                </div>
                <div class="card-body">
                    <router-link to="/chi-tiet-san-pham">
                    <h6 class="card-title cursor-pointer">ÁO POLO LOUIS VUITTON LOGO SIGNATURE</h6>
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
        <div class="col d-flex align-items-stretch">
            <div class="card">
                <router-link to="/chi-tiet-san-pham">
                <img src="https://bizweb.dktcdn.net/thumb/grande/100/386/444/products/tui-prada-re-nylon-and-leather-black-chuan-authentic-1.jpg"
                    class="card-img-top" alt="...">
                </router-link>
                <div class="">
                    <div class="position-absolute top-0 end-0 m-3 product-discount"><span
                            class="">-10%</span></div>
                </div>
                <div class="card-body">
                    <router-link to="/chi-tiet-san-pham">
                    <h6 class="card-title cursor-pointer">ÁO POLO LOUIS VUITTON LOGO SIGNATURE</h6>
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
        <div class="col d-flex align-items-stretch">
            <div class="card">
                <router-link to="/chi-tiet-san-pham">
                <img src="https://bizweb.dktcdn.net/thumb/grande/100/386/444/products/tui-prada-nylon-and-saffiano-leather-phone-bag-chuan-authentic-1.jpg"
                    class="card-img-top" alt="...">
                </router-link>
                <div class="">
                    <div class="position-absolute top-0 end-0 m-3 product-discount"><span
                            class="">-10%</span></div>
                </div>
                <div class="card-body">
                    <router-link to="/chi-tiet-san-pham">
                    <h6 class="card-title cursor-pointer">ÁO POLO LOUIS VUITTON LOGO SIGNATURE</h6>
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
        <div class="col d-flex align-items-stretch">
            <div class="card">
                <router-link to="/chi-tiet-san-pham">
                <img src="https://bizweb.dktcdn.net/thumb/grande/100/386/444/products/tui-dior-hit-the-road-messenger-pouch-chuan-authentic-1.jpg"
                    class="card-img-top" alt="...">
                </router-link>
                <div class="">
                    <div class="position-absolute top-0 end-0 m-3 product-discount"><span
                            class="">-10%</span></div>
                </div>
                <div class="card-body">
                    <router-link to="/chi-tiet-san-pham">
                    <h6 class="card-title cursor-pointer">ÁO POLO LOUIS VUITTON LOGO SIGNATURE</h6>
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
        <div class="col d-flex align-items-stretch">
            <div class="card">
                <router-link to="/chi-tiet-san-pham">
                <img src="https://bizweb.dktcdn.net/thumb/grande/100/386/444/products/tui-gucci-ophidia-gg-belt-bag-chuan-authentic-1.jpg"
                    class="card-img-top" alt="...">
                </router-link>
                <div class="">
                    <div class="position-absolute top-0 end-0 m-3 product-discount"><span
                            class="">-10%</span></div>
                </div>
                <div class="card-body">
                    <router-link to="/chi-tiet-san-pham">
                    <h6 class="card-title cursor-pointer">ÁO POLO LOUIS VUITTON LOGO SIGNATURE</h6>
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
    </div>
</div>

</template>
<script>
import baseRequest from '../../core/baseRequest';
import functionBasic from '../../core/functionBasic';
export default {
    data() {
        return {
            sanPhamNoiBat   :   [],
            sanPhamMoi      :   [],
        }
    },
    mounted() {
        this.loadDataTrangChu();
    },  
    methods: {
        loadDataTrangChu() {
            baseRequest
                .get('data-trang-chu')
                .then((res) => {
                    this.sanPhamNoiBat  = res.data.sanPhamNoiBat;
                    this.sanPhamMoi     = res.data.sanPhamMoi;
                })
        }
    },
}
</script>
<style>
    
</style>