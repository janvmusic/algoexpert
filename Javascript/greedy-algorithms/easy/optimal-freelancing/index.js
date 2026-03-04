function optimalFreelancing(jobs) {
  const WEEK_TOTAL_DAYS = 7;
  let totalPayment = 0;

  const schedule = new Array(WEEK_TOTAL_DAYS).fill(false);
  jobs.sort((a, b) => b.payment - a.payment);

  for (let job of jobs) {
    let day = Math.min(job.deadline, WEEK_TOTAL_DAYS);

    while (day >= 0) {
      if (schedule[day - 1] === false) {
        totalPayment += job.payment;
        schedule[day - 1] = true;
        break;
      }

      day--;
    }
  }

  return totalPayment;
}

// Do not edit the line below.
exports.optimalFreelancing = optimalFreelancing;
