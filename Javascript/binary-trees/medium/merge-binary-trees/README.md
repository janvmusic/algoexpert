# Merge Binary Trees

![Description](description.png)

## Solution

```javascript
function mergeBinaryTrees(tree1, tree2) {
  let tree = merge(tree1, tree2);

  return tree;
}

function merge(tree1, tree2) {
  if (!tree1 && !tree2) {
    return null;
  }

  let val1 = tree1 ? tree1.value : 0;
  let val2 = tree2 ? tree2.value : 0;
  let node = new BinaryTree(val1 + val2);

  let left1 = tree1 ? tree1.left : null;
  let left2 = tree2 ? tree2.left : null;

  let right1 = tree1 ? tree1.right : null;
  let right2 = tree2 ? tree2.right : null;

  node.left = merge(left1, left2);
  node.right = merge(right1, right2);

  return node;
}
```
