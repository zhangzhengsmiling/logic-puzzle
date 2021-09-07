const input = [
  { id: 1, val: 1, pid: 0 },
  { id: 2, val: 2, pid: 0 },
  { id: 3, val: 3, pid: 1 },
  { id: 4, val: 4, pid: 2 },
  { id: 5, val: 5, pid: 2 },
];

const buildTree = (list, node) => {
  const sub = list.filter(item => item.pid === node.id);
  const children = sub.map(item => buildTree(list, item));
  node.children = children;
  return node;
}

const build = (list) => {
  return list.filter(item => item.pid === 0)
    .map(item => buildTree(list, item));
}

const v = build(input);
console.log(JSON.stringify(v));
