<template>
<div class="container-fluid " style="margin-top:-30px;">

    <div class="card-body">
        <div class="card">
            <div style="background-color: aquamarine;" class="card-header ">
                <div class="row">
                    <div class="col-9">
                        <h5 style="margin-top:10px;">Nhóm đồ án</h5>
                    </div>
                    <div class="col-3">
                        <div class="text-end">

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
                            <!-- <th>Nhật Kí</th>
                                <th>Tài Liệu</th> -->
                            <th>Điểm mentor</th>
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
                            <!-- <td>
                                    <i class="fa-solid fa-book fa-2xl" data-bs-toggle="modal" data-bs-target="#exampleModal" style="color: #5020d5;"></i>
                                </td>
                                <td>
                                    <a href="">link</a>
                                </td> -->
                            <td>
                                <ul>
                                    <li>
                                        10
                                    </li>
                                    <li>
                                        10
                                    </li>
                                    <li>
                                        10
                                    </li>
                                    <li>
                                        10
                                    </li>
                                </ul>
                            </td>
                            <td>
                                <button class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModalChoDiem" style="margin-right:10px;">Cho Điểm</button>
                                <button class="btn btn-warning" data-bs-toggle="modal" data-bs-target="#exampleModalSua">Sửa</button>
                            </td>
                        </tr>
                    </tbody>

                </table>
                <!-- Modal -->
                <!-- Modal -->
                <div class="modal fade" id="exampleModalChoDiem" tabindex="-1" aria-labelledby="exampleModalChoDiem" aria-hidden="true">
                    <div class="modal-dialog">
                        <div class="modal-content">
                            <div class="modal-header">
                                <h5 class="modal-title" id="exampleModalChoDiem">Cho điểm</h5>
                                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div class="modal-body">
                                <div class="row mt-2">
                                    <div class="col-6">
                                        <label for="">Lương Trọng Linh</label>
                                    </div>
                                    <div class="col-4">
                                        <input type="float" style="width:100%;">
                                    </div>
                                </div>
                                <div class="row mt-2">
                                    <div class="col-6">
                                        <label for="">Lương Trọng Linh</label>
                                    </div>
                                    <div class="col-4">
                                        <input type="float" style="width:100%;">
                                    </div>
                                </div>
                                <div class="row mt-2">
                                    <div class="col-6">
                                        <label for="">Lương Trọng Linh</label>
                                    </div>
                                    <div class="col-4">
                                        <input type="float" style="width:100%;">
                                    </div>
                                </div>
                                <div class="row mt-2">
                                    <div class="col-6">
                                        <label for="">Lương Trọng Linh</label>
                                    </div>
                                    <div class="col-4">
                                        <input type="float" style="width:100%;">
                                    </div>
                                </div>
                            </div>
                            <div class="modal-footer">
                                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Đóng</button>
                                <button type="button" class="btn btn-primary" data-bs-dismiss="modal">Lưu</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="modal fade" id="exampleModalSua" tabindex="-1" aria-labelledby="exampleModalSua" aria-hidden="true">
                    <div class="modal-dialog">
                        <div class="modal-content">
                            <div class="modal-header">
                                <h5 class="modal-title" id="exampleModalSua">Sửa điểm</h5>
                                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div class="modal-body">
                                <div class="row mt-2">
                                    <div class="col-6">
                                        <label for="">Lương Trọng Linh</label>
                                    </div>
                                    <div class="col-4">
                                        <input type="float" style="width:100%;">
                                    </div>
                                </div>
                                <div class="row mt-2">
                                    <div class="col-6">
                                        <label for="">Lương Trọng Linh</label>
                                    </div>
                                    <div class="col-4">
                                        <input type="float" style="width:100%;">
                                    </div>
                                </div>
                                <div class="row mt-2">
                                    <div class="col-6">
                                        <label for="">Lương Trọng Linh</label>
                                    </div>
                                    <div class="col-4">
                                        <input type="float" style="width:100%;">
                                    </div>
                                </div>
                                <div class="row mt-2">
                                    <div class="col-6">
                                        <label for="">Lương Trọng Linh</label>
                                    </div>
                                    <div class="col-4">
                                        <input type="float" style="width:100%;">
                                    </div>
                                </div>
                            </div>
                            <div class="modal-footer">
                                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Đóng</button>
                                <button type="button" class="btn btn-primary" data-bs-dismiss="modal">Lưu</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="card">
        <div class="card-body">
            <ul class="nav nav-tabs nav-primary mb-0" role="tablist">
                <li class="nav-item" role="presentation">
                    <a class="nav-link active" data-bs-toggle="tab" href="#primaryhome" role="tab" aria-selected="true">
                        <div class="d-flex align-items-center">
                            <div class="tab-icon"><i class="bx bx-comment-detail font-18 me-1"></i>
                            </div>
                            <div class="tab-title"> Nhật ký </div>
                        </div>
                    </a>
                </li>
                <li class="nav-item" role="presentation">
                    <a class="nav-link" data-bs-toggle="tab" href="#primaryprofile" role="tab" aria-selected="false" tabindex="-1">
                        <div class="d-flex align-items-center">
                            <div class="tab-icon"><i class="bx bx-bookmark-alt font-18 me-1"></i>
                            </div>
                            <div class="tab-title">Tài liệu</div>
                        </div>
                    </a>
                </li>
                <li class="nav-item" role="presentation">
                    <a class="nav-link" data-bs-toggle="tab" href="#primaryprofile1" role="tab" aria-selected="false" tabindex="-1">
                        <div class="d-flex align-items-center">
                            <div class="tab-icon"><i class="bx bx-bookmark-alt font-18 me-1"></i>
                            </div>
                            <div class="tab-title">Hội đồng</div>
                        </div>
                    </a>
                </li>

            </ul>
            <div class="tab-content pt-3">
                <div class="tab-pane fade show active" id="primaryhome" role="tabpanel">
                    <div class="row">

                        <div class="col-12">
                            <div class="card">
                                <table class="table table-bordered">
                                    <thead>
                                        <tr class="text-center align-middle text-center">
                                            <th>#</th>
                                            <th>Tên nhật ký</th>
                                            <th>Date</th>
                                            <th>Mô tả</th>

                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr class="align-middle text-center">
                                            <th class="text-center">1</th>
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
                <div class="tab-pane fade" id="primaryprofile" role="tabpanel">
                    <div class="container" style="width:100%;">

                        <div class="col-12">
                            <div class="card">
                                <table class="table table-bordered">
                                    <thead>
                                        <tr class="text-center align-middle text-center">
                                            <th>#</th>
                                            <th>Tên file</th>
                                            <th>File tài liệu</th>

                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr class="align-middle text-center">
                                            <th>1</th>
                                            <td>xxxx</td>
                                            <td>434</td>

                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="tab-pane fade" id="primaryprofile1" role="tabpanel">
                    <div class="row">

                        <div class="col-12">
                            <div class="card">
                                <div class="card-header">
                                    <h4 class="text-danger">Danh Sách Hội Đồng</h4>
                                </div>
                                <div class="card-body">
                                    <div class="card-body">
                                        <table class="table table-bordered text-center">
                                            <thead>
                                                <tr>
                                                    <th>#</th>
                                                    <th>Tên hội đồng</th>
                                                    <th>Chủ tịch</th>
                                                    <th>Thư ký</th>
                                                    <th>Ủy viên</th>
                                                    <th>Thành Viên Hội Đồng</th>
                                                    <th>Nhóm phản biện</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td>1</td>
                                                    <td>Hội đồng 1</td>
                                                    <td>Nguyễn Văn A</td>
                                                    <td>Nguyễn Văn B</td>
                                                    <td>Nguyễn Văn C</td>
                                                    <td>
                                                        <ul>
                                                            <li>
                                                                Nguyễn Văn A
                                                            </li>
                                                            <li>
                                                                Nguyễn Văn B
                                                            </li>
                                                            <li>
                                                                Nguyễn Văn C
                                                            </li>
                                                        </ul>
                                                    </td>
                                                    <td>
                                                        <ul>
                                                            <li>
                                                                1
                                                            </li>
                                                            <li>
                                                                2
                                                            </li>
                                                            <li>
                                                                3
                                                            </li>
                                                        </ul>
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                        <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                            <div class="modal-dialog">
                                                <div class="modal-content">
                                                    <div class="modal-header">
                                                        <h1 class="modal-title fs-5" id="exampleModalLabel">Chia Hội Đồng Vào Nhóm</h1>
                                                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                                    </div>
                                                    <div class="modal-body">
                                                        <div class="col-sm-6">

                                                            <div class="form-group">
                                                                <div class="form-check">
                                                                    <input class="form-check-input" type="checkbox">
                                                                    <label class="form-check-label">CSE_18</label>
                                                                </div>
                                                                <div class="form-check">
                                                                    <input class="form-check-input" type="checkbox">
                                                                    <label class="form-check-label">CSE17</label>
                                                                </div>
                                                                <div class="form-check">
                                                                    <input class="form-check-input" type="checkbox">
                                                                    <label class="form-check-label">CSE_19</label>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="modal-footer">
                                                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Đóng</button>
                                                        <button type="button" class="btn btn-primary">Chia Vào Nhóm</button>
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
    </div>
</div>
</template>

<script>
export default {

}
</script>

<style lang="">

        </style>
