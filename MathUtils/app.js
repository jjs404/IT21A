const readline = require ("readline");
const MathUtils = require("/MathUtils");
const rl = readline.createInterface({
    input : process.stdin,
    output : process.stdout
})

function mainMenu(){

console.log ("Factorial Application");

console.log ("1. Say Hello");
console.log ("2. Compute factorial");
console.log ("3. Exit")

rl.question("Enter your choice (1-3)", choice =>{
    if (choice=== "1"){
        console.log ("Hello There!");
        backtomenu();
    } else if (choice === "2"){
    ComputeFactorial();

    }else if (choice === "3"){
        console.log ("Exiting program...Goodbye!");
        rl.close()
    }else{
        console.log("Invalid choice. Please Try Again");
        mainMenu();

    }
})
}
function ComputeFactorial(){
    console.log("Factorial");

        rl.question("Enter a Number for Factorial: ", (numStr) =>) {
            let num
        }
}

function backtomenu(){
    console.log("---------------");
    console.log("1. Back to menu");
    console.log("2. Exit");
    
    rl.question("What would you like to do next? (1-2):",(backtomenuChoice) =>{
        if(backtomenuChoice === "1"){
            console.clear();
            mainMenu();
        } else if (backtomenuChoice === "2"){
            console.log ("Exiting program .... Goodbye");
            rl.close
        } else {
            console.log("Invalid Choice. Please try again");
            backtomenu();
        }
    });
}

mainMenu();