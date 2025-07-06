const express=require('express');
const app=express();
require('dotenv').config();
const PORT=process.env.PORT || 3000;
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
const userModel = require('./models/user');
const Path=require('path');
const user = require('./models/user');
const { prototype } = require('events');
import { fileURLToPath } from "url";

// Vercel requires ES Modules, so we get __dirname this way
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
app.use(express.static(Path.join(__dirname, 'public')));
app.set('view engine', 'ejs');
app.get('/',(req,res)=>{
    res.render('index');
});
app.get('/read',async(req,res)=>{
 let allUsers= await userModel.find()
    res.render('readUser',{users:allUsers});
});
app.post('/create',async(req,res)=>{
  let {image,name,email,age} =req.body;
let createdUser=await userModel.create({image,name,email,age});
res.redirect('/read');
});
app.get('/delete/:id',async(req,res)=>{
    let {id}=req.params;
    await userModel.findByIdAndDelete(id);  
  res.redirect('/read');
});
app.get('/edit/:id',async(req,res)=>{
    let {id}=req.params;
    let user=await userModel.findById(id);
    res.render('updateUser',{user});
});
app.post('/update/:id',async(req,res)=>{
    let {id}=req.params;
    let {image,name,email,age} =req.body;
    await userModel.findByIdAndUpdate(id,{image,name,email,age});
    res.redirect('/read');  
});

app.listen(PORT,()=>{
    console.log('Server is running on port ' + PORT);
}); 