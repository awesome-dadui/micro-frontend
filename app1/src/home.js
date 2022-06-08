import './home.css'
import tpl from './home.tpl'

// console.log(document.body)
// window.alert(10)

new Object()
Math.random()
new Date()

console.log('13')
parseInt(1.23)
console.log(alert)
console.log(tpl)

export default {
  entry() {
    console.log('home entry 12')

    $('#content').html(tpl)

    var app = new Vue({
      el: '#app',
      data() {
        return {
          name: 'home',
          id: parseInt(Math.random() * 1000),
        }
      },
      methods: {
        onClickBtn() {
          router.go('#app2/user')
        }
      }
    })
  },
  exit() {
    console.log('home module exit4.')
  }
}
