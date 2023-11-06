<template>
<div class="container " style="margin-top:-30px;">

    <!-- --------------------- -->
    <div class="card-body">
        <div class="card">
            <div style="background-color: aquamarine;" class="card-header ">
                <div class="row">
                    <div class="col-9">
                        <h5 style="margin-top:10px;">Nhóm đồ án</h5>
                    </div>
                    <div class="col-3">
                        <div class="text-end">
                            <router-link to="/chia-nhom">

                                <button class="btn btn-outline-dark mt-1" style="margin-right:10px;"> Đăng Kí Nhóm</button>

                            </router-link>
                            <router-link to="/ngan-hang-de-tai">

                                <button class="btn btn-outline-dark mt-1"> Đăng ký đề tài</button>

                            </router-link>
                        </div>
                    </div>
                </div>
            </div>
            <div class="card-body ">
                <table class="table table-bordered text-center">
                    <thead>
                        <tr class="text-center align-middle">
                            <th>#</th>
                            <th>Nhóm</th>
                            <th>Tên Thành Viên</th>
                            <th>Tên Mentor</th>
                            <th>Đề Tài</th>
                            <th>Hội Đồng</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody class="align-middle">
                        <tr>
                            <td>
                                1
                            </td>
                            <td>CSE18</td>
                            <td>
                                <ul>
                                    <li>
                                        Lương Trọng Linh
                                    </li>
                                    <li>
                                        Thọ
                                    </li>
                                    <li>
                                        Trí
                                    </li>
                                    <li>
                                        Diễm
                                    </li>
                                </ul>
                            </td>

                            <td>Lê Minh Thái</td>
                            <td>
                                Quản lí đồ án tốt nghiệp
                            </td>
                            <td>1</td>

                            <td>
                                <button class="btn btn-info" data-bs-toggle="modal" data-bs-target="#exampleChiTiet">Chi Tiết</button>
                            </td>
                        </tr>
                    </tbody>
                </table>
                <!-- Modal -->
                <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div class="modal-dialog">
                        <div class="modal-content">
                            <div class="modal-header">
                                <h1 class="modal-title fs-5" id="exampleModalLabel">Nhật kí</h1>
                                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div class="modal-body">
                                <table class="table table-bordered">
                                    <tbody>
                                        <thead>
                                            <tr>
                                                <th>Ngày</th>
                                                <th>Mô tả</th>
                                            </tr>
                                        </thead>
                                    <tbody>
                                        <tr>
                                            <td>10/10/2023</td>
                                            <td>nộp propasla</td>
                                        </tr>
                                    </tbody>
                                    </tbody>
                                </table>
                            </div>
                            <div class="modal-footer">
                                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Đóng</button>

                            </div>
                        </div>
                    </div>
                </div>
                <!-- Modal -->
                <div class="modal fade" id="exampleChiTiet" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div class="modal-dialog modal-xl">
                        <div class="modal-content">
                            <div class="modal-header">
                                <h1 class="modal-title fs-5" id="exampleModalLabel">Chi Tiết Nhóm Đồ Án</h1>
                                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div class="modal-body">
                                <div class="card">
                                    <div class="card-body">
                                        <ul class="nav nav-pills mb-3" role="tablist">
                                            <li class="nav-item" role="presentation">
                                                <a class="nav-link" data-bs-toggle="pill" href="#primary-pills-home" role="tab" aria-selected="false" tabindex="-1">
                                                    <div class="d-flex align-items-center">
                                                        <div class="tab-icon"><i class="bx bx-home font-18 me-1"></i>
                                                        </div>
                                                        <div class="tab-title">Nhật Kí</div>
                                                    </div>
                                                </a>
                                            </li>
                                            <li class="nav-item" role="presentation">
                                                <a class="nav-link" data-bs-toggle="pill" href="#primary-pills-profile" role="tab" aria-selected="false" tabindex="-1">
                                                    <div class="d-flex align-items-center">
                                                        <div class="tab-icon"><i class="bx bx-user-pin font-18 me-1"></i>
                                                        </div>
                                                        <div class="tab-title">Tài Liệu</div>
                                                    </div>
                                                </a>
                                            </li>
                                            <li class="nav-item" role="presentation">
                                                <a class="nav-link active" data-bs-toggle="pill" href="#primary-pills-contact" role="tab" aria-selected="true">
                                                    <div class="d-flex align-items-center">
                                                        <div class="tab-icon"><i class="bx bx-microphone font-18 me-1"></i>
                                                        </div>
                                                        <div class="tab-title">Điểm Đồ Án</div>
                                                    </div>
                                                </a>
                                            </li>
                                        </ul>
                                        <div class="tab-content" id="pills-tabContent">
                                            <div class="tab-pane fade" id="primary-pills-home" role="tabpanel">
                                                <div class="row">
                                                    <div class="col-4">
                                                        <div class="card">
                                                            <div class="card-header">
                                                                <h5>Tạo Nhật Ký</h5>
                                                            </div>
                                                            <div class="card-body">
                                                                <label for="">Người Tạo</label>
                                                                <input type="text" placeholder="Thành viên trong nhóm.." class="form-control">
                                                                <label for="">Tên nhật ký</label>
                                                                <input type="text" class="form-control" placeholder="Nhập tên nhật ký">
                                                                <label for="">Thời gian meeting</label>
                                                                <input type="date" class="form-control" placeholder="Nhập thời gian">
                                                                <label for="">Mô tả</label>
                                                                <input type="text" class="form-control" placeholder="nhập mô tả">
                                                            </div>
                                                            <div class="card-footer text-end">
                                                                <button class="btn btn-primary">
                                                                    Tạo
                                                                </button>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="col-8">
                                                        <div class="card">
                                                            <table class="table table-bordered">
                                                                <thead>
                                                                    <tr class="text-center align-middle text-center">
                                                                        <th>#</th>
                                                                        <th>Tên Người Tạo</th>
                                                                        <th>Tên nhật ký</th>
                                                                        <th>Date</th>
                                                                        <th>Mô tả</th>

                                                                    </tr>
                                                                </thead>
                                                                <tbody>
                                                                    <tr class="align-middle text-center">
                                                                        <th class="text-center">1</th>
                                                                        <th>Lương Trọng Linh</th>
                                                                        <td>xxxx</td>
                                                                        <td>434</td>
                                                                        <td>rrrrrr</td>

                                                                    </tr>
                                                                </tbody>
                                                            </table>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="tab-pane fade" id="primary-pills-profile" role="tabpanel">
                                                <div class="container" style="width:100%;">
                                                    <div class="col-12">

                                                        <div class="card">
                                                            <div class="card-body">
                                                                <div class="row">
                                                                    <div class="col-6">
                                                                        <label for="">Tên file</label>
                                                                        <input type="text" class='form-control'>
                                                                    </div>
                                                                    <div class="col-4" style="margin-top:25px">
                                                                        <input id="fancy-file-upload" type="file" name="files" accept=".jpg, .png, image/jpeg, image/png" multiple="" class="ff_fileupload_hidden">
                                                                        <div class="ff_fileupload_wrap">
                                                                            <div class="ff_fileupload_dropzone_wrap">
                                                                                <div class="ff_fileupload_dropzone_tools"></div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <div class="col-2" style="margin-top:20px">
                                                                        <div class="btn btn-secondary text-end" style="height:35px;">Upload file</div>

                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>

                                                    </div>
                                                    <div class="col-12">
                                                        <div class="card">
                                                            <table class="table table-bordered">
                                                                <thead>
                                                                    <tr class="text-center align-middle text-center">
                                                                        <th>#</th>
                                                                        <th>Tên file</th>
                                                                        <th>File tài liệu</th>
                                                                        <th>Action</th>

                                                                    </tr>
                                                                </thead>
                                                                <tbody>
                                                                    <tr class="align-middle text-center">
                                                                        <th>1</th>
                                                                        <td>xxxx</td>
                                                                        <td>434</td>
                                                                        <td><i class="fa-2x fa-solid fa-trash" style="color: #e30d18;"></i></td>

                                                                    </tr>
                                                                </tbody>
                                                            </table>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="tab-pane fade active show" id="primary-pills-contact" role="tabpanel">
                                                <div class="row">
                                                    <div class="col-6">
                                                        <table class="table table-bordered">
                                                            <thead>
                                                                <tr>
                                                                    <th>
                                                                        #
                                                                    </th>
                                                                    <th>Tên Thành Viên</th>
                                                                    <th>Điểm Đồ Án</th>
                                                                </tr>
                                                            </thead>
                                                            <tbody>
                                                                <tr>
                                                                    <td>1</td>
                                                                    <td>
                                                                        <ul>
                                                                            <li>linh</li>
                                                                            <li>linh</li>
                                                                            <li>linh</li>
                                                                            <li>linh</li>
                                                                        </ul>
                                                                    </td>
                                                                    <td>
                                                                        <ul>
                                                                            <li>8</li>
                                                                            <li>8</li>
                                                                            <li>8</li>
                                                                            <li>8</li>
                                                                        </ul>
                                                                    </td>
                                                                </tr>
                                                            </tbody>
                                                        </table>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="modal-footer">
                                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Đóng</button>
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
npm
export default {

}
</script>

<style lang="">

</style>
