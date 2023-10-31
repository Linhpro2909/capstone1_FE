<template>
<div class="row">
    <div class="">
        <h1>Quản Lí Giảng Viên</h1>
    </div>
    <div class="row mt-2">

    </div>
    <div class="col-3">
        <div class="card">
            <div class="card-header">
                <h5 class="text-primary">Thêm Mới Giảng Viên</h5>
            </div>
            <div class="card-body">
                <label for="">Tên Giảng Viên</label>
                <input type="text" class="form-control" placeholder="Nhập tên giảng viên">
                <label for="">Ngày Tháng Năm Sinh</label>
                <input type="date" class="form-control" placeholder="Nhập ngày tháng năm sinh">
                <label for="">Địa Chỉ</label>
                <input type="text" class="form-control" placeholder="Nhập địa chỉ">
                <label for="">Đơn Vị Đang Công Tác</label>
                <input type="text" class="form-control" placeholder="Nhập đơn vị đang công tác">
               
                

            </div>
            <div class="card-footer text-end">
                <button class="btn btn-primary">Thêm Mới</button>
            </div>
        </div>
    </div>
    <div class="col-9">
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
                        <tr>
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
                        <tr>
                            <td>
                                <input type="checkbox" class="form-check-input" id="exampleCheck1">
                            </td>
                            <td class="">
                                <button style="margin-right: 10px;" class="btn btn-info">Sửa</button>
                            
                            </td>
                            <td>1</td>
                            <td>
                                Lê Minh Thái
                            </td>
                            <td>
                                10/10/1965
                            </td>
                            <td>
                                46 Nguyễn Tri Phương Đà Nẫng
                            </td>
                            <td>
                                Đại Học Viên Hàn Đà Nẵng
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <input type="checkbox" class="form-check-input" id="exampleCheck1">
                            </td>
                            <td>
                                <button style="margin-right: 10px;" class="btn btn-info">Sửa</button>
                            </td>
                            <td>2</td>
                            <td>
                                Lê Minh Thái
                            </td>
                            <td>
                                10/10/1965
                            </td>
                            <td>
                                46 Nguyễn Tri Phương Đà Nẫng
                            </td>
                            <td>
                                Đại Học Viên Hàn Đà Nẵng
                            </td>
                           
                        </tr>

                    </tbody>
                </table>
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
