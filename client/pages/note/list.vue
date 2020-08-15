<template>
	<view class="noteList">
		<view v-for="(item,index) in noteList" class="noteItem" :key="index">	
			<view class="title">{{item.title}}</view>
			<view class="content">{{item.content}}</view>
		</view>
		<uni-fab
			ref="fab"
			:content="fabCont"
			horizontal="right"
			vertical="bottom"
			@trigger="gotoAdd"
		></uni-fab>
	</view>
</template>

<script>
	import Utils from '@/utils/index';
	import uniFab from '@/components/uni-fab/uni-fab.vue';
	

	export default {
		data() {
			return {
				fabCont:[
					{
						text:'添加笔记'
					}
				],
				noteList:[]
			};
		},
		components: {
			uniFab
		},
		onShow(){
			this.query();
		},
		methods:{
			query(){
				Utils.request({
					//url:'https://jinchensite.com/api/add',
					url:'http://localhost:18000/getList',
				}).then((res)=>{
					if(res.data.code == 0){
						this.noteList = res.data.data;
					}else{
						uni.showToast({
							icon:'none',
							title: res.data.msg,
						});
					}
				}).catch((e)=>{
					
					uni.showToast({
						icon:'none',
					    title: '出错啦'+e.errMsg,
					});
				})
			},
			gotoAdd(){
				this.$refs.fab.close();
				uni.navigateTo({
					url:'/pages/note/add'
				})
			}
		}
	}
</script>

<style lang="scss">
	.noteList{
		padding: 20rpx;
	
		.noteItem{
			background-color: #FFFFFF;
			margin-bottom: 30rpx;
			box-shadow: 0 1px 1px #eee;
			padding: 10rpx;
			
			.title{
				font-weight: bold;
				font-size: 36rpx;
			}
			
			.content{
				margin: 10rpx 0;
				font-size: 28rpx;
			}
		}
	}
</style>
