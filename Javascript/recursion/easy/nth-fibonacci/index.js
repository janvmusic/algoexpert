function getNthFib(n) {
  return memoizedNthFib(n);
}

function recursiveNthFib(n) {
  if (n === 2) {
    return 1;
  }

  if (n === 1) {
    return 0;
  }

  return getNthFib(n - 1) + getNthFib(n - 2);
}

function memoizedNthFib(n, results = {}) {
  if (results[n]) {
    return results[n];
  }

  if (n === 2) {
    return 1;
  }

  if (n === 1) {
    return 0;
  }

  nthFib = memoizedNthFib(n - 1, results) + memoizedNthFib(n - 2, results);
  results[n] = nthFib;

  return nthFib;
}

// Do not edit the line below.
exports.getNthFib = getNthFib;
