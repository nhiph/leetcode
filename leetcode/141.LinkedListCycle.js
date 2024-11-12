function hasCycle(head) {
  if (!head) return false;

  let slow = head; // loop through one node
  let fast = head; // loop through two step

  while (fast != null && fast.next != null) {
    slow = slow.next;
    fast = fast.next.next;

    if (slow == fast) return true;
  }

  return false;
}
const node1 = {
  val: 1,
  next: null,
};
const node2 = {
  val: 2,
  next: null,
};
const node3 = {
  val: 3,
  next: null,
};
const node4 = {
  val: 4,
  next: null,
};

node1.next = node2;
node2.next = node3;
node3.next = node4;
node4.next = node1;

const head = {
  val: 1,
  next: {
    val: 2,
    next: {
      val: 3,
      next: null,
    },
  },
};
console.log(hasCycle(node1));
console.log(hasCycle(head));
