

<template>
    <div>
      <button style="width: 100%;" class="btn btn-success mt-3" data-bs-toggle="modal" data-bs-target="#exampleModal">
        <h3>Gửi Mail Thông Báo</h3>
      </button>
  
      <!-- Modal -->
      <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h1 class="modal-title fs-5" id="exampleModalLabel">Gửi Mail</h1>
              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
              <label for="noi_dung_gui">Nội dung gửi</label>
              <textarea v-model="noiDungGui" id="noi_dung_gui" cols="30" rows="10" class="form-control"></textarea>
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-secondary" >Đóng</button>
              <button type="button" class="btn btn-primary" data-bs-dismiss="modal" @click="sendEmail()">Gửi</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import axios from 'axios';
  export default {
    data() {
      return {
        noiDungGui: '',
      };
    },
    mounted() {
        
    },
    methods: {

      sendEmail() {
        // Gửi dữ liệu đến backend
        axios.post('http://127.0.0.1:8000/api/admin/gui-mail/create', {
          noi_dung_gui: this.noiDungGui,
        })
        .then(response => {
          console.log(response.data.message);
          // Xử lý logic sau khi gửi email thành công (nếu cần)
          // Ví dụ: Hiển thị thông báo cho người dùng
          alert('Emails sent successfully!');
        })
        .catch(error => {
          console.error(error);
          // Xử lý logic sau khi gửi email thất bại (nếu cần)
          // Ví dụ: Hiển thị thông báo lỗi cho người dùng
          alert('Error sending emails.');
        });
      },
    },
  };
  </script>
  
  <style>
  
  </style>
  