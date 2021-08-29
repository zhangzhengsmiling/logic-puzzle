
var list = [9,4,13,3,2,3,6,7,12,15,16,17]
function summaryRanges(list){
   // 补全代码
   const res = [];
   list.sort((a, b) => a - b);
   console.log(list)
   let ptr_begin = 0;
   let ptr_end = ptr_begin + 1;
   while(ptr_end < list.length) {
     while (list[ptr_end] <= list[ptr_end - 1] + 1)
      ptr_end++;
     if (ptr_end === ptr_begin + 1) {
       res.push(`${list[ptr_begin]}`);
     } else {
       res.push(`${list[ptr_begin]}->${list[ptr_end - 1]}`);
     }
     ptr_begin = ptr_end;
     ptr_end = ptr_end + 1;
   }
   return res;
}
var result = summaryRanges(list);
console.log(result) // ["2->4", "6->7", "9", "12->13", "15->17"]
