const fs = require('fs');
const path = require('path');
const BinaryTree = require('./binary-tree');

let bt = new BinaryTree((a, b) => (a - b));

bt.insert(8);
bt.insert(5);
bt.insert(11);
bt.insert(7);
bt.insert(6);
bt.insert(4);
bt.insert(12);
bt.insert(13);
bt.insert(3);
bt.insert(2);

delete bt.initialized;
// delete bt.nextNode;

// console.dir(bt, { depth: null });

fs.writeFileSync(
  path.join(__dirname, 'results.json'), 
  JSON.stringify(bt, null, 4)
);

