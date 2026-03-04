function tournamentWinner(competitions, results) {
  const HOME_WIN = 1;
  let table = {};
  let currentBest = {
    best: 0,
  };

  for (let i = 0; i < results.length; i++) {
    let [home, away] = competitions[i];
    let result = results[i];

    const winner = result === HOME_WIN ? home : away;
    table[winner] = (table[winner] || 0) + 3;

    if (table[winner] > Object.values(currentBest)[0]) {
      currentBest = { [winner]: table[winner] };
    }
  }

  return Object.keys(currentBest)[0];
}

// Do not edit the line below.
exports.tournamentWinner = tournamentWinner;
