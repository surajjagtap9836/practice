const express=require("express");
const app=express();
let port=9836;
const path=require("path")

app.use(express.urlencoded({extended:true}));

app.set("view engine","ejs");
app.set("views",path.join(__dirname,"views"));

app.use(express.static(path.join(__dirname,"public")));
let posts=[
    {
        id:"1a",
        username:"surajjagtap@gmail.com",
        content: "  Hello Guys I am suraj jagtap from imperial college of engineering wagholi,pune"
    },
    {
        id:"2b",
        username:"kartikizanane04@gmail.com",
        content:"  Hello Guys I am kartiki zanzane from shree siddheshwar vidyalaya,panvel"
    },
    {
        id:"3c",
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
 let {username,content}=req.body;
 posts.push({username,content})

res.send("working successfully...")
})

app.get("/posts/:id" ,(req,res)=>{
 let {id}=req.params;
 let post=posts.find((p)=>id===p.id)
 res.render("show.ejs",{post})

})


























































































