

// class Node {
//     constructor(value){
//         this.value = value 
//         this.next = null 
//         this.prev = null
//     }
// }
// class CLL {
//     constructor (){
//         this.head = null 
//         this.tail = null 
//         this.size = 0
//     }

//     isEmpty(){
//         return this.size == 0
//     }

//     prepend(value){
//         let node = new Node(value)
         
//         if(this.isEmpty()){
//             this.head = node 
//             this.tail = node 
//             this.tail.next = node  
//         }else{
//             this.tail.next = node
//             node.next = this.head
//             this.head = node
//         }
//         this.size++
//     }

//     append(value){
//         let node = new Node(value)
//         if(this.isEmpty()){
//             this.tail=node
//             this.head = node 
//             this.tail.next = node
//         }else{
//              this.tail.next = node
//              this.tail = node
//              this.tail.next = this.head
//         }
//         this.size++
//     }

//     print(){
//         let curr = this.head
//         let res = ""
//         do{
//             res+=curr.value+" "
//             curr = curr.next
//         }while(curr !== this.head)
//             console.log(res)
//     }
// }

// let list = new CLL()

// list.prepend(10)
// list.prepend(20)
// list.append(20)
// list.append(49)
// list.print()

// --------------------------------------------------------------------------------------------------------

// class CLL{
//     constructor(){
//         this.head = null
//         this.tail = null 
//         this.size = 0
//     }
//     isEmpty(){
//         return this.size == 0
//     }
//     prepend (value){
//         let node = new Node(value)
//         if(this.isEmpty()){
//            this.head = node 
//            this.tail = node 
//            this.head.prev  = this.tail
//            this.tail.next = this.head
//         }else{
//             node.prev = this.tail
//             node.next = this.head
//             this.head = node 
//             this.tail.next = this.head
//         }
//         this.size++
//     }
//     append (value){
//         let node = new Node(value)
//         if(this.isEmpty()){
//             this.head = node
//             this.tail = node
//             this.head.prev = this.tail
//             this.tail.next = this.head
//         }else{
//             this.tail.next = node
//             node.next = this.head
//             this.tail = node 
//             this.head.prev = this.tail
//         }
//         this.size++
//     }
//     print(){
//          let curr = this.head
//          let res = ""
//          do{
//              res+=curr.value+" "
//              curr = curr.next
//          }while(curr !== this.head)
//              console.log(res)
//      }

// }

// let list = new CLL()

// list.prepend(10)
// list.prepend(20)
// list.append(30)
// list.append(50)
// list.print()



class Node{
    
    constructor(value){
        this.value = value ;
        this.next = null ;
        
    }
}


class LinkedList{
    
    constructor(){
        this.head = null ;
        this.size = 0 ;
    }
    
    isEmpty(){
        return this.size === 0;
    }
    
    prepend(value){
        
        let node = new Node(value);
        
        if(this.isEmpty()){
            this.head = node ;
        }else{
            node.next = this.head ;
            this.head = node ;
        }
        
        this.size++ ;
    }
    
    

    makeCircular(){
        
        let curr = this.head ;
        
        while(curr.next){
            curr = curr.next ;
        }
        
        curr.next = this.head ;
    }
    
    
    checkCircular(){
        
        let slow = this.head ;
        let fast = this.head ;
        
        while( fast !== null  && fast.next!== null){
             slow = slow.next ;
            fast = fast.next.next ;
            if( slow === fast){
                return true ;
            }
           
        }
        return false ;
    }
}



const list = new LinkedList();

list.prepend(50)
list.prepend(40)
list.prepend(30)
list.prepend(20)
list.prepend(10)
console.log(list.checkCircular())
list.makeCircular()



console.log(list.checkCircular())
