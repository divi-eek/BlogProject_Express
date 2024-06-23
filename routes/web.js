const express= require('express')
const FrontController = require('../controllers/FrontController')
const AdminController = require('../controllers/admin/AdminController')
const CategoryController = require('../controllers/admin/CategoryController')
const BlogController = require('../controllers/admin/BlogController')


const route=express.Router()



//to controller

route.get('/',FrontController.home)
route.get('/about',FrontController.about)
route.get('/contact',FrontController.contact)
route.get('/bloglist',FrontController.bloglist)
route.get('/login',FrontController.login)


//admin
route.get('/admin/dashboard',AdminController.dashboard)

//display categories
route.get('/admin/categoryDisplay',CategoryController.display)


//display blogs
route.get('/admin/blogDisplay',BlogController.display)




module.exports=route