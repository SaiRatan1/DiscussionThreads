const express = require('express')
const router = express.Router()
const jwt = require('jsonwebtoken')
const authenticate = require('../middleware/userAuth');

const Thread = require('../models/threadSchema')

router.get('/getThreads', async (req,res)=>{
	try{
		const data = await Thread.find();
		if(!data){
			res.status(400).json({message:'Couldnt get threads data'});
		}
		res.status(201).json(data);
	}
	catch(err){
		res.status(500).json({message:'Internal server error at threads!'})
	}
})


router.post('/postThread', authenticate, async (req, res) => {
	try {
	  const { tag, content, author } = req.body;
  
	  const newThread = new Thread({
		tag,
		content,
		author,
		usefullness: {upvotes:0,downvotes:0}
	  });
  
	  const savedThread = await newThread.save();
		res.status(201).json(savedThread);
	} catch (error) {
	  res.status(500).json({ error: 'An error occurred while creating the thread.' });
	}
});

module.exports = router

  
