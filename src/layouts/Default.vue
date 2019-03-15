<template>
	<el-container>
		<el-header>
			<el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" :router="true">
			  <el-menu-item index="/">Design</el-menu-item>
			  <el-menu-item index="/Preview">Preview</el-menu-item>
			</el-menu>
		</el-header>

	  	<el-container>
	    	<el-main>
	    		<slot />
	    	</el-main>
	  	</el-container>
	</el-container>
</template>

<script>
	export default {
		data() {
	      return {
	        activeIndex: '/'
	      };
	    }
	}
</script>

<style lang="scss" scoped>
	.el-aside {
		overflow-x: hidden;
	}
</style>
<!-- https://itnext.io/anyway-heres-how-to-create-a-multiple-layout-system-with-vue-and-vue-router-b379baa91a05 -->