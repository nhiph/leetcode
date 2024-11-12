class ListNode {
  constructor(val, next) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

var removeElements = function (head, val) {
  if (!head) return null;

  let cur = head;
  let pre = null;

  while (cur != null) {
    if (cur.val == val) {
      let nextTemp = cur.next;
      if (!pre) {
        head = nextTemp;
      } else {
        pre.next = nextTemp;
      }
      cur = nextTemp;
    } else {
      pre = cur;
      cur = cur.next;
    }
  }

  if (!cur && pre && pre.val == val) return head.next;

  return head;
};

const head = {
  val: 1,
  next: {
    val: 2,
    next: {
      val: 6,
      next: {
        val: 3,
        next: {
          val: 4,
          next: {
            val: 5,
            next: {
              val: 6,
              next: null,
            },
          },
        },
      },
    },
  },
};

const head2 = {
  val: 7,
  next: {
    val: 7,
    next: {
      val: 7,
      next: {
        val: 7,
        next: null,
      },
    },
  },
};

const head3 = {
  val: 1,
  next: null,
};

const head4 = {
  val: 1,
  next: {
    val: 2,
    next: null,
  },
};

console.log(removeElements(head, 6));
console.log(removeElements(head2, 7));
console.log(removeElements(head3, 2));
console.log(removeElements(head4, 1));
