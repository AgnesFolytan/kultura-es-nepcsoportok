const express = require('express')
const cors= require('cors')
const User= require('./confige')
const app = express()

app.use(express.json())
app.use(cors())

app.post("/create", async(req: { body: any },res: { send: (arg0: { msg: string }) => void })=>{
    const data= req.body;
    await User.add(data)
    res.send({msg:"User Added"})
})
app.listen(4000,()=>{
    console.log("Alma")
})