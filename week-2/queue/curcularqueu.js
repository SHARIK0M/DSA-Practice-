class curcularqueue{
    constructor(capacity){
        this.iteam = [capacity]
        this.capacity = capacity
        this.currlength = 0
        this.rear =-1
        this.front = -1
    }

    isFull(){
        return this.currlength === this.capacity
    }
    isEmpty(){
        return this.currlength == 0
    }

    Enqueue(value){
        if(!this.isFull()){
            this.rear = (this.rear+1) % this.capacity
            this.iteam[this.rear] = value
            this.currlength +=1
            if(this.front == -1){
                this.front  = this.rear
            }
        }
    }

    Dequeue(){
        if(this.isEmpty()){
            return null
        }else{
            this.iteam[this.front]=null
            this.front = (this.front+1)%this.capacity
            this.currlength -=1
            if(this.isEmpty()){
                this.front = -1
                this.rear = -1
            }
        }
    }

    print() {
        if (this.isEmpty()) {
            console.log("Queue is empty");
            return;
        }
    
        let i = this.front;
        let str = "";
    
        while (true) {
            str += this.iteam[i] + " ";
            if (i === this.rear) break;
            i = (i + 1) % this.capacity;
        }
    
        console.log(str.trim());
    }
    
}

let list = new curcularqueue(5)

list.Enqueue(10)
list.Enqueue(15)
list.Enqueue(20)
list.Dequeue()
list.print()

