
const reverseLinkList2 = (linkList, left, right) => {
  let ptr = linkList;
  let counter = 1;
  let reverseHead = null;
  while(counter < left) {
    reverseHead = ptr;
    ptr = ptr.next;
    counter++;
  }
  if (left !== 1)
    reverseHead.next = null;
  let first = ptr;
  let last = ptr;
  ptr = ptr.next;
  counter++;
  while(counter < right  && ptr) {
    let next = ptr.next;
    ptr.next = last;
    last = ptr;
    ptr = next;
    counter++;
  }
  let reverseTail = ptr.next;
  ptr.next = last;
  if (left === 1) {
    linkList = ptr;
  } else {
    reverseHead.next = ptr;
  }
  first.next = reverseTail;
  return linkList;
}

const input = {
  val: 100,
  next: {
    val: 200,
    next: {
      val: 300,
      next: {
        val: 400,
        next: {
          val: 500,
          next: {
            val: 600,
            next: null,
          }
        }
      }
    }
  }
}

const tranverse = (list) => {
  let ptr = list;
  while (ptr) {
    console.log(ptr.val);
    ptr = ptr.next;
  }
}

const list = reverseLinkList2(input, 1, 2);
tranverse(list);


