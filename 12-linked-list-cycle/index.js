/**
 * Given head, the head of a linked list, determine if the linked list has a cycle in it.
 * There is a cycle in a linked list if there is some node in the list that can be reached again by continuously following the next pointer. Internally, pos is used to denote the index of the node that tail's next pointer is connected to. Note that pos is not passed as a parameter.
 * Return true if there is a cycle in the linked list. Otherwise, return false.
 */

// Definition for singly-linked list.
function ListNode(val) {
  this.val = val;
  this.next = null;
}

// O(n) time complexity and O(1) space complexity
/**
 * @param {ListNode} head
 * @return {boolean}
 */
const hasCycle = (head) => {
  let fast = head;
  let slow = head;
  while (fast && fast.next) {
    slow = slow.next;
    fast = fast.next.next;
    if (slow === fast) {
      return true;
    }
  }
  return false;
};

let head = new ListNode(1);
head.next = new ListNode(2);
head.next.next = new ListNode(1);
head.next.next = head;
let pos = 0;
console.log(hasCycle(head));
