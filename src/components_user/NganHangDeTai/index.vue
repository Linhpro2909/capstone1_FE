<template>
<div class="row">
    <div class="col-10"></div>
    <div class="col-2 text-end">
        <button class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
            Đăng Kí Đề Tài
        </button>
    </div>
</div>

<!-- Modal -->
<div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog">
        <div class="modal-content">
            <div class="modal-header">
                <h1 class="modal-title fs-5" id="exampleModalLabel">Thêm Mới Đề Tài</h1>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
                <div class="card">
                    <label for="">Tên Người Đăng Kí</label>
                    <input type="text" class="form-control" placeholder="Nhập tên sinh viên">
                    <label for="">Tên đề tài</label>
                    <input type="text" class="form-control" placeholder="Nhập tên đề tài">
                    <label for="">Mô tả</label>
                    <textarea name="" id="" cols="30" rows="5" class="form-control">
               </textarea>
                    <label for="">Ngôn Ngữ Lập Trình</label>
                    <textarea name="" id="" cols="30" rows="5" class="form-control" placeholder="ghi rõ ngôn ngữ lập trình...">
               </textarea>
                </div>
            </div>
            <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Đóng</button>
                <button type="button" class="btn btn-primary">Thêm Mơi</button>
            </div>
        </div>
    </div>
</div>
<div class="row">
    <div class="col">

        <div class="card">
            <div class="card-body">
                <ul class="nav nav-pills mb-3" role="tablist">
                    <li class="nav-item" role="presentation">
                        <a class="nav-link" data-bs-toggle="pill" href="#primary-pills-home" role="tab" aria-selected="false" tabindex="-1">
                            <div class="d-flex align-items-center">
                                <div class="tab-icon"><i class="bx bx-home font-18 me-1"></i>
                                </div>
                                <div class="tab-title">Đề Tài Đăng Kí</div>
                            </div>
                        </a>
                    </li>
                    <li class="nav-item" role="presentation">
                        <a class="nav-link" data-bs-toggle="pill" href="#primary-pills-profile" role="tab" aria-selected="false" tabindex="-1">
                            <div class="d-flex align-items-center">
                                <div class="tab-icon"><i class="bx bx-user-pin font-18 me-1"></i>
                                </div>
                                <div class="tab-title">Ngân Hàng Đề Tài</div>
                            </div>
                        </a>
                    </li>
                    <!-- <li class="nav-item" role="presentation">
                        <a class="nav-link active" data-bs-toggle="pill" href="#primary-pills-contact" role="tab" aria-selected="true">
                            <div class="d-flex align-items-center">
                                <div class="tab-icon"><i class="bx bx-microphone font-18 me-1"></i>
                                </div>
                                <div class="tab-title">Contact</div>
                            </div>
                        </a>
                    </li> -->
                </ul>
                <div class="tab-content" id="pills-tabContent">
                    <div class="tab-pane fade" id="primary-pills-home" role="tabpanel">
                        <div class="col-12">
                            <div class="card">

                                <div class="card-body">
                                    <table class="table table-bordered">
                                        <thead>
                                            <tr class="text-center align-middle text-center">
                                                <th>#</th>
                                                <th>Tên Đề Tài</th>
                                                <th>Mô tả</th>
                                                <th>Trang thái</th>

                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr class="align-middle text-center">
                                                <th class="text-center">1</th>
                                                <td>Quản lí đồ án tốt nghiệp</td>
                                                <td>Làm chớ chưa biết được không nghe</td>
                                                <td>Đã duyệt</td>

                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="tab-pane fade" id="primary-pills-profile" role="tabpanel">
                        <div class="row">
        <div class="col-12">
            <div class="card">
                <div class="card-header">
                    <div class="d-flex">
                        <h5 class="p-2 w-100 mt-1 text-primary">Ngân hàng đề tài</h5>

                    </div>
                </div>
                <div class="card-body">
                    <table class="table table-bordered">
                        <thead>
                            <tr class="text-center align-middle text-center">
                                <th>#</th>
                                <th>Tên Đề Tài</th>
                                <th>Mô tả</th>

                            </tr>
                        </thead>
                        <tbody>
                            <tr class="align-middle text-center">
                                <th class="text-center">1</th>
                                <td>Quản lí đồ án tốt nghiệp</td>
                                <td>Làm chớ chưa biết được không nghe</td>

                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </div>
                    </div>
                    <!-- <div class="tab-pane fade active show" id="primary-pills-contact" role="tabpanel">
                        <p>Etsy mixtape wayfarers, ethical wes anderson tofu before they sold out mcsweeney's organic lomo retro fanny pack lo-fi farm-to-table readymade. Messenger bag gentrify pitchfork tattooed craft beer, iphone skateboard locavore carles etsy salvia banksy hoodie helvetica. DIY synth PBR banksy irony. Leggings gentrify squid 8-bit cred pitchfork. Williamsburg banh mi whatever gluten-free, carles pitchfork biodiesel fixie etsy retro mlkshk vice blog. Scenester cred you probably haven't heard of them, vinyl craft beer blog stumptown. Pitchfork sustainable tofu synth chambray yr.</p>
                    </div> -->
                </div>
            </div>
        </div>
    </div>
</div>
<div class="container" style="margin-top:-30px;">
    <div class="row ">
        <div class="modal fade" id="xoamodal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <h1 class="modal-title fs-5" id="exampleModalLabel">Xóa Đề Tài
                        </h1>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                        <div class="alert alert-warning border-0 bg-warning alert-dismissible fade show py-2">
                            <div class="d-flex align-items-center">
                                <div class="font-35 text-dark"><i class='bx bx-info-circle'></i>
                                </div>
                                <div class="ms-3 text-wrap">
                                    <h6 class="mb-0 text-dark">Warning</h6>
                                    Bạn chắc chắn muốn xóa <b class="text-danger"></b> khỏi
                                    danh sách?
                                </div>
                            </div>
                        </div>

                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Đóng</button>
                        <button type="button" class="btn btn-danger" data-bs-dismiss="modal">Xác Nhận</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
   
</div>
</template>

<script>
export default {

}
</script>

<style lang="">

</style>
