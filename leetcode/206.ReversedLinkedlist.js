class ListNode {
  constructor(val, next) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

var reverseList = function (head) {
  if (head == null || head.next == null) return head;

  // solution 1:

  //   let pre = null;
  //   let cur = head;

  //   while (cur != null) {
  //     let tempNext = cur.next;
  //     cur.next = pre;
  //     pre = cur;
  //     cur = tempNext;
  //   }

  //   return pre;

  // solution 2:

  let cur = head;
  let newHead = new ListNode();
  let countLoop = 0;

  while (cur != null) {
    let newNode = new ListNode(cur.val);
    if (!countLoop) {
      newNode.next = null;
    } else {
      newNode.next = newHead;
    }
    newHead = newNode;
    countLoop++;

    // loop through every node one by one
    cur = cur.next;
  }

  return newHead;
};

const head = {
  val: 1,
  next: {
    val: 2,
    next: {
      val: 3,
      next: {
        val: 4,
        next: null,
      },
    },
  },
};

console.log("aaaaa", reverseList(head));
