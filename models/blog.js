const mongoose=require('mongoose')

const BlogSchema=mongoose.Schema({

    category:{
        type:String,
        require:true
    },
    title:{
        type:String,
        require:true
    },
    description:{
        type:String,
        require:true
    }
},{timestamp:true})

const BlogModel=mongoose.mongoose.model('blog',BlogSchema)
module.exports=BlogModel    