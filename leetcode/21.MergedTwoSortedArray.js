class ListNode {
  constructor(val, next) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

var mergeTwoLists = function (list1, list2) {
  let list = new ListNode();
  let curr = list;

  while (list1 != null || list2 != null) {
    if (list2 == null) {
      const newNode = new ListNode(list1.val);
      curr.next = newNode;
      list1 = list1.next;
    } else if (list1 == null) {
      const newNode = new ListNode(list2.val);
      curr.next = newNode;
      list2 = list2.next;
    } else if (list1.val <= list2.val) {
      const newNode = new ListNode(list1.val);
      curr.next = newNode;
      list1 = list1.next;
    } else {
      const newNode = new ListNode(list2.val);
      curr.next = newNode;
      list2 = list2.next;
    }
    curr = curr.next;
  }

  return list.next;
};

const list1 = {
  val: 1,
  next: {
    val: 2,
    next: {
      val: 4,
      next: null,
    },
  },
};

const list2 = {
  val: 1,
  next: {
    val: 3,
    next: {
      val: 4,
      next: null,
    },
  },
};

const list = mergeTwoLists(list1, list2);
console.log("list", list);
