<template>
	<h3>module2-sub2</h3>
</template>

<script>
	import { Module2Srv } from './module2.service';
	

	export default {
		
		data() {
			return {
				
			}
		},
		computed: {
			
		},
		methods: {
			getDataList(){
				let params = {
					id:123
				}
				Module2Srv.getDataList(params).then((res)=>{
					console.log(res);
				})
			}
		},
		destroyed() {
			
		},
		created() {
			this.getDataList();
		},
		mounted() {
			
		},
		components: {
			
		}
	}
</script>

<style scoped>
	
</style>