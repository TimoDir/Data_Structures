const Node = require('../Nodes/Node');


class SinglyLinkedList{
    constructor(){
        this.head = null;
    }

    addToHead(data){
        //Put the data inside a node instance
        const newHead = new Node(data);
        //if there is no head to the list just add this newhead
        if(this.head === null){
            this.head = newHead;
        } else {
        //else we set the next node of this new head to the current head and replace the head with this new head
            newHead.setNextNode(this.head);
            this.head = newHead;
        }
    }
};

const Farm = new SinglyLinkedList();

console.log(Farm)

Farm.addToHead('cow');

Farm.addToHead('Farmer');

console.log(Farm)