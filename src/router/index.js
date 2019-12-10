import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Drag from '@/views/drag/Drag'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/drag',
      name: 'Drag',
      component: Drag,
      meta:{
        title:'拖拽实例'
      }
    },
  ]
})
