const express = require("express");
const fs = require("fs");

//function calling here
const app = express();

//req body json ma aauxa .aslai yaaad garnus
app.use(express.json());

const file = "body.txt";


app.get("/", (req, res) => {
  fs.readFile(file, (err, data) => {
    if (err) return console.log(err);
    res.json({
        data:JSON.parse(data)
    });
  });
});

//post

app.post("/", (req, res) => {
  const body = req.body;
  
  fs.appendFile(file, JSON.stringify(body), (err) => {
    if (err) return console.log(err);
    console.log("Create file with data");
  });
});



app.put("/:id", (req, res) => {
    const {id} = req.params;

    const  body = req.body;

    //suruma teo data xa ki xaina check garne

    //teodata xain vane kei nagarni , xaina vanne msg pathaun
    

    //xa vane teslai update gardine

})

app.delete("/:id", (req, res) => {

    //file xa ki xaina check agrne , file xaina vane, xaina vanera message response ma pathaune


    //file delete garne
    fs.unlink(file, (err)=> {
        if(err) return console.log(err);
        console.log("File deleted successfully");
        res.status(200).json({
            message: "File deleted successfully"
        })

    })

})




const port = 3000;


app.listen(port, () => {
  console.log(`Server is up and running on port ${port}`);
});
