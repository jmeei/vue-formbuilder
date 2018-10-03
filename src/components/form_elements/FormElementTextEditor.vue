<template>
    <div>
    	<medium-editor
	      :text='currentField.fieldText'
	      :options='options'
	      v-on:edit="processEditOperation"
	      custom-tag='div'/>
    </div>
</template>

<script>
	import MediumEditor from 'vue2-medium-editor'

  	export default {
	    name: 'TextEditor',
	    props: ['currentField'],
      store: ['activeForm'],
    	data(){
	    	return {
	    		options: {
		    		toolbar: {
				        buttons: ['bold', 'italic', 'underline', 'h1', 'h2', 'anchor', 'image']
				    },
            extensions: {
              'imageDragging': {} //Disable drag and drop image
            }
	    		}
	    	}
    	},
    	components: { 
    		MediumEditor 
    	},
    	methods: {
        // Update the field Text so it show the updated text evytime user reposition the element
    		processEditOperation: function (operation) {
      			this.activeForm.fieldText = operation.api.origElements.innerHTML    
      		}
    	}
  	}
</script>