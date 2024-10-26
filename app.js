const express = require('express')
const app = express()
const port = 7777

app.get("/",(req,res)=>{
    res.send("Hello Nitya")
})


app.listen(port,()=>{
    console.log(`server is started at ${port}`)
})