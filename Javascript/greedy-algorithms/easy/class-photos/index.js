function classPhotos(redShirtHeights, blueShirtHeights) {
  redShirtHeights.sort((a, b) => b - a);
  blueShirtHeights.sort((a, b) => b - a);

  const totalRed = redShirtHeights.reduce((sum, x) => sum + x);
  const totalBlue = blueShirtHeights.reduce((sum, x) => sum + x);
  const redBackRow = totalRed >= totalBlue;

  for (let i = 0; i < redShirtHeights.length; i++) {
    if (redBackRow && redShirtHeights[i] <= blueShirtHeights[i]) {
      return false;
    }

    if (!redBackRow && blueShirtHeights[i] <= redShirtHeights[i]) {
      return false;
    }

    continue;
  }

  return true;
}

// Do not edit the line below.
exports.classPhotos = classPhotos;
