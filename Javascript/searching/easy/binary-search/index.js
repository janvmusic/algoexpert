function binarySearch(array, target) {
  if (array.length === 0) {
    return -1;
  }

  const arraySize = array.length;
  const middle = Math.floor(array.length / 2);

  const curr = array[middle];
  if (curr === target) {
    return middle;
  }

  // Less than
  if (target < curr) {
    const sub = array.slice(0, middle);
    return binarySearch(sub, target);
  }

  // Greater than
  const result = binarySearch(array.slice(middle + 1), target);
  return result === -1 ? -1 : middle + 1 + result;
}

// Do not edit the line below.
exports.binarySearch = binarySearch;
