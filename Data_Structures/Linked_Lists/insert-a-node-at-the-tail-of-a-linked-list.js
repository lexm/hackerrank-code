
/*
  Node is defined as
  var Node = function(data) {
      this.data = data;
      this.next = null;
  }
*/

// This is a "method-only" submission.
// You only need to complete this method.

function insert(head, data) {
    var curNode = head;
    if(!head) {
        head = new Node(data);
    } else {
        while(curNode.next) {
            curNode = curNode.next;
        }
        curNode.next = new Node(data);
    }
    return head;
}
