import React from "react"
import { useUsers } from "../hooks"


function Notgoing() {

  const { notgoing } = useUsers()

  console.log(notgoing)
  
    return (
      <div>
       {notgoing.map (person =>(
         <div>
               <img src={person.picture.large} />
              <p>Name: {person.name.first}</p>
              <p>Phone: {person.phone}</p>
              <p>Email: {person.email}</p>
          </div>
      
           
    ))}
    </div>
       )
    
  }
  
  export default Notgoing
  