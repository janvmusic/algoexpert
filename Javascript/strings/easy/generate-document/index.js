function generateDocument(characters, document) {
  const lStash = generateLetterStash(characters);

  for (let l of document) {
    if (!(l in lStash) || lStash[l] <= 0) {
      return false;
    }

    lStash[l]--;
  }
  return true;
}

function generateLetterStash(characters) {
  const lStash = {};

  for (let l of characters) {
    if (l in lStash) {
      lStash[l] = lStash[l] + 1;
    } else {
      lStash[l] = 1;
    }
  }

  return lStash;
}

// Do not edit the line below.
exports.generateDocument = generateDocument;
