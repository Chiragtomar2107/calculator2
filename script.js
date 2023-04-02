let result = document.getElementById('result');

function appendToResult(val) {
  let lastChar = result.value.charAt(result.value.length - 1);

  if (isNaN(lastChar) && isNaN(val)) {
    return;
  } else {
    result.value += val;
  }
}

function clearResult() {
  result.value = '';
}

function calculateResult() {
  let expression = result.value;
  let lastChar = expression.charAt(expression.length - 1);

  if (isNaN(lastChar)) {
    alert('Invalid Calculation');
    return;
  }

  try {
    let evaluated = eval(expression);
    result.value = Number.isInteger(evaluated) ? evaluated : evaluated.toFixed(2);
  } catch (error) {
    alert('Invalid Calculation');
    return;
  }
}
