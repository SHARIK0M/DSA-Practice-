class graph{
    constructor(){
        this.adjencyList = {}
    }
    
    insert(vertex){
        if(!this.adjencyList[vertex]){
            this.adjencyList[vertex] = new Set()
        }
    }
    
    insertEdge(v1,v2){ 
        if(!this.adjencyList[v1]){
            this.adjencyList[v1] = new Set()
        }
        if(!this.adjencyList[v2]){
            this.adjencyList[v2] = new Set()
        }
        
        this.adjencyList[v1].add(v2)
        this.adjencyList[v2].add(v1)
    }
    
    display(){
        for(let v in this.adjencyList){
            console.log(v+"-->",[...this.adjencyList[v]])
        }
    }
    
    hasEdge(v1,v2){
        return this.adjencyList[v1].has(v2) && this.adjencyList[v2].has(v1)
    }
    
    removeEdge(v1,v2){
        if(!this.adjencyList[v1] || !this.adjencyList[v2]){
            return false
        }
        
        this.adjencyList[v1].delete(v2)
        this.adjencyList[v2].delete(v1)
    }
    
    remove(v){
        if(!this.adjencyList[v]){
            return null
        }
        
        for(let n of this.adjencyList[v]){
            this.removeEdge(n,v)
        }
        
        delete this.adjencyList[v]
    }
    
    bfs(s){
        let vn = new Set()
        vn.add(s)
        let queue = []
        queue.push(s)
        
        while(queue.length){
            let v = queue.shift()
            console.log(v)
            
            for(let n of this.adjencyList[v]){
                if(!vn.has(n)){
                    vn.add(n)
                    queue.push(n)
                }
            }
        }
    }
    
    dfs(s,vn= new Set()){
        vn.add(s)
        console.log(s)
        for(let n of this.adjencyList[s]){
            if(!vn.has(n)){
               this.dfs(n,vn)
            }
        }
    }
    
    bfscd(s){
        let vn = new Set()
        vn.add(s)
        let queue = [{v:s,p:null}]
        
        while(queue.length){
            let {v,p} = queue.shift()
            
            for(let n of this.adjencyList[v]){
                if(!vn.has(n)){
                    vn.add(n)
                    queue.push({v:n,p:v})
                }else if(n != p){
                    console.log("true")
                    return
                }
            }
        }
        console.log("false")
    }
    
    dfscd(s,vn = new Set(),p=null){
        vn.add(s)
        
        for(let n of this.adjencyList[s]){
            if(!vn.has(n)){
                this.dfscd(n,vn,s)
                return true
            }else if (n != p){
                console.log('Yes')
                return true
            }
        }
        console.log('not')
        return false
    }
    
    
}


let g = new graph()

g.insert('A')
g.insert('B')
g.insert('C')

g.insertEdge('A','B')
g.insertEdge("B",'C')
g.insertEdge('A','C')


// console.log(g.hasEdge('A','B'))
// g.removeEdge('A','B')
// g.remove('A')

// g.display()

// g.bfs("A")
// g.dfs('A')

// g.bfscd("A")
// g.dfscd("A")






class jk {


    bfs(s){
        let vn = new Set()
        let queue = []
        vn.add(s)
        queue.push(s)
        while(queue.length){
            let v = queue.shift()
            console.log(v)
            for(let n in this.adjencyList[v]){
                if(!vn.has(n)){
                    vn.add(n)
                    queue.push(n)
                }
            }
        }
    }

    dfs(s,vn = new Set()){
        vn.add(s)
        console.log(s)
        for(let n in this.adjencyList[s]){
            this.dfs(n,vn)
        }
    }
}














