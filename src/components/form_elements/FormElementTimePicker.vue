<template>
  <div>
    <el-time-select
      v-model="time"
      :picker-options="{
        start: '00:00',
        step: '00:15',
        end: '23:45'
      }"
      placeholder="Select time">
    </el-time-select>
  </div>
</template>


<script>
  export default {
    name: 'TimePicker',
    data() {
    	return {
    		time: ''
    	}
    }
  }
</script>