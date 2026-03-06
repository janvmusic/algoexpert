function bestSeat(seats) {
  best = -1;
  maxSpace = -Infinity;

  for (i = 1; i <= seats.length; i++) {
    curr = seats[i];
    if (curr === 1) {
      continue;
    }

    nIdx = i + 1;
    while (nIdx < seats.length) {
      seat = seats[nIdx];
      if (seat === 0) {
        nIdx++;
        continue;
      }

      space = nIdx - 1 - i;
      if (space > maxSpace) {
        maxSpace = space;
        best = Math.floor((nIdx + i - 1) / 2);
      }

      i = nIdx;
      break;
    }
  }

  return best;
}

// Do not edit the line below.
exports.bestSeat = bestSeat;
