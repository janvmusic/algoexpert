function isMonotonicV1(array) {
  let isNonDecreasing = true;
  let isNonIncreasing = true;

  for (let i = 1; i < array.length; i++) {
    if (array[i] < array[i - 1]) {
      isNonDecreasing = false;
    }

    if (array[i] > array[i - 1]) {
      isNonIncreasing = false;
    }
  }

  return isNonDecreasing || isNonIncreasing;
}

function isMonotonicV2(array) {
  let bIdx = 0;
  let fIdx = 1;
  let direction = null;

  if (array.length === 0) {
    return true;
  }

  while (fIdx < array.length) {
    const b = array[bIdx];
    const f = array[fIdx];
    bIdx++;
    fIdx++;

    if (b === f) {
      continue;
    }

    if (!direction) {
      direction = getDirection(b, f);
      continue;
    }

    const newDirection = getDirection(b, f);
    if (direction !== newDirection) {
      return false;
    }
  }

  return true;
}

function getDirection(b, f) {
  if (b < f) {
    return "up";
  }

  return "down";
}

// Do not edit the line below.
exports.isMonotonicV1 = isMonotonicV1;
exports.isMonotonicV2 = isMonotonicV2;
