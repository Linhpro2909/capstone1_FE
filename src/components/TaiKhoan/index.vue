<template>
<div class="container-fluid">
    <div class="row">
        <h4>Quản Lí Tài Khoản</h4>
    </div>
    <div class="row">
        <div class="col-4">
            <div class="card">
                <div class="card-header">
                    <h5 class="text-primary">Tạo Tài Khoản</h5>
                </div>
                <div class="card-body">
                    <label for="">Email</label>
                    <input type="email" class="form-control" placeholder="nhập email">
                    <label for="">Password</label>
                    <input type="text" class="form-control" placeholder="nhập password">
                </div>
                <div class="card-footer text-end">
                    <button class="btn btn-primary">Tạo</button>
                </div>
            </div>
        </div>
        <div class="col-8">
            <div class="card">
                <div class="card-header">
                    <h5 class="text-primary">Danh Sách Tài Khoản</h5>
                </div>
                <div class="card-body">
                    <table class="table table-bordered">
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Email</th>
                                <th>Password</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>1</td>
                                <td>tronlinhluong@gmail.com</td>
                                <td>tronglinh290902</td>
                                <td>
                                    <button style="margin-right: 10px;" class="btn btn-warning" data-bs-toggle="modal" data-bs-target="#exampleSua">Sửa</button>
                                    <button class="btn btn-danger" data-bs-toggle="modal" data-bs-target="#exampleXoa" >Xóa</button>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                    <!-- Modal -->
                    <div class="modal fade" id="exampleSua" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                        <div class="modal-dialog">
                            <div class="modal-content">
                                <div class="modal-header">
                                    <h1 class="modal-title fs-5" id="exampleSua">Cập Nhật Tài Khoản</h1>
                                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                </div>
                                <div class="modal-body">
                                    <div class="card-body">
                                        <label for="">Email</label>
                                        <input type="email" class="form-control" placeholder="nhập email">
                                        <label for="">Password</label>
                                        <input type="text" class="form-control" placeholder="nhập password">
                                    </div>
                                </div>
                                <div class="modal-footer">
                                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Đóng</button>
                                    <button type="button" class="btn btn-primary">Lưu</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <!-- ------------ -->
                    <div class="modal fade" id="exampleXoa" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                        <div class="modal-dialog">
                            <div class="modal-content">
                                <div class="modal-header">
                                    <h1 class="modal-title fs-5" id="exampleXoa">Xóa Tài Khoản</h1>
                                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                </div>
                                <div class="modal-body">
                                    <div class="card-body">
                                       Bạn Có Chắc Chắn Muốn Xóa
                                    </div>
                                </div>
                                <div class="modal-footer">
                                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Đóng</button>
                                    <button type="button" class="btn btn-primary">Xác Nhận</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="card-footer">

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
