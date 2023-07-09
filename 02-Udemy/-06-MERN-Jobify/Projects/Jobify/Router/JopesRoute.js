const express=  require("express")
const router  = express.Router()
const JopsFunctions = require("../controllers/jopControler")

router.get('/',JopsFunctions.getAllJop)
router.post("/" ,JopsFunctions.createJop)
router.get("stat" ,JopsFunctions.getStat)
router.patch("/:id" ,JopsFunctions.deleteJop)
router.get("/:id" ,JopsFunctions.updateJop)
module.exports =router