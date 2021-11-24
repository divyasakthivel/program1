const express=require('express');
const app=express();
const port=8000;
app.use(express.json());
//app.use(express.urlencoded({extended:true}));
var employee=[{
    id:1,
    name:"divi",
    email:"divi@gmail.com"
},
{
    id:2,
    name:"sandy",
    email:"san@gmail.com"
}];
app.get('/:id',(req,res)=>{
    console.log(req.params.id);
 //   res.json(student);
 for(var i=0;i<employee.length;i++)
 {
     if(employee[i].id==req.params.id){

         res.send(employee[i]);
     }
 }
 res.status(404).json({msg:"not found"});

});

app.post('/create',(req,res)=>{
    var emp={
        id:req.body.id,
        name:req.body.name,
        email:req.body.email
        
    };
    employee.push(emp);
    res.json(employee)
});
app.put('/update/:id',(req,res)=>{
    var found=employee.some(employ=>employ.id==req.params.id);
    if(found){
        employee.foreach(employ => {
            if(employ.id==req.params.id){
                employ.id=req.body.id;
                employ.name=req.body.name;
                employ.email=req.body.email;
                res.send(employ);
            }
        });
    
    //for(var i=0;i<employee.length;i++){
        // if(employee[i].id==req.params.id){
        //     employee[i].id=req.body.id;
        //     employee[i].name=req.body.name;
        //     employee[i].email=req.body.email;
        //     res.send(employee[i]);
        // }
    
        res.status(404); 
    }

});
app.delete('/delete/:id',(req,res)=>{
    for(var i=0;i<employee.length;i++)
    {
        if(employee[i].id==req.params.id){
            delete employee[i].id;
            delete employee[i].name;
            delete employee[i].email;
            res.send("deleted")
        }
    }
    res.status(404);
})

app.listen(port,()=>console.log("server started on the port 8000"))




// var express=require('express');
// var app=express();
// var port=3000;
// app.get('/:name',(req,res)=>{
//     res.send("hai " + req.params.name);
// });
// app.listen(port)