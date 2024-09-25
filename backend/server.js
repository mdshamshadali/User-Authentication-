const express = require("express");
const mongoose = require('mongoose');
const cors = require('cors');
const RegisterModel = require('./model/Ragister')

const app = express();
app.use(express.json())
app.use(cors());

const url = `mongodb+srv://mdshamshadali134:Shamshad3@cluster0.2b4ck.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;

mongoose.connect(url).then(() => {
    console.log(`Connection Succssfully`);
}).catch(() => console.log(`Not Connected`))

app.post('/Login',(req,res) => {
    const { email, password, ConfirmPassword } = req.body;
    RegisterModel.findOne({email:email})
    .then(user => {
        if(user){
        if(user.password === password && password===ConfirmPassword) {
            res.json("Success");
        }else{
            res.json("Pssword/Email Invalid");
        }
    }else{
        res.json("No record existed");
    }
    }) 
})

app.post('/Register', (req,res) => {
    RegisterModel.create(req.body)
    .then(SignUp => res.json(SignUp))
    .catch(err => res.json(err))
})

const User = mongoose.model("SignUp");

app.get('/getAllUser',async(req,res) => {
    try {
         const allUser = await User.find({});
         res.send({status:"ok",allUser})
    } catch (error) {
        console.log(error);
    }
})


app.get('/', (req, res) => {
    res.send("API is running....");
})


const PORT = 9000;
app.listen(PORT, () => {
    console.log(`Server is running on ${PORT}`);
})