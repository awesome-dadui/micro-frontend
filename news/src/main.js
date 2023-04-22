import Vue from 'vue'
import App from './App.vue'
import router from './router'

Vue.config.productionTip = false

function render(id = "#app") {
  if (id !== "#app") {
    var microContainer = document.getElementById(id)
    var root = document.createElement("div")
    microContainer.appendChild(root)
    id = root
  }

  new Vue({
    router,
    render: h => h(App),
  }).$mount(id)
}

if (!window.__MICRO_WEB__) {
  render()
}

export function mount() {
  render('micro-container')
}

export function unmount() {

}

export default 'news'