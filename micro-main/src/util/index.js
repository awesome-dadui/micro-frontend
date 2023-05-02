// 动态加载JS
export function loadScript(url) {
  return new Promise((resolve, reject) => {
    var head = document.getElementsByTagName('head')[0]
    var script = document.createElement('script')
    script.type = "text/javascript"
    script.charset = 'utf-8'
    script.async = true
    script.timeout = 120000
    script.src = url
    script.onload = () => resolve(script)
    script.onerror = (error) => reject(error)
    head.appendChild(script)
  })
}

// 动态加载css，参考：http://lengyun.github.io/js/3-2-2dynamicAddCSS.html
export function loadStyle(url) {
  return new Promise((resolve, reject) => {
    var head = document.getElementsByTagName("head")[0]
    var link = document.createElement("link")
    link.rel = "stylesheet"
    link.type = "text/css"
    link.href = url
    link.onload = () => resolve(link)
    link.onerror = (error) => reject(error)
    head.appendChild(link)
  })
}

// 使用<style>元素来包含嵌入式CSS，参考：http://lengyun.github.io/js/3-2-2dynamicAddCSS.html
export function loadStyleString(css) {
  // 1. 创建style节点
  var style = document.createElement("style")
  style.type = "text/css"
  // 2. 以css作为内容创建文本节点，并把文本节点插入style节点
  try {
    style.appendChild(document.createTextNode(css))
  } catch (e) {
    style.textContent = css
  }
  // 3. 把style节点插入head节点
  var head = document.getElementsByTagName("head")[0]
  head.appendChild(style)
}

// 动态加载html
export function loadHtml(url) {
  return fetch(url).then((response) => {
    return response.text()
  }).then(html => {
    // console.log(html)
    return html
  }).catch((err) => {
    console.warn('Something went wrong.', err)
  })
}

// 解析html文本
export function parseHtml(html) {
  var parser = new DOMParser()
  var doc = parser.parseFromString(html, 'text/html')
  var links = doc.querySelectorAll('link')
  var scripts = doc.querySelectorAll('script')
  return {
    links: Array.from(links).map(link => link.href),
    scripts: Array.from(scripts).map(script => script.src),
  }
}
