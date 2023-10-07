<template>
   <div class="container">
        <!--breadcrumb-->
        <div class="page-breadcrumb d-none d-sm-flex align-items-center mb-3">
            <div class="breadcrumb-title pe-3">Bài Viết</div>
            <div class="ps-3">
                <nav aria-label="breadcrumb">
                    <ol class="breadcrumb mb-0 p-0">
                        <li class="breadcrumb-item">
                            <router-link to="/">
                                <a href="trang_chu.html"><i class="bx bx-home-alt"></i></a>
                            </router-link>
                        </li>
                        <li class="breadcrumb-item active" aria-current="page">Bài Viết</li>
                    </ol>
                </nav>
            </div>
        </div>
        <!--end breadcrumb-->

        <!-- blog start -->
        <div class="container">
            <div class="row">
                <div class="col-xl-9 col-lg-8">
                    <template v-for="(v, k) in baiViet" >
                        <div class="card">
                            <img v-bind:src="convertImage(v.hinh_anh)"
                                    class="card-img-top">
                            <div class="card-body">
                                <h2 class="card-title cursor-pointer mt-2">
                                    <router-link to="/chi-tiet-bai-viet">
                                        <a href="blog_detail.html">{{ v.tieu_de }}</a>
                                    </router-link>
                                </h2>
                                <div class="clearfix d-flex align-items-center">
                                    <div class="avatar">
                                        <img src="../../assets/client/img/avatar/img_02.jpg" class="me-1"
                                            alt="">
                                    </div>
                                    <span>Admin / <span><i
                                                class="far fa-comment me-1"></i>3 |</span> <span></span><i
                                            class="far fa-clock me-1"></i>3 min Read</span>
                                </div>
                                <hr>
                                <p>{{ v.mo_ta_ngan }}</p>
                            </div>
                        </div>
                    </template>
                </div>
                <div class="col-xl-3 col-lg-4">
                    <div class="card">
                        <div class="card-body">
                            <div class="row">
                                <div class="col-12">
                                    <h2>
                                        <span>Tìm Kiếm</span>
                                    </h2>
                                    <hr>
                                    <div class="position-relative">
                                        <input type="text" class="form-control ps-5 radius-30"
                                            placeholder="Search..."> <span
                                            class="position-absolute top-50 product-show translate-middle-y"><i
                                                class="bx bx-search"></i></span>
                                    </div>
                                </div>
                                <div class="col-12 mt-4">
                                    <h2>
                                        <span>Bài Viết Nổi Bật</span>
                                    </h2>
                                    <hr>
                                    <template v-for="(v, k) in baiViet">
                                        <div class="row">
                                            <div class="col-12">
                                                <div class="row d-flex align-items-center">
                                                    <div class="col-md-4">
                                                        <img v-bind:src="v.hinh_anh" class="img-thumbnail">
                                                    </div>
                                                    <div class="col-md-8 ">
                                                        <div class="card-body">
                                                            <small class="text-muted" v-if="v.loai_bai_viet == 1">Tin Hot</small>
                                                            <small class="text-muted" v-else-if="v.loai_bai_viet == 2">Tin Thời Trang</small>
                                                            <small class="text-muted" v-else>Thông Báo</small>
                                                            <p class="card-text"><small
                                                                    class="text-muted"><b>{{ v.tieu_de }}</b></small></p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </template>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- blog end -->
    </div>
</template>
<script>
import baseRequest from '../../core/baseRequest';
import functionBasic from '../../core/functionBasic';
export default {
    data() {
        return {
            baiViet   :   [],
        }
    },
    mounted() {
        this.loadDataBaiViet();
    },  
    methods: {
        loadDataBaiViet() {
            baseRequest
                .get('data-bai-viet')
                .then((res) => {
                    this.baiViet  = res.data.baiViet;
                    console.log(this.baiViet);
                })
        },
        convertImage(text){
            text = text.toString();
            const Image = text.split(";");
            return Image[0];
        }
    },
}
</script>
<style>
    
</style>