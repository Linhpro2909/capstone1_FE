<template lang="">
    <div class="row">
        <div class="text-end mb-2">
            <button class="btn btn-outline-primary" data-bs-toggle="modal" data-bs-target="#themmoiModal">Thêm Mới</button>
        </div>
        <div class="modal fade" id="themmoiModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog modal-xl">
                <div class="modal-content">
                    <div class="modal-header">
                        <h1 class="modal-title fs-5" id="exampleModalLabel">Thêm Mới Sản Phẩm</h1>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                        <div class="row mt-2">
                            <div class="col-md-6">
                                <label>Tên Sản Phẩm</label>
                                <input type="text" class="form-control">
                            </div>
                            <div class="col-md-6">
                                <label>Hình Ảnh</label>
                                <input type="text" class="form-control">
                            </div>
                        </div>
                        <div class="row mt-2">
                            <div class="col-md-6">
                                <label>Giá Bán</label>
                                <input type="number" class="form-control">
                            </div>
                            <div class="col-md-6">
                                <label>Giá Gốc</label>
                                <input type="number" class="form-control">
                            </div>
                        </div>
                        <div class="row mt-2">
                            <div class="col-md-4">
                                <label>Chuyên Mục</label>
                                <select class="form-control">
                                    <template v-for="(v, k) in data_chuyen_muc" >
                                        <option v-if="v.tinh_trang == 1" v-bind:value="v.id">{{ v.ten_chuyen_muc }}</option>
                                    </template>
                                </select>
                            </div>
                            <div class="col-md-4">
                                <label>Thương Hiệu</label>
                                <select class="form-control">
                                    <template v-for="(v, k) in data_thuong_hieu" >
                                        <option v-if="v.tinh_trang == 1" v-bind:value="v.id">{{ v.ten_thuong_hieu }}</option>
                                    </template>
                                </select>
                            </div>
                            <div class="col-md-4">
                                <label>Tình Trạng</label>
                                <select class="form-control">
                                    <option value="1">Hiển Thị</option>
                                    <option value="0">Tặm Tắt</option>
                                </select>
                            </div>
                        </div>
                        <div class="row mt-2">
                            <div class="col-md-12">
                                <label>Mô Tả</label>
                                <textarea class="form-control" cols="30" rows="3"></textarea>
                            </div>
                            <div class="col-md-12 mt-2">
                                <label>Nội Dung</label>
                                <textarea class="form-control" cols="30" rows="3"></textarea>
                            </div>
                            <div class="col-md-12 mt-2">
                                <label>Thông Tin Thêm</label>
                                <textarea class="form-control" cols="30" rows="3"></textarea>
                            </div>
                        </div>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Đóng</button>
                        <button type="button" class="btn btn-primary">Thêm Mới</button>
                    </div>
                </div>
            </div>
        </div>
        <div class="col-md-12">
            <div class="card">
                <div class="card-header">
                    <h4>Danh Sách Sản Phẩm</h4>
                </div>
                <div class="card-body">
                    <div class="table table-responsive">
                        <table class="table table-bordered">
                            <thead>
                                <tr>
                                    <th class="text-center align-middle text-nowrap">#</th>
                                    <th class="text-center align-middle text-nowrap">Tên Sản Phẩm</th>
                                    <th class="text-center align-middle text-nowrap">Hình Ảnh</th>
                                    <th class="text-center align-middle text-nowrap">Giá Gốc</th>
                                    <th class="text-center align-middle text-nowrap">Giá Bán</th>
                                    <th class="text-center align-middle text-nowrap">Mô Tả</th>
                                    <th class="text-center align-middle text-nowrap">Số Lượng</th>
                                    <th class="text-center align-middle text-nowrap">Nội Dung</th>
                                    <th class="text-center align-middle text-nowrap">Thông Tin Thêm</th>
                                    <th class="text-center align-middle text-nowrap">Tình Trạng</th>
                                    <th class="text-center align-middle text-nowrap">Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <th class="text-nowrap align-middle text-center">1</th>
                                    <td class="text-nowrap align-middle">Iphone 15</td>
                                    <td class="text-nowrap align-middle">
                                        <img src="https://cdn.viettelstore.vn/Images/Product/ProductImage/291703442.jpeg"
                                            style="height: 100px;">
                                    </td>
                                    <td class="text-nowrap align-middle">40.000.000đ</td>
                                    <td class="text-nowrap align-middle">50.000.000đ</td>
                                    <td class="text-nowrap align-middle">Iphone 15 mô tả</td>
                                    <td class="text-nowrap align-middle text-center">100</td>
                                    <td class="text-nowrap align-middle">Iphone 15 nội dung</td>
                                    <td class="text-nowrap align-middle">Iphone 15 thông tin</td>
                                    <td class="text-nowrap align-middle text-center">
                                        <button class="btn btn-success">Hiển Thị</button>
                                    </td>
                                    <td class="text-nowrap align-middle text-center">
                                        <button class="btn btn-primary" style="margin-right: 5px;" data-bs-toggle="modal"
                                            data-bs-target="#capnhatModal">Cập Nhật</button>
                                        <button class="btn btn-danger" data-bs-toggle="modal"
                                            data-bs-target="#xoaModal">Xóa</button>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <div class="modal fade" id="capnhatModal" tabindex="-1" aria-labelledby="exampleModalLabel"
                        aria-hidden="true">
                        <div class="modal-dialog modal-xl">
                            <div class="modal-content">
                                <div class="modal-header">
                                    <h1 class="modal-title fs-5" id="exampleModalLabel">Cập Nhật Sản Phẩm</h1>
                                    <button type="button" class="btn-close" data-bs-dismiss="modal"
                                        aria-label="Close"></button>
                                </div>
                                <div class="modal-body">
                                    <div class="row mt-2">
                                        <div class="col-md-6">
                                            <label>Tên Sản Phẩm</label>
                                            <input type="text" class="form-control">
                                        </div>
                                        <div class="col-md-6">
                                            <label>Hình Ảnh</label>
                                            <input type="text" class="form-control">
                                        </div>
                                    </div>
                                    <div class="row mt-2">
                                        <div class="col-md-6">
                                            <label>Giá Bán</label>
                                            <input type="number" class="form-control">
                                        </div>
                                        <div class="col-md-6">
                                            <label>Giá Gốc</label>
                                            <input type="number" class="form-control">
                                        </div>
                                    </div>
                                    <div class="row mt-2">
                                        <div class="col-md-4">
                                            <label>Chuyên Mục</label>
                                            <select class="form-control">
                                                <template v-for="(v, k) in data_chuyen_muc" >
                                                    <option v-if="v.tinh_trang == 1" v-bind:value="v.id">{{ v.ten_chuyen_muc }}</option>
                                                </template>
                                            </select>
                                        </div>
                                        <div class="col-md-4">
                                            <label>Thương Hiệu</label>
                                            <select class="form-control">
                                                <template v-for="(v, k) in data_thuong_hieu" >
                                                    <option v-if="v.tinh_trang == 1" v-bind:value="v.id">{{ v.ten_thuong_hieu }}</option>
                                                </template>
                                            </select>
                                        </div>
                                        <div class="col-md-4">
                                            <label>Tình Trạng</label>
                                            <select class="form-control">
                                                <option value="1">Hiển Thị</option>
                                                <option value="0">Tặm Tắt</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div class="row mt-2">
                                        <div class="col-md-12">
                                            <label>Mô Tả</label>
                                            <textarea class="form-control" cols="30" rows="3"></textarea>
                                        </div>
                                        <div class="col-md-12 mt-2">
                                            <label>Nội Dung</label>
                                            <textarea class="form-control" cols="30" rows="3"></textarea>
                                        </div>
                                        <div class="col-md-12 mt-2">
                                            <label>Thông Tin Thêm</label>
                                            <textarea class="form-control" cols="30" rows="3"></textarea>
                                        </div>
                                    </div>      
                                </div>
                                <div class="modal-footer">
                                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Đóng</button>
                                    <button type="button" class="btn btn-primary">Thêm Mới</button>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="modal fade" id="xoaModal" tabindex="-1" aria-labelledby="exampleModalLabel"
                        aria-hidden="true">
                        <div class="modal-dialog">
                            <div class="modal-content">
                                <div class="modal-header">
                                    <h1 class="modal-title fs-5" id="exampleModalLabel">Thêm Mới Sản Phẩm</h1>
                                    <button type="button" class="btn-close" data-bs-dismiss="modal"
                                        aria-label="Close"></button>
                                </div>
                                <div class="modal-body">
                                    Bạn có đang xóa sản phẩm có tên: xxx
                                </div>
                                <div class="modal-footer">
                                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Đóng</button>
                                    <button type="button" class="btn btn-primary">Xóa</button>
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
            data_thuong_hieu: [],
            data_chuyen_muc: [],
        }
    },

    mounted() {
        this.loadChuyenMucvaThuongHieu();
    },

    methods: {
        loadChuyenMucvaThuongHieu() {
            baseRequest
                .get("thuong-hieu/data")
                .then((res) => {
                    if (res.data.status) {
                        this.data_thuong_hieu = res.data.data;
                        console.log(this.data_thuong_hieu);
                    }
                });

            baseRequest
                .get("chuyen-muc/data")
                .then((res) => {
                    this.data_chuyen_muc = res.data.data;
                    console.log(this.data_chuyen_muc);
                });    
           
        },
    },
}
</script>

<style></style>