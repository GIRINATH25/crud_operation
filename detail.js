const mongoose=require('mongoose')

const schema=new mongoose.Schema({
    name:String,
    note:String
})
const Model=mongoose.model("detail",schema)
module.exports=Model