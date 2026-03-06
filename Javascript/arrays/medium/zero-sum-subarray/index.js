function zeroSumSubarrayV1(nums) {
  if (nums.length === 0) {
    return false;
  }

  if (nums.length === 1) {
    return nums[0] === 0;
  }

  lIdx = 0;
  rIdx = lIdx + 1;
  total = nums[lIdx];

  while (lIdx < nums.length) {
    right = nums[rIdx];

    cTotal = total + right;
    if (cTotal === 0) {
      return true;
    } else if (Math.abs(cTotal) <= Math.abs(total)) {
      total = cTotal;
      rIdx++;
    } else {
      lIdx++;
      rIdx = lIdx + 1;
      total = nums[lIdx];
    }
  }

  return false;
}

function zeroSumSubarrayV2(nums) {
  if (nums.length === 0) {
    return false;
  }

  if (nums.length === 1) {
    return nums[0] === 0;
  }

  sums = new Set();
  total = 0;

  for (let i = 0; i < nums.length; i++) {
    total += nums[i];

    if (total === 0 || sums.has(total)) {
      return true;
    }

    sums.add(total);
  }

  return false;
}

// Do not edit the line below.
exports.zeroSumSubarrayV1 = zeroSumSubarrayV1;
exports.zeroSumSubarrayV2 = zeroSumSubarrayV2;
