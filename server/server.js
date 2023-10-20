require('dotenv').config();

const express = require('express')
const app =  express()
var bodyParser = require('body-parser')
const mongoose = require('mongoose')
const cookieParser = require('cookie-parser')
const cors = require('cors')
app.use(cors()) 
mongoose.set('strictQuery', true)

app.use(cookieParser())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }));
const bcrypt = require("bcrypt");
const saltRounds = 5;
app.use(express.json());

// DB -
const DB = 'mongodb+srv://sairatandt:DiscussionThreads@cluster0.9boffdj.mongodb.net/dt?retryWrites=true&w=majority'

mongoose.connect(DB)
.then(()=>{console.log('Connection successfull')})
.catch((err)=>{console.log(`Couldn't connect to database`)})

const User = require('./models/userSchema')


app.get('/api/test',(req,res)=>{
    res.send({"mess":"Hello from test"})
})
const threadroutes = require('./routes/threadroutes')    
app.use('/api/threads',threadroutes);


// LOGIN ROUTE
app.post('/api/loginroute', async (req, res) => {

    const { email, password } = req.body;
    const foundUser = await User.findOne({ email: email })

    if(foundUser){

        const ismatch = await bcrypt.compare(password,foundUser.password);
        if(!ismatch){
            res.status(400).json({ error: "INVALID CREDENTIALS"})
        }
        else{
            const token = await foundUser.generateAuthToken();
            await foundUser.save()

            res.cookie("accessToken",token,{
                httpOnly:true
            })

            res.json({message:"User login successful"});
        }

    }
    else{
        res.status(400).json({ error: "INVALID CREDENTIALS"})

    }
})


// SIGNUP ROUTE
app.post('/api/signuproute',async (req,res)=>{
    try{
        const { name,gender,dob,year,branch,section ,email, password }  = req.body; 
        
        const hash = await bcrypt.hash(password,saltRounds)
        
        const newUser = new User({name, gender, dob, year, branch, section, email, password:hash})
        const token = await newUser.generateAuthToken();
        await newUser.save()
        
        res.cookie("accessToken",token,{
            httpOnly:true
        })
    
        res.status(201).json({success:'sign in successfull'})
    }
    catch(err){
        console.log(err)
        res.status(400).json({error:'Internal server error at signup'})
    }

})





app.listen(8080,()=>{console.log("Server listening at port 8080")})