var path = require("path");

module.exports = function (app) {

    //routes to main page
    app.get("/", function (req, res) {
        res.sendFile(path.join(__dirname, "../public/home.html"));
    });

    //routes to survey page
    app.get("/survey", function (req, res) {
        res.sendFile(path.join(__dirname, "../public/survey.html"));
    })

    app.get("/style/reset.css", function (req, res) {
        res.sendFile(path.join(__dirname, "../style/reset.css"))
    })

    app.get("/style/style.css", function (req, res) {
        res.sendFile(path.join(__dirname, "../style/style.css"))
    })
};