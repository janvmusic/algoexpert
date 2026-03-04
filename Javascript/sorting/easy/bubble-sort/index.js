function bubbleSortV1(array) {
  let swapped = false;
  let idx = 0;

  while (idx <= array.length) {
    const curr = array[idx];
    const next = array[idx + 1];

    if (curr > next) {
      array[idx + 1] = curr;
      array[idx] = next;
      swapped = true;
    }

    // reached the limit
    if (idx === array.length) {
      if (swapped === false) {
        break;
      }

      idx = 0;
      swapped = false;
      continue;
    }

    idx++;
  }

  return array;
}

function bubbleSortV2(array) {
  let swapped = true;

  while (swapped) {
    swapped = false;

    for (let i = 0; i < array.length - 1; i++) {
      const curr = array[i];
      const next = array[i + 1];

      if (curr > next) {
        swap(i, array);
        swapped = true;
      }
    }
  }

  return array;
}

function swap(idx, array) {
  const curr = array[idx];

  array[idx] = array[idx + 1];
  array[idx + 1] = curr;
}

// Do not edit the line below.
exports.bubbleSortV1 = bubbleSortV1;
exports.bubbleSortV2 = bubbleSortV2;
