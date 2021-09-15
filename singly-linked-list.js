// This implements the singly linked list in JS

//Node structure
class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

// SinglyLinkedList class with basic operations
class SinglyLinkedList{
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    push(value) {
        var node = new Node(value);
        if (!this.head) {
            //new LL case
            this.head = node;
            this.tail = node;
        }
        else {
            this.tail.next = node;
            this.tail = node;
        }
        this.length++;
        return this;
    }

    pop() {
        if (this.length === 0)
            return 'Invalid operation. Insufficient elements';
        if (this.head === this.tail) {
            this.head = null;
            this.tail = null;
            this.length = 0;
            return this;
        }
        var cursor = this.head;
        while (cursor.next !== this.tail) {
            cursor = cursor.next;
        }
        this.tail = cursor;
        this.tail.next = null;
        this.length--;
        return this;
    }
}

let list = new SinglyLinkedList();
list.push(1);
list.push(2);
list.push(3);
console.log(list);

list.pop();
console.log(list);