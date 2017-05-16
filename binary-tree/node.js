class Node {
  constructor(data) {
    this.data = data;    
    this.left = null;
    this.right = null;
  }

  getChild(isRight) {
    return isRight ? this.right : this.left;
  }

  setChild(isRight, data) {
    if (isRight) {
      this.right = data;
    } else {
      this.left = data;
    }
  }
}

module.exports = Node;