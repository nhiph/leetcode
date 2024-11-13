class ListNode {
  constructor(val, next) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

var isPalindrome = function (head) {
  let reversedList = new ListNode();
  let cur = head;

  while (cur != null) {
    const newNode = new ListNode(cur.val);
    newNode.next = reversedList;
    reversedList = newNode;

    cur = cur.next;
  }

  let i = reversedList;
  let j = head;

  while (i != null && j != null) {
    if (i.val != j.val) return false;

    i = i.next;
    j = j.next;
  }

  return true;
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

const head2 = {
  val: 1,
  next: {
    val: 1,
    next: {
      val: 2,
      next: {
        val: 1,
        next: null,
      },
    },
  },
};
// 1221, 134431 true
// console.log(isPalindrome(head));
console.log(isPalindrome(head2)); // 1121 -> 1211
// const val = isPalindrome(head2) 
