function isValidSubsequence(array, sequence) {
  let poA = 0;
  let poB = 0;

  if (array.length < sequence.length) {
    return false;
  }

  while (poA <= array.length && poB <= sequence.length) {
    let currA = array[poA];
    let currB = sequence[poB];

    if (currA === currB) {
      poB++;
    }

    poA++;
  }

  return poB > sequence.length;
}

// Do not edit the line below.
exports.isValidSubsequence = isValidSubsequence;
