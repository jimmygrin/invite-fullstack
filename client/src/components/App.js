import React from "react"
import { useUsers } from "../hooks"

function App() {
  const { users, sendGoing } = useUsers()

  console.log(users)

  return (
    <div>
      {users.map(user => (
        <>
          <img src={user.picture.large} />
          <p>Name: {user.name.first}</p>
          <p>Phone: {user.phone}</p>
          <p>Email: {user.email}</p>
          <button onClick={e => sendGoing(user)}>Going</button><span><button>Not Going</button></span>
        </>
      ))}
    </div>
  )
}

export default App
