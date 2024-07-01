const express = require('express')
const app = express()
const cors = require('cors')
app.use(cors())
app.use(express.json())
const port = 5000





app.get("/",(req,res)=>{
    res.send("Hello new Projekt")
})



app.listen(port,()=>{
   console.log(`server listenning on port ${port}`)
})