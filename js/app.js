$(function(){
    console.log("the dom is ready");

    //checking the computer's choice.
    //the rule is 'rock' between 0 and 0.34, 'paper' between 0.34 and 0.67, 'sciccors' between 0.67 and 1
    function choiceComputer(){
             //assigning a random number to the computer choice variable
            var computerChoice = Math.random();
            //setting the rules for the computer's choice variable
            if ( computerChoice < 0.34) {
                computerChoice = "rock";
            } else if (computerChoice < 0.67){
                computerChoice = "paper";
                } else {
                    computerChoice = "scissors";
                }
            return computerChoice;
    }

    //setting up the user choice to be read from the buttons event listener
    var userChoice;
    var userChoose = $('.myButtons');
    for (var i = 0; i < userChoose.length; i++) {
        var button = userChoose[i];
        button.addEventListener('click' , function(event) {
            userChoice = this.id.substring(0, this.id.length); //assigning the user chioce to a variable
             //calling the compareChoice function
            compareChoice(userChoice);
        });
    }
    
    //creating a function to check the userChoice and the computerChoice
    function compareChoice(choiceUser){
        let choice1 = choiceComputer();
        let choice2 = String(choiceUser);
        if (choice1===choice2){
        $("#winner").html("IT'S A TIE");
        } else {
            if(choice1==="rock") {
                if(choice2==="scissors") {
                    $("#ccount").html(parseInt($("#ccount").html())+1);
                    $("#winner").html("Computer");
                } else {
                    $("#count").html(parseInt($("#count").html())+1);
                    $("#winner").html("Human");
                }
            }else {
                if(choice1==="paper") {
                    if(choice2==="rock") {
                        $("#ccount").html(parseInt($("#ccount").html())+1);
                        $("#winner").html("Computer");
                    } else {
                        $("#count").html(parseInt($("#count").html())+1);
                        $("#winner").html("Human");
                    }
                } else {
                    if(choice1==="scissors") {
                        if(choice2==="rock") {
                            $("#count").html(parseInt($("#count").html())+1);
                            $("#winner").html("Human");
                        } else {
                            $("#ccount").html(parseInt($("#ccount").html())+1);
                            $("#winner").html("Computer");
                        }
                    }
                }
            }
        } 
    }
});