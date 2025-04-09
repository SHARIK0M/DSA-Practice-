class Node {
    constructor(value){
        this.value=value
        this.next=null
    } 
}

class CirclerLinkedList{
constructor(){
    this.head=null
    this.tail=null
    this.size=0
}
isEmpty(){
    return this.size===0
}
getSize(){
    return this.size
}

append(val){
    let node = new Node(val)
    if(this.isEmpty()){
        this.head=node
        this.tail=node
        node.next = this.head
    }else{
        this.tail.next = node
        node.next = this.head
        this.tail = node
    }
    this.size++
}

prepend(val){
    let node = new Node(val)
    if(this.isEmpty()){
        this.head=node
        this.tail=node
        node.next = this.head
    }else{
        this.tail.next = node
        node.next = this.head
        this.head = node
    }
    this.size++
}

print(){
    if(this.isEmpty()){
        console.log("list is empty")
    }else{
        let curr=this.head
        let list=""
      do {
            list += curr.value + ' ';
            curr = curr.next;
        } while (curr !== this.head);
        
        console.log(list)
    }
    
}

}
let list=new CirclerLinkedList()

list.append(10)
list.prepend(5)
list.print()




// --------------------------------------------------------------------------------------------------------


// append(value) {
//     const node = new Node(value);

//     if (!this.head) {
//         // First node points to itself in both directions
//         this.head = node;
//         this.tail = node;
//         node.next = node;
//         node.prev = node;
//     } else {
//         node.prev = this.tail;
//         node.next = this.head;

//         this.tail.next = node;
//         this.head.prev = node;

//         this.tail = node;
//     }
// }


// prepend(value) {
//     const node = new Node(value);

//     if (!this.head) {
//         this.head = node;
//         this.tail = node;
//         node.next = node;
//         node.prev = node;
//     } else {
//         node.next = this.head;
//         node.prev = this.tail;

//         this.head.prev = node;
//         this.tail.next = node;

//         this.head = node;
//     }
// }
