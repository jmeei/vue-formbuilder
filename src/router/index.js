import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

export default new VueRouter({
	mode: 'history',
  	routes: [
    	{
      		path: '/',
      		name: 'home',
      		// meta: { layout: "default" },
      		component: () => import("@/views/Home")
    	},
    	{
    		path: '/preview',
      		name: 'preview',
      		component: () => import("@/views/Preview")
    	}
  	]
})
