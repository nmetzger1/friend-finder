//required modules / packages
var express = require("express");
var bodyParser = require("body-parser");

//declare express variable
var app = express();

//setup data parsing
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));

//set PORT
var PORT = process.env.PORT || 8080;

//point server to route files
//html routing
require("./app/routing/htmlRoutes.js")(app);

//api routing
require("./app/routing/apiRoutes.js")(app);


//star listener
app.listen(PORT, function () {
    console.log("Listening on PORT " + PORT);
});