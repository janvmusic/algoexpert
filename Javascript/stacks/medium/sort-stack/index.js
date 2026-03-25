function sortStack(stack) {
  if (stack.length === 0) {
    return stack;
  }

  const elem = stack.pop();
  sortStack(stack);
  insertInOrder(elem, stack)

  return stack;
}

function insertInOrder(elem, stack) {
  if (stack.length === 0) {
    stack.push(elem);
    return;
  }

  if (elem >= stack[stack.length - 1]) {
    stack.push(elem);
  } else {
    const curr = stack.pop();
    insertInOrder(elem, stack);
    stack.push(curr);
  }
}

// Do not edit the line below.
exports.sortStack = sortStack;
