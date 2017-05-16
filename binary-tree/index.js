const fs = require('fs');
const path = require('path');
const BinaryTree = require('./binary-tree');

let bt = new BinaryTree(8);

bt.insert(10);
bt.insert(5);
bt.insert(10);
bt.insert(5);
bt.insert(10);
bt.insert(5);
bt.insert(10);
bt.insert(5);
bt.insert(10);
bt.insert(5);

delete bt.lastAssignedKey;
delete bt.nextNode;

// console.dir(bt, { depth: null });

fs.writeFileSync(
  path.join(__dirname, 'results.json'), 
  JSON.stringify(bt, null, 4)
);

