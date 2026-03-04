function caesarCipherEncryptor(string, key) {
  const alphabet = "abcdefghijklmnopqrstuvwxyz".split("");
  const result = [];

  for (let l of [...string]) {
    const cIdx = alphabet.indexOf(l);
    const nIdx = (cIdx + key) % 26;

    result.push(alphabet[nIdx]);
  }

  return result.join("");
}

// Do not edit the line below.
exports.caesarCipherEncryptor = caesarCipherEncryptor;
