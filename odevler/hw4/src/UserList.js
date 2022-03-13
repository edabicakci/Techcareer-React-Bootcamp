import React from 'react'
import UserRow from './UserRow'

const UserList = (props) => {
  return (
    props.users.map(user => 
        <UserRow user = {user}/>
  )
  )
}

export default UserList