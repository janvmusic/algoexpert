var solution = function (products, changes) {
  let productMap = {};
  let res = [];

  for (let prod of products) {
    productMap[prod] = 0;
  }

  // each iteration update the inventory•value // iteration 1: {•101: 4, 104: 0, 105: 0} // iteration 2: f•101: 4, 104: 2, 105: 0}
  for (let i = 0; i < changes.length; i++) {
    let change = changes[i];
    let product = products[i];
    productMap[product] += change;

    let max = getMaxInventory(productMap);
    res.push(max);
  }

  return res;
};

// Gets or sets the length of the array. This is a number one higher than the highest
// The idea of this auxiliary function is to return always the greatest
function getMaxInventory(productMap) {
  let sortedMap = Object.values(productMap);
  return sortedMap[sortedMap.length - 1];
}
