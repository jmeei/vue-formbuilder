<template>
  <div>
    <el-date-picker
      v-model="date"
      type="date"
      placeholder="Pick a day">
    </el-date-picker>
  </div>
</template>


<script>
  export default {
    name: 'DatePicker',
    data() {
    	return {
    		date: ''
    	}
    }
  }
</script>