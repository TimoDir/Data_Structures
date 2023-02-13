class Node{
    constructor(data){
        this.data = data;
        this.next = null;
        this.prev = null; 
    }

    setNextNode(node){
        if(node instanceof Node || node === null){
            this.next = node;
        } else {
            throw new Error('The parameter of the setNextNode method must be an instance of class Node. (or a null object)')
        };
    }

    getNextNode(){
        return this.next;
    }
}