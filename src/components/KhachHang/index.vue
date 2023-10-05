<template lang="">
     <div class="row">
        <div class="col-12 text-end mb-2">
            <button class="btn btn-outline-primary" data-bs-toggle="modal" data-bs-target="#themmoimodal">Thêm mới</button>
        </div>
        <div class="col-12">
            <div class="card">
                <div class="card-header mt-2">
                    <h4>
                        Danh Sách Khách Hàng
                    </h4>
                </div>
                <div class="card-body">
                    <table class="table table-bordered">
                        <thead>
                            <tr class="text-center align-middle">
                                <th>#</th>
                                <th>Tên khách hàng</th>
                                <th>Email</th>
                                <th>Số điện thoại</th>
                                <th>Ngày sinh</th>
                                <th>Giới tính</th>
                                <th>Ation</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr class="align-middle" v-for="(v, k) in list_tai_khoan">
                                <th class="text-center">{{ k + 1 }}</th>
                                <td>{{ v.ho_lot }} {{ v.ten_khach_hang }}</td>
                                <td>{{ v.email }}</td>
                                <td>{{ v.so_dien_thoai }}</td>
                                <td>{{ v.ngay_sinh }}</td>
                                <td class="text-center">
                                    <span v-if="v.gioi_tinh == 1">Nữ</span>
                                    <span v-if="v.gioi_tinh == 0">Nam</span>
                                    <span v-if="v.gioi_tinh == 2">Khác</span>
                                </td>
                                <td class="text-center">
                                    <button @click="tai_khoan_update = Object.assign({}, v)" class="btn btn-primary me-1"
                                        data-bs-toggle="modal" data-bs-target="#capnhatmodal">Cập nhật</button>
                                    <button @click="tai_khoan_del = v" class="btn btn-danger" data-bs-toggle="modal"
                                        data-bs-target="#xoamodal">Xóa</button>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
        <div class="modal fade" id="themmoimodal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog modal-xl">
                <div class="modal-content">
                    <div class="modal-header">
                        <h1 class="modal-title fs-5" id="exampleModalLabel">Thêm mới sản phẩm
                        </h1>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                        <div class="row">
                            <div class="col-6 mb-3">
                                <div>
                                    <label class="form-label">Họ lót</label>
                                    <input v-model="tai_khoan_add.ho_lot" type="text" class="form-control">
                                </div>
                            </div>
                            <div class="col-6 mb-3">
                                <div>
                                    <label class="form-label">Tên</label>
                                    <input v-model="tai_khoan_add.ten_khach_hang" type="text" class="form-control">
                                </div>
                            </div>
                            <div class="col-6 mb-3">
                                <div>
                                    <label class="form-label">Email</label>
                                    <input v-model="tai_khoan_add.email" type="text" class="form-control">
                                </div>
                            </div>
                            <div class="col-6 mb-3">
                                <div>
                                    <label class="form-label">Số điện thoại</label>
                                    <input v-model="tai_khoan_add.so_dien_thoai" type="text" class="form-control">
                                </div>
                            </div>
                            <div class="col-6 mb-3">
                                <div>
                                    <label class="form-label">Ngày sinh</label>
                                    <input v-model="tai_khoan_add.ngay_sinh" type="date" class="form-control">
                                </div>
                            </div>
                            <div class="col-6 mb-3">
                                <div>
                                    <label class="form-label">Giới tính</label>
                                    <select v-model="tai_khoan_add.gioi_tinh" name="" class="form-select" id="">
                                        <option value="0">Nam</option>
                                        <option value="1">Nữ</option>
                                        <option value="2">Khác</option>
                                    </select>
                                </div>
                            </div>
                            <div class="col-6 mb-3">
                                <label class="form-label">Password</label>
                                <input v-model="tai_khoan_add.password" type="text" class="form-control">
                            </div>
                            <!-- <div class="col-6 mb-3">
                                <label class="form-label">Nhập lại password</label>
                                <input type="text" class="form-control">
                            </div> -->
                        </div>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                        <button @click="themmoi()" data-bs-dismiss="modal" type="button" class="btn btn-primary">Thêm
                            mới</button>
                    </div>
                </div>
            </div>
        </div>
        <div class="modal fade" id="capnhatmodal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog modal-xl">
                <div class="modal-content">
                    <div class="modal-header">
                        <h1 class="modal-title fs-5" id="exampleModalLabel">Cập nhập sản phẩm
                        </h1>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                        <div class="row">
                            <div class="col-6 mb-3">
                                <div>
                                    <label class="form-label">Họ lót</label>
                                    <input v-model="tai_khoan_update.ho_lot" type="text" class="form-control">
                                </div>
                            </div>
                            <div class="col-6 mb-3">
                                <div>
                                    <label class="form-label">Tên</label>
                                    <input v-model="tai_khoan_update.ten_khach_hang" type="text" class="form-control">
                                </div>
                            </div>
                            <div class="col-6 mb-3">
                                <div>
                                    <label class="form-label">Email</label>
                                    <input v-model="tai_khoan_update.email" type="text" class="form-control">
                                </div>
                            </div>
                            <div class="col-6 mb-3">
                                <div>
                                    <label class="form-label">Số điện thoại</label>
                                    <input v-model="tai_khoan_update.so_dien_thoai" type="text" class="form-control">
                                </div>
                            </div>
                            <div class="col-6 mb-3">
                                <div>
                                    <label class="form-label">Ngày sinh</label>
                                    <input v-model="tai_khoan_update.ngay_sinh" type="date" class="form-control">
                                </div>
                            </div>
                            <div class="col-6 mb-3">
                                <div>
                                    <label class="form-label">Giới tính</label>
                                    <select v-model="tai_khoan_update.gioi_tinh" name="" class="form-select" id="">
                                        <option value="0">Nam</option>
                                        <option value="1">Nữ</option>
                                        <option value="2">Khác</option>
                                    </select>
                                </div>
                            </div>
                            <div class="col-6 mb-3">
                                <label class="form-label">Password</label>
                                <input v-model="tai_khoan_update.password" type="text" class="form-control">
                            </div>
                            <!-- <div class="col-6 mb-3">
                                <label class="form-label">Nhập lại password</label>
                                <input type="text" class="form-control">
                            </div> -->
                        </div>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                        <button @click="capnhap()" data-bs-dismiss="modal" type="button" class="btn btn-primary">Cập nhập</button>
                    </div>
                </div>
            </div>
        </div>
        <div class="modal fade" id="xoamodal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <h1 class="modal-title fs-5" id="exampleModalLabel">Xóa
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
                                    Bạn chắc chắn muốn xóa <b class="text-danger">{{ tai_khoan_del.ho_lot }} {{
                                        tai_khoan_del.ten_khach_hang }}</b> khỏi
                                    danh sách?
                                </div>
                            </div>
                        </div>

                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Đóng</button>
                        <button @click="xoa()" type="button" class="btn btn-danger" data-bs-dismiss="modal">Xác
                            Nhận</button>
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
            tai_khoan_add: {},
            tai_khoan_del: {},
            tai_khoan_update: {},
            list_tai_khoan: [],
        }
    },
    mounted() {
        this.loadData();
    },
    methods: {
        themmoi() {
            baseRequest
                .post("tai-khoan/create", this.tai_khoan_add)
                .then((res) => {
                    functionBasic.displaySuccess(res);
                    this.loadData();
                });
        },
        loadData() {
            baseRequest
                .get('tai-khoan/data')
                .then((res) => {
                    this.list_tai_khoan = res.data.data;
                    // console.log(res.data.data);

                })
        },
        xoa() {
            baseRequest
                .post("tai-khoan/delete", this.tai_khoan_del)
                .then((res) => {
                    if (res.data.status == 1) {
                        functionBasic.displaySuccess(res);
                        this.loadData();
                    }
                });
        },
        capnhap() {
            baseRequest
                .post("tai-khoan/update", this.tai_khoan_update)
                .then((res) => {
                    if (res.data.status == 1) {
                        functionBasic.displaySuccess(res);
                        this.loadData();
                    }
                });
        },
    },
}
</script>
<style lang="">
    
</style>