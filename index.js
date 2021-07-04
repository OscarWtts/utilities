const express = require('express');
var app = express();

// parse application/json, basically parse incoming Request Object as a JSON Object 
app.use(express.json());
// parse incoming Request Object if object, with nested objects, or generally any type.
app.use(express.urlencoded({ extended: true }));

app.post('/test', (req, res) => {
    console.log(req.body);
    res.status(200).send("Hello world!");
});


app.listen('4000', () => {
    console.log(`Servidor iniciado en el puerto: 4000`);
});