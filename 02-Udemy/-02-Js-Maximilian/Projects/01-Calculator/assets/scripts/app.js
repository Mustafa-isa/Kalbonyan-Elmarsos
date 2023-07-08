const defaultResult = 0;
let currentResult = defaultResult;
let logEntries = [];

// Gets input from input field
function getUserNumberInput() {
  return parseInt(usrInput.value);
}

function createAndWriteOutput(operator, resultBeforeCalc, calcNumber) {
  const calcDescription = `${resultBeforeCalc} ${operator} ${calcNumber}`;
  outputResult(currentResult, calcDescription);
}

function writeToLog(
  operationIdentifier,
  prevResult,
  operationNumber,
  newResult
) {
  const logEntry = {
    operation: operationIdentifier,
    prevResult: prevResult,
    number: operationNumber,
    result: newResult
  };
  logEntries.push(logEntry);
  console.log(logEntries);
}
 
function calcType(type){
    const enteredNumber = getUserNumberInput();
  const initialResult = currentResult;
  if(type ==='add'){
     currentResult += enteredNumber;
      createAndWriteOutput('+', initialResult, enteredNumber);
  }
  else if( type ==='sub'){
    currentResult -= enteredNumber;
    createAndWriteOutput('-', initialResult, enteredNumber);
  }
  else if(type==='divide'){
    currentResult /= enteredNumber;
    createAndWriteOutput('/', initialResult, enteredNumber);
  }
  else if(type==='multibly'){
    currentResult *= enteredNumber;
    createAndWriteOutput('*', initialResult, enteredNumber);
  }
}

function add() {
  calcType('add')
}

function subtract() {
  calcType('sub')
}
 

function multiply() {
 calcType('multibly')
}

function divide() {
calcType('divide')
}


addBtn.addEventListener('click', add);
subtractBtn.addEventListener('click', subtract);
multiplyBtn.addEventListener('click', multiply);
divideBtn.addEventListener('click', divide);

// الحاله ما هي الي عباره عن control structure..
