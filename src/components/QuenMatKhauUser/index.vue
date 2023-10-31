<template lang="">
   <div class="row bg-forgot  pace-done ">

   
    <body class="bg-forgot  pace-done"><div class="pace  pace-inactive"><div class="pace-progress" data-progress-text="100%" data-progress="99" style="transform: translate3d(100%, 0px, 0px);">
  <div class="pace-progress-inner"></div>
</div>
<div class="pace-activity"></div></div>
	<!-- wrapper -->
	<div class="wrapper">
		<div class="authentication-forgot d-flex align-items-center justify-content-center">
			<div class="card forgot-box">
				<div class="card-body">
					<div class="p-4 rounded  border">
						<div class="text-center">
							<img src="assets/images/icons/forgot-2.png" width="120" alt="">
						</div>
						<h4 class="mt-5 font-weight-bold">Quên Mật Khẩu ?</h4>
						<p class="text-muted">Nhập Địa Chỉ Email Để Lấy Lại Mật Khẩu</p>
						<div class="my-4">
							<label class="form-label">Email</label>
							<input type="text" class="form-control form-control-lg" placeholder="vd@gmail.com">
						</div>
						<div class="d-grid gap-2">
							<button type="button" class="btn btn-primary btn-lg">Gửi</button>
                            <router-link to="/dang-nhap">
                                 <a href="authentication-signin.html" class="btn btn-light btn-lg"><i class="bx bx-arrow-back me-1"></i>Quay lại trang đăng nhập</a>
                            </router-link>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
	<!-- end wrapper -->


</body>
</div>
</template>
<script>
export default {
    
}
</script>
<style lang="">
    
</style>