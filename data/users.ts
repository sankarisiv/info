import { model,Schema } from "mongoose";

interface format{
    name:string;
    age:number;
    email:string;
}

let schema = new Schema <format>({
    name:String,
    age:Number,
    email:String
})

const usermodel = model('users',schema);
module.exports=usermodel;