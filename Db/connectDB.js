const mongoose= require('mongoose')

const localUrl="mongodb://127.0.0.1:27017/blogProject"

const connect=()=>{
    mongoose.connect(localUrl).then(()=>{
        console.log('connect success')
    }).catch((err)=>{
        console.log(err)
    })
}

module.exports=connect

