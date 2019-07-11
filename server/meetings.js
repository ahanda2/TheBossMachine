const express = require('express');
const meetingsRouter = express.Router();

module.exports = meetingsRouter;
app.use('meetings',meetingsRouter);

const {addToDatabase,getAllFromDatabase,getFromDatabaseById,updateInstanceInDatabase,deleteFromDatabasebyId,deleteAllFromDatabase,createMeeting}
= require('./db');

meetingsRouter.get('/',(req,res,next)=>{
  res.send(getAllFromDatabase('meetings'));
});

meetingsRouter.post('/',(req,res,next) => {
  const new = addToDatabase('meetings',createMeeting());
  res.status(201).send(newMeeting);
});

meetingsRouter.delete('/',(req,res,next) =>{
  deleteAllFromDatabase('meetings');
  res.status(201).send();
});
