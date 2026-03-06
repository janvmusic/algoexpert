function majorityElement(array) {
  const size = array.length;
  const majoritySize = Math.floor(size / 2);

  for (let i = 0; i < size; i++) {
    const number = array[i];
    let idx = i + 1;
    let curr = 0;

    while (idx < size && number !== null) {
      const val = array[idx];
      if (val === number) {
        array[idx] = null;
        curr++;
      }

      idx++;
    }

    if (curr >= majoritySize) {
      return number;
    }
  }

  return null;
}

// Do not edit the line below.
exports.majorityElement = majorityElement;
