//importing the express library
const express = require('express');

//creating an express server
const app = express();

// defining the port that will be used
const port = 3000;

//function to display a message in the terminal when port is open
function onListen() {
    console.log(`listerning to port ${port}`)
}

//start listerning to the port defined above
app.listen(port,onListen());


//handling the request
app.get (
    '/json', //path
    (request,response) => { //handler callback
        console.log('request received');
        //defining the json object to send
        const myAwesomeResponse = {
            answer1: 'hey!',
            answer2: 'you'
        }
        response.send(myAwesomeResponse);

    }
)

myMethod(argument1, callbackfunction, ...)