# 微前端落地实现

关于微前端 [click here](https://github.com/cengbin/web-blog/tree/master/1.2%20%E5%BE%AE%E5%89%8D%E7%AB%AF)

前端工程化构建工具`frontend-cli` [click here](https://github.com/tianfusangai/frontend-cli)

## 实现

思路：

通过JavaScript运行时集成的实现原理是拦截路由，根据不同路由规则渲染对应的子应用。

核心要做的事情：

1. 路由管理
    * 单独写一个库`micro-router`实现路由管理。（已完成）
2. 增量加载子应用
    * 项目`app1`开发使用ES规范，通过`frontend-cli`编译工具把ES模块代码转成CMD模块代码。（已完成）
    * 借助seajs异步加载模块的能力，运行时动态加载子应用。（已完成）
3. 应用间运行时隔离
    * window、document隔离，采用方案一（已完成）
        * 方案一：Function + Proxy + width + "use strict" 让代码运行在一个受限制的安全沙箱中运行。（微前端框架乾坤运用的隔离方案）
        * 方案二：通过new WebWorker()单开一个逻辑线程，让代码运行在逻辑线程。（微信小程序运用的隔离方案）
    * CSS 样式隔离
        * 方案一：通过`frontend-cli`编译.css文件,给每个子应用添加作用域。
        * 方案二：给div加属性，添加作用域。
4. 应用间通信
    * 通过url传递参数。（已完成）
    * 通过路由对象传递数据。
