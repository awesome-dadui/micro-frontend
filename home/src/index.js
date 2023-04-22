function render(id) {
  var container = id
    ? document.getElementById(id)
    : document.body

  container.innerHTML = `<div>我是home应用</div>`

  import(/*a*/'./message').then((module) => {
    console.log("module:", module)
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

