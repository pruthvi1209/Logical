
class Node {
    constructor(data) {
        this.data = data;
        this.left = null;
        this.right = null;
    }
}

class BinarySearchTree {
    constructor() {
        this.root = null;
    }

    insert(data) {
        var newNode = new Node(data);
        if (this.root === null) {
            this.root = newNode;
        } else {
            this.insertNode(this.root, newNode);
        }
    }

    insertNode(node, newNode) {

        if (newNode.data < node.data) {
            if (node.left === null) {
                node.left = newNode;
            }
            else {
                this.insertNode(node.left, newNode);
            }
        } else {
            if (node.right === null) {
                node.right = newNode;
            } else {
                this.insertNode(node.right, newNode);
            }
        }
    }

    getRootNode() {
        return this.root;
    }

    getParentNode(node, rootNode) {
        // test if node to find out is root node 
        const isLeafeNode  = false;
        if(rootNode === undefined) {
            rootNode = this.getRootNode();
        } 
        if (node === rootNode.data) {
            console.log("you Have searched for root node", rootNode.data);
        }
        if (rootNode.left) {
            if (node === rootNode.left.data) {
                return rootNode.data;
            }
        }
        if (rootNode.right) {
            if (node === rootNode.right.data) {
                return rootNode.data;
            }
        }
        if (node < rootNode.data) {
            rootNode = rootNode.left;
        } else if (node > rootNode.data) {
            rootNode = rootNode.right;
        }
        
        if(rootNode) return this.getParentNode(node, rootNode);
        else throw 'Not Found';
        ;
    }

    
    findLength() {
        let left = this.root.left? this.getLength(this.root.left, 1) : 0;
        let right = this.root.right? this.getLength(this.root.right, 1): 0;
        return left > right ? left : right;
    }
    
    getLength(node, count) {
        count++;
        let left = node.left ? this.getLength(node.left,count): count; 
        let right = node.right ? this.getLength(node.right, count): count;
        return left > right ? left : right;
    }
    
}

const firstTree = new BinarySearchTree();
firstTree.insert(20);
firstTree.insert(40);
firstTree.insert(13);
firstTree.insert(15);
firstTree.insert(97);
firstTree.insert(67);
firstTree.insert(14);
firstTree.insert(10);
firstTree.insert(12);
firstTree.insert(4);
firstTree.insert(11);
firstTree.insert(35);




console.log(firstTree.findLength());
// try {
// console.log(  firstTree.getParentNode(98));
// } catch (e) {
//     console.error(e);
// }
