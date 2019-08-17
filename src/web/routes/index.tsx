import * as React from "react";
import { Route } from 'react-router-dom';

import login from '../pages/login'; // 登录页
// import home from '../pages/home'; // 首页
//动态加载组件
const home = React.lazy(() => import("../pages/home")); // lazy函数的使用

// 首页子路由
const newsCom = React.lazy(() => import("../components/part1")); // 新闻模块part1
const peopleCom = React.lazy(() => import("../components/part2")); // 任务列表part2

// const rootRoute = [
//     <Route path="/index" component={home} />,
//     <Route path="/login" component={login} />
// ];
const indexRoute = [
    {
        name:'新闻',
        path:'/index/part1',
        component:React.lazy(() => import("../components/part1"))
    },
    {
        name:'人物',
        path:'/index/part2',
        component:React.lazy(() => import("../components/part2"))
    }
]
export { indexRoute };
export default (
    <>
    <Route path="/index" component={home} />,
    <Route path="/login" component={login} />
    </>
);
