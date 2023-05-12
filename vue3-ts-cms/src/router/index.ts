import { createRouter, createWebHashHistory } from 'vue-router'
import type { RouteRecordRaw } from 'vue-router'
import ls from '@/utils/storage'

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    redirect: '/main',
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('@/views/login/login.vue'),
  },
  {
    path: '/main',
    name: 'main',
    component: () => import('@/views/main/main.vue'),
    // children: [] // 根据菜单 - 动态加载路由
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'not-found',
    component: () => import('@/views/not-found/index.vue')
  }
]

const router = createRouter({
  routes,
  history: createWebHashHistory(),
})

router.beforeEach((to) => {
  const token = ls.get('token')
  if (to.path !== '/login') {
    // 判断有没有登录
    if(!token){
      return '/login'
    }
  } else {
    if(token){
      return '/main'
    }
  }
})

export default router
