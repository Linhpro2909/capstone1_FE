<template >
<div class="container-fluid">
    <div class="row">
        <h4>Quản Lí Tài Khoản</h4>
    </div>
    <div class="row">
        <div class="col-10"></div>
        <div class="row-2 text-end">
            <button class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleThemMoi">Thêm Mới</button>
        </div>
    </div>
    <div class="modal fade" id="exampleThemMoi" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <h1 class="modal-title fs-5" id="exampleThemMoi">Thêm Mới Tài Khoản</h1>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <div class="card">

                        <div class="card-body">
                            <div class="card-body">
                    <label for="">Tên Sinh Viên</label>
                    <input v-model="tai_khoan_add.email" type="email" class="form-control" placeholder="nhập tên sinh viên">           
                    <label for="">Email</label>
                    <input v-model="tai_khoan_add.email" type="email" class="form-control" placeholder="nhập email">
                    <label for="">Password</label>
                    <input v-model="tai_khoan_add.password" type="text" class="form-control" placeholder="nhập password">
                </div>

                        </div>

                    </div>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Đóng</button>
                    <button type="button" class="btn btn-outline-success">Thêm</button>
                </div>
            </div>
        </div>
    </div>
    <div class="row mt-2">
        <div class="col-12">
            <div class="card">
                <div class="card-header">
                    <h5 class="text-primary">Danh Sách Tài Khoản</h5>
                </div>
                <div class="card-body">
                    <table class="table table-bordered">
                        <thead class="text-center">
                            <tr>
                                <th>#</th>
                                <th>Tên Sinh Viên</th>
                                <th>Email</th>
                                <th>Password</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody class="text-center">
                            <tr>
                                <td>
                                    1
                                </td>
                                <td>Lương Trọng Linh</td>
                                <td>Tronglinhluong@gmail.com</td>
                                <td>tronglinh11</td>
                                <td>
                                    <button @:click="tai_khoan_update=Object.assign({},v)" style="margin-right: 10px;" class="btn btn-warning" data-bs-toggle="modal" data-bs-target="#exampleSua">Sửa</button>
                                    <button @:click="tai_khoan_delete=Object.assign({},v)" class="btn btn-danger" data-bs-toggle="modal" data-bs-target="#exampleXoa">Xóa</button> 
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
                                        <label for="">Tên Sinh Viên</label>
                                        <input v-model="tai_khoan_update.email" type="text" class="form-control" placeholder="nhập tên sinh viên">
                                        <label for="">Email</label>
                                        <input v-model="tai_khoan_update.email" type="email" class="form-control" placeholder="nhập email">
                                        <label for="">Password</label>
                                        <input v-model="tai_khoan_update.password" type="text" class="form-control" placeholder="nhập password">
                                    </div>
                                </div>
                                <div class="modal-footer">
                                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Đóng</button>
                                    <button v-on:click="capNhat()" type="button" class="btn btn-primary" data-bs-dismiss="modal">Lưu</button>
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
                                        Bạn Có Chắc Chắn Muốn Xóa Tài Khoản
                                        <p class="text-danger">{{ tai_khoan_delete.email }}</p>
                                    </div>
                                </div>
                                <div class="modal-footer">
                                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Đóng</button>
                                    <button v-on:click="xoa()" type="button" class="btn btn-primary" data-bs-dismiss="modal">Xác Nhận</button>
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
import Toaster from '@meforma/vue-toaster';
import baseRequest from '../../core/baseRequest';
import functionBasic from '../../core/functionBasic';
export default {
    data() {
        return {
            list_tai_khoan: [ 
                {
                    'email':'',
                    'password':'',
                }
            ],
            tai_khoan_add: {},
            tai_khoan_update: {},
            tai_khoan_delete:{},
        }
    },
    mounted() {
        this.load()
    },
    methods: {
        them_moi() {
            baseRequest
                .post("tai-khoan/create", this.tai_khoan_add)
                .then((res) => {
                    functionBasic.displaySuccess(res);
                    this.load();

                });
        },

        load() {
            baseRequest
                .get("tai-khoan/data")
                .then((res) => {
                    this.list_tai_khoan = res.data.data;
                });
        },
        capNhat() {

            baseRequest
                .post("tai-khoan/update", this.tai_khoan_update)
                .then((res) => {
                    functionBasic.displaySuccess(res);
                    this.load();
                });
        },
        xoa() {

            baseRequest
                .post("tai-khoan/delete", this.tai_khoan_delete)
                .then((res) => {
                    functionBasic.displaySuccess(res);
                    this.load();
                });
        },
    },
}
</script>

<style lang="">

</style>
