module.exports = function (app) {
    app.get("/api/friends", function (req, res) {
        console.log("Not implemented.")
    });

    app.post("/api/friends", function (req, res) {

        //store response
        //determine compatibility
        //respond with best match

        res.end(JSON.stringify({name: "frank", img: "http://i.imgur.com/at3BiZf.png"}));
    })
};