function getPermutations(array) {
  if (array.length < 1) {
    return array;
  }

  return permutations(array, [], []);
}

function permutations(array, perm, perms) {
  if (array.length === 0) {
    perms.push(perm);
    return;
  }

  for (let i = 0; i < array.length; i++) {
    let number = array[i];
    let nIdx = array.indexOf(number);

    let newArray = array.slice();
    newArray.splice(nIdx, 1);

    let newPerm = [...perm, number];
    permutations(newArray, newPerm, perms);
  }

  return perms;
}

// Do not edit the line below.
exports.getPermutations = getPermutations;
