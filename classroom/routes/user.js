const express = require("express");
const router = express.Router();

// index route-user
router.get("/",(req,res)=>{
    res.send("Get Route for users");
})

// Show user
router.get("/:id",(req,res)=>{
    res.send("Get  for Show users");
})

// Post user
router.post("/",(req,res)=>{
    res.send("Post  for  users");
})
// delete user
router.delete("/:id",(req,res)=>{
    res.send("Delete  for  users");
})
module.exports = router;