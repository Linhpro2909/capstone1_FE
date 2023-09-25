<template lang="">
    <div class="row">
        <div class="col-md-12 text-end mb-2">
            <button class="btn btn-outline-primary" data-bs-toggle="modal"
                data-bs-target="#themMoiModal">Thêm Mới</button>
        </div>
        <div class="modal fade" id="themMoiModal" tabindex="-1" aria-labelledby="exampleModalLabel"
            aria-hidden="true">
            <div class="modal-dialog modal-lg">
                <div class="modal-content">
                    <div class="modal-header">
                        <h1 class="modal-title fs-5" id="exampleModalLabel">Thêm Mới Tài Khoản Admin
                        </h1>
                        <button type="button" class="btn-close" data-bs-dismiss="modal"
                            aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                        <div class="row mb-2">
                            <div class="col-6">
                                <label class="form-label">Email</label>
                                <input type="email" class="form-control" placeholder="Nhập email">
                            </div>
                            <div class="col-6">
                                <label class="form-label">Password</label>
                                <input type="text" class="form-control" placeholder="Nhập password">
                            </div>
                        </div>
                        <div class="row mb-2">
                            <div class="col-6">
                                <label class="form-label">Họ lót</label>
                                <input type="text" class="form-control" placeholder="Nhập họ lót">
                            </div>
                            <div class="col-6">
                                <label class="form-label">Tên</label>
                                <input type="text" class="form-control" placeholder="Nhập tên">
                            </div>
                        </div>
                        <div class="row mb-2">
                            <div class="col-6">
                                <label class="form-label">Ngày sinh</label>
                                <input type="date" class="form-control" placeholder="Nhập ngày sinh">
                            </div>
                            <div class="col-6">
                                <label class="form-label">Số điện thoại</label>
                                <input type="tel" class="form-control" placeholder="Nhập số điện thoại">
                            </div>
                        </div>
                        <div class="row mb-2">
                            <div class="col-6">
                                <label class="form-label">Địa chỉ</label>
                                <textarea class="form-control" placeholder="Nhập địa chỉ" cols="30" rows="10"></textarea>
                            </div>
                            <div class="col-6">
                                <label class="form-label">Quyền</label>
                                <select class="form-select">
                                    <template v-for="(v,k) in list_quyen">
                                        <option v-bind:value="v.id">{{v.ten_quyen}}</option>
                                    </template>
                                </select>
                            </div>
                        </div>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary"
                            data-bs-dismiss="modal">Close</button>
                        <button type="button" class="btn btn-primary">Thêm Mới</button>
                    </div>
                </div>
            </div>
        </div>
        <div class="col-md-12">
            <div class="card">
                <div class="card-header">
                    <h4>Danh Sách Tài Khoản Admin</h4>
                </div>
                <div class="card-body">
                    <div class="table-responsive">
                        <table class="table table-bordered">
                            <thead>
                                <tr>
                                    <th class="text-center align-middle text-nowrap">#</th>
                                    <th class="text-center align-middle text-nowrap">Họ lót</th>
                                    <th class="text-center align-middle text-nowrap">Tên</th>
                                    <th class="text-center align-middle text-nowrap">Email</th>
                                    <th class="text-center align-middle text-nowrap">Số điện thoại</th>
                                    <th class="text-center align-middle text-nowrap">Ngày Sinh</th>
                                    <th class="text-center align-middle text-nowrap">Địa chỉ</th>
                                    <th class="text-center align-middle text-nowrap">Quyền</th>
                                    <th class="text-center align-middle text-nowrap">Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <th class="text-center align-middle text-nowrap">1</th>
                                    <td class="align-middle text-nowrap">Nguyễn Quốc</td>
                                    <td class="align-middle text-nowrap">Long</td>
                                    <td class="align-middle text-nowrap">quoclongdng@gmail.com</td>
                                    <td class="align-middle text-nowrap">0123456789</td>
                                    <td class="align-middle text-nowrap">00/00/0000</td>
                                    <td class="align-middle text-nowrap">32 Xuân Diệu, Đà Nẵng</td>
                                    <td class="text-center align-middle text-nowrap">Admin</td>
                                    <td class="text-center align-middle text-nowrap">
                                        <button class="btn btn-info me-2" data-bs-toggle="modal"
                                            data-bs-target="#capNhatModal">Cập Nhật</button>
                                        <button class="btn btn-danger" data-bs-toggle="modal"
                                            data-bs-target="#xoaModal">Xóa</button>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <div class="modal fade" id="capNhatModal" tabindex="-1"
                        aria-labelledby="exampleModalLabel" aria-hidden="true">
                        <div class="modal-dialog modal-lg">
                            <div class="modal-content">
                                <div class="modal-header">
                                    <h1 class="modal-title fs-5" id="exampleModalLabel">Cập Nhật</h1>
                                    <button type="button" class="btn-close" data-bs-dismiss="modal"
                                        aria-label="Close"></button>
                                </div>
                                <div class="modal-body">
                                    <div class="row mb-2">
                                        <div class="col-6">
                                            <label class="form-label">Email</label>
                                            <input type="email" class="form-control" placeholder="Nhập email">
                                        </div>
                                        <div class="col-6">
                                            <label class="form-label">Password</label>
                                            <input type="text" class="form-control" placeholder="Nhập password">
                                        </div>
                                    </div>
                                    <div class="row mb-2">
                                        <div class="col-6">
                                            <label class="form-label">Họ lót</label>
                                            <input type="text" class="form-control" placeholder="Nhập họ lót">
                                        </div>
                                        <div class="col-6">
                                            <label class="form-label">Tên</label>
                                            <input type="text" class="form-control" placeholder="Nhập tên">
                                        </div>
                                    </div>
                                    <div class="row mb-2">
                                        <div class="col-6">
                                            <label class="form-label">Ngày sinh</label>
                                            <input type="date" class="form-control" placeholder="Nhập ngày sinh">
                                        </div>
                                        <div class="col-6">
                                            <label class="form-label">Số điện thoại</label>
                                            <input type="tel" class="form-control" placeholder="Nhập số điện thoại">
                                        </div>
                                    </div>
                                    <div class="row mb-2">
                                        <div class="col-6">
                                            <label class="form-label">Địa chỉ</label>
                                            <textarea class="form-control" placeholder="Nhập địa chỉ" cols="30" rows="10"></textarea>
                                        </div>
                                        <div class="col-6">
                                            <label class="form-label">Quyền</label>
                                            <select class="form-select">
                                                <template v-for="(v,k) in list_quyen">
                                                    <option v-bind:value="v.id">{{v.ten_quyen}}</option>
                                                </template>
                                            </select>
                                        </div>
                                    </div>
                                </div>
                                <div class="modal-footer">
                                    <button type="button" class="btn btn-secondary"
                                        data-bs-dismiss="modal">Close</button>
                                    <button type="button" class="btn btn-primary">Cập Nhật</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="modal fade" id="xoaModal" tabindex="-1" aria-labelledby="exampleModalLabel"
                        aria-hidden="true">
                        <div class="modal-dialog">
                            <div class="modal-content">
                                <div class="modal-header">
                                    <h1 class="modal-title fs-5" id="exampleModalLabel">Xóa</h1>
                                    <button type="button" class="btn-close" data-bs-dismiss="modal"
                                        aria-label="Close"></button>
                                </div>
                                <div class="modal-body">
                                    <div class="alert alert-warning border-0 bg-warning fade show py-2">
                                        <div class="d-flex align-items-center">
                                            <div class="font-35 text-dark"><i class='bx bx-info-circle'></i>
                                            </div>
                                            <div class="ms-3">
                                                <h6 class="mb-0 text-dark">Warning</h6>
                                                <div class="text-dark text-wrap">Bạn có chắc chắn muốn xóa
                                                    tài khoản <b class="text-danger">Nguyễn Quốc Long</b> này
                                                    không!</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="modal-footer">
                                    <button type="button" class="btn btn-secondary"
                                        data-bs-dismiss="modal">Close</button>
                                    <button type="button" class="btn btn-danger">Xóa</button>
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
            list_quyen      : [],
        }
    },
    mounted() {
        this.getListQuyen();
    },
    methods: {
        getListQuyen() {
            baseRequest
                .get('quyen/data')
                .then((res) => {
                    this.list_quyen = res.data.data;
                })
        },
    },
}
</script>
<style lang="">
    
</style>