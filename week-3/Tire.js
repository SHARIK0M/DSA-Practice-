class Node {
   constructor(){
    this.children ={}
    this.EndoftheWord = false
   }

}

class tire {
    constructor(){
        this.root = new Node()
    }

    insert(word){

        let node = this.root
        for(let char of word){
            if(!node.children[char]){
                node.children[char]= new Node()
            }

            node = node.children[char]
        }

        node.EndoftheWord = true 
    }

    search(word){
        let node = this.root

        for(let char of word){
            if(!node.children[char]){
                return false
            }
            node = node.children[char]
        }

        return node.EndoftheWord
    }


    startwith(prefix){
        let node = this.root
        for(let char of prefix){
            if(!node.children[char]){
                return false
            }
            node = node.children[char]
        }
        return true 
    }

    autoComplete(word){
        let node = this.root 

        for(let char of word){
            if(!node.children[char]){
                return []
            }
            node = node.children[char]
        }

        let list = []

        this.collectword(node,word,list)

        return list
    }

    collectword(node , word , list){
        if(node.EndoftheWord){
            list.push(word)
        }

        for(let char in node.children){
            this.collectword(node.children[char],word+char,list)
        }
    }

    print(){
        let list = []
        this.collectword(this.root,'',list)
        console.log(list)
    }

    delete(word){
        
        let node = this.root
        let path = []

        for(let char of word){
            if(!node.children[char]){
                return null
            }
            path.push([node,char])
            node = node.children[char]
        }
 

        if(node.EndoftheWord){
            node.EndoftheWord = false
        }

        for(let i = word.length-1 ; i>=0 ;i--){
           
            let [parentNode,char] = path[i]

            if(Object.keys(node.children).length > 0 || node.EndoftheWord){
                break
            }

            delete parentNode.children[char]


            node = parentNode

        }
    }
}


let t = new tire()

t.insert("sharik")
t.insert("apple")
t.insert("sherik")


console.log(t.delete("sherik"))

// t.print()


// // console.log(t.search("sharik"))
// // console.log(t.startwith("sa"));
// // console.log(t.autoComplete("sh"))
// // console.log(JSON.stringify(t.root,null,2))


class Node{
    constructor(){
        this.children = {}
        this.End = false
    }
}

class s{
    constructor(word){
        this.root = new Node
        this.bulidsuffixtree(word)
    }

    bulidsuffixtree(word){
        for(let i =0;i<word.length ; i++){
            this.insert(word.slice(i))
        }
    }

    insert(word){
        let node = this.root

        for(let char of word){
            if(!node.children[char]){
                node.children[char] = new Node()
            }
            node = node.children[char]
        }

        node.End = true 
    }

    serach(word){
        let node = this.root

        for(let char of word){
            if(!node.children[char]){
                return  null
            }
            node = node.children[char]
        }

        return node.End
    }
}

let l = new s("banana")

console.log(l.serach("na"))











class Node {
    constructor() {
        this.children = {};
        this.isEndOfWord = false;
    }
}

class SuffixTrie {
    constructor() {
        this.root = new Node();
    }

    // Method to insert a word and its suffixes
    insert(word) {
        for (let i = 0; i < word.length; i++) {
            this.insertSuffix(word.slice(i));
        }
    }

    // Insert a single suffix into the trie
    insertSuffix(suffix) {
        let node = this.root;

        for (let char of suffix) {
            if (!node.children[char]) {
                node.children[char] = new Node();
            }
            node = node.children[char];
        }

        node.isEndOfWord = true;
    }

    // Method to search for a suffix
    searchSuffix(suffix) {
        let node = this.root;

        for (let char of suffix) {
            if (!node.children[char]) {
                return false;
            }
            node = node.children[char];
        }

        return true;
    }

    // Method to delete a suffix
    deleteSuffix(suffix) {
        let node = this.root;
        let path = [];  // To keep track of the nodes we visited

        // Traverse the trie to find the given suffix
        for (let char of suffix) {
            if (!node.children[char]) {
                console.log("Suffix not found.");
                return;  // Suffix doesn't exist
            }
            path.push([node, char]);  // Save the node and character in the path
            node = node.children[char];
        }

        // If we reach the end of the suffix and it's marked as the end of a word
        if (node.isEndOfWord) {
            node.isEndOfWord = false;
        }

        // Traverse backwards to delete nodes if necessary
        for (let i = path.length - 1; i >= 0; i--) {
            let [parentNode, char] = path[i];

            // If the node has children or is the end of another word, stop deleting
            if (Object.keys(node.children).length > 0 || node.isEndOfWord) {
                break;
            }

            // Delete the character from the parent's children
            delete parentNode.children[char];

            // Move to the parent node for the next iteration
            node = parentNode;
        }

        console.log(`Suffix "${suffix}" deleted.`);
    }
}

// Example usage
const trie = new SuffixTrie();

// Insert words and their suffixes
trie.insert("banana");

// Delete a suffix
trie.deleteSuffix("ana");  // Deletes the suffix "ana" and its nodes

// Test the result
console.log(trie.searchSuffix("ana"));  // false (suffix "ana" is deleted)
console.log(trie.searchSuffix("ban"));  // true (suffix "ban" still exists)
