const http = require('http');
const fs = require('fs');
const Router = require("./routes")
const server = http.createServer(Router);

server.listen(3000, ()=>{
  console.log('erver is runing now !')
});
