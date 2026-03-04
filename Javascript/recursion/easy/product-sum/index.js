// Tip: You can use the Array.isArray function to check whether an item
// is a list or an integer.
function productSum(array, depth = 1) {
  let total = 0;

  for (let item of array) {
    if (Array.isArray(item)) {
      total += (depth + 1) * productSum(item, depth + 1);
    } else {
      total += item;
    }
  }

  return total;
}

// Do not edit the line below.
exports.productSum = productSum;
