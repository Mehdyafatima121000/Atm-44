import inquirer from "inquirer";
// initialize user balance and pin code
let myBalance = 5000;
let myPin = 1234;
console.log("Wellcome To Code With Mehdya - ATM - Machine");
let pinAnswer = await inquirer.prompt([
    {
        name: "pin",
        type: "number",
        message: "Enter your pin code:"
    }
]);
if (pinAnswer.pin === myPin) {
    console.log("Pin is Correct, Login Succefully!");
    console.log(`Current Account Balance is ${myBalance}`);
    let operationsAns = await inquirer.prompt([
        {
            name: "operation",
            type: "list",
            message: "Select an operation",
            choices: ["Withdraw Amount", " Check Balance"]
        }
    ]);
    if (operationsAns.operation === "Withdraw Amount") {
        let AmountAns = await inquirer.prompt([
            {
                name: "amount",
                type: "number",
                message: "Enter the amount to withdraw:"
            }
        ]);
        if (AmountAns.amount > myBalance) {
            console.log("Insufficent Balance");
        }
        else {
            myBalance -= AmountAns.amount;
            console.log(`${AmountAns.amount} Withdraw Successfully`);
            console.log(`Your Remaining Balance is: ${myBalance}`);
        }
    }
    else if (operationsAns.operation === "Check Balance") {
        console.log(`Your Account Balance is : ${myBalance}`);
    }
}
else {
    console.log("Pin is InCorrect, Try Again");
}
