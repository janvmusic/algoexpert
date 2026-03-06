function sweetAndSavory(dishes, target) {
  dishes.sort((a, b) => a - b);
  sweets = dishes.filter((v) => v < 0);
  savories = dishes.filter((v) => v > 0);

  let result = [0, 0];
  let best = Infinity;
  let swIdx = sweets.length;
  let saIdx = 0;

  while (swIdx >= 0 && saIdx < savories.length) {
    const sweet = sweets[swIdx];
    const savory = savories[saIdx];
    const dish = sweet + savory;

    if (dish <= target) {
      const distance = target - dish;
      if (distance < best) {
        best = distance;
        result = [sweet, savory];
      }

      saIdx++;
    } else {
      swIdx--;
    }
  }

  return result;
}

// Do not edit the line below.
exports.sweetAndSavory = sweetAndSavory;
