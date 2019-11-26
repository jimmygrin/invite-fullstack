import React from "react"
import { useUsers } from "../hooks"


function Going() {

  const { going } = useUsers()

  console.log(going)
  
    return (
      <div>
       {going.map (person =>(
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
  
  export default Going
  