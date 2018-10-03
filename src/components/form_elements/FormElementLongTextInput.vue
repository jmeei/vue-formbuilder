<template>
  <div>
    <el-input
      type="textarea"
      :rows="2"
      :placeholder="currentField.isPlaceholderVisible ? currentField.placeholder : ''"
      v-model="textarea">
    </el-input>
  </div>
</template>


<script>

  export default {
    name: 'LongTextInput',
    props: ['currentField'],
    data() {
    	return {
    		textarea: ''
    	}
    }
  }
</script>