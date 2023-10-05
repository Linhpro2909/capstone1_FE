<template lang="">
    <div class="row">
        <div class="col-12 text-end mb-2">
            <button class="btn btn-outline-primary" data-bs-toggle="modal" data-bs-target="#themmoimodal">Thêm mới</button>
        </div>
        <div class="col-12">
            <div class="card">
                <div class="card-header mt-2">
                    <h5>Danh sách tài khoản Admin</h5>
                </div>
                <div class="card-body">
                    <table class="table table-bordered table-hover">
                        <thead>
                            <tr class="text-center align-middle">
                                <th>#</th>
                                <th>Email</th>
                                <th>Họ và Tên</th>
                                <th>Quyền</th>
                                <th>Số điện thoại</th>
                                <th>Ngày sinh</th>
                                <th>Địa chỉ</th>
                                <th>Tình trạng</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr class="align-middle" v-for="(v,k) in list_admin">
                                <th class="text-center">{{ k+1 }}</th>
                                <td>{{ v.email }}</td>
                                <td>{{ v.ho_lot }} {{ v.ten_admin }}</td>
                                <td>{{ v.id_phan_quyen }}</td>
                                <td>{{ v.so_dien_thoai }}</td>
                                <td>{{ v.ngay_sinh }}</td>
                                <td>{{ v.dia_chi }}</td>
                                <td class="text-center">
                                    <button @click="doi_trang_thai(v)" v-if="v.trang_thai == 1" class="btn btn-success">Hiển thị</button>
                                    <button @click="doi_trang_thai(v)" v-else class="btn btn-warning">Tạm tắt</button>
                                </td>
                                <td class="text-center">
                                    <button @click="admin_update = Object.assign({}, v)" class="btn btn-primary me-1" data-bs-toggle="modal"
                                        data-bs-target="#capnhapmodal">Cập nhập</button>
                                    <button @click="admin_del = v" class="btn btn-danger" data-bs-toggle="modal"
                                        data-bs-target="#xoamodal">Xóa</button>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
        <div class="modal fade" id="themmoimodal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog modal-lg">
                <div class="modal-content">
                    <div class="modal-header">
                        <h1 class="modal-title fs-5" id="exampleModalLabel">Thêm mới</h1>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                        <div class="row">
                            <div class="col-6">
                                <label class="form-label">Họ</label>
                                <input v-model="admin_add.ho_lot" type="text" class="form-control">
                            </div>
                            <div class="col-6">
                                <label class="form-label">Tên</label>
                                <input v-model="admin_add.ten_admin" type="text" class="form-control">
                            </div>
                            <div class="col-6 mt-2">
                                <label class="form-label">Email</label>
                                <input v-model="admin_add.email" type="text" class="form-control">
                            </div>
                            <div class="col-6 mt-2">
                                <label class="form-label">Password</label>
                                <input v-model="admin_add.password" type="text" class="form-control">
                            </div>
                            
                            <div class="col-6 mt-2">
                                <label class="form-label">Ngày Sinh</label>
                                <input v-model="admin_add.ngay_sinh" type="date" class="form-control">
                            </div>
                            <div class="col-6 mt-2">
                                <label class="form-label">Số điện thoại</label>
                                <input v-model="admin_add.so_dien_thoai" type="text" class="form-control">
                            </div>
                            <div class="col-6 mt-2">
                                <label class="form-label">Địa chỉ</label>
                                <input v-model="admin_add.dia_chi" type="text" class="form-control">
                            </div>
                            <div class="col-6 mt-2">
                                <label class="form-label">Quyền</label>
                                <select v-model="admin_add.id_phan_quyen" class="form-select">
                                    <template v-for="(v,k) in list_quyen">
                                        <option v-bind:value="v.id">{{ v.ten_quyen }}</option>
                                    </template>
                                </select>
                            </div>
                            <div class="col-6 mt-2">
                                <div>
                                    <label class="form-label">Tình trạng</label>
                                    <select v-model="admin_add.trang_thai" class="form-select">
                                        <option v-bind:value="0">Tạm tắt</option>
                                        <option v-bind:value="1">Hiển thị</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                        <button data-bs-dismiss="modal" type="button" class="btn btn-primary" @click="themmoi()">Xác nhận</button>
                    </div>
                </div>
            </div>
        </div>
        <div class="modal fade" id="capnhapmodal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog modal-lg">
                <div class="modal-content">
                    <div class="modal-header">
                        <h1 class="modal-title fs-5" id="exampleModalLabel">Cập nhập</h1>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                        <div class="row">
                            <div class="col-6">
                                <label class="form-label">Họ</label>
                                <input v-model="admin_update.ho_lot" type="text" class="form-control">
                            </div>
                            <div class="col-6">
                                <label class="form-label">Tên</label>
                                <input v-model="admin_update.ten_admin" type="text" class="form-control">
                            </div>
                            <div class="col-6 mt-2">
                                <label class="form-label">Email</label>
                                <input v-model="admin_update.email" type="text" class="form-control">
                            </div>
                            <div class="col-6 mt-2">
                                <label class="form-label">Password</label>
                                <input v-model="admin_update.password" type="text" class="form-control">
                            </div>
                            
                            <div class="col-6 mt-2">
                                <label class="form-label">Ngày Sinh</label>
                                <input v-model="admin_update.ngay_sinh" type="date" class="form-control">
                            </div>
                            <div class="col-6 mt-2">
                                <label class="form-label">Số điện thoại</label>
                                <input v-model="admin_update.so_dien_thoai" type="text" class="form-control">
                            </div>
                            <div class="col-6 mt-2">
                                <label class="form-label">Địa chỉ</label>
                                <input v-model="admin_update.dia_chi" type="text" class="form-control">
                            </div>
                            <div class="col-6 mt-2">
                                <label class="form-label">Quyền</label>
                                <select v-model="admin_update.id_phan_quyen" class="form-select">
                                    <template v-for="(v,k) in list_quyen">
                                        <option v-bind:value="v.id">{{ v.ten_quyen }}</option>
                                    </template>
                                </select>
                            </div>
                            <div class="col-6 mt-2">
                                <div>
                                    <label class="form-label">Tình trạng</label>
                                    <select v-model="admin_update.trang_thai" class="form-select">
                                        <option v-bind:value="0">Tạm tắt</option>
                                        <option v-bind:value="1">Hiển thị</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                        <button data-bs-dismiss="modal" type="button" class="btn btn-primary" @click="capnhap()">Cập nhập</button>
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
                                    Bạn chắc chắn muốn xóa <b class="text-danger">{{ admin_del.ten_admin }}</b> khỏi
                                    danh sách?
                                </div>
                            </div>
                        </div>

                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Đóng</button>
                        <button type="button" class="btn btn-danger" data-bs-dismiss="modal" v-on:click="xoa()">Xác
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
            list_admin: [],
            list_quyen: [],
            admin_add: {},
            admin_del: {},
            admin_update: {},

        }
    },
    mounted() {
        this.loadData();
    },
    methods: {
        loadData() {
            baseRequest
                .get('admin/data')
                .then((res) => {
                    this.list_admin = res.data.data;
                })
            baseRequest
                .get('phan-quyen/data')
                .then((res) => {
                    this.list_quyen = res.data.data;
                })
        },
        themmoi() {
            baseRequest
                .post("admin/create", this.admin_add)
                .then((res) => {
                    functionBasic.displaySuccess(res);
                    this.loadData();
                });
        },
        xoa() {
            baseRequest
                .post("admin/delete", this.admin_del)
                .then((res) => {
                    if (res.data.status == 1) {
                        functionBasic.displaySuccess(res);
                        this.loadData();
                    }
                });
        },
        capnhap() {
            baseRequest
                .post("admin/update", this.admin_update)
                .then((res) => {
                    if (res.data.status == 1) {
                        functionBasic.displaySuccess(res);
                        this.loadData();
                    }
                });
        },
        doi_trang_thai(v) {
            baseRequest
                .post("admin/status", v)
                .then((res) => {
                    functionBasic.displaySuccess(res);
                    this.loadData();
                });
        },
    },
}
</script>
<style lang="">
    
</style>