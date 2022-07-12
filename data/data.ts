
let express = require("express");
let router = express.Router();
let user = require('./users')

router.post('/createuser',(req,res)=>{
    let users = req.body;
    console.log("name",users.name);
    console.log("age",users.age);
    console.log("email",users.email);

    user.create(users).then(function(userdata,err){
        if(err){
            console.log("user not created");
        }
        else{
            res.send(userdata);
        }
    })
})

router.get('/fetch',(req,res)=>{
    let userName = req.body;
    user.find({"name":userName.name},{"__v" : 0},(er,pass)=>{
        if(er){
            console.log("not found");
        }
        else{
            res.send(pass);
        }

    })
})
router.get('/fetch_all',(req,res)=>{
    let userName = req.body;
    user.find({},{"name" : 1,"age" : 1,"email" : 1,"_id" : 0},(er,pass)=>{
        if(er){
            console.log("not found");
        }
        else{
            res.send(pass);
        }

    })
})
router.put('/update',(req,res)=>{
    let uservalue = req.body;
    let  filter = {"_id": uservalue._id}
    let update = {"age": uservalue.age,"email": uservalue.email}
 user.findOneAndUpdate(filter,update,(er,done)=>{
     if(er){
         console.log("not found");
     }
     else{
         res.send(done);
     }
})
})
router.delete('/delete',(req,res)=>{ 
    let uservalue = req.body;
    user.deleteOne({"name":uservalue.name},(er,pass)=>{
    if(er){
        console.log("not found");
    }
    else{
        res.send(pass);
    }

})
})


module.exports=router;