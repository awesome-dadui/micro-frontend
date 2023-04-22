// 标记微前端环境
window.__MICRO_WEB__ = true

// 子应用列表
var apps = {
  home: {
    path: "home",
    module: null,
    loaded: false,
    js: [
      "http://localhost:8888/micro-frontend/home/dist/home.js"
    ]
  },
  news: {
    path: "news",
    module: null,
    loaded: false,
    js: [
      "http://localhost:8888/micro-frontend/news/dist/js/chunk-vendors.6b50b1f2.js",
      "http://localhost:8888/micro-frontend/news/dist/news.js",
    ]
  },
  user: {
    path: "user",
    module: null,
    loaded: false,
    js: [
      "http://localhost:8888/micro-frontend/user/build/static/js/user.js",
    ]
  },
}

let currentApp = null

if ('onhashchange' in window) {
  window.addEventListener('hashchange', async () => {
    var hash = window.location.hash.slice(1)
    var name = hash.split("/")[1]
    var app = apps[name]
    console.log(`app=${name} hash=${hash}`)

    if (!app)
      return

    if (currentApp && currentApp.path === name) {
      return
    }

    var microContainer = document.getElementById("micro-container")
    microContainer.innerHTML = ""

    let {loaded, js} = app
    if (loaded) {
      currentApp?.module?.unmount()

      app?.module?.mount()

      currentApp = app
    } else if (js) {
      for (var i = 0; i < js.length; i++) {
        await addScript(js[i])
      }

      console.log("子应用:", window[name])
      app.loaded = true
      app.module = window[name]

      currentApp = app
      currentApp?.module?.mount()
    }
  })
}

window.dispatchEvent(new Event("hashchange"))

// 跳转子应用
export function turnApp(path) {
  window.history.pushState({}, '', `#${path}`)
}

function addScript(url) {
  return new Promise((resolve, reject) => {
    console.log(url)
    var head = document.getElementsByTagName('head')[0]
    var script = document.createElement('script')
    script.type = "text/javascript"
    script.charset = 'utf-8'
    script.async = true
    script.timeout = 120000
    script.src = url
    script.onload = function () {
      console.log(url, "加载完成")
      resolve()
    }
    script.onerror = function (error) {
      reject(error)
    }
    head.appendChild(script)
  })
}