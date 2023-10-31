<template >
    <div class="contaner-fuld">
        <div class="row">
         <div class="col-6"></div>
         <div class="col-6 text-end">
             <button class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#themmodal">
                 Thêm Mới
             </button>
         </div>
     </div>
     <div class="modal fade" id="themmodal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
             <div class="modal-dialog">
                 <div class="modal-content">
                     <div class="modal-header">
                         <h1 class="modal-title fs-5" id="exampleModalLabel">Thêm mới kế hoạch
                         </h1>
                         <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                     </div>
                     <div class="modal-body">
                         <div class="row">
                             <div class="col-12">
                                 <label class="form-label">Tên Kế Hoạch</label>
                                 <input  type="text" class="form-control">
                             </div>
                             <div class="col-12">
                                 <label class="form-label">Date</label>
                                 <input  type="date" class="form-control">
                             </div>
                             <div class="col-12">
                                 <label class="form-label">Mô tả</label>
                                 <textarea name="" id="" cols="60" rows="5">Mô Tả</textarea>
                             </div>
                             <div class="col-12">
                                 <label class="form-label">File</label>
                                 <input  type="file" class="form-control">
                             </div>
                             <div class="col-12">
                                 <label class="form-label mt-3">Tình Trạng</label>
                                 <select  class="form-control">
                                     <option value="1">Hiển thị</option>
                                     <option value="0">Tạm tắt</option>
                                 </select>
                             </div>
                         </div>
                     </div>
                     <div class="modal-footer">
                         <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                         <button data-bs-dismiss="modal" type="button" class="btn btn-primary">Thêm mới</button>
                     </div>
                 </div>
             </div>
         </div>
     <div class="row mt-2">
         <div class="card">
             <div class="card-header">
                 <h5>Kế Hoạch Đồ Án Tốt Nghiệp</h5>
             </div>
             <div class="card-body">
                 <table class="table table-bordered">
                     <thead class="text-center">
                         <tr>
                              <th>#</th>
                              <th>Tên Kế Hoạch</th>
                              <th>Date</th>
                              <th>Mô tả</th>
                              <th>File</th>
                              <th>Action</th>
                         </tr>
                     </thead>
                     <tbody class="text-center">
                         <tr>
                             <td>1</td>
                             <td>Báo cáo tiến độ</td>
                             <td>29//9/2023</td>
                             <td> nộp tài liệu và báo cáo</td>
                              <td>
                                
                              </td>
                              <td class="text alglin-center">
                                 <button style="margin-right: 10px;" class="btn btn-primary">Hiển Thị</button>
                                 <button style="margin-right: 10px;" class="btn btn-danger">Tạm Tắt</button>
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