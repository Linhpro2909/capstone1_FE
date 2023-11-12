<template>
<div class="row">
    <div class="col">
        <h6 class="mb-0 text-uppercase">Nhóm Đồ Án</h6>
        <hr>
        <div class="card">
            <div class="card-body">
                <ul class="nav nav-pills mb-3" role="tablist">
                    <li class="nav-item" role="presentation">
                        <a class="nav-link" data-bs-toggle="pill" href="#primary-pills-home" role="tab" aria-selected="false" tabindex="-1">
                            <div class="d-flex align-items-center">
                                <div class="tab-icon"><i class="bx bx-home font-18 me-1"></i>
                                </div>
                                <div class="tab-title">Tạo Nhóm Đồ Án</div>
                            </div>
                        </a>
                    </li>
                    <li class="nav-item" role="presentation">
                        <a class="nav-link active" data-bs-toggle="pill" href="#primary-pills-profile" role="tab" aria-selected="true">
                            <div class="d-flex align-items-center">
                                <div class="tab-icon"><i class="bx bx-user-pin font-18 me-1"></i>
                                </div>
                                <div class="tab-title">Danh Sách Nhóm Đồ Án</div>
                            </div>
                        </a>
                    </li>
                    <li class="nav-item" role="presentation">
                        <a class="nav-link" data-bs-toggle="pill" href="#primary-pills-contact" role="tab" aria-selected="false" tabindex="-1">
                            <div class="d-flex align-items-center">
                                <div class="tab-icon"><i class="bx bx-microphone font-18 me-1"></i>
                                </div>
                                <div class="tab-title">Contact</div>
                            </div>
                        </a>
                    </li>
                </ul>
                <div class="tab-content" id="pills-tabContent">
                    <div class="tab-pane fade" id="primary-pills-home" role="tabpanel">

                        <div class="row">
                            <div class="col-8">
                                <table class="table table-bordered">
                                    <thead class="text-center">
                                        <tr>
                                            <th>Tên Sinh Viên</th>
                                            <th>
                                                Điểm GPA
                                            </th>
                                            <th>
                                                Action
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody class="text-center">
                                        <tr>
                                            <td>Lương Trọng Linh</td>
                                            <td>
                                                4
                                            </td>
                                            <td>
                                                <button class="btn btn-primary">
                                                    Add
                                                </button>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                            <div class="col-4">
                                <div class="card">
                                    <div class="card-body text-center">
                                        <table class="table table-bordered">
                                            <thead>
                                                <tr>
                                                    <th>
                                                        Tên Sinh Viên
                                                    </th>
                                                    <th>Action</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td>
                                                        Lương Trọng Linh
                                                    </td>
                                                    <td>
                                                        <button class="btn btn-danger"> Chuyển</button>
                                                    </td>
                                                </tr>
                                            </tbody>

                                        </table>
                                    </div>
                                    <div class="card-footer text-end">
                                        <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleTaoNhom">Tạo</button>
                                    </div>
                                </div>

                            </div>
                        </div>

                    </div>
                    <div class="tab-pane fade active show" id="primary-pills-profile" role="tabpanel">
                        <table class="table table-bordered">
                            <thead class="text-center">
                                <tr>
                                <th>
                                    Tên Nhóm
                                </th>
                                <th>
                                    Mã Nhóm
                                </th>
                                <th>Tên Sinh Viên</th>
                                <th>Tên Giảng Viên HD</th>
                                <th>Action</th>
                                </tr>
                            </thead>
                            <tbody class="text-center">
                                <tr>
                                    <td>Nhóm C1ES_18</td>
                                    <td>cis18</td>
                                    <td>Lương Trọng Linh</td>
                                    <td>Lê Minh Thái</td>
                                    <td>
                                        <button style="margin-right: 10px;" class="btn btn-secondary">Sửa</button>
                                        <button style="margin-right: 10px;" class="btn btn-info">Đổi Thành Viên</button>
                                        <button class="btn btn-danger">Xóa</button>

                                        
                                    </td>
                                </tr>                                
                            </tbody>
                        </table>
                    </div>
                    <div class="tab-pane fade" id="primary-pills-contact" role="tabpanel">
                        <p>Etsy mixtape wayfarers, ethical wes anderson tofu before they sold out mcsweeney's organic lomo retro fanny pack lo-fi farm-to-table readymade. Messenger bag gentrify pitchfork tattooed craft beer, iphone skateboard locavore carles etsy salvia banksy hoodie helvetica. DIY synth PBR banksy irony. Leggings gentrify squid 8-bit cred pitchfork. Williamsburg banh mi whatever gluten-free, carles pitchfork biodiesel fixie etsy retro mlkshk vice blog. Scenester cred you probably haven't heard of them, vinyl craft beer blog stumptown. Pitchfork sustainable tofu synth chambray yr.</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
<div class="modal fade" id="exampleTaoNhom" tabindex="-1" aria-hidden="true" style="display: none;">
    <div class="modal-dialog modal-dialog-scrollable">
        <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title">Tạo Nhóm</h5>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
                <label for="">Tên nhóm</label>
                <input type="text" class="form-control">
                <label for="">Mã nhóm</label>
                <input type="text" class="form-control">
                <label for="">Tên giảng viên hướng dẫn</label>
               <select name="" id="" class="form-control">
                <option value="1">
                    Lê Minh Thái
                </option>
                <option value="2">
                    Lê Minh Nam
                </option>
               </select>
            </div>
            <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Đóng</button>
                <button type="button" class="btn btn-primary" data-bs-dismiss="modal">Xác Nhận</button>
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
