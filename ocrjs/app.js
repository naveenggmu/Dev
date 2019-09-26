const express = require('express');
const app = express();
const multer = require('multer');
const fs = require('fs');


const Tesseract = require('tesseract.js');

//STORAGE
const storage = multer.diskStorage({
    destination: (req,file,cb)=>{
        cb(null,'./uploads');
    },
    filename: (req,file,cb)=>{
        cb(null,file.originalname);
    } 
})

const upload = multer({storage: storage}).single('avatar');


app.get('/',(req,res)=>{
    res.sendFile(__dirname+'/views/index.html');
    
})

app.post('/upload',(req,res)=>{

    upload(req,res,err =>{
        fs.readFile(`./uploads/${req.file.originalname}`,(err,data)=>{
            if(err) return console.log('Error is comingggggg');

            Tesseract.recognize(data)
            .progress(function(message){console.log('progress is: ', message)})
            .then(function(result){
                console.log(result.text)
            })

            
        })
    })
    res.send('It is getting doneeee... please check console.')
})

app.listen('3000',()=>{
    console.log('Server is running at port 3000')
})