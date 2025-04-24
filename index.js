const express=require("express");
const app=express();
let port=9836;
const path=require("path")
const {v4:uuidv4}=require("uuid");
uuidv4();
let methodOverride = require('method-override')

app.use(express.urlencoded({extended:true}));
app.use(methodOverride('_method'))

app.set("view engine","ejs");
app.set("views",path.join(__dirname,"views"));

app.use(express.static(path.join(__dirname,"public")));
let posts=[
    {
        id:uuidv4(),
        username:"surajjagtap@gmail.com",
        content: "  Hello Guys I am suraj jagtap from imperial college of engineering wagholi,pune"
    },
    {
        id:uuidv4(),
        username:"kartikizanane04@gmail.com",
        content:"  Hello Guys I am kartiki zanzane from shree siddheshwar vidyalaya,panvel"
    },
    {
        id:uuidv4(),
        username:"surajjagtap@gmail.com",
        content:"  kartiki you know very well about our frienship .so lets go to baramati to meet your relatives "
    }
]

app.get("/posts",(req,res)=>{
res.render("index.ejs",{posts});
})
app.listen(port,()=>{
    console.log("app is listening on port 9836");
})
app.get("/posts/new",(req,res)=>{
res.render("new.ejs");

})
app.post("/posts",(req,res)=>{
console.log(req.body);
let id=uuidv4();
let {username,content}=req.body;
 posts.push({id,username,content})

res.send("working successfully...")
})

app.get("/posts/:id" ,(req,res)=>{
 let {id}=req.params;
 let post=posts.find((p)=>id===p.id)
 res.render("show.ejs",{post})

})

app.get("/posts/:id/edit",(req,res)=>{
    let {id}=req.params;
    let post=posts.find((p)=>id===p.id)
    res.render("edit.ejs",{post})
})

app.patch("/posts/:id",(req,res)=>{

    let {id}=req.params;
    let post=posts.find((p)=>id===p.id);
    let newcontent=req.body.content;
    post.content=newcontent;
    console.log(post);
    res.send("successfully....")
})


























































































