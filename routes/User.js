var express = require('express');
var router = express.Router();

const publishToQueue = require('../services/MQServices');
console.log(publishToQueue);


router.post('/msg',async(req, res, next)=>{
    let { queueName, payload } = req.body;
    await publishToQueue(queueName, payload);
    res.statusCode = 200;
    res.data = {"message-sent":true};
    next();
  })

module.exports = router