class chainingHashing{
    constructor(size){
        this.item = new Array(size)
        this.size = size
    }

    hash(key){
        let total = 0
        for(let i = 0 ; i<key.length ; i++){
            total += key.charCodeAt(i)
        }
        return total % this.size
    }

    set(key,value){
        let index = this.hash(key)
        if(!this.item[index]){
            this.item[index] = []
        }

        let existing = this.item[index].find(item=>item[0]==key)

        if(existing){
            existing[1]=value
        }else{
            this.item[index].push([key,value])
        }
    }

    get(key){
        let index = this.hash(key)
        let bucket = this.item[index]
        if(bucket){
            let value = bucket.find(item=>item[0]==key)
            return value?value[1]:undefined
        }
        return undefined
    }

    remove(key){
        let index = this.hash(key)
        let bucket = this.item[index]
        if(bucket){
            this.item[index] = bucket.filter(item=>item[0]!==key)
        }
        return null 
    }

    display(){
        this.item.forEach((bucket,index)=>{
            if(bucket){
                bucket.forEach(([k,v]) => {
                    console.log(`${index},key : ${k} value : ${v}`)
                })
            }
        })
    }
    removedupulicate(str){
        let res=""
        for(let char of str){
            if(!this.get(char)){
                this.set(char,true)
                res+=char
            }
        }
        return res
    }

    mostfreecount(arr){
        arr.forEach(item =>{
            this.set(item,(this.get(item)||0)+1)
        })

        let max =0
        let frequent

        this.item.forEach(bucket=>{
            if(bucket){
                bucket.forEach(([k,v])=>{
                    if(v>max){
                       max = v
                       frequent = k
                    }
                })
            }
        })
        return frequent
    }

    finddupulicates(arr){
        arr.forEach(val=>{
            this.set(val,(this.get(val) || 0) +1)
        })

        let res = []

        this.item.forEach(bucket=>{
            if(bucket){
                bucket.forEach(([k,c])=>{
                    if(c>1){
                        res.push(k)
                    }
                })
            }
        })
        return res
    }

    thirdfreecount(arr){
        arr.forEach(item=>{
            this.set(item ,(this.get(item)||0)+1)
        })

        let all =[]

        this.item.forEach(bucket=>{
            if(bucket){
                bucket.forEach(([k,v])=>{
                    all.push({k,v})
                })
            }
        })
        all.sort((a,b)=>b.value - a.value)

        return all[2]?all[2]:null

        
        // let max = -Infinity
        // let maxNumber = null
        // let sMax = -Infinity
        // let sMaxNumber = null
        // let tMax = -Infinity
        // let tMaxNumber = null
        // this.item[0].forEach(Element=> {
        //     if(Element[1] > max) {
        //         tMax = sMax;
        //         tMaxNumber = sMaxNumber
        //         sMax = max
        //         sMaxNumber = maxNumber
        //         max = Element[1]
        //         maxNumber = Element[0]
        //     }else if(Element[1] > sMax && Element[1] != max) {
        //         tMax = sMax;
        //         tMaxNumber = sMaxNumber
        //         sMax = Element[1]
        //         sMaxNumber = Element[0]
        //     }else if(Element[1] > tMax && Element[1] != sMax ){
        //         tMax = Element[1];
        //         tMaxNumber = Element[0]
        //     }
    }
}

let table = new chainingHashing(5)

table.set("name","sharik")
table.set("mean","sharik")
table.set("likeicbcbc","sharik")
console.log(table.get("name"));
table.display()
// console.log(table.removedupulicate("absasfa"));

// console.log(table.mostfreecount([1,2,1,2,4,2,1,2]));

// console.log(table.finddupulicates([1,2,1,2,4,2,1,2]));

// console.log(table.thirdfreecount([1,2,1,2,4,2,1,2]));

