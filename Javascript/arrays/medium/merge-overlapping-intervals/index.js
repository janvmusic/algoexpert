function mergeOverlappingIntervals(array) {
  mergedIntervals = [];
  if (array.length < 2) {
    return array;
  }

  array.sort((a, b) => a[0] - b[0]);
  interval = array[0];

  for (let i = 1; i < array.length; i++) {
    curr = array[i];

    if (interval[1] >= curr[0]) {
      interval[1] = Math.max(interval[1], curr[1]);
    } else {
      mergedIntervals.push(interval);
      interval = curr;
    }
  }

  mergedIntervals.push(interval);
  return mergedIntervals;
}

// Do not edit the line below.
exports.mergeOverlappingIntervals = mergeOverlappingIntervals;
