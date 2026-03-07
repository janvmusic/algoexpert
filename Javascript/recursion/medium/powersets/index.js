function powersetV1(array) {
  if (array.length < 1) {
    return [array];
  }

  return getPowersetsV1(array, [], []);
}

function getPowersetsV1(array, cPowerset, powersets) {
  if (array.length === 0) {
    powersets.push(cPowerset);
    return;
  }

  for (let i = 0; i < array.length; i++) {
    let number = array[i];
    let nPowerset = [...cPowerset, number];
    let nArray = array.slice(i + 1, array.length);

    getPowersetsV1(nArray, nPowerset, powersets);
  }

  powersets.push(cPowerset);
  return powersets;
}

function powersetV2(array) {
  if (array.length < 1) {
    return [array];
  }

  const powersets = [];
  getPowersetsV2(array, 0, [], powersets);

  return powersets;
}

function getPowersetsV2(array, idx, cPowerset, powersets) {
  if (idx === array.length) {
    powersets.push([...cPowerset]);
    return;
  }

  // Skip this element path
  getPowersetsV2(array, idx + 1, cPowerset, powersets);

  // Include element;
  cPowerset.push(array[idx]);
  getPowersetsV2(array, idx + 1, cPowerset, powersets);

  // Backtrack
  cPowerset.pop();
}

// Do not edit the line below.
exports.powersetV1 = powersetV1;
exports.powersetV2 = powersetV2;
