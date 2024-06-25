const express=require('express')
//console.log(e)
const app=express()
const port=3000

const web=require('./routes/web')

const connect=require('./Db/connectDB')

//dbconnect
connect()

//data get converts into object
app.use(express.urlencoded({extended:false}))


//html css template engines 
app.set('view engine','ejs')

//link css image
app.use(express.static('public'))

//route load
app.use('/',web)


//create server
app.listen(port,()=>console.log("server start localhost:3000"))
