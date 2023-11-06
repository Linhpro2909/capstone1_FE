<template lang="">
<div class="row">
    <div class="">
        <h1>Quản Lí Giảng Viên</h1>
    </div>
    <div class="row mt-2">
        <div class="col-10 ">

        </div>
        <div class="col-2 text-end">
            <button class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleThemMoi">Thêm Mới</button>

        </div>

    </div>
    <!-- Modal -->
    <div class="modal fade" id="exampleThemMoi" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <h1 class="modal-title fs-5" id="exampleThemMoi">Thêm Mới Giảng Viên</h1>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <div class="card">

                        <div class="card-body">
                            <div class="card-body">
                                <label for="">Tên Giảng Viên</label>
                                <input v-model="giang_vien_add.Name" type="text" class="form-control" placeholder="Nhập tên giảng viên">
                                <label for="">Ngày Tháng Năm Sinh</label>
                                <input v-model="giang_vien_add.Date_of_birth" type="date" class="form-control" placeholder="Nhập ngày tháng năm sinh">
                                <label for="">Địa Chỉ</label>
                                <input v-model="giang_vien_add.Address" type="text" class="form-control" placeholder="Nhập địa chỉ">
                                <label for="">Đơn Vị Đang Công Tác</label>
                                <input v-model="giang_vien_add.don_vi_cong_tac" type="text" class="form-control" placeholder="Nhập đơn vị đang công tác">
                            </div>

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
    <div class="col-12 mt-2">
        <div class="card">
            <div class="card-header">
                <h5>Danh Sách Giảng Viên</h5>
            </div>
            <div class="card-body">
                <div class="row">
                    <div class="col-2">
                        <button class="btn btn-danger"><i class="fa-solid fa-trash" style="color: #c8bab8;"></i> Xóa</button>
                    </div>
                    <div class="col-4">
                        <div class="input-group mb-3">
                            <input type="text" class="form-control" placeholder="Nhập Tên Giảng Viên Cần Tìm" aria-label="Recipient's username" aria-describedby="button-addon2">
                            <button class="btn btn-outline-secondary" type="button" id="button-addon2">Tìm Kiếm</button>
                        </div>
                    </div>

                </div>
                <table class="table table-bordered mt-2">
                    <thead class="text-center">
                        <tr class="text-center">
                            <th><input type="checkbox" class="form-check-input" id="exampleCheck1"></th>
                            <th>Action</th>
                            <th>#</th>
                            <th>Tên Giảng viên</th>
                            <th>Năm Sinh</th>
                            <th>Địa Chỉ</th>
                            <th>Đơn Vị Công Tác</th>

                        </tr>
                    </thead>

                    <tbody class="text-center">
                        <template v-for="(v,k) in list_giang_vien">
                            <tr>
                                <td><input type="checkbox" class="form-check-input" id="exampleCheck1"></td>
                                <td>
                                    <button style="margin-right:10px;" @click="giang_vien_update = Object.assign({},v)" class="btn btn-outline-info" data-bs-toggle="modal" data-bs-target="#exampleCapNhat">Cập Nhật</button>
                                    <button  class="btn btn-dark" data-bs-toggle="modal" data-bs-target="#exampleChiTiet">Chi Tiết</button>
                                </td>
                                <td>{{k+1}}</td>
                                <td>{{v.Name}}</td>
                                <td class="uppercase">{{v.Date_of_birth}}</td>
                                <td>
                                     {{v.Address}}   
                                </td>
                                <td>
                                    {{v.don_vi_cong_tac}}
                                </td>

                            </tr>
                        </template>

                    </tbody>
                </table>
            </div>
        </div>
    </div>
</div>
<!-- Modal -->
<div class="modal fade" id="exampleCapNhat" tabindex="-1" aria-labelledby="exampleCapNhat" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h1 class="modal-title fs-5" id="exampleModalLabel">Cập Nhật</h1>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        <div class="card-body">
                            <div class="card-body">
                                <label for="">Tên Giảng Viên</label>
                                <input v-model="giang_vien_update.Name" type="text" class="form-control" placeholder="Nhập tên giảng viên">
                                <label for="">Ngày Tháng Năm Sinh</label>
                                <input v-model="giang_vien_update.Date_of_birth" type="date" class="form-control" placeholder="Nhập ngày tháng năm sinh">
                                <label for="">Địa Chỉ</label>
                                <input v-model="giang_vien_update.Address" type="text" class="form-control" placeholder="Nhập địa chỉ">
                                <label for="">Đơn Vị Đang Công Tác</label>
                                <input v-model="giang_vien_update.don_vi_cong_tac" type="text" class="form-control" placeholder="Nhập đơn vị đang công tác">
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
</template>

<script>
import Toaster from '@meforma/vue-toaster';
import baseRequest from '../../core/baseRequest';
import functionBasic from '../../core/functionBasic';
export default {
    data(){
        return{
            list_giang_vien: [],
            giang_vien_add: {},
            giang_vien_update: {},
        }
    },
    mounted() {
        this.load()
    },
    methods: {
        them_moi(){
            baseRequest
                .post("giang-vien/create", this.giang_vien_add)
                .then((res) => {
                    functionBasic.displaySuccess(res);
                    this.load();
                });
        },
        load(){
            baseRequest
                .get("giang-vien/data")
                .then((res)=>{
                    this.list_giang_vien =res.data.data;
                });
        },
        capNhat(){
            baseRequest
                .post("giang-vien/update", this.giang_vien_update)
                .then((res) => {
                    functionBasic.displaySuccess(res);
                    this.load();
                });
        },
    },
}
</script>

<style lang="">

</style>
