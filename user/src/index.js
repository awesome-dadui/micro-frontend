import './index.css'
import React from 'react'
import ReactDOM from 'react-dom'
import App from './components/App'
import {BrowserRouter as Router, /*HashRouter as Router*/} from 'react-router-dom'

let instance = null
let root = null

function render() {
  instance = ReactDOM.render(
    <Router>
      <App/>
    </Router>,
    root
  )
  console.log("ReactDOM:", ReactDOM)
  console.log("instance:", instance)
}

if (!window.singleSpaNavigate) {
  root = document.getElementById("root")
  render()
}

export async function bootstrap() {
  console.log("user -> bootstrap 首次渲染")
}

export async function mount(props) {
  console.log("user -> mount 挂载")
  root = document.getElementById("micro-container")
  render()
}

export async function unmount(props) {
  console.log("user -> unmount 卸载")

  ReactDOM.unmountComponentAtNode(root)
  instance = null
  root = null
}

export default "i'am user-app"