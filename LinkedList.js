import { Node } from "./Node";

class LinkedList {
    constructor() {
        this.head = new Node();
        this.tail = new Node();
    }
    append(value) {
        let newNode = Node(value);
        this.tail.nextNode = newNode;
        newNode.nextNode = null;
        
        this.tail = newNode; 
    }
    prepend(value) {
        let newNode = Node(value);
        newNode.nextNode = this.head;
        
        this.head = newNode;
    }
    size() {
        let curNode = this.head;
        if (curNode.value == null) {
            return 0;
        }
        let totalNumberOfNodes = 1;
        while (curNode.nextNode != null) {
            totalNumberOfNodes++;
            curNode = curNode.nextNode;
        }
        return totalNumberOfNodes;
    }
    head() {
        return this.head;
    }
    tail() {
        return this.tail;
    }
    at(index) {
        let curNode = this.head; 
        let curId = 0;

        while (curId != index) {
            curId++;
            curNode = curNode.nextNode;
        }
        return curNode;
    }
    pop() {
        let cur = this.head;
        let next = this.head.nextNode;

        if (next == null) {
            this.head = null;
            return;
        }
        while (next.nextNode != null) {
            cur = next;
            next = cur.nextNode;
        }
        cur.nextNode = null;
    }
    contains(value) {
        for (let i = 0; i < this.size(); ++i) {
            if (this.at(i).value === value) {
                return true;
            }
        }
        return false;
    }
    find(value) {
        for (let i = 0; i < this.size(); ++i) {
            if (this.at(i).value === value) {
                return i;
            }
        }
        return null;
    }
    toString() {
        let str = "";
        for (let i = 0; i < this.size(); ++i) {
            str += `(${this.at(i).value}) -> `;
        }
        str += `null`;
        console.log(str);
    }
}

export { LinkedList };