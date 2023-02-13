class Node{
    constructor(data){
        this.data = data;
        this.next = null;
        this.prev = null; 
    }

    // Creation of a Method to set a node to the next pointer;
    setNextNode(node){
        // we verify if the node parameter is an instance of the Node class or if is a null object
        if(node instanceof Node || node === null){
            this.next = node;
        } else {
            throw new Error('The parameter of the setNextNode method must be an instance of class Node. (or a null object)')
        };
    }
}