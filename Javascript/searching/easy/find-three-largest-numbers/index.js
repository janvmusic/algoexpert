function findThreeLargestNumbers(array) {
  const result = [null, null, null];

  for (let item of array) {
    updateLargestNumbers(item, result);
  }

  return result;
}

function updateLargestNumbers(number, array) {
  if (array[2] === null || number > array[2]) {
    swap(number, array, 2);
  } else if (array[1] === null || number > array[1]) {
    swap(number, array, 1);
  } else if (array[0] === null || number > array[0]) {
    array[0] = number;
  }
}

function swap(newNumber, array, index) {
  let tmp = array[index];
  array[index] = newNumber;

  for (let i = index - 1; i >= 0; i--) {
    const curr = array[i];
    array[i] = tmp;
    tmp = curr;
  }
}

// Do not edit the line below.
exports.findThreeLargestNumbers = findThreeLargestNumbers;
