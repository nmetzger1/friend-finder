var path = require("path");

module.exports = function (app) {

    //routes to survey page
    app.get("/survey", function (req, res) {
        res.sendFile(path.join(__dirname, "../public/survey.html"));
    });

    //routes to main page
    app.use(function (req, res) {
        res.sendFile(path.join(__dirname, "../public/home.html"));
    });
};