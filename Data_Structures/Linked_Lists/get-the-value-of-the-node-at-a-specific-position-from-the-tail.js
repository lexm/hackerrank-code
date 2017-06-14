/*
    Get Nth element data from the end in a Linked List
    Number of elements in the list will always be greater than N.
    Node is defined as
    var Node = function(data) {
        this.data = data;
        this.next = null;
    }
*/

// This is a "method-only" submission.
// You only need to complete this method.

function getNodeValue( head, position) {
    var curNode = head;
    var valArray = [];
    while(curNode) {
        valArray.push(curNode.data);
        curNode = curNode.next;
    }
    return valArray[valArray.length - position - 1];
}
