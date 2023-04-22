import React from 'react'
import {Link} from "react-router-dom"

export default function UserSetProfile() {
  return (
    <div className="user-set-profile">
      User Set Profile
      <br/>
      <Link to="/user">user</Link>
    </div>
  )
}