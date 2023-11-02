<template>
<div class="container-fluid" style="margin-top:-30x;">
    <div class="row ">
        <div class="col-4">
            <div class="card">
                <div class="card-header">
                    <h5 class="text-primary">Đăng ký nhóm</h5>
                </div>
                <div class="card-body">
                    <label style="margin-right: 350px;" for="">Tên nhóm</label>
                    <input type="text" class="form-control" placeholder="Nhập tên nhóm">
                    <label style="margin-right: 340px;" for="">Thành viên </label>
                    <label for="">Select2 Multiple Control</label>
                    <div class="mb-3 form-control" data-select2-id="34">
										
										<select class="multiple-select select2-hidden-accessible " data-placeholder="Choose anything" multiple="" data-select2-id="12" tabindex="-1" aria-hidden="true">
											<option value="United States" selected="" data-select2-id="14">United States</option>
											<option value="United Kingdom" selected="" data-select2-id="15">United Kingdom</option>
											
											
											
											
											<option value="Zambia" data-select2-id="281">Zambia</option>
											<option value="Zimbabwe" data-select2-id="282">Zimbabwe</option>
										</select><span class="select2 select2-container select2-container--bootstrap4 select2-container--above select2-container--focus " dir="ltr" data-select2-id="13"><span class="selection"><span class="select2-selection select2-selection--multiple" role="combobox" aria-haspopup="true" aria-expanded="false" tabindex="-1"><ul class="select2-selection__rendered"><li class="select2-selection__choice" title="United States" data-select2-id="303"><span class="select2-selection__choice__remove" role="presentation">×</span>United States</li><li class="select2-selection__choice" title="United Kingdom" data-select2-id="304"><span class="select2-selection__choice__remove" role="presentation">×</span>United Kingdom</li><li class="select2-selection__choice" title="Afghanistan" data-select2-id="305"><span class="select2-selection__choice__remove" role="presentation">×</span>Afghanistan</li><li class="select2-selection__choice" title="Aland Islands" data-select2-id="306"><span class="select2-selection__choice__remove" role="presentation">×</span>Aland Islands</li><li class="select2-selection__choice" title="Albania" data-select2-id="307"><span class="select2-selection__choice__remove" role="presentation">×</span>Albania</li><li class="select2-selection__choice" title="Chad" data-select2-id="308"><span class="select2-selection__choice__remove" role="presentation">×</span>Chad</li><li class="select2-search select2-search--inline"><input class="select2-search__field" type="search" tabindex="0" autocomplete="off" autocorrect="off" autocapitalize="none" spellcheck="false" role="textbox" aria-autocomplete="list" placeholder="" style="width: 3em;"></li></ul></span></span><span class="dropdown-wrapper" aria-hidden="true"></span></span>
									</div>
                    <label style="margin-right: 330px;" for="">Tên Đề Tài</label>
                    <input type="text" class="form-control" placeholder="Nhập tên đề tài">
                    <label style="margin-right: 350px;" for="">Mô tả</label>
                    <textarea name="" id="" cols="30" rows="10" class="form-control">
                    </textarea>

                </div>
                <div class="card-footer text-end">
                    <button class="btn btn-primary">Thêm Mới</button>
                </div>
            </div>
        </div>
        <div class="col-8">
            <div class="card">
                <div class="card-header">
                    <div class="d-flex">
                        <h5 class="p-2 w-100 mt-1 text-primary">Nhóm đăng ký</h5>

                    </div>
                </div>
                <div class="card-body">
                    <table class="table table-bordered">
                        <thead>
                            <tr class="text-center align-middle">
                                <th>#</th>
                                <th>Tên nhóm</th>
                                <th>Thành viên nhóm</th>
                                <th>Tên đề tài</th>
                                <th>Trang thái</th>

                            </tr>
                        </thead>
                        <tbody>
                            <tr class="align-middle text-center">
                                <th>1</th>
                                <td>Quản lí đồ án tốt nghiệp</td>
                                <td>Làm chớ chưa biết được không nghe</td>
                                <td>đề tài nè</td>
                                <td>Đã duyệt</td>

                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>

        <div class="modal fade" id="xoamodal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <h1 class="modal-title fs-5" id="exampleModalLabel">Xóa Đề Tài
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
                                    Bạn chắc chắn muốn xóa <b class="text-danger"></b> khỏi
                                    danh sách?
                                </div>
                            </div>
                        </div>

                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Đóng</button>
                        <button type="button" class="btn btn-danger" data-bs-dismiss="modal">Xác Nhận</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="row">
        <div class="col-12">
            <div class="card">
                <div class="card-header">
                    <div class="d-flex">
                        <h5 class="p-2 w-100 mt-1 text-primary">Danh sách sinh viên</h5>

                    </div>
                </div>
                <div class="card-body">
                    <table class="table table-bordered">
                        <thead>
                            <tr class="text-center align-middle">
                                <th>#</th>
                                <th>Lớp</th>
                                <th>Tên sinh viên</th>
                                <th>GPA</th>

                            </tr>
                        </thead>
                        <tbody>
                            <tr class="align-middle text-center">
                                <th>1</th>
                                <td>CMU TPM6</td>
                                <td>Van A</td>
                                <td>3.2</td>

                            </tr>
                        </tbody>
                    </table>
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
