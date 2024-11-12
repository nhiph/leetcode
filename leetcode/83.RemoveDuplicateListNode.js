function deleteDuplicates(head) {
  if (!head) return null;

  let cur = head;
  let post = cur.next;

  while ((cur != null) & (post != null)) {
    if (cur.val === post.val) {
      cur.next = post.next;
    } else {
      cur = cur.next;
    }
    post = post.next;
  }

  return head;
}

const head1 = {
  val: 1,
  next: {
    val: 1,
    next: {
      val: 2,
      next: null,
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
        val: 3,
        next: {
          val: 3,
          next: null,
        },
      },
    },
  },
};

console.log(deleteDuplicates(head1));
console.log(deleteDuplicates(head2));