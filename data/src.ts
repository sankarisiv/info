import * as express from "express";
import * as mongoose from "mongoose";
let app = express();

let path = require('./data')
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/user',path);
app.set("port",3000);

const uri="mongodb://0.0.0.0:27017/infodb";
mongoose.connect(uri);

const connection = mongoose.connection;
connection.once("open",function(){
    console.log("database connected");
})

app.listen(app.get("port"),()=>{
    console.log("app listing..",app.get("port"))
})