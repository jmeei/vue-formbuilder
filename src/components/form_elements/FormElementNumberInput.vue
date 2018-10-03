<template>
  <div>
    <el-input-number v-model="number" :min="1" :max="100"></el-input-number>
  </div>
</template>


<script>
  export default {
    name: 'NumberInput',
    data() {
    	return {
    		number: 10
    	}
    }
  }
</script>