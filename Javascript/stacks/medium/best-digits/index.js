function bestDigits(number, numDigits) {
  let stack = [];

  for (let i = 0; i < number.length; i++) {
    while (numDigits > 0 && stack.length > 0 && number[i] > stack[stack.length - 1]) {
      numDigits--;
      stack.pop();
    }

    stack.push(number[i]);
  }

  while(numDigits > 0) {
    numDigits--;
    stack.pop();
  }

  return stack.join('');
}

// Do not edit the line below.
exports.bestDigits = bestDigits;
