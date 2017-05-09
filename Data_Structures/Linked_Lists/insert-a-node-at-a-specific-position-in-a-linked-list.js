/*
  Insert Node at a given position in a linked list
  head can be NULL
  First element in the linked list is at position 0
  Node is defined as
  var Node = function(data) {
    this.data = data;
    this.next = null;
  }
*/

// This is a "method-only" submission.
// You only need to complete this method.

function insert(head, data, position) {
    var prevNode = null;
    var curNode = head;
    for(c0 = 0; c0 < position; c0++) {
        prevNode = curNode;
        curNode = curNode.next;
    }
    var newNode = new Node(data);
    newNode.next = curNode;
    if(!prevNode) return newNode;
    prevNode.next = newNode;
    return head;
}
