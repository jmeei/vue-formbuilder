<template>
  <div>
    <el-rate
      v-model="value"
      :colors="['#99A9BF', '#F7BA2A', '#FF9900']">
    </el-rate>
  </div>
</template>


<script>
  export default {
    name: 'Rating',
    data() {
    	return {
    		value: null
    	}
    }
  }
</script>