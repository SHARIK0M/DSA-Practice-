class hashtable {
    constructor(size){
        this.iteam = new Array(size)
        this.size = size
    }

    hash(key){
        let total = 0
        for(let i = 0 ;i<key.length; i++){
            total += key.charCodeAt(i)
        }
        return total % this.size
    }

    set(key,value){
        let index = this.hash(key)
        this.iteam[index] = value 
    }

    get(key){
        let index = this.hash(key)
        return this.iteam[index]
    }

    remove (key){
        let index = this.hash(key)
        this.iteam[index] = undefined
    }
    display(){
        
        for(let i = 0 ;i <= this.size ; i++){
           if(this.iteam[i]){
             console.log(i,this.iteam[i]); 
           } 
        }
    }
}

let list = new hashtable(5)

list.set("name","sharik")
list.set("age",18)
list.set("nsaa","basha")
list.display()
list.remove("name")
list.get("nsaa")
list.display()

