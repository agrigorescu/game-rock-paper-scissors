$(function(){
    console.log("the dom is ready");

    //adding an event listener
    $(".myButtons").on("click", function(){
      console.log("button clicked");
    });

    //
    var userChoice;
    var userChoose = $('.myButtons');
    for (var i = 0; i < userChoose.length; i++) {
        var button = userChoose[i];
        button.addEventListener('click' , function(event) {
            console.log(this.id + ' was clicked'); // this always refers to the button that was clicked
            userChoice = this.id; //assigning the user chioce to a variable
            console.log(userChoice);
        });
    }


    //assigning a random number to the computer choice variable
    var computerChoice = Math.random();

    //checking the computer's choice.
    //the rule is 'rock' between 0 and 0.34, 'paper' between 0.34 and 0.67, 'sciccors' between 0.67 and 1
     if ( computerChoice < 0.34) {
         computerChoice = "rock";
         console.log("computerChoice is "+computerChoice);
     } else if (computerChoice < 0.67){
         computerChoice = "paper";
         console.log("computerChoice is "+computerChoice);
        } else {
            computerChoice = "scissors";
            console.log("computerChoice is "+computerChoice);
        }
    
    //creating a function to check the userChoice and the computerChoice
    function compareChoice(choice1,choice2){
        switch (choice1,choice2){
            case "choice1===choice2" : 
                    console.log("it's a tie");
                    break;
            case "choice1==='rock' && choice2==='scissors'":
                    console.log("rock wins. computer wins");
                    $("#ccount").html(parseInt($("#ccount").html())+1);
                    break;
            case "choice1==='rock' && choice2==='paper'":
                    console.log("paper wins. user wins");
                    $("#count").html(parseInt($("#count").html())+1);
                    break;
            case "choice1==='paper' && choice2==='scissors'":
                    console.log("scissors wins. user wins");
                    $("#count").html(parseInt($("#count").html())+1);
                    break;
            case "choice1==='paper' && choice2==='rock'":
                    console.log("paper wins. computer wins");
                    $("#ccount").html(parseInt($("#ccount").html())+1);
                    break;
            case "choice1==='scissors' && choice2==='rock'":
                    console.log("rock wins.user wins");
                    $("#count").html(parseInt($("#count").html())+1);
                    break;
            case "choice1==='scissors' && choice2==='paper'":
                    console.log("scissors wins.computer wins");
                    $("#ccount").html(parseInt($("#ccount").html())+1);
                    break;
        } 
    } 

    //calling the compareChoice function
    compareChoice(computerChoice,userChoice);
});


