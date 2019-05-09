/*
 * @Author: Parker 
 * @Date: 2019-05-05 11:22:56 
 * @Last Modified by: Parker
 * @Last Modified time: 2019-05-05 22:08:01
 * @Types 界面路由
 */

import Admin from '../view/Admin'
import Login from '../view/Login'

export default [
    {
        path: '/login',
        name: 'login',
        Title: '登录',
        component: Login
    },
    {
        path: '/',
        name: 'admin',
        component: Admin,
        redirect: '/thinglist',
        children: [
            {
                path: '/main',
                name: 'main',
                Title: '主页',
                component: () => import('../view/Main.vue')
            },
            {
                path: '/userlist',
                name: 'userlist',
                Title: '用户列表',
                component: () => import('../view/Userlist.vue')
            },
            {
                path: '/articlelist',
                name: 'articlelist',
                Title: '文章列表',
                component: () => import('../view/Articlelist.vue')
            },
            {
                path: '/article',
                name: 'article',
                Title: '新增文章',
                component: () => import('../view/Article.vue')
            },
            {
                path: '/noteslist',
                name: 'noteslist',
                Title: '笔记列表',
                component: () => import('../view/Noteslist.vue')
            },
            {
                path: '/notes',
                name: 'notes',
                Title: '新增笔记',
                component: () => import('../view/Notes.vue')
            },
            {
                path: '/taslist',
                name: 'taslist',
                Title: '标签列表',
                component: () => import('../view/Taslist.vue')
            },
            {
                path: '/thinglist',
                name: 'thinglist',
                Title: '项目列表',
                component: () => import('../view/Thinglist.vue')
            }
        ]
    }
]