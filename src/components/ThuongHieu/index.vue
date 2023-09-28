<template lang="">
<div class="page-content">
    <div class="row">
        <div class="col-md-4">
            <div class="card">
                <div class="card-header">
                    <h4>Thêm Mới Thương Hiệu</h4>
                </div>
                <div class="card-body">
                    <label class="form-label">Tên Thương Hiệu</label>
                    <input v-model="thuong_hieu_add.ten_thuong_hieu" type="text" class="form-control" placeholder="Nhập tên thương hiệu">
                    <label class="form-label mt-3">Url Thương Hiệu</label>
                    <input v-model="thuong_hieu_add.url_thuong_hieu" type="text" class="form-control" placeholder="Nhập url thương hiệu">
                    <label class="form-label mt-3">Icon Thương Hiệu</label>
                    <input v-model="thuong_hieu_add.icon_thuong_hieu" type="text" class="form-control" placeholder="Nhập icon thương hiệu">
                    <label class="form-label mt-3">Tình Trạng</label>
                    <select v-model="thuong_hieu_add.tinh_trang" class="form-select">
                        <option value="0">Tạm Tắt</option>
                        <option value="1">Hiển Thị</option>
                    </select>
                </div>
                <div class="card-footer text-end">
                    <button v-on:click="themMoi()" class="btn btn-primary">Thêm Mới</button>
                </div>
            </div>
        </div>
        <div class="col-md-8">
            <div class="card">
                <div class="card-header">
                    <h4>Danh Sách Thương Hiệu</h4>
                </div>
                <div class="card-body">
                    <div class="table-responsive">
                        <table class="table table-bordered">
                            <thead>
                                <tr>
                                    <th class="text-center align-middle text-nowrap">#</th>
                                    <th class="text-center align-middle text-nowrap">Tên Thương Hiệu</th>
                                    <th class="text-center align-middle text-nowrap">Icon Thương Hiệu</th>
                                    <th class="text-center align-middle text-nowrap">Url Thương Hiệu</th>
                                    <th class="text-center align-middle text-nowrap">Tình Trạng</th>
                                    <th class="text-center align-middle text-nowrap">Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr v-for="(v, k) in list_thuong_hieu">
                                    <td class="text-center align-middle text-nowrap">{{ k + 1 }}</td>
                                    <td class="align-middle text-nowrap">{{ v.ten_thuong_hieu }}</td>
                                    <td class="text-center align-middle text-nowrap">
                                        <img v-bind:src="v.icon_thuong_hieu" width="48" height="48" class="rounded-circle" alt="" />
                                    </td>
                                    <td class="align-middle text-nowrap">
                                        {{ v.url_thuong_hieu }}
                                    </td>
                                    <td class="text-center align-middle text-nowrap">
                                        <button @:click="trang_thai(v)" v-if="v.tinh_trang" class="btn btn-primary">Hiển Thị</button>
                                        <button @:click="trang_thai(v)" v-else class="btn btn-warning">Tạm Tắt</button>
                                    </td>
                                    <td class="text-center align-middle text-nowrap">
                                        <button @:click="thuong_hieu_update = Object.assign({}, v)" class="btn btn-info me-1" data-bs-toggle="modal" data-bs-target="#capNhatModal">Cập Nhật</button>
                                        <button @:click="thuong_hieu_del = Object.assign({}, v)" class="btn btn-danger" data-bs-toggle="modal" data-bs-target="#xoaModal">Xóa</button>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <div class="modal fade" id="capNhatModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                        <div class="modal-dialog">
                            <div class="modal-content">
                            <div class="modal-header">
                                <h1 class="modal-title fs-5" id="exampleModalLabel">Cập Nhật</h1>
                                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div class="modal-body">
                                <label class="form-label">Tên Thương Hiệu</label>
                                <input v-model="thuong_hieu_update.ten_thuong_hieu" type="text" class="form-control" placeholder="Nhập tên thương hiệu">
                                <label class="form-label mt-3">Url Thương Hiệu</label>
                                <input v-model="thuong_hieu_update.url_thuong_hieu" type="text" class="form-control" placeholder="Nhập url thương hiệu">
                                <label class="form-label mt-3">Icon Thương Hiệu</label>
                                <input v-model="thuong_hieu_update.icon_thuong_hieu" type="text" class="form-control" placeholder="Nhập icon thương hiệu">
                                <label class="form-label mt-3">Tình Trạng</label>
                                <select v-model="thuong_hieu_update.tinh_trang" class="form-select">
                                    <option value="0">Tạm Tắt</option>
                                    <option value="1">Hiển Thị</option>
                                </select>
                            </div>
                            <div class="modal-footer">
                                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                <button @:click="cap_nhat()" type="button" class="btn btn-primary">Cập Nhật</button>
                            </div>
                            </div>
                        </div>
                    </div>
                    <div class="modal fade" id="xoaModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                        <div class="modal-dialog">
                            <div class="modal-content">
                            <div class="modal-header">
                                <h1 class="modal-title fs-5" id="exampleModalLabel">Xóa</h1>
                                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div class="modal-body">
                                <div class="alert alert-warning border-0 bg-warning fade show py-2">
                                    <div class="d-flex align-items-center">
                                        <div class="font-35 text-dark"><i class='bx bx-info-circle'></i>
                                        </div>
                                        <div class="ms-3">
                                            <h6 class="mb-0 text-dark">Warning</h6>
                                            <div class="text-dark text-wrap">Bạn có chắc chắn muốn xóa thương hiệu <b class="text-danger">{{ thuong_hieu_del.ten_thuong_hieu }}</b> này không!</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="modal-footer">
                                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                <button @:click="huy_bo()" type="button" class="btn btn-danger">Xóa</button>
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
import baseRequest from '../../core/baseRequest';
import functionBasic from '../../core/functionBasic';
export default {
    data() {
        return {
            thuong_hieu_add: {
                "ten_thuong_hieu": "",
                "url_thuong_hieu": "",
                "icon_thuong_hieu": "",
                "tinh_trang": 1,
            },
            list_thuong_hieu: [],
            thuong_hieu_del: {},
            thuong_hieu_update: {},
        }
    },
    mounted() {
        this.loadThuongHieu();
    },
    methods: {
        themMoi() {
            baseRequest
                .post("thuong-hieu/create", this.thuong_hieu_add)
                .then((res) => {
                    functionBasic.displaySuccess(res);
                    this.loadThuongHieu();
                    this.thuong_hieu_add = {};
                });
        },
        loadThuongHieu() {
            baseRequest
                .get("thuong-hieu/data")
                .then((res) => {
                    this.list_thuong_hieu = res.data.data;
                });
        },
        huy_bo() {
            baseRequest
                .post("thuong-hieu/delete", this.thuong_hieu_del)
                .then((res) => {
                    functionBasic.displaySuccess(res);
                    this.loadThuongHieu();
                });
        },
        cap_nhat() {
            baseRequest
                .post("thuong-hieu/update", this.thuong_hieu_update)
                .then((res) => {
                    functionBasic.displaySuccess(res);
                    this.loadThuongHieu();
                });
        },
        trang_thai(value) {
            baseRequest
                .post("thuong-hieu/status", value)
                .then((res) => {
                    functionBasic.displaySuccess(res);
                    this.loadThuongHieu();
                });
        },
    },
}
</script>
<style lang="">
    
</style>