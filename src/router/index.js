import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

/* Layout */
import Layout from '@/layout'

/**
 * Note: sub-menu only appear when route children.length >= 1
 * Detail see: https://panjiachen.github.io/vue-element-admin-site/guide/essentials/router-and-nav.html
 *
 * hidden: true                   if set true, item will not show in the sidebar(default is false)
 * alwaysShow: true               if set true, will always show the root menu
 *                                if not set alwaysShow, when item has more than one children route,
 *                                it will becomes nested mode, otherwise not show the root menu
 * redirect: noRedirect           if set noRedirect will no redirect in the breadcrumb
 * name:'router-name'             the name is used by <keep-alive> (must set!!!)
 * meta : {
    roles: ['admin','editor']    control the page roles (you can set multiple roles)
    title: 'title'               the name show in sidebar and breadcrumb (recommend set)
    icon: 'svg-name'/'el-icon-x' the icon show in the sidebar
    breadcrumb: false            if set false, the item will hidden in breadcrumb(default is true)
    activeMenu: '/example/list'  if set path, the sidebar will highlight the path you set
  }
 */

/**
 * constantRoutes
 * a base page that does not have permission requirements
 * all roles can be accessed
 */
export const constantRoutes = [
  {
    path: '/404',
    component: () => import('@/views/404'),
    hidden: true
  },

  // {
  //   path: '/',
  //   component: Layout,
  //   redirect: '/dashboard',
  //   children: [{
  //     path: 'dashboard',
  //     name: 'Dashboard',
  //     component: () => import('@/views/dashboard/index'),
  //     meta: { title: 'Dashboard', icon: 'dashboard' }
  //   }]
  // },

  {
    path: '/',
    component: Layout,
    redirect: '/staticData',
    children: [{
      path: 'staticData',
      name: '静态列表',
      component: () => import('@/views/staticData/index'),
      meta: { title: '静态列表', icon: 'dashboard' }
    }]
  },

  {
    path: '/requestData',
    component: Layout,
    redirect: '/requestData',
    children: [{
      path: 'requestData',
      name: '接口表单(post axios)',
      component: () => import('@/views/requestData/index'),
      meta: { title: '接口表单(post axios)', icon: 'dashboard' }
    }]
  },

  {
    path: '/requestData3',
    component: Layout,
    redirect: '/requestData3',
    children: [{
      path: 'requestData3',
      name: '接口表单(get axios)',
      component: () => import('@/views/requestData3/index'),
      meta: { title: '接口表单(get axios)', icon: 'dashboard' }
    }]
  },


  {
    path: '/requestData4',
    component: Layout,
    redirect: '/requestData4',
    children: [{
      path: 'requestData4',
      name: '接口表单(post fly)',
      component: () => import('@/views/requestData4/index'),
      meta: { title: '接口表单(post fly)', icon: 'dashboard' }
    }]
  },

  {
    path: '/requestData5',
    component: Layout,
    redirect: '/requestData5',
    children: [{
      path: 'requestData5',
      name: '接口表单(get fly)',
      component: () => import('@/views/requestData5/index'),
      meta: { title: '接口表单(get fly)', icon: 'dashboard' }
    }]
  },

  {
    path: '/requestData1',
    component: Layout,
    redirect: '/requestData1',
    children: [{
      path: 'requestData1',
      name: '接口返回对象不一致表单',
      component: () => import('@/views/requestData1/index'),
      meta: { title: '接口返回对象不一致的表单', icon: 'dashboard' }
    }]
  },

  {
    path: '/requestData2',
    component: Layout,
    redirect: '/requestData2',
    children: [{
      path: 'requestData2',
      name: '接口PageSize不一致表单',
      component: () => import('@/views/requestData2/index'),
      meta: { title: '接口PageSize不一致的表单', icon: 'dashboard' }
    }]
  },

  {
    path: '/customColumn',
    component: Layout,
    redirect: '/customColumn',
    children: [{
      path: 'customColumn',
      name: '自定义列',
      component: () => import('@/views/customColumn/index'),
      meta: { title: '自定义列', icon: 'dashboard' }
    }]
  },

  {
    path: '/columnJudgment',
    component: Layout,
    redirect: '/columnJudgment',
    children: [{
      path: 'columnJudgment',
      name: '列的判断',
      component: () => import('@/views/columnJudgment/index'),
      meta: { title: '根据字段隐藏或显示列', icon: 'dashboard' }
    }]
  },

  {
    path: '/setListTable',
    component: Layout,
    redirect: '/setListTable',
    children: [{
      path: 'setListTable',
      name: '获取列表数据和设置列表数据',
      component: () => import('@/views/setListTable/index'),
      meta: { title: '获取列表数据和设置列表数据', icon: 'dashboard' }
    }]
  },

  {
    path: '/complexData',
    component: Layout,
    redirect: '/complexData',
    children: [{
      path: 'complexData',
      name: '复杂自定义表单',
      component: () => import('@/views/complexData/index'),
      meta: { title: '复杂自定义表单', icon: 'dashboard' }
    }]
  },

  {
    path: '/radioData',
    component: Layout,
    redirect: '/radioData',
    children: [{
      path: 'radioData',
      name: '单选表单',
      component: () => import('@/views/radioData/index'),
      meta: { title: '单选表单', icon: 'dashboard' }
    }]
  },

  {
    path: '/checkData',
    component: Layout,
    redirect: '/checkData',
    children: [{
      path: 'checkData',
      name: '多选列表更新不清空已选',
      component: () => import('@/views/checkData/index'),
      meta: { title: '多选列表更新不清空已选', icon: 'dashboard' }
    }]
  },

  {
    path: '/checkData1',
    component: Layout,
    redirect: '/checkData1',
    children: [{
      path: 'checkData1',
      name: '多选列表更新清空已选',
      component: () => import('@/views/checkData1/index'),
      meta: { title: '多选列表更新清空已选', icon: 'dashboard' }
    }]
  },

  {
    path: '/resetMyPages',
    component: Layout,
    redirect: '/resetMyPages',
    children: [{
      path: 'resetMyPages',
      name: '重置myPages',
      component: () => import('@/views/resetMyPages/index'),
      meta: { title: '重置myPages', icon: 'dashboard' }
    }]
  },

  {
    path: '/maxheightData',
    component: Layout,
    redirect: '/maxheightData',
    children: [{
      path: 'maxheightData',
      name: '流动高度列表',
      component: () => import('@/views/maxheightData/index'),
      meta: { title: '流动高度列表', icon: 'dashboard' }
    }]
  },

  {
    path: '/thetreeData',
    component: Layout,
    redirect: '/thetreeData',
    children: [{
      path: 'thetreeData',
      name: '树形列表分页的',
      component: () => import('@/views/thetreeData/index'),
      meta: { title: '树形列表分页的', icon: 'dashboard' }
    }]
  },

  {
    path: '/thetreeData1',
    component: Layout,
    redirect: '/thetreeData1',
    children: [{
      path: 'thetreeData1',
      name: '树形列表不带分页的',
      component: () => import('@/views/thetreeData1/index'),
      meta: { title: '树形列表不带分页的', icon: 'dashboard' }
    }]
  },

  {
    path: '/multiLevelHeader',
    component: Layout,
    redirect: '/multiLevelHeader',
    children: [{
      path: 'multiLevelHeader',
      name: '多级表头',
      component: () => import('@/views/multiLevelHeader/index'),
      meta: { title: '多级表头', icon: 'dashboard' }
    }]
  },







  // 404 page must be placed at the end !!!
  { path: '*', redirect: '/404', hidden: true }
]

const createRouter = () => new Router({
  mode: 'hash',
  // mode: 'history', // require service support
  scrollBehavior: () => ({ y: 0 }),
  routes: constantRoutes
})

const router = createRouter()

// Detail see: https://github.com/vuejs/vue-router/issues/1234#issuecomment-357941465
export function resetRouter() {
  const newRouter = createRouter()
  router.matcher = newRouter.matcher // reset router
}

export default router
