const express=require('express');
const app=express();
const port=5000;
app.use(express.json());
app.use(express.urlencoded({extended:true}));
var student=[
    {
         name:'divi',
         id:1,
         email:'divi@gmail.com'
},
{
         name:'sandy',
         id:2,
         email:'sandy@gmail.com'
},

];

// app.get('/:id',(req,res)=>{
//     //res.send(parseInt(req.params.id));

//  res.json(student.filter(stud=>stud.id===parseInt(req.params.id)));

// });
app.get('/:id',(req,res)=>{
   // console.log(req.params.id);
 //   res.json(student);
 for(var i=0;i<student.length;i++)
 {
     if(student[i].id===parseInt(req.params.id)){

         res.send(student[i]);
     }
 }
 res.status(404).json({msg:"not found"});

});
app.post('/post',(req,res)=>
{
    const pstud={
        name:req.body.name,
        id:req.body.id,
        email:req.body.email
    };
    student.push(pstud);
    res.json(student);
});
app.put('/put/:id',(req,res)=>{

for(var i=0;i<student.length;i++)
{
    if(student[i].id === parseInt(req.params.id))
    {
    student[i].name=req.body.name;
    student[i].id=req.body.id;
    student[i].email=req.body.email;
    res.send(student[i]);
}
}
res.status(404).json({msg:"not found"});
//res.json("updated");
});

// app.delete('/delete/:id',(req,res)=>
// {
//     var arr1=[];
//     for(var i=0;i<student.length;i++)
//     {
//         if(student[i].id!==parseInt(req.params.id))
//         {
//             arr1.push(student[i]);
//             student=arr1;
//             res.json("deleted");
//         }
//         // else{
//         //     res.send("not found");
//         // }
//     }
//     res.send("not found");
// });

app.delete('/:id',(req,res)=>{
    for(var i=0;i<student.length;i++){
        if(student[i].id==parseInt(req.params.id)){
            delete student[i].name;
            delete student[i].id;
            delete student[i].email;
            res.json("deleted");
        }
    }
    //res.send("not found");
    res.status(404).json({msg:"not found"});
});



app.get('/name/:name',(req,res)=>{
    res.send("Welcome"+req.params.name);
});
//app.listen(port);
app.listen(port,()=>console.log("Server started"));