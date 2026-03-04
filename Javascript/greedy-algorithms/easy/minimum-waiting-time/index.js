function minimumWaitingTime(queries) {
  let waitingTime = 0;
  queries.sort((a, b) => a - b);

  for (let i = 0; i < queries.length; i++) {
    const queryWaitingTime = queries[i];
    const queriesLeft = queries.length - (i + 1);

    waitingTime = waitingTime + queryWaitingTime * queriesLeft;
  }

  return waitingTime;
}

// Do not edit the line below.
exports.minimumWaitingTime = minimumWaitingTime;
