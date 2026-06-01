// You are given an array of k linked-lists lists, each linked-list is sorted in ascending order.

// Merge all the linked-lists into one sorted linked-list and return it.

 

// Example 1:

// Input: lists = [[1,4,5],[1,3,4],[2,6]]
// Output: [1,1,2,3,4,4,5,6]
// Explanation: The linked-lists are:
// [
//   1->4->5,
//   1->3->4,
//   2->6
// ]
// merging them into one sorted linked list:
// 1->1->2->3->4->4->5->6
// Example 2:

// Input: lists = []
// Output: []
// Example 3:

// Input: lists = [[]]
// Output: []
 

// Constraints:

// k == lists.length
// 0 <= k <= 104
// 0 <= lists[i].length <= 500
// -104 <= lists[i][j] <= 104
// lists[i] is sorted in ascending order.
// The sum of lists[i].length will not exceed 104.

function ListNode(val, next = null) {
    this.val = val;
    this.next = next;
}

function createList(arr) {
    let dummy = new ListNode(0);
    let current = dummy;

    for (let num of arr) {
        current.next = new ListNode(num);
        current = current.next;
    }

    return dummy.next;
}

function printList(head) {
    const result = [];

    while (head) {
        result.push(head.val);
        head = head.next;
    }

    return result;
}

var mergeKLists = function(lists) {
    if (!lists || lists.length === 0) return null;

    while (lists.length > 1) {
        const mergedLists = [];

        for (let i = 0; i < lists.length; i += 2) {
            mergedLists.push(
                mergeTwoLists(
                    lists[i],
                    i + 1 < lists.length ? lists[i + 1] : null
                )
            );
        }

        lists = mergedLists;
    }

    return lists[0];
};

function mergeTwoLists(l1, l2) {
    const dummy = new ListNode(0);
    let current = dummy;

    while (l1 && l2) {
        if (l1.val <= l2.val) {
            current.next = l1;
            l1 = l1.next;
        } else {
            current.next = l2;
            l2 = l2.next;
        }

        current = current.next;
    }

    current.next = l1 || l2;

    return dummy.next;
}

// Input: [[1,4,5],[1,3,4],[2,6]]
const lists = [
    createList([1, 4, 5]),
    createList([1, 3, 4]),
    createList([2, 6])
];

const result = mergeKLists(lists);

console.log(printList(result));