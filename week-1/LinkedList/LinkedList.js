
/// ONLY HEAD

// class Node {
//     constructor(data){
//         this.data=data
//         this.next=null
//     }
// }

// class LinkedList {
//     constructor(){
//         this.head=null
//         this.size=0
//     }

//     isEmpty(){
//         return this.size===0
//     }

//     getSize(){
//         return this.size
//     }

//     prePend(data){
//         const node = new Node(data)
//         if(this.isEmpty()){
//             this.head=node
//         }else{
//             node.next = this.head
//             this.head = node
//         }
//         this.size++
//     }

//     append(data){
//         const node = new Node(data)
//         if(this.isEmpty()){
//             this.head=node
//         }else{
//             let prev = this.head
//             while(prev.next){
//                 prev=prev.next
//             }
//             prev.next=node
//         }
//         this.size++

//     }

//     insert(data,index){
//         if(index<0 || index>=this.size){
//             return false
//         }
//         if(index==0){
//             this.prePend(data)
//         }else{
//             const node = new Node(data)
//             let prev = this.head
//             for(let i=0;i<index-1;i++){
//                 prev=prev.next
//             }
//             node.next=prev.next
//             prev.next=node
//             this.size++
//         }
//     }

//     removeFrom(index){
//         if(index<0 || index>=this.size){
//             return null
//         }
//         let removeValue
        
//         if(index===0){
//              removeValue = this.head
//             this.head = this.head.next
//         }else{
//             let prev = this.head

//             for(let i=0;i<index-1;i++){
//                 prev=prev.next
//             }

//             removeValue = prev.next
//             prev.next = removeValue.next

//         }

//         this.size--
//         return removeValue.data
//     }

//     removeValue(value){
//         if(this.isEmpty()){
//             return null
//         }
//         if(this.head.data===value){
//             this.head = this.head.next
//             this.size--
//             return value 
//             }else{
//                 let prev = this.head

//                 while(prev.next &&  prev.next.data!==value){
//                     prev=prev.next
//                 }

//                 if(prev.next){
//                     const removeNode = prev.next
//                     prev.next = removeNode.next
//                     this.size--
//                     return value
//                 }

//                 return null
//             }
            
//     }

//     search(val){
//         if(this.isEmpty()){
//             return -1
//         }
//         let i=0
//         let curr = this.head

//         while(curr){
//             if(curr.data==val){
//                 return i
//             }else{
//                 i++
//                 curr=curr.next
//             }
//         }
//         return -1
//     }

//     revese(){
//         if(this.isEmpty()){
//             return null 
//         }

//         let prev = null
//         let curr = this.head

//         while(curr){
//             let next = curr.next
//             curr.next = prev
//             prev = curr
//             curr = next
//         }
//         this.head = prev
//     }

//     print(){
//         if(this.isEmpty()){
//             console.log("There is no node")
//         }else{
//             let curr = this.head
//             let lised = ''
//             while(curr){
//                 lised += `${curr.data} `
//                 curr=curr.next
//             }
//             console.log(lised)
//             // console.log(this.getSize())
//         }
//     }

// }

// let list = new LinkedList()

// console.log(list.getSize())
// console.log(list.isEmpty())

// list.prePend(10)
// list.print()
// list.append(20)
// list.append(30)
// list.insert(15,1)
// // console.log(list.removeFrom(0));
// list.print()
// // console.log(list.removeValue(50));
// console.log(list.search(50))

// list.revese()

// list.print()


// --------------------------------------------------------------------------------------------------------



class Node {
    constructor(value){
      this.value = value
      this.next = null
    }
}

class SLL {
    constructor(){
        this.head = null 
        this.tail = null
        this.size = 0
    }

    isEmpty(){
        return this.size == 0
    }

    prepend(value){
        let node = new Node(value)
        if(this.isEmpty()){
            this.head = node
            this.tail = node
        }else{
            node.next = this.head
            this.head = node
        }
        this.size++
    }

    append(value){
        let node = new Node(value)
        if(this.isEmpty()){
            this.head = node
            this.tail = node 
        }else{
          this.tail.next = node
          this.tail = node
        }
        this.size++
    }

    reversehead(){
       let curr = this.head
       let prev = null

       this.tail = this.head

       while(curr){
        let next = curr.next
        curr.next = prev
        prev = curr
        curr = next
       }
       this.head = prev

       console.log(this.tail)
    }

    removeFront(){
      
        if(this.size == 1){
            this.head = null 
            this.tail = null 
        }else{
            this.head = this.head.next
            this.size--
        }
    }

    removeEnd(){
        if(this.size==1){
            this.head=null
            this.tail = null
        }else{
             let prev = this.head
             
             while(prev.next !== this.tail){
                prev = prev.next
             }
             prev.next = null
             this.tail = prev
             this.size--
        }
    }

    insert(value,index){
      
        if(index == 0){
            this.prepend(value)
        }else{
            let node = new Node(value)
            let prev = this.head

            for(let i = 0 ; i<index-1 ; i++){
                prev=prev.next
            }
            node.next = prev.next
            prev.next = node 
        }
        this.size++
    }

    removeIndex(index){
        if(index==0){
            this.removeFront()
        }else{
            let prev = this.head
            for(let i =0 ; i<index-1 ;i++){
                prev=prev.next
            }
            prev.next = prev.next.next
            this.size--
        }
    }

    removeValue(value){
        if(value==this.head.value){
            this.removeFront()
        }else{
            let curr = this.head

            while(curr.next){
                if(curr.next.value == value){
                    curr.next = curr.next.next
                    this.size--
                    return
                }else{
                    curr= curr.next
                }
            }
           
        }
    }

    search(value){
        if(this.isEmpty()){
            return -1 
        }
        let curr = this.head
        let i = 0
        while(curr){
            if(curr.value==value){
                return i
            }else{
                curr = curr.next
                i++
            }
        }
        return -1
    }


    removeDuplicate() {
        let curr = this.head;
    
        if (this.isEmpty()) {
            return -1;
        }
    
        while (curr && curr.next) {  // ✅ Safe check to avoid null error
            if (curr.value === curr.next.value) {
                curr.next = curr.next.next;
                this.size--;
            } else {
                curr = curr.next;
            }
        }
    
        return null;
    }
    

    print(){
        if(this.isEmpty()){
            return null
        }else{
            let curr = this.head
            let res = ""
            while(curr){
                res += `${curr.value} `
                curr = curr.next
            }
            console.log(res)
        }
    }
}

let list = new SLL()

list.prepend(10)
list.prepend(10)
list.append(15)
list.append(15)
// // list.print()
// // list.reversehead()
// // list.removeFront()
// // list.removeEnd()
// list.insert(12,1)
// // list.removeIndex(2)
// list.removeValue()
// console.log(list.search(1))
list.removeDuplicate()
list.print()