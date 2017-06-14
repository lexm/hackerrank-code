/*
    Remove all duplicate elements from a sorted Linked List
    Node is defined as
    var Node = function(data) {
        this.data = data;
        this.next = null;
    }
*/

// This is a "method-only" submission.
// You only need to complete this method.

function removeDuplicates(head) {
    if(!head || !head.next) return head;
    let next = head.next;
    while(next && head.data === next.data) {
        next = next.next;
    }
    head.next = removeDuplicates(next);
    return head;
}
