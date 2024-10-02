
const express = require('express');
const app = express();

//middleware 

app.use(express.json())


//get vaneko http method

//get ,post ,put ,path,delete  //htttp method






app.get("/user", (req, res) => {

   res.json(
    {
    data: objects
   }
)
})

app.post("/user", (req, res) => {
    let {name, email} = req.body;
    name  = "padam";
    console.log(name);

    return res.json({
        message: "user created Sucessfully",
        data:  name + " " + email
    })
 })



 const user  = [
    {id: 1, name: "padam", email: "padam@gmail.com"},
    {id: 2, name: "prakash", email: "prakash@gmail.com"},
    {id: 3, name: "rahul", email: "rahul@gmail.com"}

]
 app.put("/user/:id", (req,res)=> {
    console.log(req)
    // const {id} = req.params
    // console.log(id);
   
 })
 



app.listen(3000, ()=> {
    console.log("Server is running on port 3000")
})




