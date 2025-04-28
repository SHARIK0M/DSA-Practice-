class Heap {
    constructor() {
        this.heap = [];
    }

    // Correct parent index formula
    getParent(i) {
        return Math.floor((i - 1) / 2);
    }

    getLeft(i) {
        return (i * 2) + 1;
    }

    getRight(i) {
        return (i * 2) + 2;
    }

    // Correct method names for consistency
    getParentValue(i) {
        return this.heap[this.getParent(i)];
    }

    getLeftValue(i) {
        return this.heap[this.getLeft(i)];
    }

    getRightValue(i) {
        return this.heap[this.getRight(i)];
    }

    hasParent(i) {
        return this.getParent(i) >= 0; // Ensure it is a valid index
    }

    hasLeft(i) {
        return this.getLeft(i) < this.heap.length;
    }

    hasRight(i) {
        return this.getRight(i) < this.heap.length;
    }

    swap(i, j) {
        [this.heap[i], this.heap[j]] = [this.heap[j], this.heap[i]];
    }

    insert(value) {
        this.heap.push(value);
        this.heapify();
    }

    heapify() {
        let i = this.heap.length - 1;

        while (this.hasParent(i) && this.getParentValue(i) < this.heap[i]) {
            this.swap(this.getParent(i), i);
            i = this.getParent(i);
        }
    }

    remove() {
        if (this.heap.length === 0) return null;

        let value = this.heap[0];
        this.heap[0] = this.heap[this.heap.length - 1];
        this.heap.pop();
        this.heapifyDown();
        return value;
    }

    heapifyDown() {
        let i = 0;

        while (this.hasLeft(i)) {
            let l = this.getLeft(i);

            if (this.hasRight(i) && this.getLeftValue(i) < this.getRightValue(i)) {
                l = this.getRight(i);
            }

            if (this.heap[i] > this.heap[l]) {
                break;
            } else {
                this.swap(i, l);
            }

            i = l;
        }
    }

    // HeapSort function with lowercase naming
    heapSort(arr) {
        const max = new Heap();

        for (let val of arr) {
            max.insert(val);
        }

        let sorted = [];

        while (max.heap.length) {
            sorted.push(max.remove());
        }

        return sorted.reverse();
    }

    // Find the kth smallest element using a max heap
    findKthSmallest(arr, k) {
        let max = new Heap();

        for (let val of arr) {
            max.insert(val);
            if (max.heap.length > k) {
                max.remove();
            }
        }

        return max.peek();
    }

    peek() {
        return this.heap.length > 0 ? this.heap[0] : null;
    }
}

let h = new Heap();

h.insert(10);
h.insert(20);
h.insert(5);
h.insert(30);
h.insert(40);

console.log(h.findKthSmallest([1, 2, 5, 39, 58, 49, 5], 3));  // Output: 5
