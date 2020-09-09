import Vue from 'vue'
import VueRouter from 'vue-router'
import dl from '@/components/dl'
import Vuex from 'vuex'
import store from '@/store'
Vue.use(Vuex)
Vue.use(VueRouter)

  const routes = [
    {
      path:'/',
      redirect:'/dl'
    },
    {
      path:'/dl',
      component:dl
    },
    {
      path:'/staging',
      component:resolve => require(['@/components/staging'],resolve)
    },
    {
      path:'/manage',
      name:'manage',
      component:resolve => require(['@/components/goods/manage'],resolve)
    },
    {
      path:'/publish',
      component:resolve => require(['@/components/goods/publish'],resolve)
    },
    {
      path:'/classify',
      name:'classify',
      component:resolve => require(['@/components/goods/classify'],resolve)
    },
    {
      path:'/brand',
      component:resolve => require(['@/components/goods/brand'],resolve)
    },
    {
      path:'/norms',
      component:resolve => require(['@/components/goods/norms'],resolve)
    },
    {
      path:'/type',
      component:resolve => require(['@/components/goods/type'],resolve)
    },
    {
      path:'/information',
      component:resolve => require(['@/components/goods/information'],resolve)
    },
    {
      path:'/appraise',
      component:resolve => require(['@/components/goods/appraise'],resolve)
    },
    {
      path:'/bestseller',
      component:resolve => require(['@/components/goods/bestSeller'],resolve)
    },
    {
      path:'/stock',
      component:resolve => require(['@/components/goods/stock'],resolve)
    },
    {
      path:'/administer',
      component:resolve => require(['@/components/orderform/administer'],resolve)
    },
    {
      path:'/print',
      component:resolve => require(['@/components/orderform/print'],resolve)
    },
    {
      path:'/delivery',
      component:resolve => require(['@/components/orderform/delivery'],resolve)
    },
    {
      path:'/retreat',
      component:resolve => require(['@/components/orderform/retreat'],resolve)
    },
    {
      path:'/admin',
      component:resolve => require(['@/components/operating/admin'],resolve)
    },
    {
      path:'/role',
      component:resolve => require(['@/components/operating/role'],resolve)
    },
    {
      path:'/notice',
      component:resolve => require(['@/components/operating/notice'],resolve)
    },
    {
      path:'/manageads',
      component:resolve => require(['@/components/operating/Manageads'],resolve)
    },
    {
      path:'/preferential',
      component:resolve => require(['@/components/operating/preferential'],resolve)
    },
    {
      path:'/service',
      component:resolve => require(['@/components/operating/service'],resolve)
    },
    {
      path:'/posters',
      component:resolve => require(['@/components/operating/posters'],resolve)
    },
    {
      path:'/handle',
      component:resolve => require(['@/components/operating/handle'],resolve)
    },
    {
      path:'/theuser',
      component:resolve => require(['@/components/user/Theuser'],resolve)
    },
    {
      path:'/grade',
      component:resolve => require(['@/components/user/grade'],resolve)
    },
    {
      path:'/record',
      component:resolve => require(['@/components/user/record'],resolve)
    },
    {
      path:'/dictionarytype',
      component:resolve => require(['@/components/user/Dictionarytype'],resolve)
    },
    {
      path:'/mail',
      component:resolve => require(['@/components/user/mail'],resolve)
    },
    {
      path:'/column',
      component:resolve => require(['@/components/user/column'],resolve)
    },
    {
      path:'/article',
      component:resolve => require(['@/components/user/article'],resolve)
    },
    {
      path:'/youzhifang',
      component:resolve => require(['@/components/Youzhifang'],resolve)
    },
    {
      path:'/revise01',
      name:'revise01',
      component:resolve => require(['@/components/revise/revise01'],resolve)
    },
    {
      path:'/revise02',
      name:'revise02',
      component:resolve => require(['@/components/revise/revise02'],resolve)
    },
    {
      path:'/pay',
      name:'pay',
      component:resolve => require(['@/components/install/pay'],resolve)
    },
    {
      path:'/distribution',
      name:'distribution',
      component:resolve => require(['@/components/install/distribution'],resolve)
    },
    {
      path:'/aa',
      name:'aa',
      component:resolve => require(['@/views/aa'],resolve)
    },
    {
      path:'/aaa',
      name:'aaa',
      component:resolve => require(['@/components/aaa'],resolve)
    }
  ]

const router = new VueRouter({
  mode: 'hash',
  // mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
  // to和from都是路由实例
  // to：即将跳转到的路由
  // from：现在的要离开的路由
  // next：函数
  // 如果未登录，就跳到登录页，如果登录了，选择哪个页面跳到哪个页面；如果登录了还去了login页面，就跳到首页。
  if (to.path != '/dl') {
    if (store.state.conut){
      next();
    }else{
      next('/dl')
    }
  }else{
    next();
  }
})

export default router
