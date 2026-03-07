function reverseWordsInString(string) {
  const words = [];
  let start = 0;
  let end = 1;

  while (end < string.length) {
    if (string.charAt(end) === " ") {
      const word = string.substring(start, end);
      words.push(word);
      words.push(string.charAt(end));

      start = end + 1;
      end = start;
    } else {
      end++;
    }
  }

  // Lets not forget the last word range
  const lastWord = string.substring(start, end);
  words.push(lastWord);

  // reset pointers
  start = 0;
  end = words.length - 1;

  while (start < end) {
    const left = words[start];
    const right = words[end];

    words[start] = right;
    words[end] = left;

    start++;
    end--;
  }

  return words.join("");
}

// Do not edit the line below.
exports.reverseWordsInString = reverseWordsInString;
