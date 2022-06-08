import EventEmitter from 'eventemitter3'
import HashHistory from './history/HashHistory'

export default class Router extends EventEmitter {
  constructor(options = {}) {
    super()

    let {model = 'hash', routes} = options

    this.model = model

    // 存储所有的 path
    this.pathLsit = []

    // path 映射
    this.pathMap = {}

    // 记录当前路由映射的所有模块
    this.currentModules = []

    this.init()

    routes && this.addRoutes(routes)
  }

  init() {
    this.history = new HashHistory(this)

    this.history.init()
  }

  addRoutes(route, parent = null) {
    route = (Object.prototype.toString.call(route) == "[object Array]" ? route : [route])

    for (let i = 0; i < route.length; i++) {
      this.addRoute(route[i], parent)
    }
  }

  addRoute(route, parent = null) {
    let {path, children} = route

    let fullPath = parent ? (parent.fullPath + path) : path

    route.fullPath = fullPath

    this.pathLsit.push(fullPath)

    this.pathMap[fullPath] = route

    if (children) {
      for (let i = 0; i < children.length; i++) {
        this.addRoute(children[i], route)
      }
    }
  }

  changeView(routes, params) {
    if (!routes.length) return

    let ids = routes.map(route => {
      let pathArr = route.fullPath.split('/')
      pathArr.splice(1, 0, 'dist')
      return pathArr.join('/')
    })
    // console.log(routes, ids)

    let _router = this
    _router.emit("pre_load", ids)

    seajs.use(ids, function () {
      let modules = Array.from(arguments)
      // console.log('modules:', modules)

      _router.emit("load_complete", modules)

      // 上一个路由和当前路由深度比对，找到失活的路由组件，激活的路由组件
      // 调用失活的路由组件exit
      // 调用激活的路由组件entry
      // 例如： 上一个路由:user/foo/profile 当前路由：user/foot/posts
      // 通过比对后 失活的组件是profile 激活的组件是posts

      this.currentModules && this.currentModules.forEach(module => {
        let page = module.default || {}
        page.exit && page.exit()
      })

      this.currentModules = modules.forEach(module => {
        let page = module.default || {}
        page.entry && page.entry()
      })
    })
  }

  go(route) {
    // console.log('go:', route)
    this.history.go(route)
  }
}