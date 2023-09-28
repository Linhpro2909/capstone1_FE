<template lang="">
    <div class="row">
        <div class="col-md-4">
            <div class="card">
                <div class="card-header">
                    Thêm Mới Mã Giảm Giá
                </div>
                <div class="card-body">
                    <div class="mt-2">
                        <label>Mã giảm giá</label>
                        <input type="text" v-model="them_moi.code_giam_gia" class="form-control mt-1">
                    </div>
                    <div class="mt-2">
                        <label>Số tiền giảm</label>
                        <input  type="number" v-model="them_moi.so_tien_giam" class="form-control mt-1">
                    </div>
                    <div class="mt-2">
                        <label>Phần trăm giảm</label>
                        <input type="number" v-model="them_moi.phan_tram_giam" class="form-control mt-1">
                    </div>
                    <div class="mt-2">
                        <label>Tình Trạng</label>
                        <select class="form-control mt-1" v-model="them_moi.tinh_trang">
                            <option value="1">Chưa Sử Dụng</option>
                            <option value="0">Đã Sử Dụng</option>
                        </select>
                    </div>
                </div>
                <div class="card-footer text-end">
                    <button class="btn btn-primary" v-on:click="themMoi()">Thêm Mới</button>
                </div>
            </div>
        </div>
        <div class="col-md-8">
            <div class="card">
                <div class="card-header">
                    Danh Sách Mã Giảm Giá
                </div>
                <div class="card-body">
                    <div class="table-responsive">
                        <table class="table table-bordered">
                            <thead>
                                <tr>
                                    <th class="text-center text-nowrap">#</th>
                                    <th class="text-center text-nowrap">Mã Giảm Giá</th>
                                    <th class="text-center text-nowrap">Số Tiền Giảm</th>
                                    <th class="text-center text-nowrap">Phần Trăm Giảm</th>
                                    <th class="text-center text-nowrap">Tình Trạng</th>
                                    <th class="text-center text-nowrap">Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr v-for="(value, index) in list_ma_giam_gia">
                                    <th class="align-middle text-nowrap text-center">{{ index + 1 }}</th>
                                    <td class="align-middle text-nowrap text-center">{{ value.code_giam_gia }}</td>
                                    <td class="align-middle text-nowrap text-end">{{ value.so_tien_giam }}</td>
                                    <td class="align-middle text-nowrap text-center">{{ value.phan_tram_giam }}%</td>
                                    <td class="align-middle text-center text-nowrap">
                                        <button @:click="trang_thai(value)" v-if="value.tinh_trang == 1" class="btn btn-success">Chưa Sử Dụng</button>
                                        <button @:click="trang_thai(value)" v-else class="btn btn-danger">Đã Sử Dụng</button>
                                    </td>
                                    <td class="align-middle text-center text-nowrap">
                                        <button @:click="ma_giam_gia_update = Object.assign({}, value)" class="btn btn-primary" style="margin-right: 3px;" data-bs-toggle="modal" data-bs-target="#updateModal">Cập Nhật</button>
                                        <button @:click="ma_giam_gia_del = Object.assign({}, value)" class="btn btn-danger" data-bs-toggle="modal" data-bs-target="#xoaModal">Xóa</button>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                        <div class="modal fade" id="updateModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                            <div class="modal-dialog">
                                <div class="modal-content">
                                <div class="modal-header">
                                    <h1 class="modal-title fs-5" id="exampleModalLabel">Cập Nhật Mã Giảm Giá</h1>
                                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                </div>
                                <div class="modal-body">
                                    <div class="mt-2">
                                        <label>Mã giảm giá</label>
                                        <input type="text" v-model="ma_giam_gia_update.code_giam_gia" class="form-control mt-1">
                                    </div>
                                    <div class="mt-2">
                                        <label>Số tiền giảm</label>
                                        <input  type="number" v-model="ma_giam_gia_update.so_tien_giam" class="form-control mt-1">
                                    </div>
                                    <div class="mt-2">
                                        <label>Phần trăm giảm</label>
                                        <input type="number" v-model="ma_giam_gia_update.phan_tram_giam" class="form-control mt-1">
                                    </div>
                                    <div class="mt-2">
                                        <label>Tình Trạng</label>
                                        <select class="form-control mt-1" v-model="ma_giam_gia_update.tinh_trang">
                                            <option value="1">Chưa Sử Dụng</option>
                                            <option value="0">Đã Sử Dụng</option>
                                        </select>
                                    </div>
                                </div>
                                <div class="modal-footer">
                                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Đóng</button>
                                    <button @:click="cap_nhat()" type="button" data-bs-dismiss="modal" class="btn btn-primary">Lưu</button>
                                </div>
                                </div>
                            </div>
                        </div>

                        <div class="modal fade" id="xoaModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                            <div class="modal-dialog">
                                <div class="modal-content">
                                <div class="modal-header">
                                    <h1 class="modal-title fs-5" id="exampleModalLabel">Xóa Mã Giảm Giá</h1>
                                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                </div>
                                <div class="modal-body">
                                    <div class="alert alert-warning border-0 bg-warning fade show py-2">
                                        <div class="d-flex align-items-center">
                                            <div class="font-35 text-dark"><i class='bx bx-info-circle'></i>
                                            </div>
                                            <div class="ms-3">
                                                <h6 class="mb-0 text-dark">Warning</h6>
                                                <div class="text-dark text-wrap">Bạn có chắc chắn muốn xóa mã giảm giá <b class="text-danger">{{ ma_giam_gia_del.code_giam_gia }}</b> này không!</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="modal-footer">
                                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Đóng</button>
                                    <button @:click="huy_bo()" type="button" data-bs-dismiss="modal" class="btn btn-primary">Đồng Ý</button>
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
            them_moi :   {
                "so_tien_giam"          :   "",
                "phan_tram_giam"        :   "",
                "tinh_trang"            :   1,
                "code_giam_gia"         :   "",
            },
            list_ma_giam_gia            : [],
            ma_giam_gia_del: {},
            ma_giam_gia_update: {},
        }
    },
    mounted() {
        this.loadMaGiamGia();
    },
    methods : {
        themMoi() {
            baseRequest
                .post("ma-giam-gia/create", this.them_moi)
                .then((res) => {
                    functionBasic.displaySuccess(res);
                    this.loadMaGiamGia();
                    this.them_moi = {};
                });
        },
        loadMaGiamGia() {
            baseRequest
                .get("ma-giam-gia/data")
                .then((res) => {
                    this.list_ma_giam_gia = res.data.data;
                });
        }, 
        huy_bo() {
            baseRequest
                .post("ma-giam-gia/delete", this.ma_giam_gia_del)
                .then((res) => {
                    functionBasic.displaySuccess(res);
                    this.loadMaGiamGia();
                });
        },
        cap_nhat() {
            baseRequest
                .post("ma-giam-gia/update", this.ma_giam_gia_update)
                .then((res) => {
                    functionBasic.displaySuccess(res);
                    this.loadMaGiamGia();
                });
        },
        trang_thai(value) {
            baseRequest
                .post("ma-giam-gia/status", value)
                .then((res) => {
                    functionBasic.displaySuccess(res);
                    this.loadMaGiamGia();
                });
        },
    }
}
</script>
<style lang="">
    
</style>