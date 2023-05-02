/* eslint-disable */
import Vue from 'vue'
import App from './App.vue'
import router from './router'

Vue.config.productionTip = false

let instance = null

function render(root) {
  var app = document.createElement("div")
  root.appendChild(app)

  instance = new Vue({
    router,
    render: h => h(App),
  }).$mount(app)
}

if (!window.singleSpaNavigate) {
  render(document.getElementById("app"))
}

export async function bootstrap() {
  console.log("news -> bootstrap 首次渲染")
}

export async function mount(props) {
  console.log("news -> mount 挂载")

  render(document.getElementById('micro-container'))
}

export async function unmount(props) {
  console.log("news -> unmount 卸载")

  instance && instance.$destroy()
  instance.$el.innerHTML = ''
  instance.$el.parentNode.removeChild(instance.$el)
  instance = null
}

export default "i'am news-app"