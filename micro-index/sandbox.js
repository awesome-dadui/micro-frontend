;(function (window) {
  var target = {
    Object: window.Object,
    Math: window.Math,
    Date: window.Date,

    document: window.document,
    console: window.console,
    parseInt: window.parseInt,
    alert: window.alert,

    define: window.define,
    $: window.$,
    Vue: window.Vue,

    router: window.router,
  }

  var handler = {
    has(target, key) {
      if (key in target) {
        return target[key]
      } else {
        throw new Error(`无法访问属性或方法 ${key}, 详情请参考：https://www.google.com`)
        return undefined
      }
    }
  }

  var proxy = new Proxy(target, handler)

  function sandbox(code) {
    var fun = new Function(`
        with(this){
            ${code}
        }
    `)

    fun.call(proxy)
  }

  window.snadbox = sandbox
}(window))