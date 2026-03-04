function isPalindrome(string) {
  let left = 0;
  let right = string.length - 1;

  while (left < right) {
    const l = string.charAt(left);
    const r = string.charAt(right);

    if (r !== l) {
      return false;
    }

    left++;
    right--;
  }

  return true;
}

// Do not edit the line below.
exports.isPalindrome = isPalindrome;
