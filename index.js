const express = require('express')
const user = require('./user')
const app = express()

app.use(express.static(__dirname + '/public'))
app.use(express.json());

app.post('/login', (req, res)=>{
  const {email, pass} = req.body;
  if(!email){
    res.send({error: "Enter your email"})
  }else if(!pass){
    res.send({error: "Enter your pass"})
  }else{
    user.find((item)=>{
      if(item.email != email ){
        res.send({error: " you are not authorized! "})
      }else if(item.pass != pass){
        res.send({error: " you are not authorized! "})
      }else{
        res.send([{message: " successfull "}, item])
      }
    })
    console.log(email, pass);
    
  }
  
  })




app.listen(8000);
