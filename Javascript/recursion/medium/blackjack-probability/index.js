const CARDS = 10;

function blackjackProbability(target, startingHand) {
  const memo = {};
  return blackjackProb(target, startingHand, memo);
}

function blackjackProb(target, startingHand, memo) {
  let total = 0;
  let prob = 0;
  let stopPoint = target - 4;

  if (startingHand in memo) {
    return memo[startingHand];
  }

  if (startingHand > target) {
    return 1;
  }

  if (startingHand >= stopPoint) {
    return 0;
  }

  for (let i = 1; i <= CARDS; i++) {
    const cHand = startingHand + i;
    if (cHand > target) {
      total++;
      continue;
    }

    if (cHand < stopPoint) {
      const nProb = blackjackProb(target, cHand, memo) * .1
      prob += nProb;
    }
  }

  prob += total / CARDS
  memo[startingHand] = prob;

  return prob;
}

// Do not edit the line below.
exports.blackjackProbability = blackjackProbability;
