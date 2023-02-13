const Node = require('../Nodes/Node');


class SinglyLinkedList{
    constructor(){
        this.head = null;
    }

    addToHead(data){
        const newHead = new Node(data);
        if(this.head === null){
            this.head = newHead;
        } else {
            newHead.setNextNode(this.head);
            this.head = newHead;
        }
    };

    printList(){
        let current = this.head;

        // if this.head = null we return null
        if(!current){
            console.log(current);
            return
        };

        // output variable who will store the data of the list
        let output = '<Head>\n';
        // traverse recursively the list until there is no next node in the list
        while(current !== null){
            output += current.data + '\n';
            current = current.getNextNode();
        };

        output += '<Tail>';
        console.log(output)
    }
};

const Farm = new SinglyLinkedList();

Farm.printList();

Farm.addToHead('cow');

Farm.addToHead('Farmer');

Farm.printList();