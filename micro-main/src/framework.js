import {addScript} from "./util"

// 标记微前端环境
window.__MICRO_WEB__ = true

var apps = {};
var mainLifecycle = null;

// 跳转子应用
export function turnApp(path) {
    window.history.pushState({}, '', `#${path}`)
}

// 注册子应用
export function registryApp(_apps, lifecycle) {
    _apps.forEach((app) => {
        app.loaded = false;
        app.module = null;
        apps[app.name] = app;
    })

    mainLifecycle = lifecycle;
}

// 启动微前端框架
export function start() {
    let currentApp = null

    window.addEventListener('hashchange', async () => {
        var hash = window.location.hash.slice(1)
        var projectName = hash.split("/")[1]
        console.log(`projectName=${projectName} hash=${hash}`)
        var app = apps[projectName]
        if (!app || (currentApp && currentApp === app)) return

        var microContainer = document.getElementById("micro-container")
        microContainer.innerHTML = ""

        if (currentApp) {
            console.log("上一个子应用：", currentApp);
            currentApp?.module?.unmount()

            mainLifecycle.destroyed()
        }

        console.log("当前子应用：", app);
        let {loaded, js} = app
        if (loaded) {
            app?.module?.mount()

            mainLifecycle?.mounted();

            currentApp = app
        } else if (js) {
            mainLifecycle?.beforeLoad();

            for (var i = 0; i < js.length; i++) {
                await addScript(js[i])
            }

            console.log("子应用:", window[projectName])
            app.loaded = true
            app.module = window[projectName]

            currentApp = app
            currentApp?.module?.mount()

            mainLifecycle?.mounted();
        }
    })

    window.dispatchEvent(new Event("hashchange"))
}
