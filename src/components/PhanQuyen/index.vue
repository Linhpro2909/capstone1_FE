<template lang="">
      <div class="row">
        <div class="col-8">
            <div class="card">
                <div class="card-header">
                    <div class="d-flex">
                        <h5 class="p-2 w-100 mt-1">Danh sách Quyền</h5>
                        <button class="btn btn-outline-primary p-2 flex-shrink-1 text-nowrap" data-bs-toggle="modal"
                                            data-bs-target="#themmoimodal">Thêm mới quyền</button>
                    </div>
                </div>
                <div class="card-body">
                    <table class="table table-bordered">
                        <thead>
                            <tr class="text-center align-middle">
                                <th>#</th>
                                <th>Tên Quyền</th>
                                <th>Trạng Thái</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr class="align-middle" v-for="(v,k) in list_quyen">
                                <th class="text-center">{{ k+1 }}</th>
                                <td>{{ v.ten_quyen }}</td>
                                <td class="text-center">
                                    <button @click="trang_thai(v)" v-if="v.trang_thai == 1" class="btn btn-success">Hiển thị</button>
                                    <button @click="trang_thai(v)" v-else class="btn btn-warning">Tạm tắt</button>
                                </td>
                                <td class="text-center">
                                    <button class="btn btn-info me-1">Cấp quyền</button>
                                    <button @click="phan_quyen_update=Object.assign({}, v)" data-bs-toggle="modal" data-bs-target="#capnhatmodal" class="btn btn-primary me-1"><i class="fa-solid fa-pen-to-square"></i></button>
                                    <button @click="phan_quyen_del=v" class="btn btn-danger" data-bs-toggle="modal" data-bs-target="#xoamodal"><i class="fa-solid fa-trash"></i></button>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
        <div class="col-4">
            <div class="card">
                <div class="card-header">
                    <h5>Phân Quyền</h5>
                </div>
                <div class="card-body">

                </div>
                <div class="card-footer">
                    <button class="btn btn-primary" style="width: 100%;">Cấp quyền</button>
                </div>
            </div>
        </div>
        <div class="modal fade" id="themmoimodal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <h1 class="modal-title fs-5" id="exampleModalLabel">Thêm mới quyền
                        </h1>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                        <div class="row">
                            <div class="col-12">
                                <label class="form-label">Tên Quyền</label>
                                <input v-model="them_moi.ten_quyen" type="text" class="form-control">
                            </div>
                            <div class="col-12">
                                <label class="form-label mt-3">Tình Trạng</label>
                                <select v-model="them_moi.trang_thai" class="form-control">
                                    <option value="1">Hiển thị</option>
                                    <option value="0">Tạm tắt</option>
                                </select>
                            </div>
                        </div>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                        <button data-bs-dismiss="modal" type="button" class="btn btn-primary" v-on:click="addQuyen()">Thêm mới</button>
                    </div>
                </div>
            </div>
        </div>
        <div class="modal fade" id="capnhatmodal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <h1 class="modal-title fs-5" id="exampleModalLabel">Cập nhật quyền
                        </h1>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                        <div class="row">
                            <div class="col-12">
                                <label class="form-label">Tên Quyền</label>
                                <input v-model="phan_quyen_update.ten_quyen" type="text" class="form-control">
                            </div>
                            <div class="col-12">
                                <label class="form-label mt-3">Tình Trạng</label>
                                <select v-model="phan_quyen_update.trang_thai" class="form-control">
                                    <option value="1">Hiển thị</option>
                                    <option value="0">Tạm tắt</option>
                                </select>
                            </div>
                        </div>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                        <button data-bs-dismiss="modal" type="button" class="btn btn-primary" v-on:click="cap_nhat()">Cập nhật</button>
                    </div>
                </div>
            </div>
        </div>
        <div class="modal fade" id="xoamodal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <h1 class="modal-title fs-5" id="exampleModalLabel">Xóa Sản Phẩm
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
                                    Bạn chắc chắn muốn xóa <b class="text-danger">{{ phan_quyen_del.ten_quyen }}</b> khỏi
                                    danh sách?
                                </div>
                            </div>
                        </div>

                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Đóng</button>
                        <button type="button" class="btn btn-danger" data-bs-dismiss="modal" v-on:click="huy_bo()">Xác Nhận</button>
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
            list_quyen: [],
            them_moi: { 'trang_thai': 1 },
            phan_quyen_del: {},
            phan_quyen_update: {},
        }
    },
    mounted() {
        this.getListQuyen();
    },
    methods: {
        addQuyen() {
            console.log(this.them_moi);
            baseRequest
                .post("phan-quyen/create", this.them_moi)
                .then((res) => {
                    functionBasic.displaySuccess(res);
                    this.getListQuyen();
                    this.them_moi = {};
                });
        },
        getListQuyen() {
            baseRequest
                .get("phan-quyen/data")
                .then((res) => {
                    this.list_quyen = res.data.data;
                    console.log(this.list_quyen);
                });
        },
        huy_bo() {
            baseRequest
                .post("phan-quyen/delete", this.phan_quyen_del)
                .then((res) => {
                    functionBasic.displaySuccess(res);
                    this.getListQuyen();
                });
        },
        cap_nhat() {
            baseRequest
                .post("phan-quyen/update", this.phan_quyen_update)
                .then((res) => {
                    functionBasic.displaySuccess(res);
                    this.getListQuyen();
                });
        },
        trang_thai(value) {
            baseRequest
                .post("phan-quyen/status", value)
                .then((res) => {
                    functionBasic.displaySuccess(res);
                    this.getListQuyen();
                });
        },
    },
}
</script>
<style lang="">
    
</style>