import "./style.css";

function render(id) {
  var container = id
    ? document.getElementById(id)
    : document.body

  container.innerHTML = `<div class="home">我是home应用</div>`

  import(/* webpackChunkName: "message" */'./message').then((module) => {
    console.log("message module:", module)
  })
}

if (!window.__MICRO_WEB__) {
  render()
}

export function mount() {
  render('micro-container')
}

export function unmount() {

}

