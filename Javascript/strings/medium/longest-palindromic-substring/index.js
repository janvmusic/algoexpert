function longestPalindromicSubstring(string) {
  let lPal = string[0];
  if (string.length === 1) {
    return lPal;
  }

  for (let i = 0; i < string.length; i++) {
    let odd = expandFromCenter(string, i, i);
    let pair = expandFromCenter(string, i, i + 1);

    let cPal = odd.length > pair.length ? odd : pair;
    if (cPal.length > lPal.length) {
      lPal = cPal;
    }
  }

  return lPal;
}

function expandFromCenter(string, lIdx, rIdx) {
  while (lIdx >= 0 && rIdx < string.length) {
    if (string.charAt(lIdx) !== string.charAt(rIdx)) {
      break;
    }

    lIdx--;
    rIdx++;
  }

  return string.substring(lIdx + 1, rIdx);
}

// Do not edit the line below.
exports.longestPalindromicSubstring = longestPalindromicSubstring;
