function runLengthEncoding(string) {
  const encodedCharacters = [];
  let cLetter = string[0];
  let cTotal = 1;

  for (let i = 1; i < string.length; i++) {
    const l = string[i];
    if (l !== cLetter || cTotal === 9) {
      encodedCharacters.push(`${cTotal}${cLetter}`);
      cLetter = l;
      cTotal = 1;

      continue;
    }

    cTotal++;
  }

  if (cTotal > 0) {
    encodedCharacters.push(`${cTotal}${cLetter}`);
  }

  return encodedCharacters.join("");
}

// Do not edit the line below.
exports.runLengthEncoding = runLengthEncoding;
