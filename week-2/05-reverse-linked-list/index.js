/**
 * Given the head of a singly linked list, reverse the list, and return the reversed list.
 */

// Definition for singly-linked list.
function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}

// O(n) time complexity and O(1) space complexity
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
const reverseList = (head) => {
  if (head == null) {
    return head;
  }

  let previous = null;
  let current = head;
  while (current != null) {
    const next = current.next;
    current.next = previous;
    [previous, current] = [current, next];
  }
  return previous;
};

let head = new ListNode(1, new ListNode(2));
head = new ListNode();
console.log(reverseList(head));
