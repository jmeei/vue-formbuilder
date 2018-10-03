<template>
	<div>
		<el-form label-position="left">
			<el-collapse v-model="activeCollapse" accordion>
				<!-- Appearance -->
				<el-collapse-item title="Appearance" name="appearance">
					<el-form-item label="Font Family">
					    <el-select v-model="themingVars.globalFontFamily" placeholder="Select font family">
					    	<el-option-group
						      v-for="group in fontOptions"
						      :key="group.label"
						      :label="group.label">
						      <el-option
						        v-for="item in group.options"
						        :key="item.value"
						        :label="item.label"
						        :value="item.value">
						      </el-option>
						    </el-option-group>
					    </el-select>
					</el-form-item>

					<el-form-item label="Font Size">
			    		<el-input-number v-model="themingVars.globalFontSize" :min="0" :max="50"></el-input-number>
			  		</el-form-item>

			  		<el-form-item label="Color">
			    		<el-color-picker v-model="themingVars.globalFontColor"></el-color-picker>
			  		</el-form-item>

			  		<el-form-item label="Link Color">
			    		<el-color-picker v-model="themingVars.globalLinkColor"></el-color-picker>
			  		</el-form-item>
			  	</el-collapse-item>
				
				<!-- Inputs -->
			  	<el-collapse-item title="Inputs" name="inputs">
			  		<el-form-item label="Border radius">
			    		<el-input-number v-model="themingVars.inputBorderRadius" :min="0" :max="50"></el-input-number>
			  		</el-form-item>

			    	<el-form-item label="Border color">
			    		<el-color-picker v-model="themingVars.inputBorderColor"></el-color-picker>
			  		</el-form-item>

			  		<el-form-item label="Hover Border color">
			    		<el-color-picker v-model="themingVars.inputHoverBorderColor"></el-color-picker>
			  		</el-form-item>

			  		<el-form-item label="Focus Border color">
			    		<el-color-picker v-model="themingVars.inputFocusBorderColor"></el-color-picker>
			  		</el-form-item>

			  		<el-form-item label="Shadow color">
			    		<el-color-picker v-model="themingVars.inputShadowColor"></el-color-picker>
			  		</el-form-item>
			  	</el-collapse-item>

				<!-- Labels -->
			  	<el-collapse-item title="Labels" name="labels">
			    	<el-form-item label="Color">
			    		<el-color-picker v-model="themingVars.primaryColor"></el-color-picker>
			  		</el-form-item>

			  		<el-form-item label="Font weight">
			    		<el-radio-group v-model="themingVars.labelFontWeight">
					      <el-radio-button :label="500">Normal</el-radio-button>
					      <el-radio-button :label="700">Bold</el-radio-button>
					    </el-radio-group>
			  		</el-form-item>

			  		<el-form-item label="Font size">
			    		<el-input-number v-model="themingVars.labelFontSize" :min="1" :max="50"></el-input-number>
			  		</el-form-item>

			  		<el-form-item label="Margin bottom">
			    		<el-input-number v-model="themingVars.labelMarginBottom" :min="0" :max="50"></el-input-number>
			  		</el-form-item>
			  	</el-collapse-item>

			  	<!-- Help block -->
			  	<el-collapse-item title="Help Text" name="helptext">
			    	<el-form-item label="Color">
			    		<el-color-picker v-model="themingVars.helpTextColor"></el-color-picker>
			  		</el-form-item>

			  		<el-form-item label="Font size">
			    		<el-input-number v-model="themingVars.helpTextFontSize" :min="1" :max="50"></el-input-number>
			  		</el-form-item>

			  		<el-form-item label="Margin top">
			    		<el-input-number v-model="themingVars.helpTextMarginTop" :min="0" :max="50"></el-input-number>
			  		</el-form-item>
			  	</el-collapse-item>

			  	<!-- Buttons -->
			  	<el-collapse-item title="Buttons" name="buttons">
			    	<el-form-item label="Background">
			    		<el-color-picker v-model="themingVars.buttonBackground"></el-color-picker>
			  		</el-form-item>

			  		<el-form-item label="Border color">
			    		<el-color-picker v-model="themingVars.buttonBorderColor"></el-color-picker>
			  		</el-form-item>

			  		<el-form-item label="Color">
			    		<el-color-picker v-model="themingVars.buttonColor"></el-color-picker>
			  		</el-form-item>
			  	</el-collapse-item>
			</el-collapse>
		</el-form>
	</div>
</template>

<script>
	export default {
		name: 'Theming',
		store: ['themingVars'],
		data(){
			return {
				activeCollapse: ['appearance'],
				fontOptions: [{
		          	label: 'Sans Serif',
		          	options: [{
		            	value: 'Arial',
		            	label: 'Arial'
		          	}, {
		            	value: 'Arial Black',
		            	label: 'Arial Black'
		          	}, {
		            	value: 'Tahoma',
		            	label: 'Tahoma'
		          	}, {
		            	value: 'Trebuchet MS',
		            	label: 'Trebuchet MS'
		          	}, {
		            	value: 'Verdana',
		            	label: 'Verdana'
		          	}]
		        }, {
		          	label: 'Serif ',
		          	options: [{
		            	value: 'Georgia',
		            	label: 'Georgia'
		          	}, {
		            	value: 'Times',
		            	label: 'Times'
		          	}, {
		            	value: 'Times New Roman',
		            	label: 'Times New Roman'
		          	}]
		        }, {
		          	label: 'Monospace',
		          	options: [{
		            	value: 'Courier',
		            	label: 'Courier'
		          	}, {
		            	value: 'Courier New',
		            	label: 'Courier New'
		          	}]
		        }]
			}
		}
	}
</script>