<template>
    <div class="row">
        <div class="col-12 text-end mb-2">
            <button class="btn btn-outline-primary" data-bs-toggle="modal" data-bs-target="#themmoimodal">Thêm mới</button>
        </div>
        <div class="modal fade" id="themmoimodal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog modal-xl">
                <div class="modal-content">
                    <div class="modal-header">
                        <h1 class="modal-title fs-5" id="exampleModalLabel">Thêm mới bài viết
                        </h1>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                        <div class="form-group">
                        <label>Tiêu Đề</label>
                        <input class="form-control mt-1" v-model="bai_viet_add.tieu_de" type="text">
                    </div>
                    <div class="form-group">
                        <label>Slug Bài Viêt</label>
                        <input class="form-control mt-1" v-model="bai_viet_add.slug_tieu_de" type="text">
                    </div>
                    <div class="form-group">
                        <label>Hình Ảnh</label>
                        <div class="input-group">
                            <input class="form-control" v-model="bai_viet_add.hinh_anh" type="text" name="filepath">
                            <!-- <span class="input-group-prepend">
                                <a data-preview="holder" class="btn btn-primary">
                                    <i class="fa fa-picture-o"></i> Choose
                                </a>
                            </span> -->
                        </div>
                        <div id="holder" style="margin-top:15px;max-height:100px;"></div>
                    </div>
                    <div class="form-group">
                        <label>Mô Tả Ngắn</label>
                        <textarea class="form-control" v-model="bai_viet_add.mo_ta_ngan" cols="30" rows="3"></textarea>
                    </div>
                    <div class="form-group">
                        <label>Mổ Tả Chi Tiết</label>
                        <textarea class="form-control" v-model="bai_viet_add.mo_ta_chi_tiet" cols="30" rows="3"></textarea>
                    </div>
                    <div class="form-group">
                        <label>Loại Bài Viêt</label>
                        <select class="form-control" v-model="bai_viet_add.loai_bai_viet">
                            <option value="1">Tin Hot</option>
                            <option value="2">Tin Thời Trang</option>
                            <option value="3">Thông Báo</option>
                        </select>
                    </div>
                    <div class="form-group">
                        <label>Tình Trạng</label>
                        <select class="form-control" v-model="bai_viet_add.trang_thai">
                            <option value="1">Hiển Thị</option>
                            <option value="0">Tạm Tắt</option>
                        </select>
                    </div>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                        <button data-bs-dismiss="modal" type="button" class="btn btn-primary" v-on:click="themmoi()">Thêm
                            mới</button>
                    </div>
                </div>
            </div>
        </div>
        <div class="col-md-12">
            <div class="card">
                <div class="card-header">
                    Danh Sách Bài Viết
                </div>
                <div class="card-body">
                    <div class="table-responsive">
                        <table class="table table-bordered">
                            <thead>
                                <tr>
                                    <th class="text-center align-middle text-nowrap">#</th>
                                    <th class="text-center align-middle text-nowrap">Tiêu Đề</th>
                                    <th class="text-center align-middle text-nowrap">Hình Ảnh</th>
                                    <th class="text-center align-middle text-nowrap">Mô Tả Ngắn</th>
                                    <th class="text-center align-middle text-nowrap">Mô Tả Chi Tiết</th>
                                    <th class="text-center align-middle text-nowrap">Loại Bài Viết</th>
                                    <th class="text-center align-middle text-nowrap">Trạng Thái</th>
                                    <th class="text-center align-middle text-nowrap">Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                <template v-for="(v, k) in danh_sach_bai_viet">
                                    <tr>
                                        <th class="text-center align-middle text-nowrap">{{ k + 1 }}</th>
                                        <td class="align-middle text-nowrap">{{ v.tieu_de }}</td>
                                        <td class="text-center align-middle text-nowrap">
                                            <img v-bind:src="convertImage(v.hinh_anh)" class="img-fluid" style="max-width: 100px;">
                                        </td>
                                        <td class="text-center align-middle text-nowrap">
                                            <button data-bs-toggle="modal" data-bs-target="#moTaNgan" v-on:click="chi_tiet = v" class="btn btn-primary"><i style="padding-left: 6px" class="fa-sharp fa-solid fa-info"></i></button>
                                        </td>
                                        <td class="text-center align-middle text-nowrap">
                                            <button data-bs-toggle="modal" data-bs-target="#moTaChiTiet" v-on:click="chi_tiet = v" class="btn btn-primary"><i style="padding-left: 6px" class="fa-sharp fa-solid fa-info"></i></button>
                                        </td>
                                        <td class="align-middle text-center text-nowrap">
                                            <p v-if="v.loai_bai_viet == 1">Tin Hot</p>
                                            <p v-else-if="v.loai_bai_viet == 2">Tin Thời Trang</p>
                                            <p v-else>Thông Báo</p>
                                        </td>
                                        <td class="align-middle text-center text-nowrap">
                                            <button class="btn btn-primary" v-if="v.trang_thai == 1" v-on:click="doi_trang_thai(v)">Hiển Thị</button>
                                            <button class="btn btn-danger" v-else v-on:click="doi_trang_thai(v)">Tạm Tắt</button>
                                        </td>
                                        <td class="text-center align-middle text-nowrap">
                                            <button class="btn btn-info" data-bs-toggle="modal" v-on:click="bai_viet_update = v" data-bs-target="#updateModal">Cập Nhật</button>
                                            <button class="btn btn-danger" data-bs-toggle="modal" v-on:click="bai_viet_delete = v" data-bs-target="#deleteModal">Xóa Bỏ</button>
                                        </td>
                                    </tr>
                                </template>
                            </tbody>
                        </table>
                    </div>
                    <div class="modal fade" id="moTaChiTiet" tabindex="-1" aria-hidden="true" style="display: none;">
                        <div class="modal-dialog modal-xl">
                            <div class="modal-content">
                                <div class="modal-header">
                                    <h5 class="modal-title">Mô Tả Chi Tiết</h5>
                                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                </div>
                                <div class="modal-body">
                                    {{ chi_tiet.mo_ta_chi_tiet }}
                                </div>
                                <div class="modal-footer">
                                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Đóng</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="modal fade" id="moTaNgan" tabindex="-1" aria-hidden="true" style="display: none;">
                        <div class="modal-dialog modal-xl">
                            <div class="modal-content">
                                <div class="modal-header">
                                    <h5 class="modal-title">Mô Tả Ngắn</h5>
                                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                </div>
                                <div class="modal-body">
                                    {{ chi_tiet.mo_ta_ngan }}
                                </div>
                                <div class="modal-footer">
                                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Đóng</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="modal fade" id="deleteModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                        <div class="modal-dialog" role="document">
                        <div class="modal-content">
                            <div class="modal-header">
                            <h5 class="modal-title" id="exampleModalLabel">Xóa Tin Tức</h5>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div class="modal-body">
                                Bạn có chắc chắn xóa tin này!
                            </div>
                            <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Đóng</button>
                            <button type="button" class="btn btn-danger" data-bs-dismiss="modal" v-on:click="xoa()">Xóa Tin</button>
                            </div>
                        </div>
                        </div>
                    </div>
                    <div class="modal fade" id="updateModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                        <div class="modal-dialog modal-xl" role="document">
                            <div class="modal-content">
                                <div class="modal-header">
                                    <h1 class="modal-title fs-5" id="exampleModalLabel">Thêm mới bài viết
                                    </h1>
                                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                </div>
                                <div class="modal-body">
                                    <div class="form-group">
                                    <label>Tiêu Đề</label>
                                    <input class="form-control mt-1" v-model="bai_viet_update.tieu_de" type="text">
                                </div>
                                <div class="form-group">
                                    <label>Slug Bài Viêt</label>
                                    <input class="form-control mt-1" v-model="bai_viet_update.slug_tieu_de" type="text">
                                </div>
                                <div class="form-group">
                                    <label>Hình Ảnh</label>
                                    <div class="input-group">
                                        <input class="form-control" v-model="bai_viet_update.hinh_anh" type="text" name="filepath">
                                        <!-- <span class="input-group-prepend">
                                            <a data-preview="holder" class="btn btn-primary">
                                                <i class="fa fa-picture-o"></i> Choose
                                            </a>
                                        </span> -->
                                    </div>
                                    <div id="holder" style="margin-top:15px;max-height:100px;"></div>
                                </div>
                                <div class="form-group">
                                    <label>Mô Tả Ngắn</label>
                                    <textarea class="form-control" v-model="bai_viet_update.mo_ta_ngan" cols="30" rows="3"></textarea>
                                </div>
                                <div class="form-group">
                                    <label>Mổ Tả Chi Tiết</label>
                                    <textarea class="form-control" v-model="bai_viet_update.mo_ta_chi_tiet" cols="30" rows="3"></textarea>
                                </div>
                                <div class="form-group">
                                    <label>Loại Bài Viêt</label>
                                    <select class="form-control" v-model="bai_viet_update.loai_bai_viet">
                                        <option value="1">Tin Hot</option>
                                        <option value="2">Tin Thời Trang</option>
                                        <option value="3">Thông Báo</option>
                                    </select>
                                </div>
                                <div class="form-group">
                                    <label>Tình Trạng</label>
                                    <select class="form-control" v-model="bai_viet_update.trang_thai">
                                        <option value="1">Hiển Thị</option>
                                        <option value="0">Tạm Tắt</option>
                                    </select>
                                </div>
                                </div>
                                <div class="modal-footer">
                                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Đóng</button>
                                    <button data-bs-dismiss="modal" type="button" class="btn btn-primary" v-on:click="capnhap()">Cập Nhật</button>
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
            bai_viet_add         : {},
            bai_viet_update      : {},
            bai_viet_delete      : {},
            danh_sach_bai_viet   : {},
            chi_tiet             : {}
        }
    },
    mounted() {
        this.loadData();
    },
    methods: {
        themmoi() {
            baseRequest
                .post("bai-viet/create", this.bai_viet_add)
                .then((res) => {
                    functionBasic.displaySuccess(res);
                    this.loadData();
                    this.bai_viet_add = {};
                });
        },
        loadData() {
            baseRequest
                .get('bai-viet/data')
                .then((res) => {
                    this.danh_sach_bai_viet = res.data.data;
                })
        },
        xoa() {
            baseRequest
                .post("bai-viet/delete", this.bai_viet_delete)
                .then((res) => {
                    if (res.data.status == 1) {
                        functionBasic.displaySuccess(res);
                        this.loadData();
                    }
                });
        },
        capnhap() {
            baseRequest
                .post("bai-viet/update", this.bai_viet_update)
                .then((res) => {
                    if (res.data.status == 1) {
                        functionBasic.displaySuccess(res);
                        this.loadData();
                    }
                });
        },
        doi_trang_thai(v) {
            baseRequest
                .post("bai-viet/status", v)
                .then((res) => {
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
<style>
    
</style>