function longestPeak(array) {
  let longestPeak = 0;

  for (let i = 1; i < array.length; i++) {
    const curr = array[i];
    const left = array[i - 1];
    const right = array[i + 1];

    const isPeak = curr > left && curr > right;
    if (!isPeak) {
      continue;
    }

    let lIdx = i - 1;
    let leftSlope = 1;
    while (lIdx >= 0 && array[lIdx] > array[lIdx - 1]) {
      leftSlope++;
      lIdx--;
    }

    let rIdx = i + 1;
    let rightSlope = 1;
    while (rIdx < array.length && array[rIdx] > array[rIdx + 1]) {
      rightSlope++;
      rIdx++;
    }

    longestPeak = Math.max(leftSlope + rightSlope + 1, longestPeak);
  }

  return longestPeak;
}

// Do not edit the line below.
exports.longestPeak = longestPeak;
