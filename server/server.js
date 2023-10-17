const express = require('express')
const app = express()

app.get('/api/test',(req,res)=>{
    res.send({"mess":"Hello from test"})
})


app.listen(8080,()=>{console.log("Server listening at port 8080")})