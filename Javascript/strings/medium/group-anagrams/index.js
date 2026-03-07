function groupAnagrams(words) {
  const result = {};

  for (let i = 0; i < words.length; i++) {
    const word = words[i];
    const sortedWord = word.split("").sort().join("");

    if (sortedWord in result) {
      result[sortedWord].push(word);
    } else {
      result[sortedWord] = [word];
    }
  }

  return Object.values(result);
}

// Do not edit the line below.
exports.groupAnagrams = groupAnagrams;
