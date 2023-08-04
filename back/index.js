const express=require('express')
const mongoose=require('mongoose')
const cors=require('cors')
const Model=require('./detail')

const app=express()
app.use(cors())
app.use(express.json())

mongoose.connect("mongodb://127.0.0.1:27017/detail")

app.post("/create",(req,res)=>{
    Model.create(req.body)
    .then(x=>res.json(x))
    .catch(e=>res.json(e))
})

app.get("/",(req,res)=>{
    Model.find({})
    .then(u=>res.json(u))
    .catch(e=>res.json(e))
})

app.get("/alter/:id",(req,res)=>{
    const id=req.params.id;
    Model.find({_id:id})
    .then(u=>res.json(u))
    .catch(e=>res.json(e))

})

app.put("/alter/:id",(req,res)=>{
    const id=req.params.id;
    Model.updateOne({_id:id},{$set:{name:req.body.name,note:req.body.note}})
    .then(u=>res.json(u))
    .catch(e=>res.json(e))
})

app.put("/del/:id",(req,res)=>{
    const id=req.params.id;
    Model.deleteOne({_id:id})
    .then(u=>res.json(u))
    .catch(e=>res.json(e))
})

app.listen(3000,()=>{
    console.log("server started");
})