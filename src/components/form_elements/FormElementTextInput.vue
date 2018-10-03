<template>
    <div>
    	<el-input 
    		:placeholder="currentField.isPlaceholderVisible ? currentField.placeholder : ''">	
    	</el-input>
    </div>
</template>

<script>
  export default {
    name: 'TextInput',
    props: ['currentField']
  }
</script>