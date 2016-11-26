$(function(){
    console.log("the dom is ready");

    //adding an event listener
    $(".myButtons").on("click", function(){
      console.log("button clicked");
    });

    //assigning a random number to the computer choice variable
    var computerChoice = Math.random();
    console.log("computer choice is: "+computerChoice);

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

    //setting up the user choice to be read from the buttons event listener
    var userChoice;
    var userChoose = $('.myButtons');
    for (var i = 0; i < userChoose.length; i++) {
        var button = userChoose[i];
        button.addEventListener('click' , function(event) {
            console.log(this.id + ' was clicked'); // this always refers to the button that was clicked
            userChoice = this.id.substring(0, this.id.length); //assigning the user chioce to a variable
            console.log("this is user choice: "+userChoice);
             //calling the compareChoice function
            compareChoice(computerChoice,userChoice);
        });
    }
    
    //creating a function to check the userChoice and the computerChoice
    function compareChoice(choiceComputer,choiceUser){
        let choice1 = String(choiceComputer);
        let choice2 = String(choiceUser);
        console.log(choice1+" "+choice2);
        // switch (choice1,choice2){
        //     case choice1===choice2 : 
        //             console.log("it's a tie");
        //             break;
        //     case choice1==='rock' && choice2==='scissors':
        //             console.log("rock wins. computer wins");
        //             $("#ccount").html(parseInt($("#ccount").html())+1);
        //             break;
        //     case choice1==='rock' && choice2==='paper':
        //             console.log("paper wins. user wins");
        //             $("#count").html(parseInt($("#count").html())+1);
        //             break;
        //     case choice1==='paper' && choice2==='scissors':
        //             console.log("scissors wins. user wins");
        //             $("#count").html(parseInt($("#count").html())+1);
        //             break;
        //     case choice1==='paper' && choice2==='rock':
        //             console.log("paper wins. computer wins");
        //             $("#ccount").html(parseInt($("#ccount").html())+1);
        //             break;
        //     case choice1==='scissors' && choice2==='rock':
        //             console.log("rock wins.user wins");
        //             $("#count").html(parseInt($("#count").html())+1);
        //             break;
        //     case choice1==='scissors' && choice2==='paper':
        //             console.log("scissors wins.computer wins");
        //             $("#ccount").html(parseInt($("#ccount").html())+1);
        //             break;
        //     default:
        //             console.log("something went wrong");
        // } 

        if (choice1===choice2){
        console.log("The result is a tie!");
        } else {
            if(choice1==="rock") {
                if(choice2==="scissors") {
                    console.log("rock wins");
                    $("#ccount").html(parseInt($("#ccount").html())+1);
                } else {
                    console.log("paper wins");
                    $("#count").html(parseInt($("#count").html())+1);
                }
            }else {
                if(choice1==="paper") {
                    if(choice2==="rock") {
                        console.log("paper wins");
                        $("#ccount").html(parseInt($("#ccount").html())+1);
                    } else {
                        console.log("scissors wins");
                        $("#count").html(parseInt($("#count").html())+1);
                    }
                } else {
                    if(choice1==="scissors") {
                        if(choice2==="rock") {
                            console.log("rock wins");
                            $("#count").html(parseInt($("#count").html())+1);
                        } else {
                            console.log("scissors wins");
                            $("#ccount").html(parseInt($("#ccount").html())+1);
                        }
                    }
                }
            }
        } 
    }
});


