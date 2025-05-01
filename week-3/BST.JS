class Node {
    constructor(value) {
      this.value = value;
      this.left = null;
      this.right = null;
    }
  }
  
  class BST {
    constructor() {
      this.root = null;
    }
  
    isEmpty() {
      return this.root === null;
    }
  
    insert(value) {
      let node = new Node(value);
      if (this.isEmpty()) {
        this.root = node;
      } else {
        this.insertNode(this.root, node);
      }
    }
  
    insertNode(pointer, node) {
      if (node.value < pointer.value) {
        if (pointer.left == null) {
          pointer.left = node;
        } else {
          this.insertNode(pointer.left, node);
        }
      } else {
        if (pointer.right == null) {
          pointer.right = node;
        } else {
          this.insertNode(pointer.right, node);
        }
      }
    }
  
    search(root, value) {
      if (!root) {
        return false;
      } else {
        if (root.value == value) {
          return true;
        } else if (value < root.value) {
          return this.search(root.left, value);
        } else {
          return this.search(root.right, value);
        }
      }
    }
  
    // DEPTH FIRST SEARCH 
    preOrder(root) {
      if (root) {
        console.log(root.value);
        this.preOrder(root.left);
        this.preOrder(root.right);
      }
    }
  
    inOrder(root) {
      if (root) {
        this.inOrder(root.left);
        console.log(root.value);
        this.inOrder(root.right);
      }
    }
  
    postOrder(root) {
      if (root) {
        this.postOrder(root.left);
        this.postOrder(root.right);
        console.log(root.value);
      }
    }
  
    // BFS algorithm (Level Order)
    levelOrder() {
      if (!this.root) {
        console.log('Tree is empty');
        return;
      }
  
      let queue = [];
      queue.push(this.root);
  
      while (queue.length) {
        let curr = queue.shift();
        console.log(curr.value);
  
        if (curr.left) {
          queue.push(curr.left);
        }
        if (curr.right) {
          queue.push(curr.right);
        }
      }
    }
  
    // Get minimum value node (leftmost leaf)
    min(root) {
      if (!root.left) {
        return root.value;
      } else {
        return this.min(root.left);
      }
    }
  
    
  
    // Get maximum value node (rightmost leaf)
    max(root) {
      if (!root.right) {
        return root.value;
      } else {
        return this.max(root.right);
      }
    }
  
    // Delete node
    delete(root, value) {
      if (!root) {
        return null;
      }
  
      if (value < root.value) {
        root.left = this.delete(root.left, value);
      } else if (value > root.value) {
        root.right = this.delete(root.right, value);
      } else {
        // Node to be deleted is found
  
        // Case 1: Node has no children
        if (!root.left && !root.right) {
          return null;
        }
  
        // Case 2: Node has only right child
        if (!root.left) {
          return root.right;
        }
  
        // Case 3: Node has only left child
        if (!root.right) {
          return root.left;
        }
  
        // Case 4: Node has two children
        // Get the inorder successor (smallest in the right subtree)
      
        root.value = this.min(root.right); // Replace value with in-order successor value
        root.right = this.delete(root.right, root.value); // Delete the in-order successor
      }
  
      return root;
    }
  
    // Print the entire tree (just the root in this case)
    print() {
      console.log(this.root);
    }

    isPrime(num){
      if(num<2){
        return false
      }

      for(let i=2;i<=Math.sqrt(num);i++){
        if(num%i==0){
          return false
        }
      }

      return true 
    }

    findprime(root,result=[]){
      if(root){

        this.findprime(root.left,result)


        if(this.isPrime(root.value)){
          result.push(root.value)
        }
        this.findprime(root.right,result)
      }
      return result
    }

    isbst(root,min=null,max=null){
       if(!root){
        return true 
       }

       if((min!=null &&  root.value < min) && (max!=null && root.value > max)){
        return false
       }

       return this.isbst(root.left,min,root.value) && this.isbst(root.right,root.value,max)
    }

    isIndentical(tree1,tree2){
      if(!tree1 && !tree2 ){
        return true 
      }

      if(!tree1 || !tree2 ){
        return false 
      }

      return (tree1.value === tree2.value) && this.isIndentical(tree1.left,tree2.left) && this.isIndentical(tree1.right,tree2.right)
    }

    inOrderT(root,res=[]){
      if(root){
        this.inOrderT(root.left,res)
        res.push(root.value)
        this.inOrderT(root.right,res)
      }

      return res
    }

    findKthSmallest(root,k){
      if(!root){
          return null
      }

      let result= this.inOrderT(root)
      console.log(result)
      return result[k-1] || null
  }

  findKthLargest(root,k){
    if(!root){
        return null
    }

    let result=this.inOrderT(root)
    return result[result.length-k] || null
}

    cloest(root,tar){
      if(!root){
        return true
      }

      let res = this.inOrderT(root)

      let close = null

      for(let i = 0 ; i<res.length ;i++){
        if(res[i]>tar){
            close = res[i]
            break
        }
      }

      return close
    }

    successor(root,value){
      if(!root){
          return null
      }
      let result=this.inOrderT(root)
      let successor=null
      for(let i=0;i<result.length;i++){
          if(result[i]==value){
              if(i+1 < result.length-1){
                  successor=result[i+1]
              }
              break
          }
      }
      return successor
  }

  predecessor(root,value){
    if(!root){
        return null
    }

    let result=this.inOrderT(root)
    let predecessor=null
    for(let i=0;i<result.length;i++){
        if(result[i] == value){
            if(i-1 >= 0){
                predecessor=result[i-1]
            }
        }
    }
    return predecessor
}

    removedupulicate(root){
      if(!root){
        return true 
      }

      let unique = new Set()

      function inOrder(root){
        if(root){
        inOrder(root.left)
        unique.add(root.value)
        inOrder(root.right)
        }
    }

    inOrder(root)

    this.root = null
 
    unique.forEach(val=> this.insert(val))
    
    }

    findParent(root,target){
      if(!root){
          return null
      }

      let parent=null

      function inOrder(root){
          if(root){
              inOrder(root.left)

          if(root.left && root.left.value == target){
              parent=root

              return parent
          }

          if(root.right && root.right.value == target){
              parent=root
              return parent
          }
          }
      }

      inOrder(root)
      return parent

  }

  findChildren(root,target){
      if(!root){
          return null
      }
      else if(root.value == target){
          const children={
              leftChild:root.left ? root.left.value : null,
              rightChild:root.right ? root.right.value : null
          }

          return children
      }
      else if(target < root.value){
          return this.findChildren(root.left,target)
      }else{
          return this.findChildren(root.right,target)
      }
  }

  findLeafNode(root,result=[]){
      if(!root){
          return null
      }

      if(root){
          if(!root.left && !root.right){
              result.push(root.value)
          }
          this.findLeafNode(root.left,result)
          this.findLeafNode(root.right,result)
      }
      return result
  }

  findSiblings(root,target){
      if(!root){
          return null
      }

      let siblings=null

      function inOrder(root){
          if(root){
              inOrder(root.left)

          if(root.left && root.left.value==target){
              siblings = root.right.value
              return siblings
          }

          if(root.right && root.right.value == target){
              siblings= root.left.value
              return siblings
          }

          inOrder(root.right)
          }
      }

      inOrder(root)
      return siblings
  }

  findAncestor(root,target,result=[]){
      if(!root){
          return null
      }
      
      if(root.value == target){
          return result
      }

      result.push(root.value)

      if(target < root.value){
          return this.findAncestor(root.left,target,result)
      }else{
          return this.findAncestor(root.right,target,result)
      }
  }

  findDescendant(root,target,descendant=[]){
      if(!root){
          return null
      }

      if(root.value == target){
          this.collectDescendant(root,descendant)
          return descendant
      }
      else if(target < root.value){
          return this.findDescendant(root.left,target,descendant)
      }
      else{
          return this.findDescendant(root.right,target,descendant)
      }
  }

  collectDescendant(root,descendant){
      if(root){
          descendant.push(root.value)
          this.collectDescendant(root.left,descendant)
          this.collectDescendant(root.right,descendant)
      }
      return descendant
  }

  findHeight(root){
      if(!root){
          return null
      }

      let queue=[]
      queue.push(root)
      let height=0

      while(queue.length > 0){
          let nodeCount=queue.length
          height++

          while(nodeCount > 0){
              let cur=queue.shift()

              if(cur){
                  if(cur.left){
                      queue.push(cur.left)
                  }

                  if(cur.right){
                      queue.push(cur.right)
                  }
              }
              nodeCount--
          }
      } 
      return height
  }

  findDegree(root,target){
      if(!root){
          return null
      }
      let c=0
      if(root.value==target){
          if(root.left){
              c++
          }

          if(root.right){
              c++
          }
          return c
      }
      else if(target < root.value){
         return this.findDegree(root.left,target)
      }else{
          return this.findDegree(root.right,target)
      }
  }

  findDepth(root,target){
      if(!root){
          return null
      }
      let depth=0
      while(root){
          if(target < root.value){
              root=root.left
              depth++
          }
          else if(target > root.value){
              root=root.right
              depth++
          }
          else{
              return depth
          }
      }
      return -1
  }

  findDistance(root,target){
      if(!root){
          return null
      }

      let distance=0

      while(root){
          if(target < root.value){
              root=root.left
              distance++
          }
          else if(target > root.value){
              root=root.right
              distance++
          }
          else{
              return distance
          }
      }
      return -1
  }

  path(root,target){
      if(!root){
          return null
      }
      let path=[]
      while(root){
          path.push(root.value)
          if(target < root.value){
              root=root.left
          }else if(target > root.value){
              root=root.right
          }else{
              break
          }
      }
      return path
  }

  findLCA(root,n1,n2){
      if(!root){
          return null
      }

      while(root){
          if(n1 < root.value && n2 < root.value){
              root=root.left
          }
          else if(n1 > root.value && n2 > root.value){
              root=root.right
          }
          else{
              return root
          }
      }
  }

  findPathBetweenTwoNodes(n1,n2){
      let lca=this.findLCA(this.root,n1,n2)

      if(!lca){
          return []
      }

      let path1=this.path(lca,n1)
      let path2=this.path(lca,n2)

      return [...path1.reverse(),...path2.slice(1)]
  }

  findDistancBetweenTwoNodes(n1,n2){
      let lca = this.findLCA(this.root,n1,n2)

      if(!lca){
          return null
      }

      let distance1=this.findDistance(lca,n1)
      let distance2=this.findDistance(lca,n2)
      return distance1+distance2
  }

  OnlyChildNodes(root){
      let result=[]
      let count=0

      function inOrder(root){
          if(root){
              if((root.left && !root.right) || (!root.left && root.right)){
                  count++
                  result.push(root.value)
              }
  
              inOrder(root.left)
              inOrder(root.right)
          }
      }
      inOrder(root)

      return {result,count}
  }


    
  }
  
  // Example Usage:
  
  let bst = new BST();
  bst.insert(10);
  bst.insert(5);
  bst.insert(30);
  bst.insert(3);
  bst.insert(7);
  bst.insert(15);
  bst.insert(20);



  console.log(bst.inOrderT(bst.root));
  

  // console.log(bst.isIndentical(bst.root,bst.root));
  

  
  // Print the tree before deletion
  // console.log("Before deletion:");
  // bst.levelOrder(); // Should print 10, 5, 30, 3, 7, 15, 20
  
  // // Delete node 10 (root node)
  // bst.root = bst.delete(bst.root, 10);
  
  // // Print the tree after deletion
  // console.log("After deletion:");
  // bst.levelOrder(); // Should print 15, 5, 30, 3, 7, 20
  
  // bst.print()

  // console.log(bst.isbst(bst.root));
  
  // console.log(bst.findprime(bst.root))

// console.log(  bst.findKthSmallest(bst.root,2));

// console.log(bst.cloest(bst.root,7));
