<template lang="">
      <div class="row">
        <div class="col-md-7">
            <div class="card">
                <div class="card-header">
                    <div class="row">
                        <div class="d-flex justify-content-between">
                            <div class="align-middle mt-2">
                                Danh Sách Quyền
                            </div>
                            <button type="button text-end" class="btn btn-outline-primary"
                                data-bs-toggle="modal" data-bs-target="#addModal">Thêm mới
                                quyền</button>
                        </div>

                    </div>
                </div>
                <div class="modal fade" id="addModal" tabindex="-1" aria-labelledby="exampleModalLabel"
                    aria-hidden="true">
                    <div class="modal-dialog">
                        <div class="modal-content">
                            <div class="modal-header">
                                <h5 class="modal-title" id="exampleModalLabel">Thêm mới quyền</h5>
                                <button type="button" class="btn-close" data-bs-dismiss="modal"
                                    aria-label="Close"></button>
                            </div>
                            <div class="modal-body">
                                <form id="formdata">
                                    <div class="card-body">
                                        <div class="col-md-12 mb-2">
                                            <label class="form-label">Tên Quyền</label>
                                            <input v-model="them_moi.ten_quyen" type="text" class="form-control">
                                        </div>
                                        <div class="col-md-12 mb-2">
                                            <label class="form-label">Trạng Thái</label>
                                            <select v-model="them_moi.trang_thai" class="form-control">
                                                <option value="1">Hoạt Động</option>
                                                <option value="0">Tạm Tắt</option>
                                            </select>
                                        </div>
                                    </div>

                                </form>
                            </div>
                            <div class="modal-footer">
                                <button type="button" class="btn btn-secondary"
                                    data-bs-dismiss="modal">Close</button>
                                <button v-on:click="addQuyen()" type="button" class="btn btn-primary" data-bs-dismiss="modal">Xác Nhận</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="card-body">
                    <div class="table-responsive">
                        <table class="table table-bordered">
                            <thead>
                                <tr class="text-center">
                                    <th>#</th>
                                    <th>Tên Quyền</th>
                                    <th>Trạng Thái</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                <template v-for="(v , k) in list_quyen">
                                    <tr>
                                        <th class="text-center align-middle">{{ k + 1}}</th>
                                        <td class="align-middle">{{ v.ten_quyen}}</td>
                                        <td class="text-center align-middle">
                                            <button  @:click="trang_thai(v)" v-if="v.trang_thai == 1" style="width:100px" class="btn btn-success">Hoạt Động</button>
                                            <button  @:click="trang_thai(v)" v-else style="width:100px" class="btn btn-danger">Tạm Tắt</button>
                                        </td>
                                        <td class="text-center align-middle">
                                            <button  class="btn btn-info">Cấp Quyền</button>
                                            <button @:click="phan_quyen_update = Object.assign({}, v)" class="btn btn-primary ms-2" data-bs-toggle="modal"
                                                data-bs-target="#editModal"><i class="fa-solid fa-pen-to-square"
                                                    style="margin-left: 4px"></i></button>
                                            <button @:click="phan_quyen_del = Object.assign({}, v)" class="btn btn-danger ms-2" data-bs-toggle="modal"
                                                data-bs-target="#deleteModal"><i class="fa-solid fa-trash"
                                                    style="margin-left: 4px"></i></button>
                                        </td>
                                    </tr>
                                </template>
                            </tbody>
                        </table>
                        <div class="modal fade" id="deleteModal" tabindex="-1"
                    aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div class="modal-dialog">
                        <div class="modal-content">
                            <div class="modal-header">
                                <h5 class="modal-title" id="exampleModalLabel">Xóa Quyền</h5>
                                <button type="button" class="btn-close" data-bs-dismiss="modal"
                                    aria-label="Close"></button>
                            </div>
                            <div class="modal-body">
                                <div class="alert alert-warning border-0 bg-warning alert-dismissible fade show py-2">
                                    <div class="d-flex align-items-center">
                                        <div class="font-35 text-dark"><i class="bx bx-info-circle"></i>
                                        </div>
                                        <div class="ms-3">
                                            <h6 class="mb-0 text-dark">Warning</h6>
                                            <div class="text-dark">
                                                <p>Bạn có muốn xóa quyền 
                                                    <b class="text-danger">{{ phan_quyen_del.ten_quyen }}</b>
                                                    này không?
                                                </p>
                                                <p>
                                                    <b>Lưu ý:</b> Điều này không thể hoàn tác!
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="modal-footer">
                                <button type="button" class="btn btn-secondary"
                                    data-bs-dismiss="modal">Close</button>
                                <button @:click="huy_bo()" type="button" data-bs-dismiss="modal" class="btn btn-danger"
                                    data-bs-dismiss="modal">Xác Nhận</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="modal fade" id="editModal" tabindex="-1" aria-labelledby="exampleModalLabel"
                    aria-hidden="true">
                    <div class="modal-dialog">
                        <div class="modal-content">
                            <div class="modal-header">
                                <h5 class="modal-title" id="exampleModalLabel">Chỉnh Sửa Quyền</h5>
                                <button type="button" class="btn-close" data-bs-dismiss="modal"
                                    aria-label="Close"></button>
                            </div>
                            <div class="modal-body">
                                <form id="formdata">
                                    <div class="card-body">
                                        <div class="col-md-12 mb-2">
                                            <label class="form-label">Tên Quyền</label>
                                            <input v-model="phan_quyen_update.ten_quyen" type="text" class="form-control">
                                        </div>
                                        <div class="col-md-12 mb-2">
                                            <label class="form-label">Trạng Thái</label>
                                            <select v-model="phan_quyen_update.trang_thai" class="form-control">
                                                <option value="1">Hoạt Động</option>
                                                <option value="0">Tạm Tắt</option>
                                            </select>
                                        </div>
                                    </div>

                                </form>
                            </div>
                            <div class="modal-footer">
                                <button type="button" class="btn btn-secondary"
                                    data-bs-dismiss="modal">Close</button>
                                <button @:click="cap_nhat()" type="button" data-bs-dismiss="modal" class="btn btn-primary">Xác Nhận</button>
                            </div>
                        </div>
                    </div>
                </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="col-md-5">
            <div class="card">
                <div class="card-header">
                    Phân Quyền
                </div>
                <div class="card-body">
                    <div class="row">
                       
                    </div>
                </div>
                <div class="card-footer">
                    <div class="text-center">
                        <button class="btn btn-primary" style="width: 95%">Cập Nhập Phân Quyền</button>
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