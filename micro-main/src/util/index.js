export function loadJs(url) {
  return new Promise((resolve, reject) => {
    // console.log(url)
    var head = document.getElementsByTagName('head')[0]
    var script = document.createElement('script')
    script.type = "text/javascript"
    script.charset = 'utf-8'
    script.async = true
    script.timeout = 120000
    script.src = url
    script.onload = function () {
      // console.log(url, "加载完成")
      resolve()
    }
    script.onerror = function (error) {
      reject(error)
    }
    head.appendChild(script)
  })
}

export function loadHtml(url) {
  return fetch(url).then((response) => {
    return response.text();
  }).then(html => {
    // console.log(html)
    return html
  }).catch((err) => {
    console.warn('Something went wrong.', err);
  });
}

export function parseHtml(html) {
  var parser = new DOMParser();
  var doc = parser.parseFromString(html, 'text/html');
  var scripts = doc.querySelectorAll('script');
  var links = doc.querySelectorAll('link');
  // console.log(links, scripts);
  return {
    links: Array.from(links),
    scripts: Array.from(scripts).map(script => script.src),
  }
}
