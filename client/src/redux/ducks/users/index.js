import { useEffect } from "react"
import { useSelector, useDispatch } from "react-redux"
import axios from "axios"

// action definitions
const GET_USERS = "users/GET_USERS"
const GOING = "users/GOING"
const NOTGOING = "users/NOTGOING"
const NOTGOING_LIST = "user/NOTGOING_LIST"
const GOING_LIST = "user/GOING_LIST"


// initial state
const initialState = {
  users: [],
  going:  [],
  notgoing: []
}

// reducer
export default (state = initialState, action) => {
  switch (action.type) {
    case GET_USERS:
      return { ...state, users: action.payload }
    case GOING:
      return {...state, going: action.payload}  
    case NOTGOING:
      return { ...state, user: action.payload}    
    default:
      return state
  }
}

// action creators
const getUsers = () => {
  return dispatch => {
    axios.get("https://randomuser.me/api/?results=1").then(resp => {
      dispatch({
        type: GET_USERS,
        payload: resp.data.results
      })
    })
  }
}

const going_List = () => {
  return dispatch => {
    axios.get("http://localhost:8080/users/going").then(resp => {
      console.log(resp.data)
      dispatch({

        type: GET_USERS,
        payload: resp.data
      })
    })
  }
}

const notgoing_List = () => {
  return dispatch => {
    axios.get("/notgoing").then(resp => {
      dispatch({
        type: GET_USERS,
        payload: resp.data.results
      })
    })
  }
}

const userNotGoing = () => {
  return dispatch => {
    axios.post("/notgoing").then(resp => {
      dispatch({
        type: NOTGOING,
        payload: resp.data.results
      })
    })
  }
}

function userGoing (user) {
  console.log('userGoing')
  return dispatch =>{
    axios.post("/users/going", {user}).then(resp => {
      
      dispatch(getUsers())
    })
  }

}




// function userNotgoing (user) {
  
//   return dispatch => {
//     axios.post("./notgoing", {user}).then(resp => {
//       dispatch({
//         type: NOTGOING,
//       payload: user
//       })
// }
//   }



// custom hooks
export function useUsers() {
  const users = useSelector(appState => appState.userState.users)
  const going = useSelector(appState => appState.userState.going)
  const dispatch = useDispatch()
  const get = () => dispatch(getUsers())
  const sendGoing = (user) => {
    console.log('sendGoing', user)
    dispatch(userGoing(user))
  }

  useEffect(() => {
    get()
  }, [dispatch])

  return { users, sendGoing, going }
}
