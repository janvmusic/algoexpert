function commonCharacters(strings) {
  const uniqStrings = [];
  const total = strings.length;

  for (let string of strings) {
    uniqStrings.push(getSmallestString(string));
  }

  const freq = {};
  for (let string of uniqStrings) {
    for (let s of string) {
      if (s in freq) {
        freq[s]++;
      } else {
        freq[s] = 1;
      }
    }
  }

  return Object.keys(freq).filter((k) => freq[k] >= total);
}

function getSmallestString(string) {
  const smallestString = new Set();
  [...string].forEach((s) => smallestString.add(s));

  return [...smallestString];
}

// Do not edit the line below.
exports.commonCharacters = commonCharacters;
