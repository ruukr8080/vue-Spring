import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/views/Home'
import List from '@/views/board/List'
import Detail from '@/views/board/Detail'
import Write from "@/views/board/Write"
import Login from "@/views/common/Login";
const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/user/login',
        name: 'Login',
        component: Login  //로그인 컴포넌트 추가
    },
    {
        path: '/about',
        name: 'PageAbout',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
    },
    {
        path: '/board/list',
        name: 'BoardList',
        component: List
    },
    {
        path: '/board/detail',
        name: 'BoardDetail',
        component: Detail
    },
    {
        path: '/board/write',
        name: 'BoardWrite',
        component: Write
    },
]
const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router