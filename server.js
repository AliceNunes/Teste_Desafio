const express = require('express');
const cookieParser = require('cookie-parser');
const cors = require('cors');
const path = require('path');
const mongoose = require('mongoose');
const routes = require('./src/routes');

const app = express();
const port = process.env.PORT || 8080

    mongoose.connect("mongodb://localhost/bd-desafio", {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useFindAndModify: false,
      useCreateIndex: true
    },function(err){
        if(err){
            console.log(err)
        }else{
            console.log("MongoDb conectado.")
        }
    })

app.use(cors());

app.use(cookieParser());

app.use(express.json());

app.use(routes);

app.listen(port,function(){
    console.log(`Servidor funcionando na porta ${port}`)
})