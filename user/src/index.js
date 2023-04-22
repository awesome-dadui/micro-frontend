import './index.css'
import React from 'react'
import ReactDOM from 'react-dom'
import App from './components/App'
import {HashRouter} from 'react-router-dom'

function render(id = 'root') {
  let rootEle = document.getElementById(id)
  console.log(rootEle)
  ReactDOM.render(
    <HashRouter>
      <App/>
    </HashRouter>,
    rootEle
  )
}

if (!window.__MICRO_WEB__) {
  render()
}

export function mount() {
  render('micro-container')
}

export function unmount() {

}

