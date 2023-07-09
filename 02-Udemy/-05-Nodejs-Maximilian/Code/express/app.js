const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const path = require("path")
const appDir = path.dirname(require.main.filename);

console.log(appDir);
app.use(bodyParser.urlencoded({ extended: true }));
const adminRouter  =  require("./Routs/admin")
const shopRouter  =  require("./Routs/shop")
app.use(adminRouter)
app.use(shopRouter)


app.use((req, res) => {
  // Send a 404 Not Found response to the client
res.send("thanks")
});

app.listen("7000", () => {
  console.log("server is runing");
});
module.exports = path