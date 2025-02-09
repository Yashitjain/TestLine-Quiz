const express = require("express")
const app = express();
const cors = require('cors')
app.use(express.json())
app.use(cors());

app.get('/',async (req,res)=>{
    const data = await fetch('https://api.jsonserve.com/Uw5CrX');
    const response = await data.json();
    res.json(response);

})

app.listen(8000,()=>console.log("Server Started"));