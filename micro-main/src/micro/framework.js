import {loadHtml, loadJs, parseHtml} from "../util"

var projects = {};
var mainLifecycle = null;

// 跳转子应用
export function turnApp(path) {
  window.history.pushState({}, '', `#${path}`)
}

// 注册子应用
export function registryMicroApps(_apps, lifecycle) {
  _apps.forEach((app) => {
    app.loaded = false;
    app.module = null;
    projects[app.name] = app;
  })

  mainLifecycle = lifecycle;
}

// 启动微前端框架
export function start() {
  let currentProject = null

  // 标记微前端环境
  window.__MICRO_WEB__ = true

  window.addEventListener('hashchange', async () => {
    var hash = window.location.hash.slice(1)
    var projectName = hash.split("/")[1]
    console.log(`projectName=${projectName} hash=${hash}`)
    var project = projects[projectName]

    if (!project || (project && project === currentProject))
      return

    var microContainer = document.getElementById("micro-container")
    microContainer.innerHTML = ""

    console.log("上一个子应用 ---> ", currentProject);
    if (currentProject) {
      currentProject?.module?.unmount()
      mainLifecycle.destroyed()
    }

    let {loaded, scripts = [], entry} = project
    if (loaded) {
      project?.module?.mount()
      mainLifecycle?.mounted();
    } else {
      mainLifecycle?.beforeLoad();

      if (entry) {
        // 加载入口html
        let html = await loadHtml(entry)
        // 解析入口html
        let {scripts: script, links} = parseHtml(html);
        // 加载样式
        links.forEach(link => document.getElementsByTagName('head')[0].appendChild(link));
        scripts = scripts.concat(script);
      }

      // 加载js
      for (var i = 0; i < scripts.length; i++) {
        await loadJs(scripts[i])
      }

      project.loaded = true
      project.module = window[projectName]

      project?.module?.mount()
      mainLifecycle?.mounted();
    }

    currentProject = project
    console.log("当前子应用  --->", currentProject);
  })

  window.dispatchEvent(new Event("hashchange"))
}
