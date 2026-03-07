function oneEdit(stringOne, stringTwo) {
  const lengthDiff = Math.abs(stringOne.length - stringTwo.length);

  // Same length, it means replace
  if (lengthDiff === 0) {
    const total = getTotalDifference(stringOne, stringTwo);
    return total < 2;
  }

  // One difference, it means add/remove
  if (lengthDiff === 1) {
    return hasMoreThanOneMissing(stringOne, stringTwo);
  }

  return false;
}

function hasMoreThanOneMissing(stringOne, stringTwo) {
  const size = stringOne.length > stringTwo.length ? stringOne.length : stringTwo.length;
  const oneIsGreater = stringOne.length > stringTwo.length;
  let offsetA = oneIsGreater ? 1 : 0;
  let offsetB = oneIsGreater ? 0 : 1;
  let idxA = 0;
  let idxB = 0;

  while (idxA < size || idxB < size) {
    let one = stringOne[idxA];
    let two = stringTwo[idxB];

    if (one !== two && oneIsGreater) {
      offsetA--;
      idxA++;
    } else if (one !== two && !oneIsGreater) {
      offsetB--;
      idxB++;
    } else {
      idxA++;
      idxB++;
    }

    if (offsetA < 0 || offsetB < 0) {
      return false;
    }
  }

  return true;
}

function getTotalDifference(stringOne, stringTwo) {
  let mc = 0;
  for (let i = 0; i < stringOne.length; i++) {
    let one = stringOne[i];
    let two = stringTwo[i];

    if (one !== two) {
      mc++;
    }
  }

  return mc;
}

// Do not edit the line below.
exports.oneEdit = oneEdit;
