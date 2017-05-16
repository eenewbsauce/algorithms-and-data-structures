const TreeBase = require('./tree-base');
const Node = require('./node');

const sides = {
  left: 'left',
  right: 'right'
};

class BinaryTree extends TreeBase {
  constructor(comparator) {
    super();
    this._root = null;
    this._comparator = comparator;
    this.size = 0;
  }

  insert(data) {
    if (this._root === null) {
      this._root = new Node(data);
      this.size++;

      return true;
    }

    let parent = null;
    let isRight = 0;
    let node = this._root;

    while(true) {
      if (node === null) {
        node = new Node(data);
        parent.setChild(isRight, node);
        this.size++;

        return true;
      }

      if (this._comparator(node.data, data) === 0) {
        return false;
      }

      isRight = this._comparator(node.data, data) < 0;

      parent = node;
      node = node.getChild(isRight);
    }
  }

  delete() {

  }

  search() {

  }
}

module.exports = BinaryTree;

