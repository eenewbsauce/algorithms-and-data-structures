const TreeBase = require('./tree-base');
const Node = require('./node');

const sides = {
  left: 'left',
  right: 'right'
};

class BinaryTree extends TreeBase{
  constructor(rootValue) {
    this.rootNode = new Node(rootValue)
    this.lastAssignedKey = false;
    this.nextNode = this.rootNode;
  }

  insert(value) {
    let side = sides.left;

    if (value > this.nextNode.value) {
      side = sides.right;
    }    

    let newNode = new Node(value);
    this.nextNode[side] = newNode;

    if (this.nextNode.left !== null && this.nextNode.right !== null) {
      this.nextNode = newNode;
    }
  }

  delete() {

  }

  search() {

  }
}

module.exports = BinaryTree;

