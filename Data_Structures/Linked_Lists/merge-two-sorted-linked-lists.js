/*
    Merge two sorted lists A and B as one Linked List and return the head of merged list
    Node is defined as
    var Node = function(data) {
        this.data = data;
        this.next = null;
    }
*/

// This is a "method-only" submission.
// You only need to complete this method.

function mergeLinkedLists( headA, headB) {
    if(!headA) return headB;
    if(!headB) return headA;
    if(headA.data < headB.data) {
        let restOfA = headA.next;
        headA.next = mergeLinkedLists(restOfA, headB)
        return headA;
    }
    let restOfB = headB.next;
    headB.next = mergeLinkedLists(headA, restOfB);
    return headB;
}
