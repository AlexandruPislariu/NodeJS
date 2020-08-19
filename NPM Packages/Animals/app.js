let express = require("express");
let app = express();

// Homepage
app.get("/", function(req, res)
{
    res.send("Hi there, welcome to my assignment!");
});

// An animal speak
app.get("/speak/:animal/", function(req,res)
{
    let animal = req.params.animal;
    let message;

    if(animal==="pig")
        message = "Oink";
    else 
        if(animal==="cow")
            message = "Moo";
    else
        if(animal==="dog")
            message = "Woof wooof!";
        else
            message = "Sorry, page not found...";

    res.send(message);
});

// Repeat messages
app.get("/repeat/:message/:number", function(req, res)
{   
    let numberLoop = Number(req.params.number);
    let messageToSend = " ";
    for(let i=0; i<numberLoop; i++)
        messageToSend += req.params.message + " ";

    res.send(messageToSend);
});

// "*" route matcher
app.get("*", function(req, res)
{
    res.send("Sorry, page not found.. ");
})

// Start the app
app.listen(3000, function()
{
    console.log("Started on port 3000!");
})