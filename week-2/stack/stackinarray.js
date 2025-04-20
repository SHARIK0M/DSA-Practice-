class stack {
    constructor (){
        this.item = []
    }

    isEmpty(){
        return this.item.length==0
    }

    push(element){
        this.item.push(element)
    }
    pop(){
        if(this.isEmpty()){
           return "stackunderflow"
        }else{
            this.item.pop()
        }
    }

    peek(){
        if(this.isEmpty()){
            return null
        }else{
            return this.item[this.item.length-1]
        }
    }

    size(){
        return this.item.length
    }

    print(){
        console.log(this.item.join(" "));
        
    }
}


let stacky = new stack()

stacky.push(10)
stacky.push(15)
stacky.push(20)
stacky.pop()
stacky.print()
console.log(stacky.size());
console.log(stacky.peek())


class Stack{
    constructor(){
        this.top = {}
        this.count = 0
    }
    
    isEmpty(){
        return this.size == 0
    }
    
    push(value){
        this.top[this.count] = value
        this.count+=1
    }
    
    
    pop(){
        this.count-=1
        delete this.top[this.count] 
       
    }
    
print() {
    let result = "";
    for (let i = 0; i < this.count; i++) {
      result += this.top[i] + " ";
    }
    console.log(result.trim());
  }
    
}


let stack = new Stack()

stack.push(10)
stack.push(20)
// stack.pop()
stack.print()