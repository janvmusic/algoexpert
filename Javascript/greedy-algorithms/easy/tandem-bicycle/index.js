function tandemBicycle(redShirtSpeeds, blueShirtSpeeds, fastest) {
  let tandemResult = 0;
  let redSortLambda = (a, b) => a - b;
  let blueSortLambda = (a, b) => (fastest ? b - a : a - b);

  redShirtSpeeds.sort(redSortLambda);
  blueShirtSpeeds.sort(blueSortLambda);

  for (let i = 0; i < redShirtSpeeds.length; i++) {
    const r = redShirtSpeeds[i];
    const b = blueShirtSpeeds[i];

    const fastest = Math.max(r, b);
    tandemResult += fastest;
  }

  return tandemResult;
}

// Do not edit the line below.
exports.tandemBicycle = tandemBicycle;
