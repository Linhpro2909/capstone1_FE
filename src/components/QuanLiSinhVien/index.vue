<template lang="">
<div class="row ">
    <div class="col-4">
        <h4 class="text-danger">Quản Lý Sinh Viên</h4>
    </div>
</div>
<div class="row">
    <div class="col-4">
        <div class="card">
            <div class="card-header">
                Thêm Mới Lớp
            </div>
            <div class="card-body">
                <label for="">Tên Sinh Viên</label>
                <input v-model="sinh_vien_add.ten_sinh_vien" type="text" class="form-control">
                <label for="">Mã Sinh Viên</label>
                <input v-model="sinh_vien_add.ma_sinh_vien" type="text" class="form-control">
                <label for="">Số Điện Thoại</label>
                <input v-model="sinh_vien_add.so_dien_thoai" type="tel" id="phone" name="phone" pattern="[0-9]{10}" class="form-control" required>
                <label for="">Điểm GPA</label>
                <input v-model="sinh_vien_add.diem_gpa" type="float" class="form-control">

            </div>
            <div class="card-footer text-end">
                <button v-on:click="them_moi()" class="btn btn-outline-success">Tạo</button>
            </div>
        </div>
    </div>
    <div class="col-8">
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
                        <tr>
                            <th><input type="checkbox" class="form-check-input" id="exampleCheck1"></th>
                            <th>Thao Tác</th>
                            <th>#</th>
                            <th>Mã sinh viên</th>
                            <th>Tên sinh viên</th>
                            <th>Số Điện Thoại</th>
                            <th>Điểm GPA</th>

                        </tr>
                    </thead>
                    <tbody>
                        <template v-for="(v,k) in list_sinh_vien">
                            <tr>
                                <td><input type="checkbox" class="form-check-input" id="exampleCheck1"></td>
                                <td>
                                    <button @:click="sinh_vien_update=Object.assign({},v)" style="margin-right: 10px;" class="btn btn-outline-info" data-bs-toggle="modal" data-bs-target="#exampleSua">Sửa</button>

                                </td>
                                <td>{{k+1}}</td>
                                <td>{{v.ma_sinh_vien}}</td>
                                <td class="uppercase">{{v.ten_sinh_vien}}</td>
                                <td>
                                    <ul>
                                        <li>
                                            0 {{v.so_dien_thoai}}
                                        </li>

                                    </ul>
                                </td>
                                <td>
                                    {{v.diem_gpa}}
                                </td>

                            </tr>
                        </template>

                    </tbody>
                </table>

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
<!-- Modal -->
<div class="modal fade" id="exampleSua" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h1 class="modal-title fs-5" id="exampleSua">Cập nhật</h1>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        <div class="card-body">
                <label for="">Tên Sinh Viên</label>
                <input v-model="sinh_vien_update.ten_sinh_vien" type="text" class="form-control">
                <label for="">Mã Sinh Viên</label>
                <input v-model="sinh_vien_update.ma_sinh_vien" type="text" class="form-control">
                <label for="">Số Điện Thoại</label>
                <input v-model="sinh_vien_update.so_dien_thoai" type="tel" id="phone" name="phone" pattern="[0-9]{10}" class="form-control" required>
                <label for="">Điểm GPA</label>
                <input v-model="sinh_vien_update.diem_gpa" type="float" class="form-control">

            </div>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Đóng</button>
        <button v-on:click="capNhat()" type="button" class="btn btn-primary" data-bs-dismiss="modal">Lưu</button>
      </div>
    </div>
  </div>
</div>
</template>

<script>
import Toaster from '@meforma/vue-toaster';
import baseRequest from '../../core/baseRequest';
import functionBasic from '../../core/functionBasic';
export default {
    data() {
        return {
            list_sinh_vien: [],
            sinh_vien_add: {},
            sinh_vien_update: {},
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

        load() {
            baseRequest
                .get("sinh-vien/data")
                .then((res) => {
                    this.list_sinh_vien = res.data.data;
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
