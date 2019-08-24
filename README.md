########3项目已完成点

# webpack打包开发环境
  ## webpack-dev-server配置需要把index.html提取到dist
  ## historyApiFallback: true,为了解决刷新页面404
  ## externals

# 简单路由
  ## 实现子路由
  ## BrowserRouter
    Suspense
        Switch
            Route 

# 函数式组件实现登录
  ## 保存用户名和密码
  ## 退出登录（清除loaclstorage的值）
  需要注意的点
  ## input如果写了value属性，就会要求写onChange方法或设为只读

# ts添加类型（会一点，还不熟）

# mobx-react-lite刚刚跑通
  注意的点
  ## 需要依赖 mobx
  ## 安装时不需要 @types/xxxxx


########还未搞明白的点
# 函数式编程 state怎么用
# mobx-react-lite是替换 state的？
# 路由参数变化，监听？改变页面 ？
# 放哪里每次都重渲染，放哪里不会？


##########还未实践的点
# 没有用Ant
# 没有实时分析webpack的打包情况
# 没有使用mobx进行状态管理
# tslint





















8.17---下午讲解=================
1.webpack流程
2.entry -> loader(tsx) -> awesome-typescript-loader -> css
也可以使用babel-loader处理tsx文件，但是要配置周边引用的包
3.spa 系统 一个主文件 + 异步的文件包
4.tsconfig.json 务必不能 粘贴 遇到问题 compilerOptions
5.import { BrowserRouter } from "react-router-dom";
对组件进行包裹 react-router router这一部分当成一个组件
6. 6-1 引入一个需要的异步组件 
const About = lazy(() =>
  import(/* webpackChunkName:"about" */ "@components/About")
);
@babel/plugin-syntax-dynamic-import
6-2 对引入的这个组件 结构化组成
BrowserRouter
    Suspense
        Switch
            Route 
6-3 全部站点的路由 + 对应的每一个controller的路由
6-4 注意的一点就是组件 公用组件一定要放在
7.client:server 不借助任何外力的情况 启动一个和后端链接的服务器
8.historyApiFallback: true (应对前端的假路由)
9.html页面引入了 react.development.js webpack的配置的话 页面可以跑
  npm install react --save-dev
  externals
10.@types/node @types/react @types/xxxx
11.render(
  <Profiler id="application" onRender={onRenderCallback}>
    <App>
      <Navigation {...props} />
      <Main {...props} />
    </App>
  </Profiler>
);
12.dom业务逻辑 登录组件 
用户名密码 css登录页面 
13.tslint 
14.pages 页面 《---- 一个路由
   + components 组件