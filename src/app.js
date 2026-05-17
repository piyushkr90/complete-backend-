const express = require("express")


const app = express()
 app.use(express.json())
 

const notes = []

// ek middleware chaiye jisse jo bhi request aaye server pe wo process ho sake 
     
app.post('/notes', (req,res)  => {
    notes.push(req.body)
    res.status(201).json({ message : "note created successfully"})
})


app.get('/notes',(req,res) => {
    
      res.status(200).json({
         message : "notes fetched succesfully ",
          notes: notes // jo bhi notes notes aaray me honge unhe bhi bhej do 
      })
      
})


 module.exports = app 
