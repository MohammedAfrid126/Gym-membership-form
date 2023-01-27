const express = require('express');  //To use express we should include the express module 
const fs = require('fs');
const app = express();//to use express functions we should create a const
const path = require('path');

const port = 80; // set the port

// EXPRESS SPECIFIC PART
app.use("/static",express.static("static"));
app.use(express.urlencoded());

// PUG SPECIFIC PART
app.set("view engine", "pug"); //Now we should set the view engine as  pug
app.set("views", path.join(__dirname, 'views')); // set the views directory

// END POINT SPECIFIC PART
app.get("/",(req,res)=>{
    const con = "";
    const params = {"title":"Gym membership - GET it on Discount","content":con}
    res.status(200).render("index.pug",params);
});

app.post("/",(req,res)=>{
    Name = req.body.Name
    Age = req.body.Age
    Email= req.body.Email
    Address= req.body.Address
    More= req.body.More
    let outputToWrite = `The name of the client is ${Name},${Age} years old,resideding in ${Address},with ${Email} and about him/her asfollows "${More}"`;
    fs.writeFileSync("output.txt", outputToWrite);
    const params = {"message":"Your form has been successfully submitted"}
    res.status(200).render("index.pug",params);
});
// START SERVER SPECIFIC PART
app.listen(port,()=>{
    console.log("listening on port " +port);
});
