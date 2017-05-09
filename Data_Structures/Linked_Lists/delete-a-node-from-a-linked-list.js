/*
    Delete Node at a given position in a linked list
    head pointer input could be NULL as well for empty list
    Node is defined as
    var Node = function(data) {
        this.data = data;
        this.next = null;
    }
*/

// This is a "method-only" submission.
// You only need to complete this method.

function deleteNode(head, position) {
    var prevNode = null;
    var curNode = head;
    for(c0 = 0; c0 < position; c0++) {
        prevNode = curNode;
        curNode = curNode.next;
    }
    if(!prevNode) return curNode.next;
    prevNode.next = curNode.next;
    return head;
}
