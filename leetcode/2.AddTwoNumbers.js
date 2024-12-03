/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function (l1, l2) {
  let newList = new ListNode();

  let cur1 = l1;
  let cur2 = l2;
  let head = newList;
  let memo = 0;

  while (cur1 != null || cur2 != null) {
    let val;
    if (!cur1) {
      val = cur2.val + memo;
      cur2 = cur2.next;
    } else if (!cur2) {
      val = cur1.val + memo;
      cur1 = cur1.next;
    } else {
      val = cur1.val + cur2.val + memo;
      cur1 = cur1.next;
      cur2 = cur2.next;
    }

    if (val > 9) {
      val = val - 10;
      memo = 1;
    } else {
      memo = 0;
    }

    let newNode = new ListNode(val);
    head.next = newNode;
    head = newNode;
  }

  if (memo) {
    let newNode = new ListNode(memo);
    head.next = newNode;
    head = newNode;
    memo = 0;
  }

  return newList.next;
};
