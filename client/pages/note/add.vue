<template>
	<view class="wrap">
		<input class="title" type="text" v-model="titleVal" placeholder="开始你的思考吧~" />
		<textarea class="cont" placeholder="输入你的奇思妙想吧~" v-model="contVal"   />
		<button class="add-btn" type="primary" @click="add">添加</button>
	</view>
</template>

<script>
	import Utils from '@/utils/index';
	export default {
		data() {
			return {
				titleVal:'',
				contVal:'',
			}
		},
		onLoad() {

		},
		methods: {
			add() {
				if(!this.titleVal.trim()){
					uni.showToast({
						icon:'none',
					    title: '亲，标题不能为空哦~',
					});
					return;
				}
				uni.showLoading({
				    title: '努力保存中...'
				});
				
				Utils.request({
					//url:'https://jinchensite.com/api/add',
					url:'http://localhost:18000/add',
					data:{
						title:this.titleVal,
						content:this.contVal
					},
				})
				.then((res)=>{
					if(res.data.code == 0){
						uni.showToast({
							title: '成功啦，欧巴~',
							mask:true,
						});
						
						setTimeout(()=>{
							uni.navigateBack();
						},1500);
						
					}else{
						uni.showToast({
							icon:'none',
							title: res.data.msg
						});
					}
				})
				.catch((e)=>{
					uni.showToast({
						icon:'none',
					    title: '出错啦'+e.errMsg
					});
				});
			}
		}
	}
</script>

<style lang="scss">
	.wrap{
		padding: 0 20rpx;
		
		.title{
			position: fixed;
			top:30rpx;
			left:20rpx;
			right:20rpx;
			height:100rpx;
			border:1px solid #eee;
			box-sizing: border-box;
			padding: 0 20rpx;
			background-color: #FFFFFF;
		}
		
		.cont{
			width:100%;
			margin-top:150rpx;
			border:1px solid #eee;
			padding:20rpx;
			height: calc(100vh - 310rpx);
			overflow: auto;
			box-sizing: border-box;
			background-color: #FFFFFF;
		}
		
		.add-btn{
			display: block;
			height:100rpx;
			margin-top: 30rpx;
		}
	}
	

</style>
