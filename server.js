const express = require('express')

const app = express();

const server = app.listen(3001, () => {
   console.log("The server is listening... 🐒") 
});

module.exports = server;

//3

app.get('/hello', (request, response) => {

    response.send('Hello from the new server')
});

//4

app.get('/time', (request, response) => {

    const date = new Date()
    const time = date.toISOString()
    response.send(time);
});

//5

app.get('/random', (request, response) => {

    const random = Math.floor(Math.random() * 100);
    response.send(`Random Number: ${random}`);
});

//6

app.get('/isNumber/:value', (request, response) => {
    
    const { value } = request.params;

    if (isNaN(Number(value))) {
        response.send("This is not a number")
    } else {
        response.send("This is a number")
    }
});
