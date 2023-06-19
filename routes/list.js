import express from 'express';
import mongoose from 'mongoose';
const todoRouter = express.Router();
const todo =  mongoose.model("todo");



todoRouter.get('/', (req, res)=>{
    res.send(req.body)
})



todoRouter.post('/', (req,res)=>{
    console.log(req.body)
    const {title, description} = req.body;

    if(!title || !description){
        res.send("Enter all the details pls.....")
    }
    todo.findOne({title:title})
    .then((savedUser)=>{
        if(savedUser){
           return res.send({error: "task(title) already exists"})
        }
        let newtask = new user({
            title: title,
            description: description,
            password: "Not completed"
        })   
        newtask.save()
        .then((savedtask)=>{
            if(!savedtask){
                return res.send({error: "task could not be created"})
            }
            return res.send({success: true, message: "task saved successfully", data: savedtask})
        })
        .catch(err => console.log(err))
    })

})




todoRouter.get('/:n', (req, res)=>{
    let id=req.params.id
    todo.findOne({id:id})
    .then((task)=>{
        if(task)
        return res.send({success: true, message: "task found", data: task})
        else
        return res.send("article not found")
    })
    .catch(err => console.log(err))
    
})




todoRouter.patch('/:id', (req, res)=>{
    let id = req.params.id
    console.log(req.body)

    todo.findOne({id:id})
    .then((updates)=>{
        updates[title]= updates[title],
        updates[description] = description,
        updates[password] = "Not completed"
        newtask.updateOne()
        return res.send(t)
    })
    .catch(err=>console.log(err))
})



todoRouter.delete("/:id",(req, res)=>{
    let id = req.params.id
    console.log(req.body)

    todo.findOne({id:id})
    .then((deletes)=>{
        if(deletes){        
            deletes.deleteOne()
            return res.send("Article delete")    
        }else
        return res.send("Article not found")
    })
    .catch(err=>console.log(err))
})


export default todoRouter;