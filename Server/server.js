const express=require("express");
const mysql=require("mysql");
const cors=require("cors");
const path=require("path");
const app=express()
const port=5000;

app.listen(port,(err)=>{
    if(err){
        console.log("not listneing");
    }else{
        console.log("listining");
    }
})
app.use(express.static(path.join(__dirname,"public")));
app.use(express.json());
app.use(cors());

const conn=mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"",
    database:"tut"
})

conn.connect((err)=>{
    if (err){console.log("Not connected")}
    else{console.log("connected")}
})

app.get("/data",(req,res)=>{
    const select=`select * from student`;
    conn.query(select,(err,result)=>{
        if(err){
            res.status(500).send("there is error on display");
        }else{
            res.send(result);
        }
    })
})

app.post("/insert",(req,res)=>{
    const {name,age,gender}=req.body;
    const insert=`insert into student (name,age,gender)values(?,?,?)`;
    conn.query(insert,[name,age,gender],(err,res)=>{
        if(err){
            console.log("error on inserting")
        }else{
            console.log("inserted")
            // res.end("inserted")
        }
    })
})
app.post("/add",(req,res)=>{
    const {name,age,dep}=req.body;
    const add=`insert into teacher (name,age,departement)values(?,?,?)`;
    conn.query(add,[name,age,dep],(err,result)=>{
        if(err){
            console.log("there is error on inserting teacher table")
        }else{
            console.log("data isnerted ");
        }
    })
})

app.get("/teacher",(req,res)=>{
    const view=`SELECT * FROM teacher`;
    conn.query(view,(err,result)=>{
        if(err){
            console.log("there is error on fetching from teacher table");
        }else{
            res.send(result)
        }
    })
})