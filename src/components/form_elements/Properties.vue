<template>
	<div class="el-tabs__inner">
		<el-form :model="fieldProperties" 
				 :rules="rules" 
				 :label-position="labelPosition"
				 ref="fieldProperties">

		  	<el-form-item label="Label" 
		  				  v-show="activeForm.hasOwnProperty('label')">
		    	<el-input v-model="activeForm.label">{{activeForm.label}}</el-input>
		  	</el-form-item>
			
			<!-- Show only when 'isPlacehodlerVisible' key exist -->
			<el-form-item label="Placeholder" 
						  v-show="activeForm.hasOwnProperty('isPlaceholderVisible')">
		    	<el-switch v-model="activeForm.isPlaceholderVisible"></el-switch>
		    	<el-input v-show="activeForm.isPlaceholderVisible" 
		    			  v-model="activeForm.placeholder">
		    		{{activeForm.placeholder}}
		    	</el-input>
		  	</el-form-item>

		  	<el-form-item label="Button text" 
						  v-show="activeForm.hasOwnProperty('buttonText')">
		    	<el-input v-model="activeForm.buttonText">
		    		{{activeForm.buttonText}}
		    	</el-input>
		  	</el-form-item>

		  	<el-form-item label="Code view" 
						  v-show="activeForm.hasOwnProperty('fieldText')">
		    	<el-input v-model="activeForm.fieldText"
		    			  type="textarea"
		    			  :rows="10">
		    		{{activeForm.fieldText}}
		    	</el-input>
		  	</el-form-item>

			<el-form-item label="Required field?" 
						  v-show="activeForm.hasOwnProperty('isRequired')">
		    	<el-switch v-model="activeForm.isRequired"></el-switch>
		  	</el-form-item>

		  	<el-form-item label="Helpblock" 
		  				  v-show="activeForm.hasOwnProperty('isHelpBlockVisible')">
		    	<el-switch v-model="activeForm.isHelpBlockVisible"></el-switch>
		    	<el-input v-show="activeForm.isHelpBlockVisible" 
		    			  v-model="activeForm.helpBlockText">
		    		{{activeForm.helpBlockText}}
		    	</el-input>
		  	</el-form-item>

		  	<el-form-item label="Options" v-show="activeForm.options">
	  			<ul>
			  		<li v-for="(item, index) in activeForm.options"
			  			:key="index"
			  			class="properties__optionslist">

			  			<el-row :gutter="5">
						  <el-col :xs="20" :sm="20" :md="20" :lg="20" :xl="20">
						  	<el-input v-model="item.optionValue">{{item.optionValue}}</el-input>
						  </el-col>
						  <el-col :xs="4" :sm="4" :md="4" :lg="4" :xl="3">
						  	<el-button @click="deleteOption(activeForm.options, index)" 
				  				   v-show="activeForm.options.length > 1">
			            		<i class="el-icon-error"></i>
			          		</el-button>
						  </el-col>
						</el-row>
			  		</li>
		  		</ul>
				
				<el-button type="text" @click="addOption(activeForm.options)">
		            <i class="el-icon-plus"></i>
		            Add more
		        </el-button>
		  	</el-form-item>
		</el-form>
	</div>
</template>

<script>
	export default {
		name: 'Properties',
		store: ['activeForm'], // Get the form data from Home
		data(){
			return {
				labelPosition: 'top',
				fieldProperties: {},
				rules: {}
			}
		},
		methods: {
			deleteOption(option, index){
				this.$delete(option, index)
			},

			addOption(option){
				let count = option.length + 1;

				option.push({
					optionLabel: "Option " + count,
					optionValue: "Option " + count
				})
			}
		}
	}
</script>

<style lang="scss" scoped>
	.properties__optionslist {
		margin-bottom: 5px;
	}
</style>