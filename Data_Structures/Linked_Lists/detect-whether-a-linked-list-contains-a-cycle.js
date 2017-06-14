/*
    Detect a cycle in a Linked List.
    Note that the head may be 'null' if the list is empty.
    Node is defined as
    var Node = function(data) {
        this.data = data;
        this.next = null;
    }
*/

// This is a "method-only" submission.
// You only need to complete this method.

function hasCycle(head) {
    var ptrArray = [];
    var curNode = head;
    while(curNode && (ptrArray.indexOf(curNode) === -1)) {
          ptrArray.push(curNode);
          curNode = curNode.next;
    }
    return !!curNode;
}
