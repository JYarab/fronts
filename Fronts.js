class SLL {
     // constructor, other methods, removed for brevity
    constructor(){
        this.head = null
    }

    
    addFront(val) {
        var newNode = new ListNode(val);
        newNode.next = this.head;
        this.head = newNode;
        return this;
    }
    
    removeFront(){
        this.head = this.head.next;
        return this;
    }

    front(){
        return this.head.val;;
    }


}

class ListNode {
    constructor(val) {
        this.val = val
        this.next = null                
    }
}


var testSll = new SLL;
testSll.addFront(10);
testSll.addFront(5);
console.log(testSll)
console.log(testSll.front())
console.log(testSll.removeFront())
console.log(testSll.front())



