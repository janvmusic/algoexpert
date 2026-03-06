function arrayOfProducts(array) {
  const result = new Array(array.length);
  const leftResults = [];

  for (let i = 0; i < array.length; i++) {
    let left = 1;
    for (let j = i + 1; j < array.length; j++) {
      const val = array[j];
      left = left * val;
    }

    leftResults.push(left);
  }

  for (let i = array.length - 1; i >= 0; i--) {
    let right = 1;
    for (let j = i - 1; j >= 0; j--) {
      const val = array[j];
      right = right * val;
    }

    result[i] = right * leftResults[i];
  }

  return result;
}

// Do not edit the line below.
exports.arrayOfProducts = arrayOfProducts;
