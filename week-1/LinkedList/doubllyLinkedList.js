// class Node {
//     constructor(value){
//         this.value = value
//         this.prev = null
//         this.next = null 
//     }
// }

// class doublyLinkedList{
//     constructor(){
//         this.head = null
//         this.tail = null 
//         this.size = 0
//     }

//     isEmpty(){
//         return this.size == 0 
//     }

//     prepend(value){
//         const node = new Node(value)
//         if(this.isEmpty()){
//             this.head = node 
//             this.tail = node 
//         }else{
//             node.next = this.head
//             this.head.prev = node
//             this.head = node
//         }
//         this.size++
//     }
    
//     append(value){
//         const node = new Node(value)
//         if(this.isEmpty()){
//             this.head=node
//             this.tail=node
//         }else{
//             this.tail.next = node
//             node.prev=this.tail
//             this.tail = node
//         }
//         this.size++
//     }

//     removeFromFront(){
//         if(this.isEmpty()){
//             return null
//         }else{
//             this.head=this.head.next
//             this.size--
//         }
//     }
    
//     removeFromLast(){
//         if(this.size==1){
//             this.head=null
//             this.tail=null
//         }else{
//             this.tail = this.tail.prev
//             this.tail.next=null
//         }
//         this.size--

//     }

//     reverse(){
//         if(this.isEmpty()){
//             return -1
//         }else{
//             let curr = this.tail
//             let res = ''

//             while(curr){
//                 res+=curr.value+" "
//                 curr=curr.prev
//             }
//             console.log(res)
//         }
//     }

//     removeDuplicates() {
//        let curr = this.head

//     while(curr && curr.next){
//         if(curr.value === curr.next.value){
//             curr.next = curr.next.next
//         }else{
//             curr=curr.next
//         }
//     }

//     }

//     print(){
//         if(this.isEmpty()){
//             console.log("list is empty")
//         }else{
//             let curr=this.head
//             let list=""
            
//             while(curr){
//                 list+=`${curr.value} `
//                 curr=curr.next
//             }
//             console.log(list)
//         }
        
//     }


// }


// let list = new doublyLinkedList()

// let arr = [10,20, 20,30,40, 40];

// arr.forEach((val)=>list.append(val))

// // list.prepend(10)
// // list.append(30)
// // list.prepend(20)
// // list.removeFromFront()
// // list.removeFromLast()
// list.removeDuplicates()
// list.print()
// // list.reverse()


// --------------------------------------------------------------------------------------------------------


class Node{
    constructor(value){
        this.value = value
        this.next = null
        this.prev = null
    }
}

class DLL {
    constructor(){
        this.head = null
        this.size = 0
        this.tail = null 
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
            this.head.prev = node
            this.head = node
        }
        this.size++
    }

    append(value){
        let node = new Node(value)
        if(this.head){
            this.tail.next = node
            node.prev = this.tail
            this.tail = node
        }
        this.size++
    }

    reverse(){
        if(this.isEmpty()){
            return -1
        }else{
            let prev = this.tail
            let res = ''
            while(prev){
               res += `${prev.value} `
               prev = prev.prev
            }
            console.log(res)
        }
    }

    print(){
        let curr = this.head
        let res =""
        while(curr){
            res+=curr.value+" "
            curr=curr.next
        }
        console.log(res)
    }
}

let list = new DLL()

list.prepend(10)
list.prepend(5)
list.append(20)
list.append(30)
list.reverse()
list.print()