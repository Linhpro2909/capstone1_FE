<template lang="">
<div class="row ">
    <div class="col-4">
        <h4 class="text-danger">Quản Lý Sinh Viên</h4>
    </div>
</div>
<div class="row">
    <div class="col-4">

    </div>
    <div class="col-8 text-end">
        <button class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleThemMoi">Thêm Mới</button>
    </div>
    <!-- Modal -->
    <div class="modal fade" id="exampleThemMoi" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <h1 class="modal-title fs-5" id="exampleThemMoi">Thêm Mới Sinh Viên</h1>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <div class="card">

                        <div class="card-body">

                            <label for="">Tên Sinh Viên</label>
                            <input v-model="sinh_vien_add.ten_sinh_vien" type="text" class="form-control">
                            <label for="">Mã Sinh Viên</label>
                            <input v-model="sinh_vien_add.ma_sinh_vien" type="text" class="form-control">
                            <label for="">Khóa</label>
                            <select v-model="sinh_vien_add.id_nien_khoa" class="form-select">
                                <template v-for="(v, k) in list_nien_khoa">
                                    <option v-bind:value="v.id">{{v.ten_nien_khoa}}</option>
                                </template>
                            </select>
                            <label for="">Số Điện Thoại</label>
                            <input v-model="sinh_vien_add.so_dien_thoai" type="tel" id="phone" name="phone" pattern="[0-9]{10}" class="form-control" required>
                            <label for="">Điểm GPA</label>
                            <input v-model="sinh_vien_add.diem_gpa" type="float" class="form-control">

                        </div>

                    </div>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Đóng</button>
                    <button @click="them_moi()" type="button" class="btn btn-outline-success" data-bs-dismiss="modal">Thêm</button>
                </div>
            </div>
        </div>
    </div>
</div>
<div class="row mt-2">
    <div class="col-12">
        <div class="card">
            <div class="card-header">
                <h5 class="text-danger">
                    Danh Sách Sinh Viên
                </h5>
            </div>
            <div class="card-body">
                <div class="row mb-2">
                    <div class="col">

                        <div class="input-group mb-3">

                            <input type="text" class="form-control" placeholder="nhập tên sinh viên cần tìm" aria-label="Recipient's username" aria-describedby="button-addon2">
                            <button class="btn btn-outline-secondary" type="button" id="button-addon2">Tìm</button>
                        </div>
                        <button class="btn btn-outline-danger">
                            <i class="fa-solid fa-trash-can"></i>Xoá
                        </button>

                        <button class="btn btn-outline-primary" data-bs-toggle="modal" data-bs-target="#exampleModal" style="margin-left:5px;">Chia nhóm</button>
                    </div>

                </div>
                <table class="table table-bordered">
                    <thead>
                        <tr class="text-center">
                            <th><input type="checkbox" class="form-check-input" id="exampleCheck1"></th>
                            <th>Thao Tác</th>
                            <th>#</th>
                            <th>Mã sinh viên</th>
                            <th>Tên sinh viên</th>
                            <th>Khoá</th>
                            <th>Điểm GPA</th>

                        </tr>
                    </thead>
                    <tbody class="text-center">

                        <template v-for="(v,k) in list_sinh_vien">
                            <tr>
                                <td><input type="checkbox" class="form-check-input" id="exampleCheck1"></td>
                                <td>
                                    <button style="margin-right:10px;" @click="sinh_vien_update = Object.assign({},v)" class="btn btn-outline-info" data-bs-toggle="modal" data-bs-target="#exampleCapNhat">Cập Nhật</button>
                                    <button  class="btn btn-dark" data-bs-toggle="modal" data-bs-target="#exampleChiTiet">Chi Tiết</button>
                                </td>
                                <td>{{k+1}}</td>
                                <td>{{v.ma_sinh_vien}}</td>
                                <td class="uppercase">{{v.ten_sinh_vien}}</td>
                                <td>
                                    {{ getTenNienKhoa(v.id_nien_khoa) }}
                                    <!-- <span v-for="(nienKhoa, k) in list_nien_khoa">
                                        {{ nienKhoa.ten_nien_khoa }}

                                    </span> -->
                                </td>
                                <td>
                                    {{v.diem_gpa}}
                                </td>

                            </tr>
                        </template>

                    </tbody>
                </table>
                <!-- Modal -->
                <div class="modal fade" id="exampleCapNhat" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div class="modal-dialog">
                        <div class="modal-content">
                            <div class="modal-header">
                                <h1 class="modal-title fs-5" id="exampleModalLabel">Cập Nhật</h1>
                                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div class="modal-body">
                                <div class="card">

                                    <div class="card-body">

                                        <label for="">Tên Sinh Viên</label>
                                        <input v-model="sinh_vien_update.ten_sinh_vien" type="text" class="form-control">
                                        <label for="">Mã Sinh Viên</label>
                                        <input v-model="sinh_vien_update.ma_sinh_vien" type="text" class="form-control">
                                        <label for="">Khóa</label>
                                        <!-- <input v-model="sinh_vien_update.so_dien_thoai" type="tel" id="phone" name="phone" pattern="[0-9]{10}" class="form-control" required> -->
                                        <select v-model="sinh_vien_update.id_nien_khoa" class="form-select">
                                            <template v-for="(v, k) in list_nien_khoa">
                                                <option v-bind:value="v.id">{{v.ten_nien_khoa}}</option>
                                            </template>
                                        </select>
                                        <label for="">Điểm GPA</label>
                                        <input v-model="sinh_vien_update.diem_gpa" type="float" class="form-control">

                                    </div>

                                </div>
                            </div>
                            <div class="modal-footer">
                                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Đóng</button>
                                <button v-on:click="capNhat()" type="button" class="btn btn-primary" data-bs-dismiss="modal">Lưu</button>
                            </div>
                        </div>
                    </div>
                </div>
                <!-- Modal -->
                <div class="modal fade" id="exampleChiTiet" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div class="modal-dialog modal-lg">
                        <div class="modal-content">
                            <div class="modal-header">
                                <h1  class="modal-title fs-5" id="exampleCHiTiet">Chi Tiết</h1>
                                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div class="modal-body">
                                <table class="table table-bordered">
                                    <thead>
                                        <tr>

                                            <th>#</th>
                                            <th>Mã sinh viên</th>
                                            <th>Tên sinh viên</th>
                                            <th>Số Điện Thoại</th>
                                            <th>Điểm GPA</th>
                                            <th>Nhóm Đồ Án</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr v-for="(v) in list_sinh_vien" :key="v.id">
                                            <td>{{ v.id }}</td>
                                            <td>{{ v.ma_sinh_vien }}</td>
                                            <td>{{ v.ten_sinh_vien }}</td>
                                            <td>{{ v.so_dien_thoai }}</td>
                                            <td>{{ v.diem_gpa }}</td>
                                            <td>null</td>
                                        </tr>
                                        <!-- <div v-if="selectedSinhVien">
                                    
                                    <h2>Chi tiết sinh viên</h2>
                                    <p>ID: {{ selectedSinhVien.id }}</p>
                                    <p>Mã sinh viên: {{ selectedSinhVien.ma_sinh_vien }}</p>
                                    <p>Tên sinh viên: {{ selectedSinhVien.ten_sinh_vien }}</p>
                                    <p>Số điện thoại: {{ selectedSinhVien.so_dien_thoai }}</p>
                                    <p>Điểm GPA: {{ selectedSinhVien.diem_gpa }}</p>
                                    </div> -->
                                    </tbody>
                                </table>
                                
                            </div>
                            <div class="modal-footer">
                                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Đóng</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
<div class="row text-end">
    <div class="col-6">

    </div>
    <div class="col-4">

    </div>
    <div class="col-2 ">
        <nav aria-label="Page navigation example ">
            <ul class="pagination">
                <li class="page-item">
                    <a class="page-link" href="#" aria-label="Previous">
                        <span aria-hidden="true">&laquo;</span>
                    </a>
                </li>
                <li class="page-item"><a class="page-link" href="#">1</a></li>
                <li class="page-item"><a class="page-link" href="#">2</a></li>
                <li class="page-item"><a class="page-link" href="#">3</a></li>

                <li class="page-item">
                    <a class="page-link" href="#" aria-label="Next">
                        <span aria-hidden="true">&raquo;</span>
                    </a>
                </li>
            </ul>
        </nav>
    </div>
</div>

<!-- Modal -->
<div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog">
        <div class="modal-content">
            <div class="modal-header">
                <h1 class="modal-title fs-5" id="exampleModalLabel">Chia nhóm</h1>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
                <label for="">Tên nhóm</label>
                <input type="text" class="form-control" placeholder="nhập mã sinh viên">
                <label for=""> Tên giảng viên hướng dẫn</label>
                <select name="" id="" style="padding: 8px 154px; margin:3px; border-radius:6px; ">
                    <option value="1">
                        -Chọn tên giảng viên-
                    </option>
                </select>
            </div>
            <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Đóng</button>
                <button type="button" class="btn btn-primary">Xác nhận chia nhóm</button>
            </div>
        </div>
    </div>
</div>
<!-- ------------------ -->
</template>

<script>
import Toaster from '@meforma/vue-toaster';
import baseRequest from '../../core/baseRequest';
import functionBasic from '../../core/functionBasic';
export default {
    data() {
        return {
            list_sinh_vien: [],
            list_nien_khoa: [],
            sinh_vien_add: {},
            sinh_vien_update: {},
            list_sinh_vien_detail: [],
            
        }
    },
    mounted() {
        this.load()
    },
    methods: {
        them_moi() {
            baseRequest
                .post("sinh-vien/create", this.sinh_vien_add)
                .then((res) => {
                    functionBasic.displaySuccess(res);
                    this.load();

                });
        },
        getTenNienKhoa(idNienKhoa) {
            const nienKhoa = this.list_nien_khoa.find((nk) => nk.id === idNienKhoa);
            return nienKhoa ? nienKhoa.ten_nien_khoa : "";
        },
        layTheoId(id) {
        // Sử dụng phương thức `find()` để lấy sinh viên theo ID
        const sinhVien = this.list_sinh_vien.find((v) => v.id === id);
        // Trả về sinh viên đã tìm thấy
        return sinhVien;
      
    },
        load() {
            baseRequest
                .get("sinh-vien/data")
                .then((res) => {
                    this.list_sinh_vien = res.data.data;
                });
            baseRequest
                .get("sinh-vien/data/{id}")
                .then((res) => {
                    this.list_sinh_vien_detail = res.data.data;
                });
            baseRequest
                .get("nien-khoa/data")
                .then((res) => {
                    this.list_nien_khoa = res.data.data;
                });
            
        },
        capNhat() {

            baseRequest
                .post("sinh-vien/update", this.sinh_vien_update)
                .then((res) => {
                    functionBasic.displaySuccess(res);
                    this.load();
                });
        },
    },

}
</script>

<style>

     </style>
