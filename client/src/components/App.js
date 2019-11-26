import React from "react"
import { useUsers } from "../hooks"
import { BrowserRouter as Router, Route, Link } from "react-router-dom"
import Invite from "./Invite"
import Going from "./Going"
import Notgoing from "./Notgoing"
import Style from "./style.css"


function App() {
  const { users, sendGoing, sendNotGoing } = useUsers()

 

  return (
      <Router>
        <div className="container">
          <Link to="/">Invite</Link>
          <Link to="/Going">Going</Link>
          <Link to="/Notgoing">Not Going</Link>
         
       
        <Route exact path="/" component={Invite}/>    
        <Route path="/Going" component={Going}/>
        <Route path="/Notgoing" component={Notgoing}/>
        </div>
      </Router>
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
