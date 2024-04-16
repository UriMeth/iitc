const elemoutput = document.querySelector("#output");
let operator;
let numOutput1;
let numOutput2;

function chooseNum(digit){
    if (elemoutput.innerText === "0") {
        elemoutput.innerText = digit;
      } else {
        elemoutput.innerText += digit;
    }
    console.log(elemoutput.innerText);
}

function setOperator(oper) {
    operator = oper;
    numOutput1 = elemoutput.innerText;
    elemoutput.innerText = '';
    console.log(operator);
}

function calculate(){
    num1 = Number(numOutput1);
    numOutput2 = elemoutput.innerText;
    num2 = Number(numOutput2);
    
    let result = '';
    if (operator==='+'){
        const sum = num1 + num2;
        elemoutput.innerText = sum;
    }
    if (operator==='-'){
        const subtraction = num1 - num2;
        elemoutput.innerText = subtraction;
    }
    if (operator==='*'){
        const multiplication = num1 * num2;
        elemoutput.innerText = multiplication;
    }
    if (operator==='/'){
        const division = num1 / num2;
        elemoutput.innerText = division;
    }
    
}

function clearBoard(){
    elemoutput.innerText = 0;
}