/**
 * 1. Create a hashmap
 *   a. key is the index
 *   b. value is the target - val
 * 2. If the key is not present, store it
 * 3. If the value is present, then return it
 */
function twoNumberSum(array, targetSum) {
  const twoNumberMap = {};

  for (let i = 0; i < array.length; i++) {
    const key = array[i];
    const value = targetSum - key;

    if (Object.values(twoNumberMap).includes(key)) {
      return [key, value];
    }

    twoNumberMap[key] = value;
  }

  return [];
}

// Do not edit the line below.
exports.twoNumberSum = twoNumberSum;
