window.onload = function () {
    // Input-Output
    // Get references to the input field and the result paragraph
    const numberInput = document.getElementById("InputNumber");
    const resultParagraph = document.getElementById("result");
    const calculusList = document.getElementById("calculusDetailsList");

    // Triggerstep3
    // Get reference to all of the button
    const multiplyButton = document.getElementById("check-button");

    const Button0 = document.getElementById("Button0");

    // NUMBER INPUT BUTTONS - see appendDigit function for more details. 
    Button0.addEventListener("click", function(){
        numberInput.value = appendDigit(parseFloat(numberInput.value),0);
    });
    Button1.addEventListener("click", function(){
        numberInput.value = appendDigit(parseFloat(numberInput.value),1);
    });

    Button2.addEventListener("click", function(){
        numberInput.value = appendDigit(parseFloat(numberInput.value),2);
    });

    Button3.addEventListener("click", function(){
        numberInput.value = appendDigit(parseFloat(numberInput.value),3);
    });
    Button4.addEventListener("click", function(){
        numberInput.value = appendDigit(parseFloat(numberInput.value),4);
    });
    Button5.addEventListener("click", function(){
        numberInput.value = appendDigit(parseFloat(numberInput.value),5);
    });
    Button6.addEventListener("click", function(){
        numberInput.value = appendDigit(parseFloat(numberInput.value),6);
    });
    Button7.addEventListener("click", function(){
        numberInput.value = appendDigit(parseFloat(numberInput.value),7);
    });
    Button8.addEventListener("click", function(){
        numberInput.value = appendDigit(parseFloat(numberInput.value),8);
    });
    Button9.addEventListener("click", function(){
        numberInput.value = appendDigit(parseFloat(numberInput.value),9);
    });
    // CHECK BUTTON

    // Add an event listener to the "check" button
    multiplyButton.addEventListener("click", function () {
        // Get the value entered by the user
        const number = parseFloat(numberInput.value);
        // Check if the value is a valid number
        if (Number.isInteger(number)) {
            // if the number is an integer, then we can calculate its persistence
            var persistence = calculatePersistence(number);
            var sequenceOfNumbers = getNumberSequence(number);
            resultParagraph.textContent = "multiplicative persistence : " + persistence;

            console.log("sequenceOfNumbers:", sequenceOfNumbers)

            // Clear the calculus list from any previous calculations
            calculusList.innerHTML = "";
            //Add a new line of each element in the sequenceOfNumbers array 
            for (let i = 0; i <= sequenceOfNumbers.length - 1; i++) {
                // add the element to the list
                let calculusText = sequenceOfNumbers[i].toString()
                // Split the input string into an array of characters
                let calculusTextDigits = calculusText.split('');
                // Join the characters with "x" between them
                calculusText = calculusTextDigits.join(' * ');
                calculusText = calculusText + " = ";
                calculusText = calculusText + sequenceOfNumbers[i + 1].toString();
                addItemToList(calculusText);
            };
        }
        else {
            // Handle the case where the input is not a valid number
            resultParagraph.textContent = "Please enter an integer number.";
        }
    });


    // Here are the useful functions for this page


    // Recursive function to calculate persistence of integers.
    function calculatePersistence(number) {
        var persistence = 0; // This will be used as a counter to  count number of iterations it takes to reduce the number
        var currentNumber = number;
        while (currentNumber >= 10) { // Stay in the loop as long as the number has more than 2 digits, that is, greater than 10
            //Calculate the product of the digits 
            currentNumber = calculateProductOfDigits(currentNumber);
            persistence = persistence + 1;
        }

        return persistence;
    }

    function getNumberSequence(number) {
        var persistence = 0; // This will be used as a counter to  count number of iterations it takes to reduce the number
        var currentNumber = number;
        var sequenceOfNumbers = [number] // This array will help memorise all of the steps, to display them later
        while (currentNumber >= 10) { // Stay in the loop as long as the number has more than 2 digits, that is, greater than 10
            //Calculate the product of the digits 
            currentNumber = calculateProductOfDigits(currentNumber);
            // Add calculated number to the array
            sequenceOfNumbers.push(currentNumber)
        }
        // Return the entire array
        return sequenceOfNumbers;
    }

    // A function to calculate the product of the digits of a number
    function calculateProductOfDigits(number) {

        // Decompose the number into its digits, and store them into an array
        const numberString = number.toString();
        const digits = numberString.match(/\d/g); // regular expression is used
        const digitsInt = digits.map(digit => parseInt(digit, 10)); //converts the digits from string format to int format inside the array

        // Multiply all of the digits together, one by one
        var digitsProduct = 1;
        digitsInt.forEach(function (element) {
            digitsProduct = digitsProduct * element;
        });
        return digitsProduct;
    }

    // A test function to add an element to a list 
    function addItemToList(itemText) {

        if (itemText) {
            // Get a reference to the <ul> element
            let myList = document.getElementById("calculusDetailsList");

            // Create a new <li> element
            let newItem = document.createElement("li");

            // Set the content of the <li> element
            newItem.textContent = itemText;

            // Append the <li> element to the <ul> element
            myList.appendChild(newItem);
        }
    }

    function appendDigit(number, digit) {
        let newNumber = 0
        if (Number.isInteger(number)) {
            // Convert existingNumber to a string, append the digit, then convert it back to a number
            newNumber = Number(String(number) + String(digit));
        } else {
            // Handle the case where the input is not a valid number
            resultParagraph.textContent = "NULL";
            newNumber = digit;
        }
        return newNumber;
    }
}