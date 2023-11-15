<template>
   <body class="bg-login  pace-done"><div class="pace  pace-inactive"><div class="pace-progress" data-progress-text="100%" data-progress="99" style="transform: translate3d(100%, 0px, 0px);">
  <div class="pace-progress-inner"></div>
</div>
<div class="pace-activity"></div></div>
	<!--wrapper-->
	<div class="wrapper">
		<div class="section-authentication-signin d-flex align-items-center justify-content-center my-5 my-lg-0">
			<div class="container-fluid">
				<div class="row row-cols-1 row-cols-lg-2 row-cols-xl-3">
					<div class="col mx-auto">
						<div class="mb-4 text-center">
							
						</div>
						<div class="card">
							<div class="card-body">
								<div class="border p-4 rounded">
									
									<div class="form-body" @submit.prevent="handleSubmit">
										<form class="row g-3">
											<div class="col-12">
												<label for="inputtext" class="form-label">Mã số sinh viên</label>
												<input  type="text" class="form-control" v-model="MSSV" id="inputtext" placeholder="Mã số sinh viên">
											</div>
											<div class="col-12">
												<label for="inputChoosePassword" class="form-label">Enter Password</label>
												<div class="input-group" id="show_hide_password">
													<input type="password" class="form-control border-end-0" v-model="password" id="inputChoosePassword" placeholder="Enter Password">

												</div>
											</div>
											<div class="col-md-6">
												
											</div>
											<div class="col-md-6 text-end">	<a href="authentication-forgot-password.html">Forgot Password ?</a>
											</div>
											<div class="col-12">
												<div class="d-grid">
													<button type="submit" class="btn btn-primary"><i class="bx bxs-lock-open"></i>Sign in</button>
												</div>
											</div>
										</form>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				<!--end row-->
			</div>
		</div>
	</div>
	

</body>
    </template>
    
    <script>
import Toaster from '@meforma/vue-toaster';
import baseRequest from '../../core/baseRequest';
import functionBasic from '../../core/functionBasic';
import axios from 'axios';
    export default {
		
		data() {
			return {
				MSSV: '',
				password: '',
				
			}
		},
		
		methods: {
			async handleSubmit(){
				const resoponse = await axios.post('auth/login',{
					MSSV: this.MSSV,
					password: this.password
				});
				localStorage.setItem('token',response.data.access_token);
				this.$router.push('/trang-chu-user')
				
			}
		},
    }
    </script>
    
    <style >
    
    </style>