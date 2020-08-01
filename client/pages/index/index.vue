<template>
	<view class="content">
		<textarea placeholder="来吧" @input="confirmFn"  />
		<button type="primary" @click="add">添加</button>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				textareaVal:''
			}
		},
		onLoad() {

		},
		methods: {
			confirmFn(e){
				this.textareaVal = e.detail.value;
			},
			add() {
				console.log(this.textareaVal)
				uni.showLoading({
				    title: '加载中'
				});
				uni.request({
					url:'http://qq.com',
					data:'',
					success() {
						
						uni.showToast({
						    title: '添加成功',
						    duration: 2000
						});
					},
					fail() {
						uni.showToast({
						    title: 'error',
						    duration: 2000
						});
					},
					complete() {
						 uni.hideLoading();
					}
				})
			}
		}
	}
</script>

<style>
	.content {
		/* display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center; */
		border: 1px solid #4CD964;
		height: 300rpx;
	}

	.logo {
		height: 200rpx;
		width: 200rpx;
		margin-top: 200rpx;
		margin-left: auto;
		margin-right: auto;
		margin-bottom: 50rpx;
	}

	.text-area {
		display: flex;
		justify-content: center;
	}

	.title {
		font-size: 36rpx;
		color: #8f8f94;
	}
</style>
