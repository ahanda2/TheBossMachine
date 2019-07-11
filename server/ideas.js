const express = require('express');

const ideasRouter = express.Router();

const {addToDatabase,getAllFromDatabase,getFromDatabaseById,updateInstanceInDatabase,deleteFromDatabasebyId,deleteAllFromDatabase}
= require('./db');

ideasRouter.param('id',(req,res,next,id) =>{
  const getIdea = getFromDatabaseById('ideas',id);
  if(idea) {
    req.idea = getIdea;
    next();
  } else {
    res.status(404).send();
  }
});

ideasRouter.get('/',(req,res,next)=>{
  res.send(getAllFromDatabase('ideas'));
});

ideasRouter.post('/',(req,res,next)=>{
  const newIdea = addToDatabase('ideas',req.body);
  res.status(204).send(newIdea);
});

ideasRouter.put('/:id',(req,res,next) =>{
  const update = updateInstanceInDatabase('ideas',req.body);
  res.send(update);

});

ideasRouter.delete('/:id',(req,res,next) =>{
  const delete = deleteFromDatabasebyId('ideas'.req.params.id);
  if(delete){
    res.status(201);
  } else {
    res.status(404);
  }
});

ideasRouter.get('/:id',(req,res,next) => {
  res.send(req.idea);
});
