function deafGrandma() {

   /* let message = ''
    let count = 0

    //https://www.geeksforgeeks.org/node-js-readline-module/
    var readline = require('readline');
    var rl = readline.createInterface(
     process.stdin, process.stdout);
    /*rl.question('What is your age? ', (age) => {
        console.log('Your age is: ' + age);
    });

    console.log('HEY KID!')
    while(message !== 'GOODBYE!' && count < 2){

    }*/

    let text;
let favDrink = prompt("What's your favorite cocktail drink?");
switch(favDrink) {
  case "Coca-Cola":
    alert("Excellent choice! Coca-Cola is good for your soul.");
    break;
  case "Pepsi":
    text = "Pepsi is my favorite too!";
    break;
  case "Sprite":
    text = "Really? Are you sure the Sprite is your favorite?";
    break;
  default:
    text = "I have never heard of that one!";
}

    
}

deafGrandma();