
const router = require("express").Router()
const data = {
  going: [],
  notgoing: []
}


router.get("/going", (req, res, next) =>{
  res.json(data.going)
})
router.post("/going", (req, res, next) => {
 let user =  req.body.user
 console.log(user)


  data.going.push(user)
  console.log(data)
  res.json(user)
})



module.exports = router
