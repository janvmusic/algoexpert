function firstDuplicateValueV1(array) {
  const duplicates = {};
  if (array.length < 2) {
    return -1;
  }

  for (let number of array) {
    if (duplicates[number]) {
      return number;
    }

    duplicates[number] = number;
  }

  return -1;
}

function firstDuplicateValueV2(array) {
  for (let number of array) {
    const val = Math.abs(number);
    const idx = val - 1;

    if (array[idx] < 0) {
      return val;
    }

    array[idx] = array[idx] * -1;
  }

  return -1;
}

// Do not edit the line below.
exports.firstDuplicateValueV1 = firstDuplicateValueV1;
exports.firstDuplicateValueV2 = firstDuplicateValueV2;
