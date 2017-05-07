/*
    Print elements of a linked list in reverse order as standard output
    head pointer could be NULL as well for empty list
    Node is defined as
    var Node = function(data) {
        this.data = data;
        this.next = null;
    }
*/

// This is a "method-only" submission.
// You only need to complete this method.

function reversePrint(head) {
    var ptrArray = [];
    var cur = head;
    while(cur) {
        ptrArray.push(cur);
        cur = cur.next;
    }
    while(ptrArray.length) {
        console.log(ptrArray.pop().data);
    }
}
