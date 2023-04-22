import React, {Component} from 'react'
import {Link} from "react-router-dom"

export default class User extends Component {
  render() {
    return (
      <div className="app-user">
        <h2 style={{borderBottom: "1px solid #e4e4e4"}}>个人信息</h2>
        <Link to="/user/set">user set</Link>
      </div>
    )
  }
}