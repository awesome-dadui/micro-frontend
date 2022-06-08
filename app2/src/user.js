import './user.css'
import tpl from './user.tpl'

export default {
  entry() {
    console.log('user entry')
    $('#content').html(tpl)
  },
  exit() {
    console.log('user module exit.')
  }
}