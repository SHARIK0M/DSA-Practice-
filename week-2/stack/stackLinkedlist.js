class Node {
    constructor(value){
        this.value = value
        this.next=null
    }
}

class Stack{
    constructor(){
        this.top=null
        this.length=0
    }

    isEmpty(){
        return this.length==0
    }

    push(value){
        let node = new Node(value)
        node.next = this.top
        this.top = node 
        this.length++
    }

    pop(){
        if(this.isEmpty()){
            return "stack underflow"
        }else{
            let remmove = this.top
            this.top = remmove.next
            this.length--
        }
    }

    getSize(){
        return this.length
    }
    print(){
        if(this.isEmpty()){
            return null
        } else {
            let res = ''
            let curr = this.top
    
            while(curr){
                res += curr.value + " "
                curr = curr.next
            }
    
            console.log(res)
        }
    }
    

}


let list = new Stack()

list.push(10)
list.push(30)
list.pop()
console.log(list.getSize());

list.print()