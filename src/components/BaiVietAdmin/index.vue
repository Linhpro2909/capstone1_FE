<template lang="">
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
                        <input class="form-control mt-1" type="text">
                    </div>
                    <div class="form-group">
                        <label>Slug Bài Viêt</label>
                        <input class="form-control mt-1" type="text">
                    </div>
                    <div class="form-group">
                        <label>Hình Ảnh</label>
                        <div class="input-group">
                            <input class="form-control" type="text" name="filepath">
                            <span class="input-group-prepend">
                                <a data-preview="holder" class="btn btn-primary">
                                    <i class="fa fa-picture-o"></i> Choose
                                </a>
                            </span>
                        </div>
                        <div id="holder" style="margin-top:15px;max-height:100px;"></div>
                    </div>
                    <div class="form-group">
                        <label>Mô Tả Ngắn</label>
                        <textarea class="form-control" cols="30" rows="3"></textarea>
                    </div>
                    <div class="form-group">
                        <label>Mổ Tả Chi Tiết</label>
                        <input class="form-control mt-1" type="text">
                    </div>
                    <div class="form-group">
                        <label>Loại Bài Viêt</label>
                        <select class="form-control">
                            <option value="1">Tin Hot</option>
                            <option value="2">Tin Thời Trang</option>
                            <option value="3">Thông Báo</option>
                        </select>
                    </div>
                    <div class="form-group">
                        <label>Tình Trạng</label>
                        <select class="form-control">
                            <option value="1">Hiển Thị</option>
                            <option value="0">Tạm Tắt</option>
                        </select>
                    </div>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                        <button data-bs-dismiss="modal" type="button" class="btn btn-primary">Thêm
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
                                <tr>
                                    <th class="text-center align-middle text-nowrap">xxx</th>
                                    <td class="align-middle text-nowrap">xxx</td>
                                    <td class="text-center align-middle text-nowrap">
                                        <img src="xxx" class="img-fluid" style="max-width: 100px;">
                                    </td>
                                    <td class="text-center align-middle text-nowrap">
                                        <button data-bs-toggle="modal" data-bs-target="#moTaNgan" class="btn btn-primary"><i style="padding-left: 6px" class="fa-sharp fa-solid fa-info"></i></button>
                                    </td>
                                    <td class="text-center align-middle text-nowrap">
                                        <button data-bs-toggle="modal" data-bs-target="#moTaChiTiet" class="btn btn-primary"><i style="padding-left: 6px" class="fa-sharp fa-solid fa-info"></i></button>
                                    </td>
                                    <td class="align-middle text-center text-nowrap">
                                        <p >Tin Hot</p>
                                    </td>
                                    <td class="align-middle text-center text-nowrap">
                                        <button class="btn btn-primary" >Hiển Thị</button>
                                    </td>
                                    <td class="text-center align-middle text-nowrap">
                                        <button class="btn btn-info" data-bs-toggle="modal" data-bs-target="#updateModal">Cập Nhật</button>
                                        <button class="btn btn-danger" data-bs-toggle="modal" data-bs-target="#deleteModal">Xóa Bỏ</button>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <div class="modal fade" id="moTaChiTiet" tabindex="-1" aria-hidden="true" style="display: none;">
                        <div class="modal-dialog">
                            <div class="modal-content">
                                <div class="modal-header">
                                    <h5 class="modal-title">Mô Tả Chi Tiết</h5>
                                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                </div>
                                <div class="modal-body">
                                    xxx
                                </div>
                                <div class="modal-footer">
                                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="modal fade" id="moTaNgan" tabindex="-1" aria-hidden="true" style="display: none;">
                        <div class="modal-dialog">
                            <div class="modal-content">
                                <div class="modal-header">
                                    <h5 class="modal-title">Mô Tả Ngắn</h5>
                                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                </div>
                                <div class="modal-body">
                                    xxx
                                </div>
                                <div class="modal-footer">
                                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="modal fade" id="deleteModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                        <div class="modal-dialog" role="document">
                        <div class="modal-content">
                            <div class="modal-header">
                            <h5 class="modal-title" id="exampleModalLabel">Xóa Tin Tức</h5>
                            <button type="button" class="close" data-bs-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                            </div>
                            <div class="modal-body">
                                Bạn có chắc chắn xóa tin này!
                            </div>
                            <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            <button type="button" class="btn btn-danger" data-bs-dismiss="modal">Xóa Tin</button>
                            </div>
                        </div>
                        </div>
                    </div>
                    <div class="modal fade" id="updateModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                        <div class="modal-dialog" role="document">
                        <div class="modal-content">
                            <div class="modal-header">
                            <h5 class="modal-title" id="exampleModalLabel">Cập Nhật Tin Tức</h5>
                            <button type="button" class="close" data-bs-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                            </div>
                            <div class="modal-body">
                                <input type="hidden" name="" id="">
                                <div class="form-group">
                                    <label>Tiêu Đề</label>
                                    <input class="form-control mt-1" type="text">
                                </div>
                                <div class="form-group">
                                    <label>Slug Bài Viêt</label>
                                    <input  class="form-control mt-1" type="text">
                                </div>
                                <div class="form-group">
                                    <label>Hình Ảnh</label>
                                    <div class="input-group">
                                        <input class="form-control" type="text" name="filepath">
                                        <span class="input-group-prepend">
                                            <a data-preview="holder_update" class="btn btn-primary">
                                                <i class="fa fa-picture-o"></i> Choose
                                            </a>
                                        </span>
                                    </div>
                                    <div id="holder_update" style="margin-top:15px;max-height:100px;"></div>
                                </div>
                                <div class="form-group mt-4">
                                    <label>Mô Tả Ngắn</label>
                                    <textarea class="form-control" cols="30" rows="3"></textarea>
                                </div>
                                <div class="form-group">
                                    <label>Mổ Tả Chi Tiết</label>
                                    <input class="form-control mt-1" type="text">
                                </div>
                                <div class="form-group">
                                    <label>Loại Bài Viêt</label>
                                    <select  class="form-control">
                                        <option value="1">Tin Hot</option>
                                        <option value="2">Tin Thời Trang</option>
                                        <option value="3">Thông Báo</option>
                                    </select>
                                </div>
                                <div class="form-group">
                                    <label>Tình Trạng</label>
                                    <select class="form-control">
                                        <option value="1">Hiển Thị</option>
                                        <option value="0">Tạm Tắt</option>
                                    </select>
                                </div>
                            </div>
                            <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            <button type="button" class="btn btn-primary" data-bs-dismiss="modal">Cập Nhật</button>
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
export default {
    
}
</script>
<style lang="">
    
</style>