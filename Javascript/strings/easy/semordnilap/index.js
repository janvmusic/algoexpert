function semordnilap(words) {
  const uniq = new Set(words);
  const results = [];

  if (words.length === 0) {
    return [];
  }

  for (let word of words) {
    const rev = word.split("").reverse().join("");
    if (uniq.has(rev) && rev !== word) {
      results.push([word, rev]);
      uniq.delete(word);
      uniq.delete(rev);
    }
  }

  return results;
}

// Do not edit the line below.
exports.semordnilap = semordnilap;
