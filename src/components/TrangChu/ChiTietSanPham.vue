<template>
<div class="container">
    <!--breadcrumb-->
    <div class="page-breadcrumb d-none d-sm-flex align-items-center mb-3">
        <div class="breadcrumb-title pe-3">Chi Tiết Sản Phẩm</div>
        <div class="ps-3">
            <nav aria-label="breadcrumb">
                <ol class="breadcrumb mb-0 p-0">
                    <li class="breadcrumb-item">
                        <router-link to="/">
                            <a href="trang_chu.html"><i class="bx bx-home-alt"></i></a>
                        </router-link>
                    </li>
                    <li class="breadcrumb-item active" aria-current="page">Chi Tiết Sản Phẩm</li>
                </ol>
            </nav>
        </div>
    </div>
    <!--end breadcrumb-->
    <div class="card">
        <div class="row g-0">
            <div class="col-md-4 border-end">
                <img v-bind:src="san_pham.hinh_anh" class="img-fluid" alt="...">
                <div class="row mb-3 row-cols-auto g-2 justify-content-center mt-3">
                    <div class="col"><img src="../../assets/rocker/images/products/12.png" width="70"
                            class="border rounded cursor-pointer" alt=""></div>
                    <div class="col"><img src="../../assets/rocker/images/products/11.png" width="70"
                            class="border rounded cursor-pointer" alt=""></div>
                    <div class="col"><img src="../../assets/rocker/images/products/14.png" width="70"
                            class="border rounded cursor-pointer" alt=""></div>
                    <div class="col"><img src="../../assets/rocker/images/products/15.png" width="70"
                            class="border rounded cursor-pointer" alt=""></div>
                </div>
            </div>
            <div class="col-md-8">
                <div class="card-body">
                    <h4 class="card-title">{{ san_pham.ten_san_pham }}</h4>
                    <div class="d-flex gap-3 py-3">
                        <div class="cursor-pointer">
                            <i class='bx bxs-star text-warning'></i>
                            <i class='bx bxs-star text-warning'></i>
                            <i class='bx bxs-star text-warning'></i>
                            <i class='bx bxs-star text-warning'></i>
                            <i class='bx bxs-star text-secondary'></i>
                        </div>
                        <div>142 reviews</div>
                        <div class="text-success"><i class='bx bxs-cart-alt align-middle'></i> 134
                            orders
                        </div>
                    </div>
                    <div class="mb-3">
                        <span class="price h4">{{ san_pham.gia_ban }} đ</span>
                        <span class="text-decoration-line-through text-secondary">149.00 đ</span>
                    </div>
                    <p class="card-text fs-6">
                        {{ san_pham.mo_ta  }}
                    </p>
                    <dl class="row">
                        <dt class="col-sm-2">Categories:</dt>
                        <dd class="col-sm-6">Samsung, Apple, Huawei</dd>
                    </dl>
                    <hr>
                    <div class="row row-cols-auto row-cols-1 row-cols-md-3 align-items-center">
                        <div class="col">
                            <label class="form-label">Quantity</label>
                            <div class="input-group input-spinner">
                                <button class="btn btn-white" type="button" id="button-minus"> −
                                </button>
                                <input type="text" class="form-control" value="1">
                                <button class="btn btn-white" type="button" id="button-plus"> +
                                </button>
                            </div>
                        </div>
                    </div>
                    <div class="d-flex gap-3 mt-3">
                        <a href="#" class="btn btn-danger">Buy Now</a>
                        <a href="#" class="btn btn-outline-danger"><span class="text">Add to cart</span>
                            <i class='bx bxs-cart-alt'></i></a>
                    </div>
                </div>
            </div>
        </div>
        <hr />
        <div class="card-body">
            <ul class="nav nav-tabs nav-danger mb-0" role="tablist">
                <li class="nav-item" role="presentation">
                    <a class="nav-link active" data-bs-toggle="tab" href="#dangerhome" role="tab"
                        aria-selected="true">
                        <div class="d-flex align-items-center">
                            <div class="tab-icon"><i class='bx bx-comment-detail font-18 me-1'></i>
                            </div>
                            <div class="tab-title"> Product Description </div>
                        </div>
                    </a>
                </li>
                <li class="nav-item" role="presentation">
                    <a class="nav-link" data-bs-toggle="tab" href="#dangerprofile" role="tab"
                        aria-selected="false">
                        <div class="d-flex align-items-center">
                            <div class="tab-icon"><i class='bx bx-bookmark-alt font-18 me-1'></i>
                            </div>
                            <div class="tab-title">Tags</div>
                        </div>
                    </a>
                </li>
                <li class="nav-item" role="presentation">
                    <a class="nav-link" data-bs-toggle="tab" href="#dangercontact" role="tab"
                        aria-selected="false">
                        <div class="d-flex align-items-center">
                            <div class="tab-icon"><i class='bx bx-star font-18 me-1'></i>
                            </div>
                            <div class="tab-title">Reviews</div>
                        </div>
                    </a>
                </li>
            </ul>
            <div class="tab-content pt-3">
                <div class="tab-pane fade show active" id="dangerhome" role="tabpanel">
                    {{ san_pham.noi_dung }}
                </div>
                <div class="tab-pane fade" id="dangerprofile" role="tabpanel">
                    {{ san_pham.thong_tin_them }}
                </div>
                <div class="tab-pane fade" id="dangercontact" role="tabpanel">
                    <div class="row">
                        <div class="col-6">
                            <div class="chat-content-leftside">
                                <div class="d-flex mt-3">
                                    <img src="../../assets/rocker/images/avatars/avatar-3.png"
                                        width="60" height="60" class="rounded-circle" alt="" />
                                    <div class="flex-grow-1 ms-2">
                                        <p class="mb-0 chat-time">Harvey, 2:35 PM</p>
                                        <p class="chat-left-msg">Hi, harvey where are you now a days?
                                        </p>
                                    </div>
                                </div>
                                <div class="d-flex mt-3">
                                    <img src="../../assets/rocker/images/avatars/avatar-4.png"
                                        width="60" height="60" class="rounded-circle" alt="" />
                                    <div class="flex-grow-1 ms-2">
                                        <p class="mb-0 chat-time">Rachel Zane, 2:35 PM</p>
                                        <p class="chat-left-msg">Hi, harvey where are you now a days?
                                        </p>
                                    </div>
                                </div>
                                <div class="d-flex mt-3">
                                    <img src="../../assets/rocker/images/avatars/avatar-5.png"
                                        width="60" height="60" class="rounded-circle" alt="" />
                                    <div class="flex-grow-1 ms-2">
                                        <p class="mb-0 chat-time">Harvey, 2:35 PM</p>
                                        <p class="chat-left-msg">Hi, harvey where are you now a days?
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-6">
                            <div class="row">
                                <div class="col-12">
                                    <h4>Here you can review the item</h4>
                                </div>
                                <div class="col-12 mt-3">
                                    <input type="text" class="form-control" placeholder="Name *">
                                </div>
                                <div class="col-12 mt-3">
                                    <input type="text" class="form-control" placeholder="Email *">
                                </div>
                                <div class="col-12 mt-3">
                                    <textarea cols="30" rows="10" class="form-control"
                                        placeholder="Review *"></textarea>
                                </div>
                                <div class="col-12 mt-3 text-end">
                                    <button class="btn btn-danger">Comment</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>


    <h6 class="text-uppercase mb-0">Related Product</h6>
    <hr />
    <div class="row row-cols-1 row-cols-lg-3">
        <div class="col">
            <div class="card">
                <div class="row g-0">
                    <div class="col-md-4">
                        <img src="../../assets/rocker/images/products/16.png" class="img-fluid"
                            alt="...">
                    </div>
                    <div class="col-md-8">
                        <div class="card-body">
                            <h6 class="card-title">Light Grey Headphone</h6>
                            <div class="cursor-pointer my-2">
                                <i class="bx bxs-star text-warning"></i>
                                <i class="bx bxs-star text-warning"></i>
                                <i class="bx bxs-star text-warning"></i>
                                <i class="bx bxs-star text-warning"></i>
                                <i class="bx bxs-star text-secondary"></i>
                            </div>
                            <div class="clearfix">
                                <p class="mb-0 float-start fw-bold"><span
                                        class="me-2 text-decoration-line-through text-secondary">240
                                        d</span><span>199 đ</span>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="col">
            <div class="card">
                <div class="row g-0">
                    <div class="col-md-4">
                        <img src="../../assets/rocker/images/products/17.png" class="img-fluid"
                            alt="...">
                    </div>
                    <div class="col-md-8">
                        <div class="card-body">
                            <h6 class="card-title">Black Cover iPhone 8</h6>
                            <div class="cursor-pointer my-2">
                                <i class="bx bxs-star text-warning"></i>
                                <i class="bx bxs-star text-warning"></i>
                                <i class="bx bxs-star text-warning"></i>
                                <i class="bx bxs-star text-warning"></i>
                                <i class="bx bxs-star text-warning"></i>
                            </div>
                            <div class="clearfix">
                                <p class="mb-0 float-start fw-bold"><span
                                        class="me-2 text-decoration-line-through text-secondary">179
                                        đ</span><span>110 đ</span>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="col">
            <div class="card">
                <div class="row g-0">
                    <div class="col-md-4">
                        <img src="../../assets/rocker/images/products/19.png" class="img-fluid"
                            alt="...">
                    </div>
                    <div class="col-md-8">
                        <div class="card-body">
                            <h6 class="card-title">Men Hand Watch</h6>
                            <div class="cursor-pointer my-2">
                                <i class="bx bxs-star text-warning"></i>
                                <i class="bx bxs-star text-warning"></i>
                                <i class="bx bxs-star text-warning"></i>
                                <i class="bx bxs-star text-secondary"></i>
                                <i class="bx bxs-star text-secondary"></i>
                            </div>
                            <div class="clearfix">
                                <p class="mb-0 float-start fw-bold"><span
                                        class="me-2 text-decoration-line-through text-secondary">150
                                        đ</span><span>120 đ</span>
                                </p>
                            </div>
                        </div>
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
import { createToaster } from '@meforma/vue-toaster'
const toastr =  createToaster({
    position: 'top-right'
})
export default {
    data() {
        return {
            id_san_pham     :   5,
            san_pham        :   {},
        };
    },
    watch: {
        '$route.params.id_san_pham'(new_id_san_pham) {
            this.id_san_pham = new_id_san_pham;
            this.loadData();
        }
    },
    created() {
        this.id_san_pham = this.$route.params.id_san_pham;
        this.loadData();
    },
    methods: {
        loadData() {
            baseRequest
                .get("chi-tiet-san-pham/" + this.id_san_pham)
                .then((res) => {
                    if(res.data.status) {
                        this.san_pham   = res.data.data;
                    } else {
                        toastr.error("Thông báo!!!<br>" + res.data.message);
                        this.$router.push('/');
                    }
                });
        },
        
    }, 
}
</script>
<style lang="">
    
</style>