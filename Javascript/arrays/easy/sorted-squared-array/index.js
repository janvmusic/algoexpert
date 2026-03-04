function sortedSquaredArray(array) {
  let l = 0;
  let r = array.length - 1;
  let result = array.slice();

  for (let i = array.length - 1; i >= 0; i--) {
    const sqrLeft = array[l] * array[l];
    const sqrRight = array[r] * array[r];

    if (sqrLeft > sqrRight) {
      result[i] = sqrLeft;
      l++;
    } else {
      result[i] = sqrRight;
      r--;
    }
  }

  return result;
}

// Do not edit the line below.
exports.sortedSquaredArray = sortedSquaredArray;
