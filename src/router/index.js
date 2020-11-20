import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

/* Layout */
import Layout from '../Layout/index.vue'

export const constantRoutes = [
  {
    path: '/',
    component: Layout,
    meta: { title: 'shouye', icon: 'dashboard' },
    children: [{
      path: 'dome1',
      name: 'dome1',
      component: () => import('../view/dome1.vue'),
      meta: { title: 'dome1', icon: 'dashboard' },
      hidden:false
    },
    {
      path: 'dome2',
      name: 'dome2',
      component: () => import('../view/dome2.vue'),
      meta: { title: 'dome2', icon: 'dashboard' },
      hidden:true
    }
    ]
  }
]
export const asyncRoutes = [
  // {
  //   path: '/customer',
  //   component: Layout,
  //   meta: { title: '系统管理', icon: 'example', roles: ['admin'] },
  //   children: [
  //     {
  //       path: 'customer/index',
  //       name: 'customer',
  //       component: () => import('@/views/customerList/customerList'),
  //       meta: { title: '人员管理', icon: 'eye' }
  //     },
  //     {
  //       path: 'customer/organization',
  //       name: 'organization',
  //       component: () => import('@/views/customerList/organization'),
  //       meta: { title: '组织架构管理', icon: 'table' }
  //     }
  //   ]
  // },
  { path: '*', redirect: '/404', hidden: true }
]
const createRouter = () => new Router({
  // mode: 'history', // require service support
  scrollBehavior: () => ({ y: 0 }),
  routes: constantRoutes
})

const router = createRouter()


// export function resetRouter() {
//   const newRouter = createRouter()
//   router.matcher = newRouter.matcher // reset router
// }

export default router
