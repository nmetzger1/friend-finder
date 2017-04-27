var friendsList = require("../data/friends.js");

var answerKey = [
    ["Giant Sequoia", "Rubber", "Bay Laurel", "Beech", "Pistachio"],
    ["1 (They were just trying to keep the peace)", "2", "3", "4", "5 (I had family on Alderaan)"],
    ["0", "1", "2", "3", "I celebrate the guy's entire catalog"],
    ["1-3", "4-6", "6-10", "11-15", "16+"],
    ["You can't tell me what to do", "No", "3", "I make my own rules", "Three"],
    ["0", "1-3", "4-6", "6-7", "More than 8"],
    ["Collier", "Tanner", "Cooper", "Fletcher", "Lutenist"],
    ["1 (Strongly Disagree)", "2", "3", "4", "5 (Strongly Agree)"],
    ["0-1", "2-3", "3-4", "5", "6+"],
    ["1 (Strongly Disagree)", "Boise, Idaho", "War and Peace", "Existentialism", "Napoleon Dynamite"]
];

var convertArray = function (array) {

    var convertedArray = [];

    for (var i = 0; i < array.length; i++){

        //convert array string to index
        var answerIndex = answerKey[i].indexOf(array[i]);

        //push to temp array
        convertedArray.push(answerIndex);
    }

    return convertedArray;
};

var compareAnswers = function (array1, array2) {

    var compatibilityScore = 0;

    for(var i = 0; i < array1.length; i++){
        compatibilityScore += Math.abs(array1[i] - array2[i]);
    }

    return compatibilityScore;

};

module.exports = function (app) {
    app.get("/api/friends", function (req, res) {
        res.end(JSON.stringify(friendsList));
    });

    app.post("/api/friends", function (req, res) {
        var bestMatch;
        var bestMatchScore = 100;

        //convert user answers to numbers
        var userAnswers = convertArray(req.body.answers);

        //loop through all answers
        for(var i = 0; i < friendsList.length; i++){

            var friendAnswers = convertArray(friendsList[i].answers);

            //determine compatibility
            var currentMatchScore = compareAnswers(userAnswers, friendAnswers);
            // store if lowest score
            if(currentMatchScore < bestMatchScore){
                bestMatchScore = currentMatchScore;
                bestMatch = friendsList[i];
            }
        }

        //store user answers for later use
        friendsList.push(req.body);

        //respond with best match
        res.end(JSON.stringify({name: bestMatch.name, img: bestMatch.image}));
    })
};