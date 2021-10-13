
const reverse = (linkList, endNode) => {
  let ptr = linkList;
  let linkNext = endNode.next;
  let _list = null;
  while(ptr !== linkNext) {
    const next = ptr.next;
    ptr.next = _list;
    _list = ptr;
    ptr = next;
  }
  linkList.next = linkNext;
  return _list;
}

const reverseLinkListKGroup = (linkList, k) => {
  const head = {
    val: null,
    next: linkList,
  }

  let ptr = head;
  let pre = head;
  let end = null;
  let next = null;
  while(ptr) {
    let temp = k;
    while(temp > 0 && ptr) {
      ptr = ptr.next;
      temp--;
    }
    if (temp === 0 && ptr) {
      next = ptr.next;
      const _h = reverse(pre.next, ptr);
      console.log('divede----')
      tranverse(_h);
      console.log('divede-------------')
      console.log(ptr.val, 'ptr')
      pre.next = _h;
      ptr = pre;
    } else {
      break;
    }
  }
  return head.next;
}


const tranverse = (list) => {
  let ptr = list;
  while (ptr) {
    console.log(ptr.val);
    ptr = ptr.next;
  }
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

// tranverse(input);
// console.log('=======')

const res = reverseLinkListKGroup(input, 2);
// const res = reverse(input, input.next.next.next);
// reverseLinkListKGroup(input, 2);
tranverse(res);
// console.log(res);
