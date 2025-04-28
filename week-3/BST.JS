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
  
  // Print the tree before deletion
  // console.log("Before deletion:");
  // bst.levelOrder(); // Should print 10, 5, 30, 3, 7, 15, 20
  
  // // Delete node 10 (root node)
  // bst.root = bst.delete(bst.root, 10);
  
  // // Print the tree after deletion
  // console.log("After deletion:");
  // bst.levelOrder(); // Should print 15, 5, 30, 3, 7, 20
  
  // bst.print()

  console.log(bst.findprime(bst.root))
