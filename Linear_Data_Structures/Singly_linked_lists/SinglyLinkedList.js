const Node = require('../Nodes/Node');


class SinglyLinkedList{
    constructor(){
        this.head = null;
    };

    addToHead(data){
        const newHead = new Node(data);
        if(!this.head){
            this.head = newHead;
        } else {
            newHead.setNextNode(this.head);
            this.head = newHead;
        }
    };

    removeHead(){
        if(!this.head){
            return;
        };

        const removedHead = this.head;
        this.head = removedHead.getNextNode();
        return removedHead.data;
    };

    addToTail(data){
        // same as addToHead logic if head = null newTail replace this.head
        const newTail = new Node(data);
        if(!this.head){
            this.head = newTail;
            return;
        };

        // look for the last node of the list to set is next pointer to the newTail variable
        let current = this.head;
        while(current.getNextNode()){
            current = current.getNextNode();
        };

        current.setNextNode(newTail);
    };

    removeTail(){
        // same as removeHead logic if head = null stop method
        if(!this.head){
            return;
        };

        let current = this.head;
        // If the next pointer of head === null so Tail === Head we use the removeHead method                
        if(!current.getNextNode()){
            return this.removeHead();
        }

        let dataTail;
        // Traverse the list recursively
        while(current.getNextNode()){
            // creation of the next variable who look at the next pointer of the current node.
            let next = current.getNextNode();
            // if the next pointer of the next variable is null. the next variable is the Tail node.
            if(!next.getNextNode()){
                // so we store is data, set the current node next pointer to null and return the data of the tail that will stop the while loop and the method.
                dataTail = next.data;
                current.setNextNode(null);
                return dataTail;
            }
            current = next;
        };
    }

    printList(){
        let current = this.head;

        if(!current){
            console.log(current);
            return
        };

        let output = '<Head>\n';
        while(current !== null){
            output += current.data + '\n';
            current = current.getNextNode();
        };
        output += '<Tail>';

        console.log(output)
    };
};

// Test zone

const Farm = new SinglyLinkedList();

const noTail = Farm.removeTail();

console.log('Remove the Tail of ' + noTail + '\n')

Farm.addToTail('mice');

Farm.printList();
console.log('\n');

const miceTail = Farm.removeTail();

console.log('Remove the Tail of ' + miceTail + '\n')

Farm.printList();
console.log('\n');


Farm.addToHead('cow');

Farm.addToHead('Farmer');

Farm.addToTail('cat');

Farm.printList();
console.log('\n');

const catTail = Farm.removeTail();

console.log('Remove the Tail of ' + catTail + '\n')

Farm.printList();
console.log('\n');
