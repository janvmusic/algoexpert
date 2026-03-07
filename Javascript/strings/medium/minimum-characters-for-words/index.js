function minimumCharactersForWords(words) {
  const uniq = new Set();
  words
    .join("")
    .split("")
    .forEach((c) => {
      uniq.add(c);
    });

  const resultFreq = buildFreq(uniq);
  for (let word of words) {
    const wordFreq = buildFreq(word);

    for (const [key, value] of Object.entries(wordFreq)) {
      if (value > resultFreq[key]) {
        resultFreq[key] = value;
      }
    }
  }

  return buildArrayFromFreq(resultFreq);
}

function buildArrayFromFreq(freq) {
  const result = [];
  for (const [key, value] of Object.entries(freq)) {
    for (let i = 1; i <= value; i++) {
      result.push(key);
    }
  }

  return result;
}

function buildFreq(word) {
  var freq = {};
  [...word].forEach((el) => (freq[el] = (freq[el] || 0) + 1));

  return freq;
}

// Do not edit the line below.
exports.minimumCharactersForWords = minimumCharactersForWords;
