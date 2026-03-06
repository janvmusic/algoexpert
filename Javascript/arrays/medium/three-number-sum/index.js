function threeNumberSum(array, targetSum) {
  const results = [];
  array.sort((a, b) => a - b);

  for (let i = 0; i < array.length; i++) {
    let left = i + 1;
    let right = array.length - 1;

    while (left < right) {
      const val = array[i] + array[left] + array[right];
      if (val === targetSum) {
        results.push([array[i], array[left], array[right]]);
        left++;
        right--;
      } else if (val < targetSum) {
        left++;
      } else {
        right--;
      }
    }
  }

  return results;
}

// Do not edit the line below.
exports.threeNumberSum = threeNumberSum;
