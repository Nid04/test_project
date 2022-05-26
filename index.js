const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const routesHandler = require('./routes/handler.js');

const app = express();
const port = process.env.PORT || 4000;

if(process.env.NODE_ENV == "production"){
    app.use(express.static('build'));
    app.get('*', (req,res) => {
        req.sendFile(path.resolve(__dirname, 'build', 'index.html'));
    });
    app.use(bodyParser.urlencoded({extended:false}));
    app.use(bodyParser.json());
    app.use('/', routesHandler);
}

app.listen(port, (err) => {
    if (err){
        return console.log(err);
    }
    console.log(`Server is running on port ${port}.`); 
});