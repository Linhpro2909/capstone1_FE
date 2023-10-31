<template lang="">
<div class="row ">
    <div class="col-4">
        <h4 class="text-danger">Quản Lí Khoa</h4>
    </div>
</div>
<div class="row">
    <div class="col-4">
        <div class="card">
            <div class="card-header">
                Thêm Mới Khoa
            </div>
            <div class="card-body">
                <label for="">Tên Khoa</label>
                <input v-on:keyup.enter="them_moi()" v-model="khoa_dao_tao_add.ten_khoa_dao_tao" type="text" class="form-control">
                <label for="">Mã Khoa</label>
                <input v-on:keyup.enter="them_moi()" v-model="khoa_dao_tao_add.ma_khoa" type="text" class="form-control">
                <label for="">Mô Tả</label>
                <input v-on:keyup.enter="them_moi()" v-model="khoa_dao_tao_add.mo_ta" type="text" class="form-control">

            </div>
            <div class="card-footer text-end">
                <button v-on:click="them_moi()" class="btn btn-outline-success">Tạo</button>
            </div>
        </div>
    </div>
    <div class="col-8">
        <div class="card">
            <div class="card-header">
                <h5 class="text-danger">
                    Danh Sách Khoa
                </h5>
            </div>
            <div class="card-body">
                <div class="row mb-2">
                    <div class="col-2">
                        <button class="btn btn-outline-danger" data-bs-toggle="modal" data-bs-target="#exampleWarningModal">
                            <i class="fa-solid fa-trash-can"></i>Xoá
                        </button>
                    </div>
                    <div class="col-6">
                        <div class="input-group mb-3">
                            <input type="text" class="form-control" placeholder="nhập tên khoa cần tìm" aria-label="Recipient's username" aria-describedby="button-addon2">
                            <button class="btn btn-outline-secondary" type="button" id="button-addon2">Tìm</button>
                        </div>
                    </div>

                </div>
                <!-- ---------- -->
                <div class="modal fade" id="exampleWarningModal" tabindex="-1" aria-hidden="true" style="display: none;">
                    <div class="modal-dialog  modal-dialog-centered">
                        <div class="modal-content bg-warning">
                            <div class="modal-header border-dark">
                                <h5 class="modal-title text-dark">Xóa Khóa</h5>
                                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div class="modal-body text-dark">
                                <p>Bạn Có Chắc Muốn Xóa Ngành Này Không</p>
                            </div>
                            <div class="modal-footer border-dark">
                                <button type="button" class="btn btn-light" data-bs-dismiss="modal">Đóng</button>
                                <button type="button" class="btn btn-dark">Xác Nhận</button>
                            </div>
                        </div>
                    </div>
                </div>
                <table class="table table-bordered">
                    <thead>
                        <tr>
                            <th><input type="checkbox" class="form-check-input" id="exampleCheck1"></th>
                            <th>Thao Tác</th>
                            <th>#</th>
                            <th>Tên Ngành</th>
                            <th>Mã Ngành</th>

                            <th>Mô Tả</th>

                        </tr>
                    </thead>

                    <tbody>

                        <tr>
                            <td><input type="checkbox" class="form-check-input" id="exampleCheck1"></td>
                            <td>
                                <button style="margin-right: 10px;" class="btn btn-outline-info" data-bs-toggle="modal" data-bs-target="#exampleSua">Sửa</button>

                                <router-link to="/quan-li-lop">
                                    <button class="btn btn-outline-dark"> Danh sách lớp</button>
                                </router-link>
                            </td>
                            <td>1</td>
                            <td>Công Nghệ Phần Mềm </td>
                            <td>CMU-TPM</td>

                            <td>là chương trình tiên tiến</td>

                        </tr>
                        <tr>
                            <td><input type="checkbox" class="form-check-input" id="exampleCheck1"></td>
                            <td>
                                <button style="margin-right: 10px;" class="btn btn-outline-info">Sửa</button>

                                <router-link to="/quan-li-lop">
                                    <button class="btn btn-outline-dark"> Danh sách lớp</button>
                                </router-link>
                            </td>
                            <td>2</td>
                            <td>An Toàn Thông Tin </td>
                            <td>CMU-ATTT</td>

                            <td>là chương trình tiên tiến</td>

                        </tr>
                        <tr>
                            <td><input type="checkbox" class="form-check-input" id="exampleCheck1"></td>
                            <td>
                                <button style="margin-right: 10px;" class="btn btn-outline-info">Sửa</button>

                                <router-link to="/quan-li-lop">
                                    <button class="btn btn-outline-dark"> Danh sách lớp</button>
                                </router-link>
                            </td>
                            <td>3</td>
                            <td>Hệ Thống Thông Tin</td>
                            <td>CMU-HTTT</td>

                            <td>là chương trình tiên tiến</td>

                        </tr>
                        <tr>
                            <td><input type="checkbox" class="form-check-input" id="exampleCheck1"></td>
                            <td>
                                <button style="margin-right: 10px;" class="btn btn-outline-info">Sửa</button>

                                <router-link to="/quan-li-lop">
                                    <button class="btn btn-outline-dark"> Danh sách lớp</button>
                                </router-link>
                            </td>
                            <td>1</td>
                            <td>Công Nghệ Phần Mềm </td>
                            <td>CMU-TPM</td>

                            <td>là chương trình tiên tiến</td>

                        </tr>

                    </tbody>

                </table>
                <!-- ------------ -->
                <!-- Modal -->
                <div class="modal fade" id="exampleSua" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div class="modal-dialog">
                        <div class="modal-content">
                            <div class="modal-header">
                                <h1 class="modal-title fs-5" id="exampleSua">Cập Nhật</h1>
                                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div class="modal-body">
                                <h5>Cập Nhật Tại Đây</h5>
                            </div>
                            <div class="modal-footer">
                                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Đóng</button>
                                <button type="button" class="btn btn-primary">Cập Nhật</button>
                            </div>
                        </div>
                    </div>
                </div>
                <!-- Modal -->
                <div class="modal fade" id="exampleSua" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div class="modal-dialog">
                        <div class="modal-content">
                            <div class="modal-header">
                                <h1 class="modal-title fs-5" id="exampleSua">Cập Nhật</h1>
                                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div class="modal-body">
                                <h5>Cập Nhật Tại Đây</h5>
                            </div>
                            <div class="modal-footer">
                                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Đóng</button>
                                <button type="button" class="btn btn-primary">Cập Nhật</button>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="modal fade" id="exampleVerticallycenteredModal" tabindex="-1" aria-hidden="true" style="display: none;">
                    <div class="modal-dialog modal-dialog-centered">
                        <div class="modal-content">
                            <div class="modal-header">
                                <h5 class="modal-title">Sửa</h5>
                                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div class="modal-body">
                                <label for="">Tên Khóa</label>
                                <input type="text" class="form-control">
                                <label for="">Thời Gian Bắt Đầu</label>
                                <input type="datetime-local" class="form-control">
                                <label for="">Thời Gian Kết Thúc</label>
                                <input type="datetime-local" class="form-control">
                            </div>
                            <div class="modal-footer">
                                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Đóng</button>
                                <button type="button" class="btn btn-primary" data-bs-dismiss="modal">Lưu thay đổi</button>
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
export default {
    data() {
        return {
            list_khoa_dao_tao: [],
            khoa_dao_tao_add: {},

        }
    },
    mounted() {
        this.load();
    },
    methods: {
        them_moi() {
            baseRequest
                .post("khoa-dao-tao/create", this.khoa_dao_tao_add)
                .then((res) => {
                    functionBasic.displaySuccess(res)
                    this.load();
                })
        },
        load() {
            baseRequest
                .get("khoa-dao-tao/data")
                .then((res) => {
                    this.list_khoa_dao_tao = res.data.data;
                });
        },

    }
}
</script>

<style >

</style>
