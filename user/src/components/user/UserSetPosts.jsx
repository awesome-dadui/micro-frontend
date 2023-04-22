import React from 'react'
import {Link} from "react-router-dom"

export default function UserSetPosts() {
  return (
    <div className="user-set-posts">
      User Set Posts
      <br/>
      <Link to="/user">user</Link>
    </div>
  )
}