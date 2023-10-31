<template >
    
    <div class="container" style="margin-top:-30px;">
    <div class="row " >
        <div class="col-4">
        <div class="card">
            <div class="card-header">
                <h5 class="text-primary">Đăng ký đề tài</h5>
            </div>
            <div class="card-body">
                <label for="">Tên đề tài</label>
                <input type="text" class="form-control" placeholder="Nhập tên đề tài">
                <label for="">Mô tả</label>
               <textarea name="" id="" cols="30" rows="5" class="form-control">

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
                        <h5 class="p-2 w-100 mt-1 text-primary">Đề tài đăng ký</h5>
                       
                    </div>
                </div>
                <div class="card-body">
                    <table class="table table-bordered">
                        <thead>
                            <tr class="text-center align-middle text-center">
                                <th>#</th>
                                <th>Tên Đề Tài</th>
                                <th>Mô tả</th>
                                <th>Trang thái</th>
                                
                            </tr>
                        </thead>
                        <tbody>
                            <tr class="align-middle text-center" >
                                <th class="text-center">1</th>
                                <td>Quản lí đồ án tốt nghiệp</td>
                                <td>Làm chớ chưa biết được không nghe</td>
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
                        <button type="button" class="btn btn-danger" data-bs-dismiss="modal" >Xác Nhận</button>
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
                        <h5 class="p-2 w-100 mt-1 text-primary">Ngân hàng đề tài</h5>
                       
                    </div>
                </div>
                <div class="card-body">
                    <table class="table table-bordered">
                        <thead>
                            <tr class="text-center align-middle text-center">
                                <th>#</th>
                                <th>Tên Đề Tài</th>
                                <th>Mô tả</th>
                                
                                
                            </tr>
                        </thead>
                        <tbody>
                            <tr class="align-middle text-center" >
                                <th class="text-center">1</th>
                                <td>Quản lí đồ án tốt nghiệp</td>
                                <td>Làm chớ chưa biết được không nghe</td>
                                
                                
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