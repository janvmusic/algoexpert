function balancedBrackets(string) {
  let stack = [];
  let open = ['(','[','{'];
  let close = [')',']','}'];

  for (let letter of string) {
    if (open.includes(letter)) {
      stack.push(letter);
      continue;
    }

    if (close.includes(letter)) {
      if (stack[stack.length - 1] !== letterMapper(letter)) {
        return false;
      } else {
        stack.pop();
      }
    }
  }

  return stack.length === 0;
}

function letterMapper(letter) {
  switch(letter) {
    case '}': return '{';
    case ')': return '(';
    case ']': return '[';
  }
}

// Do not edit the line below.
exports.balancedBrackets = balancedBrackets;
