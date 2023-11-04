<template >
   <div class="row">
    <div class="card">
        <div class="card-header">
            <h5>Nhóm Đồ Án</h5>
        </div>
        <div class="card-body">
            <table class="table table-bordered text-center">
                    <thead>
                        <tr class="text-center align-middle">
                            <th>#</th>
                            <th>Nhóm</th>
                            <th>Tên Thành Viên</th>
                            <th>Tên Mentor</th>
                            <th>Đề Tài</th>
                            <th>Hội Đồng</th>
                            <th>Điểm Thành Viên</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody class="align-middle">
                        <tr>
                            <td>
                                1
                            </td>
                            <td>CSE18</td>
                            <td>
                                <ul>
                                    <li>
                                        Lương Trọng Linh
                                    </li>
                                    <li>
                                        Thọ
                                    </li>
                                    <li>
                                        Trí
                                    </li>
                                    <li>
                                        Diễm
                                    </li>
                                </ul>
                            </td>

                            <td>Lê Minh Thái</td>
                            <td>
                                Quản lí đồ án tốt nghiệp
                            </td>
                            <td>1</td>
                            <td>
                                <ul>
                                    <li>
                                        8
                                    </li>
                                    <li>
                                        8
                                    </li>
                                    <li>
                                        8
                                    </li>
                                    <li>
                                        8
                                    </li>
                                </ul>
                            </td>
                            <td>
                                <button class="btn btn-info" data-bs-toggle="modal" data-bs-target="#exampleChoDiem">Cho Điểm</button>
                                <button class="btn btn-warning" style="margin-left: 10px;" data-bs-toggle="modal" data-bs-target="#exampleSuaDiem">Sửa</button>

                            </td>
                        </tr>
                    </tbody>
                </table>
                <!-- Modal -->
<div class="modal fade" id="exampleChoDiem" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h1 class="modal-title fs-5" id="exampleModalLabel">Đánh Giá Cho Điểm</h1>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        <div class="card">
            <label for="">Thành Viên Thứ 1</label>
            <input type="float" class="form-control">
            <label for="">Thành Viên Thứ 2</label>
            <input type="float" class="form-control">
            <label for="">Thành Viên Thứ 3</label>
            <input type="float" class="form-control">
            <label for="">Thành Viên Thứ 4</label>
            <input type="float" class="form-control">
        </div>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Đóng</button>
        <button type="button" class="btn btn-primary">Lưu</button>
      </div>
    </div>
  </div>
</div>
 <!-- Modal -->
 <div class="modal fade" id="exampleSuaDiem" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h1 class="modal-title fs-5" id="exampleModalLabel">Sửa Đánh Giá</h1>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        <div class="card">
            <label for="">Thành Viên Thứ 1</label>
            <input type="float" class="form-control">
            <label for="">Thành Viên Thứ 2</label>
            <input type="float" class="form-control">
            <label for="">Thành Viên Thứ 3</label>
            <input type="float" class="form-control">
            <label for="">Thành Viên Thứ 4</label>
            <input type="float" class="form-control">
        </div>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Đóng</button>
        <button type="button" class="btn btn-primary">cập nhật</button>
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