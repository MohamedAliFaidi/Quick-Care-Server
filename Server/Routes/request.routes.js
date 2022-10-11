const express = require("express") ;
const router = express.Router() ;

const  { findHceReq, addRequest,actifRequest }=require("../Controllers/RequestControllers")
router.get('/getAll', findHceReq );
router.post("/addingRequest",addRequest)
router.post("/checkRequest",actifRequest)
module.exports = router;
