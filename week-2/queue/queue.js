// class queue{
//     constructor(){
//         this.iteam = []
//     }

//     enqueue(value){
//         this.iteam.push(value)
//     }
//     dequeue(){
//         this.iteam.shift()
//     }
//     isEmpty(){
//         return this.iteam.length==0
//     }
//     getsize(){
//         return this.iteam.length
//     }
//     peek(){
//         return this.iteam[0]
//     }

//     print(){
//         console.log(this.iteam.toString());
        
//     }
// }

// let list = new queue()

// list.enqueue(10)
// list.enqueue(10)

// list.dequeue()
// list.print()



class queueinobj {
    constructor(){
        this.rear = 0
        this.front = 0
        this.iteam = {}
    }

    isEmpty(){
        return this.rear - this.front == 0
    }

    Enqueue(value){
        this.iteam[this.rear] = value
        this.rear++
    }

    Dequeue(){
        delete this.iteam[this.front]
        this.front++ 
    }
    size(){
        return this.rear - this.front
    }

    peek(){
        return this.iteam[this.front]
    }

    print(){
        let res=''
        for(let key in this.iteam){
            res += this.iteam[key]+ " "
        } 

        console.log(res);
        
    }
}

let list = new queueinobj()

list.Enqueue(10)
list.Enqueue(20)
// list.Dequeue()
list.print()

