const Node = require('./node');

const lastAssigned = {
  true: 'left',
  false: 'right'
};

class BinaryTree {
  constructor(rootValue) {
    this.rootNode = new Node(rootValue)
    this.lastAssignedKey = false;
  }

  insert(value) {
    this.rootNode[lastAssigned[this.lastAssignedKey]] = new Node(value);
    this.lastAssignedKey = !this.lastAssignedKey;    
  }

  delete() {

  }

  search() {

  }
}

module.exports = BinaryTree;

