//Code goes here
/* global $ */
var q1 = $('input[name="q1"]:checked');
var q2 = $('input[name="q2"]:checked');
var q3 = $('input[name="q3"]:checked');
var q4 = $("#q4");
var q5 = $("#q5");


//Just for reference, not actually using
var q1_answer = "1";
var q2_answer = "1";
var q3_answer = "1";
var q4_answer = "75";
var q5_answer = "logarithmically";

var miko_expressions = ["cheery", "understanding", "displeased"];

var miko_reactions = ["", "", "", "", ""];
var miko_text = ["", "", "", "", ""];

//document.getElementById("numberToGuess").innerHTML = randomNumber;

/*
Function to set appropriate image based on answers for questions 1-4
If statement handles questions 1-3
Else statement handles question 4
*/ 
function setMiko(question_num, question) {
    let val = question.val();
    if (val <= 4) {
        miko_reactions[question_num] = miko_expressions[val-1];  
    } else {
        if (val >= 90) {
            miko_reactions[question_num] = miko_expressions[2]; 
        } else if (val < 90 && val >= 76) {
            miko_reactions[question_num] = miko_expressions[1]; 
        } else {
            miko_reactions[question_num] = miko_expressions[0]; 
        }
        
    }
}

function isFormValid() {
    let isValid = true;
    if ($("#q1").val() == "") {
        isValid = false;
        $("#validSubmission").html("Question 1 not answered");
    }
    return isValid;
}


$("#submitButton").on( "click", function() {
    let q1_response = q1.val();
    let q2_response = q2.val();
    let q3_response = q3.val();
    let q4_response = $("#q4").val();
    let q5_response = $("#q5").val();
    
    if (!isFormValid()) {
        return;
    }
    
    //Question 1
    setMiko(0, q1);
    if (q1_response === 3) {
        miko_text[0] = "Although earbuds feature a convenient size, they are ultimately a dangerous listening device." + 
        "As the source of sound is closer to the ear, earbuds are 6 to 9 decibels louder than their headphones counterpart." +
        "Regular earbuds also don't block outside sound, leading people to unhealthily bumping up the volume to block annoying sounds.\n" +
        "Don't blame the EarPods; blame the listener's ignorance.";
    } else if (q1_response === 2) {
        miko_text[0] = "Headphones are the preferred listening device! And not only because I find them fashionable." +
        "Over-the-ear headphone designs that encompass the ear naturally block out some amount of ambient noise," +
        "enough to allow people to listen to music at comfortable, healthy levels without distraction.";
    } else {
        miko_text[0] = "Noise-cancelling audio devices, as per the name, generate soundwaves to cancel out environmental noise" +
        "while letting you enjoy your tunes in auditory solitude. There's no need to increase volume to tune out the world. It does it for you!";
    }
    
    //Question 2
    setMiko(1, q2);
    if (q2_response === 3) {
        if (q1_response > 1) {
            miko_text[1] = "Headphones or earbuds, you should never play music loud enough to block out your surroundings." +
            "One tip to check if your volume is healthy or not is to hold your headphones/earbuds an arm's length away" +
            "in a quiet room. If you can hear the music, the volume is too loud!\n " +
            "Overhearing chatter with your music is temporary. Noise-induced hearing loss is irreversible.";
        } else {
            miko_reactions[1] = miko_expressions[0];
            miko_text[0] = "You think I would rag on you for not hearing your surroundings with noise-cancelling headphones on?" +
            "That'd make me a hypocrite!";
        }
    } else if (q2_response === 2) {
        miko_text[0] = "You have good listening habits if you can still hear your surroundings.\n Or you use earbuds.\n " +
        "Either way, caution should be taken. 'Hearing surroundings' is not equivalent to 'safe listening levels'." + 
        "Ultimately, 'safe levels' varies based on what music you listen to, how loud your surroundings actually are, " +
        "and what listening peripheral you're equipped with. Play some music in a quiet room. Hold your earphones an arm's length away." +
        "If you can hear the music, your typical listening level is unhealthy for your ears!";
    } else {
        miko_text[0] = "Being able to hear a person talking to you while using earphones is, frankly, pretty annoying, but ultimately " + 
        "healthy for your hearing. If you ever feel tempted to bump up the music, keep the elevated levels for only a song or two, or " +
        "even relocating yourself to a quieter haven.";
    }

    //Question 3
    setMiko(2, q3);
    if (q3_response > 2) { //Longer than an hour
        if (q2_response === 3) { //"block out your surroundings"
            if (q1_response > 1) { //Regular earbuds or headphones
                miko_text[1] = "Headphones or earbuds, you should never play music loud enough to block out your surroundings." +
                "One tip to check if your volume is healthy or not is to hold your headphones/earbuds an arm's length away" +
                "in a quiet room. If you can hear the music, the volume is too loud!\n " +
                "Overhearing chatter with your music is temporary. Noise-induced hearing loss is irreversible.";
            } else { //Noise cancelling
                miko_reactions[1] = miko_expressions[0];
                miko_text[0] = "You think I would rag on you for not hearing your surroundings with noise-cancelling headphones on?" +
                "That'd make me a hypocrite!";
            }
    } else { // Less than an hour
        miko_text[0] = "Being able to hear a person talking to you while using earphones is, frankly, pretty annoying, but ultimately " + 
        "healthy for your hearing. If you ever feel tempted to bump up the music, keep the elevated levels for only a song or two, or " +
        "even relocating yourself to a quieter haven.";;
    }
    
    //End game
    $("#total").html("The total Score is: " + total_points);
    totalTimes++;
    localStorage.setItem("totalTimesTaken",totalTimes);
    $("#totalTimes").html("Quiz taken: " + totalTimes + " time(s)");
    scoresArray.push(total_points);
    $("#prevScores").html("Score History: ");
    scoresArray.forEach(function(score){
        $("#prevScores").append(score + " ");
    });
    
    localStorage.setItem("scoreHistory",scoresArray);


});

// guessSubmit.addEventListener('click', checkGuess);
// $(".guessField").keyup(function(event) {
//     if (event.keyCode === 13) {
//         $(".guessSubmit").click();
//     }
// });
// $(".guessSubmit").click(function() {
//   checkGuess();
// });
