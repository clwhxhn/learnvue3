/*
 * @Author: wangxiaohui clwhxhn@163.com
 * @Date: 2023-01-29 15:44:09
 * @LastEditors: wangxiaohui clwhxhn@163.com
 * @LastEditTime: 2023-02-02 09:49:45
 * @FilePath: \learnvue3\src\router\index,js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */

import { createRouter, createWebHistory, createWebHashHistory } from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About.vue'

//创建映射关系
const routes = [
    {
        path: '/',
        redirect: '/home'
    },
    {
        path: '/home',
        name: 'homeName',
        // component: Home
        component: () => { // 路由懒加载写法
            return import(/* webpackChunkName: "home-chunk" */"../views/Home.vue") // import返回的是一个promise
        },
        // 嵌套路由 - children
        children: [
            {
                path: '',
                redirect: '/home/message' //这里路径要写全
            },
            {
                path: 'message',
                component: () => import("../views/HomeMessage.vue")
            },
            // {
            //     path: 'shops',
            //     component: () => import("../views/HomeShops.vue")
            // }
        ]
    },
    {
        path: '/about',
        name: 'about',
        // component: About
        component: () => import("../views/About.vue")
    },
    //动态路由
    {
        path: '/user/:userId/name/:name',
        component: () => import("../views/User.vue")
    },
    //404
    {
        // path: '/:pathMatch(.*)', // $route.params.pathMatch 解析为字符串
        path: '/:pathMatch(.*)*', // 最后面加一个*，$route.params.pathMatch 解析为数组
        component: () => import("../views/NotFound.vue")
    },
]

//创建路由对象router
const router = createRouter({
    history: createWebHashHistory(),
    routes
})

//动态添加路由
const categoryRoute = {
    path: '/ctaegory',
    component: () => import("../views/Category.vue")
}

router.addRoute(categoryRoute)

//动态添加二级路由
// router.addRoute("路由的名称", "")
router.addRoute("homeName", {
    path: 'shops',
    component: () => import("../views/HomeShops.vue")
})

//导航守卫
// router.beforeEach((to, from, next) => {
//     //next 从vue-router版本4开始就不推荐使用了
//     return false //不能跳转
// });

export default router