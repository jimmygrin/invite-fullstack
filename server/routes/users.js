
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

router.get("/notgoing", (req, res, next) =>{
  res.json(data.notgoing)
})
router.post("/notgoing", (req, res, next) => {
 let user =  req.body.user
 console.log(user)


  data.notgoing.push(user)
  console.log(data)
  res.json(user)
})



module.exports = router
