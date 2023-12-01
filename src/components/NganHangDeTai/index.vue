<template lang="">
<div class="row">
    <h3>Quản Lí Đề Tài</h3>
</div>
<div class="row">
    <div class="col-6">
        <div class="card">
            <div class="card-header">
                <div class="d-flex">
                    <h5 class="p-2 w-100 mt-1 text-primary">Đề Tài Đăng Kí Của Sinh Viên</h5>

                </div>
            </div>
            <div class="card-body">
                <table class="table table-bordered">
                    <thead>
                        <tr class="text-center align-middle">
                            <th>Tên Nhóm</th>
                            <th>Tên Đề Tài</th>
                            <th>Mô tả</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        <template v-for="(v,k) in list_de_tai">
                            <template v-if="v.tinh_trang == 0">
                                <tr class="align-middle">
                                    <td>{{ v.ten_nhom }}</td>
                                    <td>{{ v.ten_de_tai }}</td>
                                    <td>
                                        <button v-on:click="mo_ta = v.mo_ta" class="btn btn-info" data-bs-toggle="modal" data-bs-target="#exampleMota">
                                            <i class="fa-solid fa-i"></i>
                                        </button>
                                    </td>

                                    <td class="text-center">
                                        <button v-on:click="duyet(v)" class="btn btn-info me-1">Duyệt</button>
                                        <button v-on:click="duyet1(v)" class="btn btn-danger" data-bs-toggle="modal" data-bs-target="#xoamodal"><i class=" fa-2x fa-solid fa-trash"></i></button>
                                    </td>
                                </tr>
                            </template>

                        </template>
                    </tbody>
                </table>
            </div>
        </div>

    </div>
    <div class="col-6">
        <div class="card">
            <div class="card-header">
                <h5 class="text-primary">Ngân Hàng Đề Tài</h5>
            </div>
            <div class="card-body">
                <table class="table table-bordered">
                    <thead>
                        <tr>

                            <th>Tên Đề Tài</th>
                            <th>
                                Mô tả
                            </th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        <template v-for="(v,k) in list_de_tai">
                            <template v-if="v.tinh_trang==1">
                                <tr class="align-middle">
                                    <td>{{ v.ten_nhom }}</td>
                                    <td>{{ v.ten_de_tai }}</td>
                                    <td>
                                        <button v-on:click="mo_ta = v.mo_ta" class="btn btn-info" data-bs-toggle="modal" data-bs-target="#exampleMota">
                                            <i class="fa-solid fa-i"></i>
                                        </button>
                                    </td>

                                    <td class="text-center">
                                        <button v-on:click="duyet(v)" class="btn btn-danger me-1">Hủy</button>
                                    </td>
                                </tr>
                            </template>
                        </template>
                    </tbody>
                </table>
            </div>
        </div>
    </div>

</div>
<div class="modal fade" id="exampleMota" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog">
        <div class="modal-content">
            <div class="modal-header">
                <h1 class="modal-title fs-5" id="exampleModalLabel">Mô tả</h1>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
                {{mo_ta}}
            </div>
            <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Đóng</button>
            </div>
        </div>
    </div>
</div>
<div class="modal fade" id="exampleMota1" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog">
        <div class="modal-content">
            <div class="modal-header">
                <h1 class="modal-title fs-5" id="exampleModalLabel">Mô tả</h1>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">

            </div>
            <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Đóng</button>
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
            list_de_tai: [],
            detai: {
                'tinh_trang': '',
            },
            mo_ta: {},
        }
    },
    mounted() {
        this.load()
    },
    methods: {
        load() {
            baseRequest
                .get("de-tai-sinh-vien/data")
                .then((res) => {
                    this.list_de_tai = res.data.data;
                });
            // this.handleSelectAll();
        },
        duyet(v) {

            baseRequest
                .post("de-tai-sinh-vien/trang-thai", v)
                .then((res) => {
                    this.load();
                });
        },
        duyet1(v) {

            baseRequest
                .post("de-tai-sinh-vien/trang-thai-1", v)
                .then((res) => {
                    this.load();
                });
        }
    },

}
</script>

<style lang="">

</style>
