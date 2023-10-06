<template lang="">
    <div class="row">
        <div class="col-12 text-end mb-2">
            <button class="btn btn-outline-primary" data-bs-toggle="modal" data-bs-target="#themmoimodal">Thêm mới</button>
        </div>
        <div class="col-12">
            <div class="card">
                <div class="card-header mt-2">
                    <h4>
                        Danh Sách Sản Phẩm
                    </h4>
                </div>
                <div class="card-body">
                    <div class="table-responsive">
                        <table class="table table-bordered">
                            <thead>
                                <tr class="text-center align-middle">
                                    <th>#</th>
                                    <th>Tên sản phẩm</th>
                                    <th>Hình ảnh</th>
                                    <th>Giá gốc</th>
                                    <th>Giá bán</th>
                                    <th>Mô tả</th>
                                    <!-- <th>Số lượng</th> -->
                                    <th>Nội dung</th>
                                    <th>Thông tin thêm</th>
                                    <th>Tình trạng</th>
                                    <th>Ation</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr class="align-middle text-nowrap" v-for="(v, k) in list_san_pham">
                                    <th>{{ k + 1 }}</th>
                                    <td>{{ v.ten_san_pham }}</td>
                                    <td class="text-center">
                                        <img class="img-fluid" style="width: 100%; height: 100px;" v-bind:src="convertImage(v.hinh_anh)" alt="">
                                    </td>
                                    <td class="text-end">{{ v.gia_goc }} đ</td>
                                    <td class="text-end">{{ v.gia_ban }} đ</td>
                                    <td  class="text-center"><i class="fa-solid fa-circle-info fa-2x text-primary" v-on:click="mo_ta = v.mo_ta" data-bs-toggle="modal" data-bs-target="#exampleModal"></i></td>
                                    <!-- <td class="text-centers">{{ v.so_luong }}</td> -->
                                    <td  class="text-center"><i class="fa-solid fa-circle-info fa-2x text-primary" v-on:click="mo_ta = v.noi_dung" data-bs-toggle="modal" data-bs-target="#exampleModal"></i></td>
                                    <td  class="text-center"><i class="fa-solid fa-circle-info fa-2x text-primary" v-on:click="mo_ta = v.thong_tin_them" data-bs-toggle="modal" data-bs-target="#exampleModal"></i></td>
                                    <td class="text-center">
                                        <button @click="doi_trang_thai(v)" v-if="v.tinh_trang == 1" class="btn btn-success">Hiển thị</button>
                                        <button @click="doi_trang_thai(v)" v-else class="btn btn-warning">Tạm tắt</button>
                                    </td>
                                    <td class="text-center">
                                        <button @click="san_pham_update = Object.assign({}, v)" class="btn btn-primary me-1"
                                            data-bs-toggle="modal" data-bs-target="#capnhapsanpham">Cập nhật</button>
                                        <button @click="san_pham_del = v" class="btn btn-danger" data-bs-toggle="modal"
                                            data-bs-target="#xoasanpham">Xóa</button>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
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
                            <div class="col-6">
                                <div>
                                    <label class="form-label">Tên sản phẩm</label>
                                    <input v-model="san_pham_add.ten_san_pham" type="text" class="form-control">
                                </div>
                            </div>
                            <div class="col-6">
                                <div>
                                    <label class="form-label">Hình ảnh</label>
                                    <input v-model="san_pham_add.hinh_anh" type="text" class="form-control">
                                </div>
                            </div>
                            <div class="col-6 mt-2">
                                <div>
                                    <label class="form-label">Giá gốc</label>
                                    <input v-model="san_pham_add.gia_goc" type="number" class="form-control">
                                </div>
                            </div>

                            <div class="col-6 mt-2">
                                <div>
                                    <label class="form-label">Giá bán</label>
                                    <input v-model="san_pham_add.gia_ban" type="number" class="form-control">
                                </div>
                            </div>
                            <!-- <div class="col-4 mt-2">
                                <div>
                                    <label class="form-label">Số lượng</label>
                                    <input v-model="san_pham_add.so_luong" type="number" class="form-control">
                                </div>
                            </div> -->

                            <div class="col-4 mt-2">
                                <div>
                                    <label class="form-label">Mô tả</label>
                                    <textarea v-model="san_pham_add.mo_ta" class="form-control" id="" cols="30"
                                        rows="4"></textarea>
                                </div>
                            </div>
                            <div class="col-4 mt-2">
                                <div>
                                    <label class="form-label">Nội dung</label>
                                    <textarea v-model="san_pham_add.noi_dung" class="form-control" id="" cols="30"
                                        rows="4"></textarea>
                                </div>
                            </div>
                            <div class="col-4 mt-2">
                                <div>
                                    <label class="form-label">Thông tin thêm</label>
                                    <textarea v-model="san_pham_add.thong_tin_them" class="form-control" id="" cols="30"
                                        rows="4"></textarea>
                                </div>
                            </div>
                            <div class="col-4 mt-2">
                                <div>
                                    <label class="form-label">Chuyên mục</label>
                                    <select v-model="san_pham_add.id_chuyen_muc" class="form-select">
                                        <template v-for="(v, k) in list_chuyen_muc">
                                            <option v-bind:value="v.id">{{ v.ten_chuyen_muc }}</option>
                                        </template>
                                    </select>
                                </div>
                            </div>
                            <div class="col-4 mt-2">
                                <div>
                                    <label class="form-label">Thương hiệu</label>
                                    <select v-model="san_pham_add.id_thuong_hieu" class="form-select">
                                        <template v-for="(v, k) in list_thuong_hieu">
                                            <option v-bind:value="v.id">{{ v.ten_thuong_hieu }}</option>
                                        </template>
                                    </select>
                                </div>
                            </div>
                            <div class="col-4 mt-2">
                                <div>
                                    <label class="form-label">Tình trạng</label>
                                    <select v-model="san_pham_add.tinh_trang" class="form-select">
                                        <option v-bind:value="0">Tạm tắt</option>
                                        <option v-bind:value="1">Hiển thị</option>
                                    </select>
                                </div>
                            </div>
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
        <div class="modal fade" id="capnhapsanpham" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog modal-xl">
                <div class="modal-content">
                    <div class="modal-header">
                        <h1 class="modal-title fs-5" id="exampleModalLabel">Cập nhập sản phẩm
                        </h1>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                        <div class="row">
                            <div class="col-6">
                                <div>
                                    <label class="form-label">Tên sản phẩm</label>
                                    <input v-model="san_pham_update.ten_san_pham" type="text" class="form-control">
                                </div>
                            </div>
                            <div class="col-6">
                                <div>
                                    <label class="form-label">Hình ảnh</label>
                                    <input v-model="san_pham_update.hinh_anh" type="text" class="form-control">
                                </div>
                            </div>
                            <div class="col-6 mt-2">
                                <div>
                                    <label class="form-label">Giá gốc</label>
                                    <input v-model="san_pham_update.gia_goc" type="text" class="form-control">
                                </div>
                            </div>

                            <div class="col-6 mt-2">
                                <div>
                                    <label class="form-label">Giá bán</label>
                                    <input v-model="san_pham_update.gia_ban" type="text" class="form-control">
                                </div>
                            </div>

                            <!-- <div class="col-4 mt-2">
                                <div>
                                    <label class="form-label">Số lượng</label>
                                    <input v-model="san_pham_update.so_luong" type="text" class="form-control">
                                </div>
                            </div> -->
                            
                            <div class="col-4 mt-2">
                                <div>
                                    <label class="form-label">Mô tả</label>
                                    <textarea v-model="san_pham_update.mo_ta" class="form-control" id="" cols="30" rows="4"></textarea>
                                </div>
                            </div>
                            <div class="col-4 mt-2">
                                <div>
                                    <label class="form-label">Nội dung</label>
                                    <textarea v-model="san_pham_update.noi_dung" class="form-control" id="" cols="30" rows="4"></textarea>
                                </div>
                            </div>
                            <div class="col-4 mt-2">
                                <div>
                                    <label class="form-label">Thông tin thêm</label>
                                    <textarea v-model="san_pham_update.thong_tin_them" class="form-control" id="" cols="30" rows="4"></textarea>
                                </div>
                            </div>
                            <div class="col-4 mt-2">
                                <div>
                                    <label class="form-label">Chuyên mục</label>
                                    <select v-model="san_pham_update.id_chuyen_muc" class="form-control">
                                        <template v-for="(v, k) in list_chuyen_muc">
                                            <option v-bind:value="v.id">{{ v.ten_chuyen_muc }}</option>
                                        </template>
                                    </select>
                                </div>
                            </div>
                            <div class="col-4 mt-2">
                                <div>
                                    <label class="form-label">Thương hiệu</label>
                                    <select v-model="san_pham_update.id_thuong_hieu" class="form-control">
                                        <template v-for="(v, k) in list_thuong_hieu">
                                            <option v-bind:value="v.id">{{ v.ten_thuong_hieu }}</option>
                                        </template>
                                    </select>
                                </div>
                            </div>
                            <div class="col-4 mt-2">
                                <div>
                                    <label class="form-label">Tình trạng</label>
                                    <select v-model="san_pham_update.tinh_trang" class="form-control">
                                        <option v-bind:value="1">Hiển thị</option>
                                        <option v-bind:value="0">Tạm tắt</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                        <button @click="capnhap()" data-bs-dismiss="modal" type="button" class="btn btn-primary">Cập nhập</button>
                    </div>
                </div>
            </div>
        </div>
        <div class="modal fade" id="xoasanpham" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
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
                                    Bạn chắc chắn muốn xóa <b class="text-danger">{{ san_pham_del.ten_san_pham }}</b> khỏi
                                    danh sách?
                                </div>
                            </div>
                        </div>

                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Đóng</button>
                        <button type="button" class="btn btn-danger" data-bs-dismiss="modal" v-on:click="xoa()">Xác Nhận</button>
                    </div>
                </div>
            </div>
        </div>
        <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content">
            <div class="modal-header">
                <h1 class="modal-title fs-5" id="exampleModalLabel">Modal title</h1>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
                {{mo_ta}}
            </div>
            <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                <button type="button" class="btn btn-primary">Save changes</button>
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
            list_chuyen_muc: [],
            list_thuong_hieu: [],
            list_san_pham: [],
            san_pham_add: {
                'tinh_trang': 0,
            },
            san_pham_update: {
                'tinh_trang': 0,
            },
            san_pham_del: {},
            mo_ta: {},
        }
    },
    mounted() {
        this.loadData();
    },
    methods: {
        loadData() {
            baseRequest
                .get('chuyen-muc/data')
                .then((res) => {
                    this.list_chuyen_muc = res.data.data;
                })
            baseRequest
                .get('thuong-hieu/data')
                .then((res) => {
                    this.list_thuong_hieu = res.data.data;
                })
            baseRequest
                .get('san-pham/data')
                .then((res) => {
                    this.list_san_pham = res.data.data;
                    // console.log(this.list_san_pham);
                })
        },
        themmoi() {
            baseRequest
                .post("san-pham/create", this.san_pham_add)
                .then((res) => {
                    // console.log(res.data);
                    functionBasic.displaySuccess(res);
                    this.loadData();
                    this.san_pham_add={};
                });
        },
        xoa() {
            baseRequest
                .post("san-pham/delete", this.san_pham_del)
                .then((res) => {
                    if (res.data.status == 1) {
                        functionBasic.displaySuccess(res);
                        this.loadData();
                    }
                });
        },
        capnhap() {
            baseRequest
                .post("san-pham/update", this.san_pham_update)
                .then((res) => {
                    if (res.data.status == 1) {
                        functionBasic.displaySuccess(res);
                        this.loadData();
                    }
                });
        },
        doi_trang_thai(v) {
            baseRequest
                .post("san-pham/status", v)
                .then((res) => {
                    // console.log(res.data.data);
                    functionBasic.displaySuccess(res);
                    this.loadData();
                });
        },
        convertImage(text){
            text = text.toString();
            const Image = text.split(";");
            return Image[0];
        }
    },
}
</script>

<style lang=""></style>