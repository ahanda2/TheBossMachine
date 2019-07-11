const express = require('express');

const minionsRouter = express.Router();

module.exports = minionRouter;
app.use('minions',minionsRouter);

const {addToDatabase,getAllFromDatabase,getFromDatabaseById,updateInstanceInDatabase,deleteFromDatabasebyId,deleteAllFromDatabase}
= require('./db');

minionsRouter.get('/',(req,res,next)=>{
  res.send(getAllFromDatabase('minions'));
});

minionsRouter.param('minionId', (req, res, next, id) => {
  const minion = getFromDatabaseById('minions', id);
  if (minion) {
    req.minion = minion;
    next();
  } else {
    res.status(404).send();
  }
});

minionsRouter.get('/',(req,res,next) => {
  res.send(getAllFromDatabase('minions'));
});

minionsRouter.post('/'.(req,res,next) =>{
  const minion = addToDatabase('minion',req.body);
  res.status(201).send(minion);
});

minionsRouter.get('/:minionId',(req,res,next)=>{
  res.send(req.minion);
});

minionsRouter.put('/:minionId',(req,res,next)=>{
  const updateMinion = updateInstanceInDatabase('minions',req.body);
  res.send(updateMinion);
});

minionsRouter.delete('/:minionId',(req,res,next)=>{
  const deleteMinion = deleteFromDatabasebyId('minion',req.params.minionId);
  if(deleted) {
    res.status(201).send();
  } else {
    res.status(404).send();
  }
});

minionsRouter.post('/:minionId/work',(req,res,next) =>{
  const addWork = req.body;
  addWork.minionId = req.params.minionId;
  const createdWork = addToDatabase('work',workToAdd);
  res.status(201).send(createdWork);
});
