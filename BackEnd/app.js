const express = require('express')
const app = express()
const cors = require('cors')
app.use(cors())
app.use(express.json());
app.use(express.urlencoded({extended: true}));
const port = 5000

const db= require('./orm/index.js')
const routersTalents = require ("./routes/talents.js")


app.get("/",(req,res)=>{
    res.send("Hello new Projekt")
})

app.use('/api/talents',routersTalents)

app.listen(port,()=>{
   console.log(`server listenning on port ${port}`)
})