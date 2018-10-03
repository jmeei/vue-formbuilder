<template>
  <div>
    <el-checkbox-group v-model="checkList">
      <el-checkbox v-for="(item, index) in currentField.options"
              :key="item.optionValue"
              :label="index">
        {{ item.optionValue }}
      </el-checkbox>
    </el-checkbox-group>
  </div>
</template>


<script>
  export default {
    name: 'Checkbox',
    props: ['currentField'],
    data() {
    	return {
    		checkList: [0]
    	}
    }
  }
</script>