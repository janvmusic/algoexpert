function missingNumbers(nums) {
  let result = [];
  let total = calculateTotal(1, nums.length + 3);
  for (let num of nums) {
    total -= num;
  }
  const missingAverage = Math.floor(total / 2);

  const lowerNumsTotal = nums.filter((val) => val <= missingAverage).reduce((acc, val) => acc + val, 0);

  const higherNumsTotal = nums.filter((val) => val > missingAverage).reduce((acc, val) => acc + val, 0);

  result.push(calculateTotal(1, missingAverage + 1) - lowerNumsTotal);
  result.push(calculateTotal(missingAverage + 1, nums.length + 3) - higherNumsTotal);

  return result;
}

function calculateTotal(start, end) {
  let total = 0;
  for (let i = start; i < end; i++) {
    total += i;
  }

  return total;
}

// Do not edit the line below.
exports.missingNumbers = missingNumbers;
