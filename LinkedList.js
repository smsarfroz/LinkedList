import { Node } from "./Node.js";

class LinkedList {
    constructor() {
        this.head = new Node();
        this.tail = new Node();
    }
    append(value) {
        let newNode = new Node(value);
        if (this.head.value == null && this.tail.value == null) {
            this.head = newNode;
            this.tail = newNode;
            return;
        }
        this.tail.nextNode = newNode;
        newNode.nextNode = null;
        
        this.tail = newNode; 
    }
    prepend(value) {
        let newNode = Node(value);
        if (this.head.value == null && this.tail.value == null) {
            this.head = newNode;
            this.tail = newNode;
            return;
        }
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
        return str;
    }
    insertAt(value, index) {
        if (index == 0) {
            this.prepend(value);
        } else if (index ==this.size()) {
            this.append(value);
        } else {
            index--;
            let newNode = new Node(value);
            let cur = this.at(index);
            let next = cur.nextNode;
            cur.nextNode = newNode;
            newNode.nextNode = next;
        }
    }
    removeAt(index) {
        if (index == 0) {
            this.head = this.at(1);
        } else if (index == this.size()-1) {
            this.tail = this.at(index-1);
            this.tail.nextNode = null;
        } else {
            let prev = this.at(index-1);
            let next = this.at(index+1);
            prev.nextNode = next;
        }
    }
}

export { LinkedList };