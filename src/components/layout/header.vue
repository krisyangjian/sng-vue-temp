<template>
	<div class="header">
		<el-button style='float:right' type="primary" @click='logOut()'>退出</el-button>
		<h3>{{$store.state.user.name}}</h3><h3>{{username.name}}</h3>
		
	</div>
</template>

<script>
	export default {
		methods:{
			logOut(){
				this.$router.push('../login');
			}
		},
		computed:{
			username:function(){
				return this.$store.getters.userinfo
			}
		}
	}
</script>

<style scoped="scoped">
	.header{
		height: 60px;
		background:#21539b;
		color:#fff;
	}
</style>