


/*
 * Complete the 'reversePrint' function below.
 *
 * The function accepts INTEGER_SINGLY_LINKED_LIST llist as parameter.
 */

/*
 * For your reference:
 *
 * SinglyLinkedListNode {
 *     int data;
 *     SinglyLinkedListNode next;
 * }
 *
 */

function reversePrint(llist) {
    // Write your code here
    let s = [];
    let curr = llist;
    
    while (curr != null) {
        s.push(curr.data);
        curr = curr.next;
    }
    while (s.length >0) {
        console.log(s.pop());
    }
}
