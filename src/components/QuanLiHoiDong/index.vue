<template>
<div class="row">
    <div class="col-10"></div>
    <div class="col-2 text-end">
        <button class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleThemMoi">Thêm Mới</button>
    </div>
</div>
<!-- Modal -->
<div class="modal fade" id="exampleThemMoi" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog ">
        <div class="modal-content">
            <div class="modal-header">
                <h1 class="modal-title fs-5" id="exampleModalLabel">Thêm Mới Hội Đồng</h1>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
                <div class="card-body">
                    <label for="">Khóa</label>
                    <select name="" id="" class="form-control">
                        <option value="">K26-1</option>
                        <option value="">K26-2</option>
                        <option value="">K27-1</option>

                    </select>
                    <label for="">Tên Hội Đồng</label>
                    <input type="text" class="form-control" placeholder="nhập tên hội đồng">
                    <label for="">Tên Chủ Tịch</label>
                    <select name="" id="" class="form-control">
                        <option value="">Lê Minh Thái</option>
                        <option value="">Nguyễn Đức Mận</option>
                        <option value="">Thầy Giáo Tí Hon</option>
                        <option value="">Thầy Huấn</option>
                    </select>
                    <label for="">Tên Thư Ký</label>
                    <select name="" id="" class="form-control">
                        <option value="">Lê Minh Thái</option>
                        <option value="">Nguyễn Đức Mận</option>
                        <option value="">Thầy Giáo Tí Hon</option>
                        <option value="">Thầy Huấn</option>
                    </select>
                    <label for="">Tên Ủy Viên</label>
                    <select name="" id="" class="form-control">
                        <option value="">Lê Minh Thái</option>
                        <option value="">Nguyễn Đức Mận</option>
                        <option value="">Thầy Giáo Tí Hon</option>
                        <option value="">Thầy Huấn</option>
                    </select>
                    <label for="">Thành Viên Hội Đồng</label>
                    <textarea name="" id="" cols="30" rows="5" class="form-control" placeholder="nhập thành viên hội đồng">

               </textarea>
                </div>
            </div>
            <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Đóng</button>
                <button type="button" class="btn btn-primary">Thêm</button>
            </div>
        </div>
    </div>
</div>
<div class="row">
    <div class="card">
        <div class="card-body">
        <ul class="nav nav-tabs nav-primary mb-0" role="tablist">
            <li class="nav-item" role="presentation">
                <a class="nav-link active" data-bs-toggle="tab" href="#primaryhome" role="tab" aria-selected="true">
                    <div class="d-flex align-items-center">
                        <div class="tab-icon"><i class="bx bx-comment-detail font-18 me-1"></i>
                        </div>
                        <div class="tab-title"> Danh Sách Hội Đồng </div>
                    </div>
                </a>
            </li>
            <li class="nav-item" role="presentation">
                <a class="nav-link" data-bs-toggle="tab" href="#primaryprofile" role="tab" aria-selected="false" tabindex="-1">
                    <div class="d-flex align-items-center">
                        <div class="tab-icon"><i class="bx bx-bookmark-alt font-18 me-1"></i>
                        </div>
                        <div class="tab-title">Danh Sách Hội Đồng Khi Phân Công</div>
                    </div>
                </a>
            </li>
          
        </ul>
        <div class="tab-content pt-3">
            <div class="tab-pane fade show active" id="primaryhome" role="tabpanel">
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
                                            <th>Thao tác</th>
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
                                            <td class="text-between">
                                                <button style="margin-right: 10px;" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">Phân Công</button>
                                                <button style="margin-right: 10px;" class="btn btn-info ">Sửa</button>
                                                <button class="btn btn-danger">Xóa</button>
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
            <div class="tab-pane fade" id="primaryprofile" role="tabpanel">
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
                                                <th>Action</th>
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
                                                <td>
                                                    <button style="margin-right: 10px;" class="btn btn-info" data-bs-toggle="modal" data-bs-target="#staticSua">Sửa</button>
                                                    <button class="btn btn-danger" data-bs-toggle="modal" data-bs-target="#staticXoa">Xóa</button>
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
                                    <!-- ------------- -->
                                    <!-- Modal -->
                                    <div class="modal fade" id="staticSua" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                                        <div class="modal-dialog">
                                            <div class="modal-content">
                                                <div class="modal-header">
                                                    <h1 class="modal-title fs-5" id="staticSua">Cập Nhật</h1>
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
                                                    <button type="button" class="btn btn-primary">Lưu</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <!-- -------------- -->
                                    <!-- Modal -->
                                    <div class="modal fade" id="staticXoa" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                                        <div class="modal-dialog">
                                            <div class="modal-content">
                                                <div class="modal-header">
                                                    <h1 class="modal-title fs-5" id="staticXoa">Xóa</h1>
                                                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                                </div>
                                                <div class="modal-body">
                                                    Bạn Chắc Chắn Xóa
                                                </div>
                                                <div class="modal-footer">
                                                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Đóng</button>
                                                    <button type="button" class="btn btn-primary">Xác Nhận</button>
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
