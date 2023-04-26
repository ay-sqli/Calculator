// Initialize variables
let calValue = '';
let calculatorResult = document.querySelector('.screen');
// Get all button elements on the page
let bgButton = document.querySelectorAll('button');
//console.log(bgButton);

// Loop through each button element and add a click event listener
Array.from(bgButton).forEach((calButton)=>{
    //console.log(calButton);

    calButton.addEventListener("click", ()=>{
        //console.log(calButton.innerHTML);

        // If the clicked button is the equals sign, evaluate the expression and display the result
        if(calButton.innerHTML == '='){
            calValue = eval(calValue);
            calculatorResult.value = calValue;
        }

        // If the clicked button is the Clear button, remove the last character from the expression
        else if(calButton.innerHTML == 'Clear'){
          calValue = calculatorResult.value.slice(0,-1);
          calculatorResult.value = calValue;
        }

        // For all other buttons, add their value to the expression
        else{
        calValue = calValue + calButton.innerHTML;
        calculatorResult.value = calValue;
        }
    })
}); 