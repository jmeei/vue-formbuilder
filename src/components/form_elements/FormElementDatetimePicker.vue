<template>
  <div>
    <el-date-picker
      v-model="date"
      type="datetime"
      placeholder="Select date and time">
    </el-date-picker>
  </div>
</template>


<script>
  export default {
    name: 'DatetimePicker',
    data() {
    	return {
    		date: ''
    	}
    }
  }
</script>