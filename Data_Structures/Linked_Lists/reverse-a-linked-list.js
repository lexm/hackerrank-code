/*
    Reverse a linked list and return the head
    The input list will have at least one element
    Node is defined as
    var Node = function(data) {
        this.data = data;
        this.next = null;
    }
*/

// This is a "method-only" submission.
// You only need to complete this method.

function reverseLinkedList(head) {
    var ptrArr = [];
    while(head.next) {
        ptrArr.push(head);
        head = head.next;
    }
    var curNode = head;
    while(ptrArr.length) {
        var prev = ptrArr.pop();
        curNode.next = prev;
        curNode = prev;
    }
    curNode.next = null;
    return head;
}
