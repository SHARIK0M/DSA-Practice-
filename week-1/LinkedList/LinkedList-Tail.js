class Node {
    constructor(value){
        this.value=value
        this.next=null
    }
}

class LinkedList{
    constructor(){
        this.head=null
        this.tail=null
        this.size=0
    }

    isEmpty(){
        return this.size===0
    }

    prepend(val){
        const node = new Node(val)
        if(this.isEmpty()){
            this.head = node 
            this.tail = node
        }else{
            node.next = this.head
            this.head = node
        }
        this.size++
    }
    append(val){
        const node = new Node(val)
        if(this.isEmpty()){
            this.head = node 
            this.tail = node
        }else{
            this.tail.next = node
            this.tail = node
        }
        this.size++
    }

    removeFromFront(){
        if(this.isEmpty()){
            return null
        }else{
            let removeNode = this.head
            this.head = removeNode.next
            console.log(removeNode.value)
            this.size--
        }
    }

    removeFromEnd(){
        if(this.isEmpty()){
            return -1
        }
        if(this.size==1){
            this.head = null
            this.tail = null
        }else{
         
            let prev = this.head

            while(prev.next !== this.tail){
                prev = prev.next
            }
            prev.next = null 
            this.tail = prev
        }
        this.size--

    }

       print(){
        if(this.isEmpty()){
            return console.log("There is no value")
        }else{
            let curr = this.head
            let values = ''
            while(curr){
                values+=`${curr.value} `
                curr=curr.next
            }
            console.log(values)
        }
    }


}

let list = new LinkedList()

list.append(10)
list.print()
list.prepend(20)
list.append(30)
list.removeFromEnd()
list.removeFromFront()
list.print()