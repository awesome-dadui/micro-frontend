import './home.css'
import tpl from './home.tpl'

// console.log(document.body)
// window.alert(10)

new Object()
Math.random()
new Date()

console.log('home.js 1')
parseInt(1.23)
console.log(alert)
console.log(tpl)
console.log("this:", this)

export default {
  entry() {
    console.log('home entry 12')

    $('#content').append(`<div></div>`)

    var app = new Vue({
      el: $('#content').children(0)[0],
      template: tpl,
      data() {
        return {
          name: 'home page',
          id: parseInt(Math.random() * 1000),
        }
      },
      methods: {
        onClickBtn() {
          router.go('#app2/user')
        }
      },
      mounted() {
        console.log('app:', this.$el)
      }
    })
  },
  exit() {
    console.log('home module exit4.')
  }
}
