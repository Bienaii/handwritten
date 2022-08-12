// 扁平数组结构转为树形结构数组
let list = [
  { id: 1, name: "部门A", parentId: 0 },
  { id: 2, name: "部门B", parentId: 0 },
  { id: 3, name: "部门C", parentId: 1 },
  { id: 4, name: "部门D", parentId: 1 },
  { id: 5, name: "部门E", parentId: 2 },
  { id: 6, name: "部门F", parentId: 3 },
  { id: 7, name: "部门G", parentId: 2 },
  { id: 8, name: "部门H", parentId: 4 },
];

// function convert(data, result = [], parentId) {
//   for (const item of data) {
//     if (item.parentId === parentId) {
//       const newItem = { ...item, children: [] };
//       result.push(newItem);
//       convert(data, newItem.children, item.id);
//     }
//   }
//   return result;
// }
// const array = convert(list, [], 0);

// function convert(data) {
//   const result = []; // 存放结果集
//   const itemMap = {}; //

//   // 先转成map存储
//   for (const item of data) {
//     itemMap[item.id] = { ...item, children: [] };
//   }

//   for (const item of data) {
//     const id = item.id;
//     const parentId = item.parentId;
//     const treeItem = itemMap[id];
//     if (parentId === 0) {
//       result.push(treeItem);
//     } else {
//       if (!itemMap[parentId]) {
//         itemMap[parentId] = {
//           children: [],
//         };
//       }
//       itemMap[parentId].children.push(treeItem);
//     }
//   }
//   return result;
// }

// const array = convert(list);

console.log(array);
