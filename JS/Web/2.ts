//
let welcome = "Hello and welcome to the SimpleCalculator";
//
while (true) {
    var choice = prompt("Options:\n1. Add\n2. Subtract\n3. Multiply\n4. Divide\n5. Exit");
    //
    if (choice == "1") {
        // var num1 = 0;
        var num2 = 0;
        //
        var tnum1 = prompt("Type the first number:");
        var tnum2 = prompt("Type the first number:");
        //
        // var num1 = parseInt(tnum1, 10);
        var num1 = + tnum1;
        var num2 = + tnum2;
        //
        var result = num1 + num2;
        alert("The result of "+ num1 + " + " + num2 + " is: " + result);
        //
    }
    //
    else if (choice == "2") {
        // var num1 = 0;
        var num2 = 0;
        //
        var tnum1 = prompt("Type the first number:");
        var tnum2 = prompt("Type the first number:");
        //
        // var num1 = parseInt(tnum1, 10);
        var num1 = + tnum1;
        var num2 = + tnum2;
        //
        var result = num1 - num2;
        alert("The result of "+ num1 + " - " + num2 + " is: " + result);
        //
    }
    //
    else if (choice == "3") {
        // var num1 = 0;
        var num2 = 0;
        //
        var tnum1 = prompt("Type the first number:");
        var tnum2 = prompt("Type the first number:");
        //
        // var num1 = parseInt(tnum1, 10);
        var num1 = + tnum1;
        var num2 = + tnum2;
        //
        var result = num1 * num2;
        alert("The result of "+ num1 + " * " + num2 + " is: " + result);
        //
    }
    //
    else if (choice == "4") {
        // var num1 = 0;
        var num2 = 0;
        //
        var tnum1 = prompt("Type the first number:");
        var tnum2 = prompt("Type the first number:");
        //
        // var num1 = parseInt(tnum1, 10);
        var num1 = + tnum1;
        var num2 = + tnum2;
        //
        var result = num1 / num2;
        alert("The result of "+ num1 + " / " + num2 + " is: " + result);
        //
    }
    else if (choice == "5") {
        break;
    }
    else {
        alert("Choose a valid option.");
    }
}