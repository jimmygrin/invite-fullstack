import React from "react"
import { useUsers } from "../hooks"

function Invite() {
    const { users, sendGoing, sendNotGoing } = useUsers()
  
    return (
      <div>
       {users.map(user => (
            <>
              <img src={user.picture.large} />
              <p>Name: {user.name.first}</p>
              <p>Phone: {user.phone}</p>
              <p>Email: {user.email}</p>
              <button onClick={e => sendGoing(user)}>Going</button><span><button onClick={e => sendNotGoing(user)}>Not Going</button></span>
            </>
          ))}
      </div>
    )
  }
  
  export default Invite
  