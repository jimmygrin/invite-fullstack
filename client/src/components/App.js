import React from "react"
import { useUsers } from "../hooks"
import { BrowserRouter as Router, Route, Link } from "react-router-dom"
import Invite from "./Invite"
import Going from "./Going"
import Notgoing from "./Notgoing"


function App() {
  const { users, sendGoing, sendNotGoing } = useUsers()

  console.log(users)

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
    
    export default App




//   return (
//     <Router>
//     <div>
//       <nav>
//         <Link to="/Going">Going</Link>
//         <Link to="/Notgoing">Not Going</Link>
//       </nav>
//       <main>
//         <Route exact path="/" component={Invite} />
//         <Route exact path="/Going" component={Going} />
//         <Route exact path="/Notgoing" component={Notgoing} />
//       </main>
//       {/* {users.map(user => (
//         <>
//           <img src={user.picture.large} />
//           <p>Name: {user.name.first}</p>
//           <p>Phone: {user.phone}</p>
//           <p>Email: {user.email}</p>
//           <button onClick={e => sendGoing(user)}>Going</button><span><button onClick={e => sendNotGoing(user)}>Not Going</button></span>
//         </>
//       ))} */}
//     </div>
//     </Router>
//   )
// }

// export default App
