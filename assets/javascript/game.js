
var random_result;
var lastClicked = 0;
//game trackers
var wins = 0;
var losses = 0;


var readyGo = function () {

    //function for creating random number b/ween 19-120
    random_result = Math.floor(Math.random() * 90) + 30;
    console.log("Points to Match:" + random_result);
    
    $(".crystals").empty();

    $("#result").html('Points to Match: ' + random_result);


    //function to create crystals with random number b/ween 1-12
    for (var i = 0; i < 4; i++) {

        var crystalImg =  [
            'https://vignette.wikia.nocookie.net/marvel-contestofchampions/images/c/cf/5-Star_Crystal.png/revision/latest?cb=20151121165521',
            'https://mbch.guide/wp-content/uploads/crystal_multi_6star.png',
            'https://mbch.guide/wp-content/uploads/crystal_multi_sigup_epic.png',
            'https://mbch.guide/wp-content/uploads/crystal_magneto.png'
        ];

        var random = Math.floor(Math.random() * 12 + 1);

        var crystal = $("<div>");
        crystal.attr({
            "class": 'crystal',
            "data-random": random
        });
        crystal.css({
            "background-image":"url('" + crystalImg[i] + "')",
            "background-size":"cover"
        })

        //console.log("Gems:" + crystal)

        $(".crystals").append(crystal);

        console.log("rndmCrystalNumber:" + random);
    }
    $("#tally").html("Current Sum: " + lastClicked);
}

readyGo();

//creating the .onClick event for the crystals, hopefully with the addition property.

$(document).on("click", ".crystal", function () {
    var num = parseInt($(this).attr('data-random'));

    lastClicked += num;

    $("#tally").html("Current Sum: " + lastClicked);

    console.log(lastClicked);

    if (lastClicked === random_result) {

        wins++;
        $("#win").html("wins: " + wins);

        lastClicked = 0;

        
        readyGo();
    }
    if (lastClicked > random_result) {

        losses--;

        $("#lose").html("losses: " + losses);

        lastClicked = 0;

        readyGo();
    }
});






