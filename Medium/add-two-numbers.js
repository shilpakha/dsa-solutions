function ListNode(val, next) {
    this.val = (val === undefined ? 0 : val);
    this.next = (next === undefined ? null : next);
}

var addTwoNumbers = function(l1, l2) {
    let dummy = new ListNode(0); // dummy head
    let current = dummy;
    let carry = 0;

    while (l1 !== null || l2 !== null) {
        let x = (l1 !== null) ? l1.val : 0;
        let y = (l2 !== null) ? l2.val : 0;
        let sum = x + y + carry;

        carry = Math.floor(sum / 10);
        current.next = new ListNode(sum % 10);
        current = current.next;

        if (l1 !== null) l1 = l1.next;
        if (l2 !== null) l2 = l2.next;
    }

    if (carry > 0) {
        current.next = new ListNode(carry);
    }

    return dummy.next; // skip dummy head
};
// Test Code
// Helper function to create linked list from array
function createList(arr) {
    let dummy = new ListNode(0);
    let current = dummy;
    for (let num of arr) {
        current.next = new ListNode(num);
        current = current.next;
    }
    return dummy.next;
}

// Helper to print linked list
function printList(node) {
    let res = [];
    while (node) {
        res.push(node.val);
        node = node.next;
    }
    return res;
}

// Example test
let l1 = createList([2,4,3]);
let l2 = createList([5,6,4]);

let result = addTwoNumbers(l1, l2);
console.log(printList(result)); // [7,0,8]