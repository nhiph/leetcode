function getMaxOrder(D, C, P) {
  let map = new Map();
  for (let i = 0; i < D.length; i++) {
    map.set(D[i], C[i]);
  }

  D.sort((a, b) => a - b);
  let monitors = 0;
  let orders = 0;
  for (let i = 0; i < D.length; i++) {
    monitors += map.get(D[i]);
    if (monitors > P) break;
    orders += 1;
  }

  return orders;
}

function getMaxOrder1(D, C, P) {
  let ordersArr = D.map((d, i) => ({ deadline: d, monitors: C[i] }));
  ordersArr.sort((a, b) => a.deadline - b.deadline);

  let monitors = 0;
  let orders = 0;
  for (let i = 0; i < ordersArr.length; i++) {
    monitors += ordersArr[i].monitors;
    if (monitors > P) break;
    orders += 1;
  }

  return orders;
}

function getMaxOrder2(D, C, P) {
  const n = D.length;
  const orders = new Array(n);

  for (let i = 0; i < n; i++) {
    orders[i] = [D[i], C[i]];
  }

  // Sort by deadline (earliest first), then by monitor requirement (ascending)
  orders.sort((a, b) => {
    if (a[0] === b[0]) return a[1] - b[1];
    return a[0] - b[0];
  });

  let total = 0;
  let count = 0;

  for (let i = 0; i < n; i++) {
    total += orders[i][1];
    if (total > P) break;
    count++;
  }

  return count;
}

// console.log(getMaxOrder([5, 11, 1, 3], [6, 1, 3, 2], 7));
// console.log(getMaxOrder([10, 15, 1], [10, 1, 2], 3));
// console.log(getMaxOrder([11, 18, 1], [9, 18, 8], 7));
// console.log(getMaxOrder([1, 4, 2, 5], [4, 9, 2, 3], 19));

// console.log(getMaxOrder1([5, 11, 1, 3], [6, 1, 3, 2], 7));
// console.log(getMaxOrder1([10, 15, 1], [10, 1, 2], 3));
// console.log(getMaxOrder1([11, 18, 1], [9, 18, 8], 7));
// console.log(getMaxOrder1([1, 4, 2, 5], [4, 9, 2, 3], 19));

console.log(getMaxOrder2([5, 11, 1, 3], [6, 1, 3, 2], 7));
console.log(getMaxOrder2([10, 15, 1], [10, 1, 2], 3));
console.log(getMaxOrder2([11, 18, 1], [9, 18, 8], 7));
console.log(getMaxOrder2([1, 4, 2, 5], [4, 9, 2, 3], 19));
