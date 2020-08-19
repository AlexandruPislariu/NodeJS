let express = require("express");
let app = express();

// "/" -> "Hi there!"
app.get("/", function(req, res)
{
    res.send("Hi there!");
});

// "/bye" -> "Goodbye!"
app.get("/bye", function(req,res)
{
    res.send("Goodbye");
});

// "/dog" -> "Ham!"
app.get("/dog", function(req, res)
{
    res.send("HAM!!");
});

// Subreddit
app.get("/r/:subredditName", function(req, res)
{
    res.send("Welcome from a subreddit!");
});

app.get("*", function(req, res)
{
    res.send("You are a star!!");
});

// Tell Express to listen for requests (start server)
app.listen(3000, function()
{
    console.log("Server listening on port 3000");
})