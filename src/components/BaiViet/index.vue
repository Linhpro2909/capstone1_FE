<template lang="">
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
                    <div class="card">
                        <a href="#"><img src="../../assets/rocker/images/news/img_07.jpg"
                                class="card-img-top" alt=""></a>
                        <div class="position-absolute top-0 end-0 m-3 product-discount">
                            <div class="alert alert-danger border-0 bg-danger fade show">
                                <div class="d-flex align-items-center">
                                    <div class="">
                                        <h6 class="text-white">24</h6>
                                        <div class="text-white">Feb</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="card-body">
                            <div class="clearfix">
                                <p class="mb-0 float-start"><button class="btn btn-sm btn-warning me-2">#
                                        Tags</button>
                                    <b class="me-1">Links</b>
                                    <b class="me-1">Brave </b>
                                    <b class="me-1">Brave</b>
                                </p>

                            </div>
                            <h2 class="card-title cursor-pointer mt-2">
                                <router-link to="/chi-tiet-bai-viet">
                                    <a href="blog_detail.html">Finally found a work computer setup That’s practically perf</a>
                                </router-link>
                            </h2>
                            <div class="clearfix d-flex align-items-center">
                                <div class="avatar">
                                    <img src="../../assets/client/img/avatar/img_02.jpg" class="me-1"
                                        alt="">
                                </div>
                                <span>Alaxandar / <span class="year">4 year | </span> <span><i
                                            class="far fa-comment me-1"></i>3 |</span> <span></span><i
                                        class="far fa-clock me-1"></i>3 min Read</span>
                            </div>
                            <hr>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                Lorem the industry's standard dummy text ever since the
                                when an unknown printer took a galley of type and scrambled it to make a
                                type spe has been the industry's standard dummy text</p>
                        </div>
                    </div>
                </div>
                <div class="col-xl-3 col-lg-4">
                    <div class="card">
                        <div class="card-body">
                            <div class="row">
                                <div class="col-12">
                                    <h2>
                                        <span>Search</span>
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
                                    <h2 class="widget__title">
                                        <span>Stay Connected</span>
                                    </h2>
                                    <hr>
                                    <div class="d-flex align-items-center">
                                        <div class="fm-file-box bg-light-primary text-primary radius-30"><i
                                                class="fab fa-facebook-f"></i>
                                        </div>
                                        <div class="flex-grow-1 ms-2">
                                            <h6 class="mb-0">Facebook</h6>
                                        </div>
                                        <button class="btn btn-outline-secondary radius-30">Follow</button>
                                    </div>
                                    <div class="d-flex align-items-center mt-3">
                                        <div class="fm-file-box bg-light-primary text-primary radius-30"><i
                                                class="fab fa-twitter"></i>
                                        </div>
                                        <div class="flex-grow-1 ms-2">
                                            <h6 class="mb-0">Twitter</h6>
                                        </div>
                                        <button class="btn btn-outline-secondary radius-30">Follow</button>
                                    </div>
                                    <div class="d-flex align-items-center mt-3">
                                        <div class="fm-file-box bg-light-danger text-danger radius-30"><i
                                                class="fab fa-instagram"></i>
                                        </div>
                                        <div class="flex-grow-1 ms-2">
                                            <h6 class="mb-0">Instagram</h6>
                                        </div>
                                        <button class="btn btn-outline-secondary radius-30">Follow</button>
                                    </div>
                                    <div class="d-flex align-items-center mt-3">
                                        <div class="fm-file-box bg-light-secondary text-danger radius-30"><i
                                                class="fab fa-youtube"></i>
                                        </div>
                                        <div class="flex-grow-1 ms-2">
                                            <h6 class="mb-0">Youtube</h6>
                                        </div>
                                        <button class="btn btn-outline-secondary radius-30">Follow</button>
                                    </div>
                                    <div class="d-flex align-items-center mt-3">
                                        <div class="fm-file-box bg-light-light text-danger radius-30"><i
                                                class="fab fa-pinterest"></i>
                                        </div>
                                        <div class="flex-grow-1 ms-2">
                                            <h6 class="mb-0">Pinterest</h6>
                                        </div>
                                        <button class="btn btn-outline-secondary radius-30">Follow</button>
                                    </div>
                                </div>
                                <div class="col-12 mt-4">
                                    <h2>
                                        <span>Hot Topics</span>
                                    </h2>
                                    <hr>
                                    <div class="row">
                                        <div class="col-12">
                                            <div class="row d-flex align-items-center">
                                                <div class="col-md-4">
                                                    <img src="../../assets/rocker/images/news/img_11.jpg"
                                                        alt="..." class="img-thumbnail">
                                                </div>
                                                <div class="col-md-8 ">
                                                    <div class="card-body">
                                                        <small class="text-muted">Sports</small>
                                                        <p class="card-text"><small
                                                                class="text-muted"><b>Severance Nightmare
                                                                    Visi Of office Life</b></small></p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="row">
                                        <div class="col-12">
                                            <div class="row d-flex align-items-center">
                                                <div class="col-md-4">
                                                    <img src="../../assets/rocker/images/news/img_14.jpg"
                                                        alt="..." class="img-thumbnail">
                                                </div>
                                                <div class="col-md-8 ">
                                                    <div class="card-body">
                                                        <small class="text-muted">Sports</small>
                                                        <p class="card-text"><small
                                                                class="text-muted"><b>Severance Nightmare
                                                                    Visi Of office Life</b></small></p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="row">
                                        <div class="col-12">
                                            <div class="row d-flex align-items-center">
                                                <div class="col-md-4">
                                                    <img src="../../assets/rocker/images/news/img_12.jpg"
                                                        alt="..." class="img-thumbnail">
                                                </div>
                                                <div class="col-md-8 ">
                                                    <div class="card-body">
                                                        <small class="text-muted">Sports</small>
                                                        <p class="card-text"><small
                                                                class="text-muted"><b>Severance Nightmare
                                                                    Visi Of office Life</b></small></p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="row">
                                        <div class="col-12">
                                            <div class="row d-flex align-items-center">
                                                <div class="col-md-4">
                                                    <img src="../../assets/rocker/images/news/img_13.jpg"
                                                        alt="..." class="img-thumbnail">
                                                </div>
                                                <div class="col-md-8 ">
                                                    <div class="card-body">
                                                        <small class="text-muted">Sports</small>
                                                        <p class="card-text"><small
                                                                class="text-muted"><b>Severance Nightmare
                                                                    Visi Of office Life</b></small></p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
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
export default {
    
}
</script>
<style lang="">
    
</style>