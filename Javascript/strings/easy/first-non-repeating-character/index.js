function firstNonRepeatingCharacter(string) {
  const freqHash = {};

  for (let l of string) {
    if (l in freqHash) {
      freqHash[l]++;
    } else {
      freqHash[l] = 1;
    }
  }

  for (let key in freqHash) {
    if (freqHash[key] === 1) {
      return string.indexOf(key);
    }
  }

  return -1;
}

// Do not edit the line below.
exports.firstNonRepeatingCharacter = firstNonRepeatingCharacter;
