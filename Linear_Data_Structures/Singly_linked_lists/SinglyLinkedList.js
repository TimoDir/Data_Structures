const Node = require('../Nodes/Node');


class SinglyLinkedList{
    constructor(){
        this.head = null;
    };

    addToHead(data){
        const newHead = new Node(data);
        if(this.head === null){
            this.head = newHead;
        } else {
            newHead.setNextNode(this.head);
            this.head = newHead;
        }
    };

    removeHead(){
        // if this.head === null there is nothing to remove.
        if(!this.head){
            return;
        };
        // we store the head we gonna remove to return is data as the end of the method. we set the head to the next pointer of the removedHead.
        const removedHead = this.head;
        this.head = removedHead.getNextNode();
        return removedHead.data;
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

const Farm = new SinglyLinkedList();

const noHead = Farm.removeHead();

console.log('the removed head is ' + noHead + ' head \n');

Farm.addToHead('cow');

Farm.addToHead('Farmer');

Farm.addToHead('chicken')

Farm.printList();

const fallingHead = Farm.removeHead();

console.log('\nthe removed head is ' + fallingHead + ' head \n');

Farm.printList();