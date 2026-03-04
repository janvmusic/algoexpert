function smallestDifferenceV1(arrayOne, arrayTwo) {
  let result = [];
  let minDistance = null;

  arrayOne.sort((a, b) => a - b);
  arrayTwo.sort((a, b) => a - b);

  for (let oneNumber of arrayOne) {
    for (let twoNumber of arrayTwo) {
      const distance = Math.abs(oneNumber - twoNumber);

      if (!minDistance || distance < minDistance) {
        minDistance = distance;
        result = [oneNumber, twoNumber];
      }
    }
  }

  return result;
}

function smallestDifferenceV2(arrayOne, arrayTwo) {
  let oneP = 0;
  let twoP = 0;
  let minDistance = Infinity;
  let result = [];

  arrayOne.sort((a, b) => a - b);
  arrayTwo.sort((a, b) => a - b);

  // console.log(arrayOne, arrayTwo)

  while (oneP < arrayOne.length && twoP < arrayTwo.length) {
    const oneNumber = arrayOne[oneP];
    const twoNumber = arrayTwo[twoP];
    const distance = Math.abs(oneNumber - twoNumber);

    if (distance < minDistance) {
      minDistance = distance;
      result = [oneNumber, twoNumber];
    }

    if (oneNumber < twoNumber) {
      oneP++;
    } else if (twoNumber < oneNumber) {
      twoP++;
    } else {
      return [oneNumber, twoNumber];
    }
  }

  return result;
}

// Do not edit the line below.
exports.smallestDifferenceV1 = smallestDifferenceV1;
exports.smallestDifferenceV2 = smallestDifferenceV2;
