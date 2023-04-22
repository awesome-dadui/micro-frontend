import React from 'react'
import {Link} from "react-router-dom"

export default function UserSet() {
  return (
    <div className="user-set">
      User Set
      <br/>
      <Link to="/user/set/profile">user set profile</Link>
      <br/>
      <Link to="/user/set/Posts">user set posts</Link>
    </div>
  )
}