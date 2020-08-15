const Utils = {
	request:function(opt){
		return new Promise((resolve,reject)=>{
			uni.request({
				url:opt.url,
				data:opt.data,
				success:resolve,
				fail:reject
			})
		})
	}
}

export default Utils;