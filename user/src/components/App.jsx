import React, {Component} from 'react'
import {Route, Switch} from 'react-router-dom'
import User from './user/User'
import UserSet from './user/UserSet'
import UserSetProfile from './user/UserSetProfile'
import UserSetPosts from './user/UserSetPosts'

export default class App extends Component {
  render() {
    return (
      <div>
        <Switch>
          <Route path='/user' exact component={User}/>
          <Route path="/user/set" exact component={UserSet}></Route>
          <Route path="/user/set/profile" exact component={UserSetProfile}></Route>
          <Route path="/user/set/posts" exact component={UserSetPosts}></Route>
        </Switch>
      </div>
    )
  }
}