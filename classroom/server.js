const express = require("express");
const app = express();
const users = require("./routes/user")
const posts = require("./routes/post");
const session = require('express-session')
const flash = require('connect-flash');
const path = require("path");


app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

const sessionOptions = {
    secret: "mysupersecretstring",
    resave: false,
    saveUninitialized: true,
  };

app.use(session(sessionOptions));
app.use(flash());

app.use((req,res,next)=>{
    res.locals.successMsg = req.flash('success');
    res.locals.errorMsg = req.flash('error');
    next();
})

app.get("/register",(req,res)=>{
    let {name = "anonymous"} = req.query;
    req.session.name = name; 
    if(name === "anonymous"){
        req.flash("error","user not register");
    }else{
      req.flash("success","user register success")
    }
    res.redirect("/hello")
});

app.get("/hello",(req,res)=>{
    res.locals.successMsg = req.flash("success");
    res.locals.errorMsg = req.flash("error");
    res.render("page.ejs", {name: req.session.name });
})



// app.get("/reqcount",(req,res)=>{
//     if(req.session.count){
//         req.session.count++;
//     } else{
//         req.session.count = 1;
//     }
//     res.send(`your sent a req ${req.session.count} times `)
// })

// app.get("/test",(req,res)=>{
//     res.send("test successfull!");
// })



app.listen(3000,()=>{
    console.log("server is running on port 3000");
})