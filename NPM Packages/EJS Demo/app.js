let express = require("express");
let app = express();

// Tell express to serve the content of "public" directory
app.use(express.static("public"));
// Expect render files to be EJS files
app.set("view engine", "ejs");

app.get("/", function(req, res)
{   
    res.render("home");
});

app.get("/fallinlovewith/:thing", function(req, res)
{
    let thing = req.params.thing;
    res.render("love", {thingVar: thing});
});

app.get("/posts", function(req, res)
{
    let posts = [
        {
            title: "Post1",
            author: "Susy"
        },
        {
            title: "My adorable church",
            author: "Catalin"
        },
        {
            title: "Gym is awesome",
            author: "Alex"
        }
    ];

    res.render("posts", {posts: posts});
});

// Start Application
app.listen(3000, function()
{
    console.log("Started at port 3000!");
});