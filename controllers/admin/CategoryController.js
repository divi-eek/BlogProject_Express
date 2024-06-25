const CategoryModel=require('../../models/category')

class CategoryController{
    static display=async(req,res)=>{
        try {
            const category= await CategoryModel.find()
            // console.log(category)
            res.render('admin/category/display',{c:category})
        } catch (error) {
            console.log(error)
        }
    }



    static categoryInsert=async(req,res)=>{
        try {
        //    console.log(req.body) nput name(n)
        const result=new CategoryModel({
            name:req.body.n
        })
        await result.save()
        res.redirect('/admin/categoryDisplay')
        } catch (error) {
             console.log(error)
        }
    }
}

module.exports=CategoryController