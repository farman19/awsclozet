import mongoose from "mongoose";

const addproductSechema = new mongoose.Schema({
    name: {type: String, required:true},
    description:{type:String,required:true},
    filename:{type:String, required:true},
    path:{type:String, required:true}
   
    
})

const addproductModle = mongoose.model("products",addproductSechema);
export default addproductModle;