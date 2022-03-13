import React from 'react'


const UserRow = (props) => {
  return (
    <div>
        <h1>{props.user.id}</h1>
        <p>{props.user.name}</p>
        <p>{props.user.email}</p>
        <p>{props.user.phone}</p>
    </div>
  )
}

export default UserRow