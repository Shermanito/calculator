
function addOp() {
  var a = parseInt(document.getElementById('value1').value);
  var b = parseInt(document.getElementById('value2').value);
  var operator = document.querySelector('.operator').value;

  if(operator === 'add'){
    calculate=(a + b)
  } else if (operator == 'min') {
    calculate=(a - b)
  } else if (operator == 'mul') {
    calculate=(a * b)
  } else if (operator == 'div') {
    calculate=(a / b)
  }

  document.querySelector(".result").innerHTML = `${calculate}`;
}
