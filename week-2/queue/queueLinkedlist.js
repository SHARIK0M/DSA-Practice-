class Node {
    constructor(value){
        this.value = value 
        this.next = null
    }
}

class queue{
    constructor(){
        this.front = null
        this.rear = null
        this.size = 0
    }
    isEmpty(){
        return this.size ==0
    }

    enqueue(value){
        let node = new Node(value)

       if(this.isEmpty()){
        this.front = node 
        this.rear = node  
       }else{
         this.rear.next = node
        this.rear = node
       }
       this.size++
    }

    dequeue(){
       if(this.size==1){
        this.front =null
        this.rear = null
       }else{
        let remove = this.front
        this.front = remove.next
       }
       this.size--
    }

    peek(){
        return this.front.value
    }

    print(){
        if(!this.isEmpty()){
            let curr = this.front
            let res = ''

            while(curr){
                res+=curr.value+' '
                curr =curr.next
            }
            console.log(res);
            
        }
    }
}


let list = new queue()

list.enqueue(10)
list.enqueue(20)
list.enqueue(30)
list.enqueue(40)
list.dequeue()
list.print()