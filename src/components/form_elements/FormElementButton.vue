<template>
    <div>
    	<el-button type="primary" class="form__button">{{ currentField.buttonText }}</el-button>
    </div>
</template>

<script>
  export default {
    name: 'Button',
    props: ['currentField']
  }
</script>