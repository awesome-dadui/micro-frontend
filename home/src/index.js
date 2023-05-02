import './style.css'

console.log("home -> index.js")
let domEl

function render(container) {
  domEl = document.createElement('div')
  domEl.id = 'home'
  domEl.innerHTML = 'App Home'
  container.appendChild(domEl)
}

if (!window.singleSpaNavigate) {
  render(document.body)
}

export async function bootstrap() {
  console.log("home -> bootstrap 初始化")
}

export async function mount(props) {
  console.log("home -> mount 挂载")

  let {container} = props

  render(document.getElementById(container))
}

export async function unmount(props) {
  console.log("home -> unmount 卸载")
  domEl.parentNode.removeChild(domEl)
}