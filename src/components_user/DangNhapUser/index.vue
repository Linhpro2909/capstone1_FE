<template>
   <div class="container-fluid">
				<div class="row row-cols-1 row-cols-lg-2 row-cols-xl-3">
					<div class="col mx-auto">
						<div class="mb-4 ">
						</div>
						<div class="card">
							<div class="card-body">
								<div class="border p-4 rounded">
									<div class="text-center">
										<h3 class="">Đăng Nhập</h3>
										
										
									</div>
								
									<div class="form-body">
										<form @submit.prevent="LoginData" class="row g-3">
											<div class="col-12">
												<label for="inputEmailAddress" class="form-label">Email </label>
												<input type="email" v-model="sinh_vien.email" class="form-control" id="inputEmailAddress" placeholder="Email Address">
											</div>
											<div class="col-12">
												<label for="inputChoosePassword" class="form-label">Mật Khẩu</label>
												<div class="input-group" id="show_hide_password">
													<input type="password" v-model="sinh_vien.password" class="form-control border-end-0" id="inputChoosePassword"  placeholder="Enter Password"> <a href="javascript:;" class="input-group-text bg-transparent"><i class="bx bx-hide"></i></a>
												</div>
											</div>
											<div class="col-md-6">
												<div class="form-check form-switch">
													<input class="form-check-input" type="checkbox" id="flexSwitchCheckChecked" checked="">
													<label class="form-check-label" for="flexSwitchCheckChecked">Ghi nhớ</label>
												</div>
											</div>
                                
											<div class="col-12">
												<div class="d-grid">
													<button type="submit" class="btn btn-primary"><i class="bx bxs-lock-open"></i>Đăng Nhập</button>
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
    </template>
    
    <script>
import Toaster from '@meforma/vue-toaster';
import baseRequest from '../../core/baseRequest';
import functionBasic from '../../core/functionBasic';
    export default {
		data() {
			return {
				result:{},
				student:{
					email:'',
					password:'',
				},
			}
		},
		created() {
			
		},
		mounted() {
			//this.LoginData();
		},
		methods: {
			// LoginData()
			// {
			// 	baseRequest
            //     .post("login/data",this.student)
            //     .then(({data})=>{
			// 		try{
			// 			if(data.status ==true){
			// 				alert("login Successfully");
			// 				this.$router.push( )
			// 			}else{
			// 				alert("Login failed")
			// 			}
			// 		} catch(err)
			// 		{alert("error,please try aginw")}
			// 	}
			// 	)
			// }
		},
    }
    </script>
    
    <style >
    
    </style>