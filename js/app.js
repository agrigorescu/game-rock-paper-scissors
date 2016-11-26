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
         console.log(computerChoice);
     } else if (computerChoice < 0.67){
         computerChoice = "paper";
         console.log(computerChoice);
        } else {
            computerChoice = "scissors";
            console.log(computerChoice);
        }
    
    //creating a function to check the userChoice and the computerChoice
    function compareChoice(choice1,choice2){
        switch (choice1,choice2){
            case "choice1===choice2" : console.log(it's a tie');

        }
        

    } 



});


// var compare = function (choice1,choice2)
// {
//     if (choice1===choice2)
//     {
//         return "The result is a tie!";
//     }
//     else
//     {
//         if(choice1==="rock")
//         {
//             if(choice2==="scissors")
//             {
//                 return "rock wins";
//             }
//             else
//             {
//                 return "paper wins";
//             }
//         }
//          else
//         {
//             if(choice1==="paper")
//             {
//                 if(choice2==="rock")
//                 {
//                     return "paper wins";
//                 }
//                 else
//                 {
//                     return "scissors wins";
//                 }
//             }
//             else
//             {
//                 if(choice1==="scissors")
//                 {
//                     if(choice2==="rock")
//                     {
//                         return "rock wins";
//                     }
//                     else
//                     {
//                         return "scissors wins";
//                     }
//                 }
//             }
//         }
//     }
// }

// compare(userChoice,computerChoice);