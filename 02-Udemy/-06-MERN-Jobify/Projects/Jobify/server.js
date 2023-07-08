const express = require("express");
const dotenv = require("dotenv");
const connect =require("./db/connect")
const AuthRoute = require('./Router/AuthRoute')
const NotFound = require("./middleware/not-found");
const ErrorHandler = require("./middleware/Error-handler");
const JopsRoutes = require("./Router/JopesRoute")
const cors = require('cors')
const port = 1000;
dotenv.config();

// middleware


const app = express();
// using cross orign  resourses sharing
app.use(cors())
app.use(express.json());

app.use("/api/v1/auth" ,AuthRoute)
app.use("/api/v1/jop" ,JopsRoutes)
app.use(NotFound);
app.use(ErrorHandler);

// auth routes




// connect database and server

const startApp =async =>{

try{
connect(process.env.DB_STRING)
app.listen(8000, () => {
  console.log(`our server is runing on port ${port}`);
});
}catch(err){

  console.log(err)
}

  
}

startApp()
