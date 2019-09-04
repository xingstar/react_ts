import * as React from "react";
import { Route, RouteProps } from 'react-router-dom';

//动态加载组件
const Home = React.lazy(() => import("../pages/home")); // lazy函数的使用
const Login = React.lazy(() => import("../components/form")); // lazy函数的使用

const NewsCom = React.lazy(() => import(/* webpackChunkName:"part" */ "@components/part1")); // 新闻模块part1 // 这样写是可以的，但是编辑器报错
const PeopleCom = React.lazy(() => import(/* webpackChunkName:"part" */ "../components/part2")); // 任务列表part2

interface routeTypes extends RouteProps{ // <Route>的一些属性的类型是 继承自 RouteProps
    exact?: boolean;
}
const indexRoute = [
    {
        name:'新闻',
        path:'/index/part1',

        component:NewsCom,
        auth: true,
    },
    {
        name:'人物',
        path:'/index/part2',
        component:PeopleCom,
        auth: false,
    }
]
const mainRoute = [
    {
        name: '首页',
        path:'/',
        exact: true,
        component:Home,
        auth: true
    },
    {
        name: '首页',
        path:'/index/',
        exact: false, // 这是一级路由属性值不能设为 true
        component:Home,
        auth: true
    },
    {
        name: '登录',
        path:'/login',
        exact: true,
        component:Login
    },

];
export { indexRoute };

export default mainRoute;
