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

var miko_expressions = ["cheery", "understanding", "concerned", "angry"];

var miko_reactions = ["", "", "", "", ""];
var miko_text = ["", "", "", "", ""];

//document.getElementById("numberToGuess").innerHTML = randomNumber;

/*
Function to set appropriate image based on answers for questions 1-4
If statement handles questions 1-3
Else statement handles question 4
2nd If/else handles question 5
*/ 
function setMiko(question_num, question) {
    let val = question.val();
    //Change else if statement structure to make question 5 work
    
    if (val === "linearly") {
        miko_reactions[question_num] = miko_expressions["angry"];  
    } else if (val === "logarithmically") {
        miko_reactions[question_num] = miko_expressions["cheery"];  
    } else if (val <= 4) {
        miko_reactions[question_num] = miko_expressions[val-1];  
    } else {
        if (val >= 100) {
            miko_reactions[question_num] = miko_expressions[3]; 
        } else if (val < 100 & val >= 90) {
            miko_reactions[question_num] = miko_expressions[2]; 
        } else if (val < 90 && val >= 76) {
            miko_reactions[question_num] = miko_expressions[1]; 
        } else {
            miko_reactions[question_num] = miko_expressions[0]; 
        }
    }
}


$("#submitButton").on( "click", function() {
    let q1_response = q1.val();
    let q2_response = q2.val();
    let q3_response = q3.val();
    let q4_response = $("#q4").val();
    let q5_response = $("#q5").val();
    
    function isFormValid() {
        let isValid = true;
        if (q1_response === undefined) {
            isValid = false;
            $("#q1text").css("color", "red");
        }
        if (q2_response === undefined) {
            isValid = false;
            $("#q2text").css("color", "red");
        }
        if (q3_response === undefined) {
            isValid = false;
            $("#q3text").css("color", "red");
        }
        if (q4_response == "") {
            isValid = false;
            $("#q4text").css("color", "red");
        }
        if (q5_response == "") {
            isValid = false;
            $("#q5text").css("color", "red");
        }
        return isValid;
    }
    
    if (!isFormValid()) {
        return;
    }
    
    $("#quiz").css("display", "hide");
    
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
            miko_text[1] = "You think I would rag on you for not hearing your surroundings with noise-cancelling headphones on?" +
            "That'd make me a hypocrite!";
        }
    } else if (q2_response === 2) {
        miko_text[1] = "You have good listening habits if you can still hear your surroundings.\n Or you use earbuds.\n " +
        "Either way, caution should be taken. 'Hearing surroundings' is not equivalent to 'safe listening levels'." + 
        "Ultimately, 'safe levels' varies based on what music you listen to, how loud your surroundings actually are, " +
        "and what listening peripheral you're equipped with. Play some music in a quiet room. Hold your earphones an arm's length away." +
        "If you can hear the music, your typical listening level is unhealthy for your ears!";
    } else {
        miko_text[1] = "Being able to hear a person talking to you while using earphones is, frankly, pretty annoying, but ultimately " + 
        "healthy for your hearing. If you ever feel tempted to bump up the music, keep the elevated levels for only a song or two, or " +
        "even relocating yourself to a quieter haven.";
    }

    //Question 3
    setMiko(2, q3);
    if (q3_response > 2) { //Longer than an hour
        miko_text[2] = "Listening for longer than an hour at a time isn't exactly recommended, even if you're listening at a safe volume.\n" +
        "Prolonged exposure to music through audio peripherals can increase stress levels; being a busybody person, more stress is the last thing " +
        "anyone would want. Give your ears a short rest before you jam on the tunes.";
    } else { // Less than an hour
        miko_text[2] = "You really know how to look after your health in multiple ways if you give your ears a break so much. Keep at it!";
    }

    //Question 4
    setMiko(3, q4);
    if (q4_response >= 100) {
        miko_text[3] = "At more than 100 dB, you only have LESS THAN 15 minutes of safe listening before damage sets in!";
    } else if (q4_response < 100 & q4_response >= 90) {
        miko_text[3] = "Between 90 and 100 dB, safe listening ranges from 2 hours to 15 minutes respectively. Be sure to keep track of time, and don't do it repeatedly!";
    } else if (q4_response < 90 && q4_response >= 76) {
        miko_text[3] = "Between 75 and 90 dB, you can go for over an hour to about 2 hours of continuous listening. It's not recommended; please take breaks and enjoy the quite more!"; 
    } else {
        miko_text[3] = "At this level, you can technically continue listening to music forever with no damage to your ears. But still, take breaks!";
    }

    //Question 5
    setMiko(4, q5);
    if (q5_response === "linearly") { //Longer than an hour
        miko_text[2] = "Nope. Safe listening decreases logarithmically as the sound level increases. At 100 dB, the safe listening is about 15 minutes. At 110 dB, the listening " +
        "decreases to 30 seconds!";
    } else { // Less than an hour
        miko_text[2] = "You're right! Safe listening decreases logarithmically as the sound level increases. Good job.";
    }
    
    $("#response1").text(miko_text[0]);
    $("#img1").attr("src","img/" + miko_reactions[0]);

    $("#response2").text(miko_text[1]);
    $("#img2").attr("src","img/" + miko_reactions[1]);
    
    $("#response3").text(miko_text[2]);
    $("#img3").attr("src","img/" + miko_reactions[2]);
    
    $("#response4").text(miko_text[3]);
    $("#img4").attr("src","img/" + miko_reactions[3]);

    $("#response5").text(miko_text[4]);
    $("#img5").attr("src","img/" + miko_reactions[4]);
    
    $("#responses").css("display", "inline");
    
    //End game
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
