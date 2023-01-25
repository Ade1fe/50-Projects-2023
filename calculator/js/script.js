
function myFunction() {
  var element = document.body;
  element.classList.toggle("dark-mode");
}

let display = document.getElementsByClassName('display')[0],
  numberKeys = document.getElementsByClassName('num'),
  addKey = document.getElementsByClassName('add')[0],
  subtractKey = document.getElementsByClassName('subtract')[0],
  divideKey = document.getElementsByClassName('divide')[0],
  multiplyKey = document.getElementsByClassName('multiply')[0],
  clearKey = document.getElementsByClassName('clear')[0],
  evalKey = document.getElementsByClassName('equals')[0];

let curNumber = 0,
  prevNumber = 0,
  afterOperation = false,
  curOperation = undefined;

// add listeners to number numberKeys
for (let i = 0; i < numberKeys.length; i++) {
  numberKeys[i].onclick = () => {
    changeDisplayVal(numberKeys[i].innerHTML);
  };
}

clearKey.onclick = () => clearAll();

addKey.onclick = () => doOperation('add');

subtractKey.onclick = () => doOperation('subtract');

multiplyKey.onclick = () => doOperation('multiply');

divideKey.onclick = () => doOperation('divide');


evalKey.onclick = () => evaluate(curOperation);


function doOperation(operation) {
  if (!curOperation) {
    prevNumber = curNumber;
    curOperation = operation;
    afterOperation = true;
  } else if (!afterOperation) {
    evaluate(curOperation);
    prevNumber = curNumber
    curOperation = operation;
    afterOperation = true;
  } else {
    curOperation = operation;
  }
};

function clearAll() {
  curNumber = 0;
  prevNumber = 0;
  curOperation = undefined;
  afterOperation = false;
  display.innerHTML = '0';
};

function changeDisplayVal(numString) {
  if (display.innerHTML === '0' || afterOperation) {
    display.innerHTML = '';
    afterOperation = false;
  }
  // fix having more than one decimal point
  if (numString === '.' && display.innerHTML.indexOf('.') > -1) {
    numString = '';
  }
  if (display.innerHTML.length >= 16) {
    // do nothing (16 digit limit)
  } else {
    display.innerHTML += numString;
  };
  // set current number
  curNumber = Number(display.innerHTML);
};

function evaluate(operation) {
  if (!afterOperation) {
    switch (operation) {
      case 'add':
        curNumber = prevNumber + curNumber;
        break;
      case 'subtract':
        curNumber = prevNumber - curNumber;
        break;
      case 'multiply':
        curNumber = prevNumber * curNumber;
        break;
      case 'divide':
        curNumber = prevNumber / curNumber;
        break;
    }
    if (curNumber.toString().length >= 16) {
      curNumber = Number(curNumber.toFixed(16));
    }
    display.innerHTML = curNumber;
  }
  afterOperation = true;
  curOperation = undefined;
};