var timeRequiredToBuy = function (tickets, k) {
  let time = 0;

  while (tickets[k] !== 0) {
    for (let i = 0; i < tickets.length; i++) {
      if (tickets[k] == 0) {
        return time;
      } else if (tickets[i] !== 0) {
        tickets[i]--;
        time++;
      }
    }
  }

  return time;
};

console.log(timeRequiredToBuy([2, 3, 2], 2)); // 6
console.log(timeRequiredToBuy([5, 1, 1, 1], 0)); // 8
