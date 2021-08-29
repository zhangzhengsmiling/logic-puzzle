/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {number[]}
 */
var reversePrint = function(head) {
  let stack = [];
  let ptr = head;
  while(ptr) {
      stack.unshift(ptr.val);
      ptr = ptr.next;
  }
  return stack;
};

var reversePrintRecursion = function(head) {
  const res = [];
  const recursion = (head) => {
    if (head.next !== null) {
      recursion(head.next);
    }
    res.push(head.val);
  }
  recursion(head);
  return res;
};

const input = {
  val: 100,
  next: {
    val: 200,
    next: {
      val: 300,
      next: {
        val: 400,
        next: {
          val: 500,
          next: {
            val: 600,
            next: null,
          }
        }
      }
    }
  }
}
const res = reversePrint(input);
console.log(res);
const list = reversePrintRecursion(input);
console.log(list);
