<template>
  <div>
    <el-radio v-model="radio"  
    			    v-for="(item, index) in currentField.options"
        		  :key="item.optionValue"
        		  :label="item.optionLabel">
      {{ item.optionValue }}
     </el-radio>
  </div>
</template>


<script>
  export default {
    name: 'RadioButton',
    props: ['currentField'],
    data() {
    	return {
    		radio: '1'
    	}
    }
  }
</script>