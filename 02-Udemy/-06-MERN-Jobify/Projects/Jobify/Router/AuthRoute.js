const express =require("express")
const Router =express.Router()
const authFunctions =require('../controllers/AuthControler')


// add controllers functions
Router.post("/register" ,authFunctions.Register)
Router.post("/login" ,authFunctions.Login)
Router.patch("/update" ,authFunctions.Update)



module.exports = Router