import {registerApplication, start} from 'single-spa'
import {loadScript, loadStyle} from "./util"

async function loadApp(scripts, links, name) {
  scripts = !Array.isArray(scripts) ? [scripts] : scripts
  for (var script of scripts) {
    await loadScript(script)
  }

  links = !Array.isArray(links) ? [links] : links
  for (var link of links)
    await loadStyle(link)

  return window[name]
}

registerApplication({
  name: "home",
  app: loadApp(
    ["http://localhost:8088/home/dist/home.js"],
    ["http://localhost:8088/home/dist/home.css"],
    "home"
  ),
  activeWhen: "/home",
  customProps: {
    container: "micro-container"
  }
})

registerApplication({
  name: "news",
  app: loadApp(
    [
      "http://localhost:8088/news/dist/js/chunk-vendors.6b50b1f2.js",
      "http://localhost:8088/news/dist/news.js"
    ],
    [],
    "news"
  ),
  activeWhen: "/news",
})

registerApplication({
  name: "user",
  app: loadApp(
    [
      "http://localhost:8088/user/build/static/js/user.js",
    ],
    [
      "http://localhost:8088/user/build/static/css/main.4395f6fb.css",
    ],
    "user"
  ),
  activeWhen: "/user",
})

start()