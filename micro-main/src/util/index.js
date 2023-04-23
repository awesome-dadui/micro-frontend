export function addScript(url) {
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
